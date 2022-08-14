import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/MaterialIcons';
import {WebView} from 'react-native-webview';
import HTMLView from 'react-native-htmlview';
import {ACKNOWLEDGE_RESOLVE} from '../../../../config';
import {getAccessToken} from '../../../../localstorage';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data.data,
      loader: false,
    };
  }

  acknowledgeFun = async () => {
    this.setState({loader: true});
    let accessToken = await getAccessToken();

    var config = {
      method: 'POST',
      url: `${ACKNOWLEDGE_RESOLVE}/${this.state.data.id}/acknowledge`,
      headers: {
        Authorization: `Bearer ${accessToken.data.access_token}`,
      },
    };

    axios(config)
      .then(response => {
        console.log('ACKNOWLEDGE>', response);
        this.setState({loader: false});
      })
      .catch(error => {
        console.log('error:', error);
      });
  };

  resolveFun = async () => {
    this.setState({loader: true});
    let accessToken = await getAccessToken();

    var config = {
      method: 'POST',
      url: `${ACKNOWLEDGE_RESOLVE}/${this.state.data.id}/resolve`,
      headers: {
        Authorization: `Bearer ${accessToken.data.access_token}`,
      },
    };

    axios(config)
      .then(response => {
        console.log('RESOLVE>', response);
        this.setState({loader: false});
      })
      .catch(error => {
        console.log('error:', error);
      });
  };

  render() {
    if (this.state.data.description) {
      var description = this.state.data.description.replace(
        /\n\n---\n\n\n\+/gm,
        '\n',
      );
      description = description.replace(/\n\n\n\n\n/gm, '\n');
      description = description.replace(/\n\n\n\n+/gm, '\n');
      description = description.replace(/\[Rule URL]\(/gm, '<a>');
      description = description.replace(/\)\n\n\+/gm, '</a>\n');
      description = description.replace(/\+/gm, '');

      description = description.replace(/\[!\[Image URL\]\(/gm, '<image>');
      description = description.replace(/\)\]/gm, '</image>');

      description = description.replace(/\(http/gm, '<imgs>http');
      description = description.replace(/g\)/gm, 'g</imgs>');
    }

    function renderNode(node, index, siblings, parent, defaultRenderer) {
      if (node.name == 'image') {
        const specialSyle = node.attribs.style;
        return (
          <View key={index}>
            <View style={styles.imageRenderView}>
              <Image
                resizeMode={'cover'}
                source={{uri: node.children[0].data}}
                style={{height: 200, width: windowWidth - 60}}
              />
            </View>
          </View>
        );
      }

      if (node.name == 'imgs') {
        const specialSyle = node.attribs.style;
        return (
          <View key={index}>
            <Text></Text>
          </View>
        );
      }

      if (node.name == 'a') {
        const specialSyle = node.attribs.style;
        return (
          <TouchableOpacity key={index} 
          onPress={()=>Linking.openURL(node.children[0].data)}
          style={{
            backgroundColor:'#1464d8',
            height:40,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20
          }}
          >
            <Text style={{color:'#fff',fontSize:16}}>Check Status</Text>
          </TouchableOpacity>
        );
      }
    }
    // console.log('DESCRIPTION>>', description);
    return (
      <>
        {this.state.loader ? (
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.2)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#1061dd" />
          </View>
        ) : (
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView>
              <View style={{width: '90%', alignSelf: 'center'}}>
                <View style={styles.firstView}>
                  <Text style={{color: '#aeaeae'}}>Assigned To</Text>
                  <Text style={styles.innerText}>IOT alerts Policy</Text>
                </View>

                <View style={styles.firstView}>
                  <Text style={{color: '#aeaeae'}}>Impact On</Text>
                  <Text style={styles.innerText}>IOT Alerts</Text>
                </View>

                <View style={styles.borderView}>
                  {this.state.data.status == 'triggered' ? (
                    <>
                      <TouchableOpacity
                        style={styles.borderBox}
                        onPress={() => this.acknowledgeFun()}>
                        <Text style={styles.borderBoxText}>Acknowledge</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.borderBox}
                        onPress={() => this.resolveFun()}>
                        <Text style={styles.borderBoxText}>Resolve</Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <View>
                      {this.state.data.status == 'acknowledged' ? (
                        <TouchableOpacity
                          style={styles.borderBox}
                          onPress={() => this.resolveFun()}>
                          <Text style={styles.borderBoxText}>Resolve</Text>
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  )}

                  {/* <TouchableOpacity style={styles.borderBoxDropdown}>
                    <Icon
                      name="more-vert"
                      size={21}
                      color="#000"
                      style={{marginTop: 1}}
                    />
                  </TouchableOpacity> */}
                </View>

                <View style={{marginTop: 30, marginBottom: 10}}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: '700',
                      marginBottom: 10,
                    }}>
                    Description :
                  </Text>

                  <View style={{marginBottom: '50%'}}>
                    <HTMLView
                      value={description}
                      renderNode={renderNode}
                      stylesheet={styles}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  a: {
    color: '#1464d8',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
  firstView: {marginTop: 10},
  innerText: {
    marginTop: 5,
    fontSize: 18,
    color: '#4d4d6f',
  },
  borderView: {
    marginTop: 25,
    width: '60%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  borderBox: {
    borderWidth: 2,
    padding: 7,
    borderRadius:5,
    borderColor: '#285fc8',
  },
  borderBoxText: {
    fontSize: 16,
    color: '#285fc8',
  },
  borderBoxDropdown: {
    borderWidth: 2.5,
    padding: 10,
    borderRadius: 5,
    borderColor: '#000',
  },
  WebView: {height: 170, width: windowWidth - 50, marginBottom: 50},
  imageRenderView: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#afb4bd',
    marginTop: 10,
  },
});
