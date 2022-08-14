import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: 'a few second ago', description: 'the pressure has been increasing for last 2 hours'},
        {title: '9 second ago', description: 'the voltage has been increasing for last 2 hours'},
        {title: '12 second ago', description: 'issue on main machine'},
        {title: '1 minute ago', description: 'are you available. I am waiting your response. Please revert asap '},
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{width: '90%', alignSelf: 'center', marginTop: '5%'}}>
          {this.state.data.length > 0 ? (
            <View>
              <FlatList
                nestedScrollEnabled={true}
                data={this.state.data}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => (
                  <>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                      <View style={styles.innerView}>
                        <Text style={{color: '#000'}}>Dk</Text>
                      </View>

                      <View style={{marginLeft: '5%'}}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{color: '#000', fontSize: 16}}>
                            Dan Krohemann
                          </Text>
                          <Text
                            style={{
                              color: '#83979a',
                              fontSize: 13,
                              marginLeft: 10,
                            }}>
                            Sun 02:53 PM
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '97%',
                          }}>
                          <Text>
                            <Text
                              style={{
                                textDecorationLine: 'underline',
                                color: '#000',
                              }}>
                              @suresh Nambiar
                            </Text>{' '}
                            { item.description}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </>
                )}
              />
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10%',
                flexDirection: 'row',
              }}>
              <Icon name="info" size={20} color="grey" />
              <Text style={{fontSize: 16, marginLeft: 5}}>No Data </Text>
            </View>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              secureTextEntry
              multiline={true}
              placeholder={
                'Add Message to \n#626ec615dbfd5c007e9a7dc'
              }
              // style={{height: 40, borderColor: 'gray', borderWidth: 1,fontSize:12}}
              value={this.state.password}
              onChangeText={this.onPasswordEntry}
            />
            <TouchableOpacity style={styles.sendIcon} onPress={()=>alert('send')}>
              <Icon
                name="east"
                size={20}
                color="#979797"
                style={{marginTop: 2}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerView: {
    backgroundColor: '#f8f1c7',
    padding: 10,
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    // flex: 1,
    bottom: 150,
    width: '94%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#979797',
    paddingBottom: 10,
    borderRadius:5
  },
  inputStyle: {
    flex: 1,
    fontSize:16,
    marginLeft:5
  },
  sendIcon: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    width: 30,
    height: 30,
    backgroundColor: '#f3f4f6',
    borderRadius: 30 / 2,
  },
});
