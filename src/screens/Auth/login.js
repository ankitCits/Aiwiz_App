import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Util from '../../utils';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privacyCheck: true,
      legalCheck: true,
      visibility: false,
      mobileNumber: null,
      password: null,
      loader: false,
      loggedIn: 0,
      dataCenter: 0,
    };
  }

  componentDidMount() {
    // this.checkCredentials();
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#f7f7f7',
        }}>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={'dark-content'}
        />
        {!this.state.loggedIn == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <ActivityIndicator size="large" color="#1061dd" />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <View style={styles.createView}>
              <Text style={styles.createText}>Login to your existing</Text>
              <Text style={styles.createText}>Company account</Text>
            </View>
            <View style={styles.viewInput}>
              <View style={{marginLeft: 15, marginBottom: -5}}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#08173E',
                  }}>
                  Your email address
                </Text>
              </View>
              <View style={styles.sectionStyle}>
                <TextInput
                  style={{
                    flex: 1,
                    color:
                      this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
                    paddingLeft: 20,
                  }}
                  placeholder="example@company.com"
                  underlineColorAndroid="transparent"
                  onChangeText={text => {
                    this.setState({mobileNumber: text});
                  }}
                  placeholderTextColor={'#A39B9B'}
                />
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                  marginBottom: -5,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#08173E',
                  }}>
                  Password
                </Text>

                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#08173E',
                      marginRight: 5,
                    }}>
                    Forget Password ?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionStyle}>
                <TextInput
                  style={{
                    flex: 1,
                    color: this.state.password == null ? '#A39B9B' : '#1061dd',
                    paddingLeft: 20,
                  }}
                  placeholder="Enter your password"
                  underlineColorAndroid="transparent"
                  placeholderTextColor={'#A39B9B'}
                  onChangeText={text => {
                    this.setState({password: text});
                  }}
                  secureTextEntry={this.state.visibility ? false : true}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.state.visibility
                      ? this.setState({visibility: false})
                      : this.setState({visibility: true})
                  }>
                  <Icon
                    name={
                      this.state.visibility ? 'visibility' : 'visibility-off'
                    }
                    size={22}
                    color="#000"
                    style={styles.imageStyle}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginLeft: '5%',
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#08173E',
                  }}>
                  Data Center Location:
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    onPress={()=>this.setState({dataCenter:1})}
                    >
                    <Icon
                      name={
                        this.state.dataCenter == 1
                          ? 'radio-button-checked'
                          : 'radio-button-unchecked'
                      }
                      size={15}
                      color={this.state.dataCenter == 1 ? '#1061dd' : 'grey'}
                      style={{marginTop:2}}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '500',
                        marginLeft: 5,
                        color: '#000',
                      }}>
                      US
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginLeft: '6%',
                      alignItems: 'center',
                    }}
                    onPress={()=>this.setState({dataCenter:2})}
                    >
                    <Icon
                      name={
                        this.state.dataCenter == 2
                          ? 'radio-button-checked'
                          : 'radio-button-unchecked'
                      }
                      size={15}
                      color={this.state.dataCenter == 2 ? '#1061dd' : 'grey'}
                      style={{marginTop:2}}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '500',
                        marginLeft: 5,
                        color: '#000',
                      }}>
                      EU
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.signup}>
                {this.state.loader ? (
                  <ActivityIndicator size="large" color="#1061dd" />
                ) : (
                  <TouchableOpacity
                    style={styles.signipInner}
                    onPress={() => this.props.navigation.navigate('Drawer')}
                  >
                    <Text
                      style={{color: '#fff', fontSize: 20, fontWeight: '500',lineHeight:22}}>
                      LOGIN
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  createView: {
    marginTop: '25%',
    alignItems: 'center',
  },
  createText: {
    fontSize: 25,
    color: '#08173E',
    fontWeight: '700',
    lineHeight: 25,
  },
  viewInput: {
    flex: 1,
    // alignItems: 'center',
    marginTop: '20%',
    width: '85%',
    alignSelf: 'center',
  },
  input: {
    // height: 50,
    // width: '80%',
    // margin: 12,
    // borderRadius: 10,
    // padding: 10,
    // shadowColor: '#470000',
    // shadowOpacity: 1,
    // elevation: 1,
    // borderWidth: 1,
    // flex: 1,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    left: '70%',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#000',
    height: 44,
    width: 320,
    borderRadius: 5,
    margin: 10,
    elevation: 2,
  },
  imageStyle: {
    margin: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  signup: {
    marginTop: '10%',
    width: '80%',
    height: 44,
    alignSelf:'center'
  },
  signipInner: {
    backgroundColor: '#1061dd',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1061dd',
    elevation: 2,
    width:'100%'
  },
  signin: {
    marginTop: '10%',
    width: '90%',
    height: 44,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  forgetPass: {
    color: '#3C3C3C',
    fontSize: 17,
    fontWeight: '500',
  },
});
