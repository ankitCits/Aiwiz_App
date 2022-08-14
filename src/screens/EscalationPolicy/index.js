import axios from 'axios';
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TEAMS_URL} from '../../config';
import teamsData from '../../Data/teams.json';
import {getAccessToken} from '../../localstorage';
import Header from '../Component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Escalation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      toggle: false,
      loader: false,
      data: null,
      modalEscalation: false,
    };
  }

  componentDidMount() {
    // this.fetchTeamsData();
  }

  render() {
    console.log('====>>', this.state.data);
    return (
      <>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{
              height: 60,
              backgroundColor: '#1061dd',
              justifyContent: 'center',
            }}>
            <View style={{width: '94%', alignSelf: 'center'}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={styles.dt}
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Ionicons name="filter-outline" size={22} color={'#fff'} />
                  </TouchableOpacity>
                  <View style={{marginLeft: 10, justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#fff',
                        fontFamily: 'Roboto-Medium',
                      }}>
                      Escalation Policies
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({modalEscalation: true})}
                    style={{
                      // backgroundColor: '#fff',
                      padding: 5,
                      borderRadius: 40,
                    }}>
                    <Text>
                      <Icon
                        name="queue"
                        size={25}
                        color="#fff"
                        // style={{marginTop: 2}}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
            <ScrollView
              style={{width: '94%', alignSelf: 'center', marginTop: '5%'}}>
              <View
                style={{
                  borderWidth: 2,
                  width: '100%',
                  //   height: 200,
                  marginTop: '5%',
                  borderColor: '#e9eaed',
                  borderRadius: 5,
                }}>
                <TouchableOpacity
                  //   onPress={() => this.setState({modalVisible: true})}
                  style={{
                    alignItems: 'flex-end',
                    padding: 10,
                  }}>
                  <Icon name={'more-horiz'} size={22} color="#000" />
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '70%',
                      marginLeft: '5%',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '700',
                          color: '#000',
                          fontFamily: 'Roboto-Medium',
                        }}>
                        Example Escalation Policy
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: 'grey',
                          fontFamily: 'Roboto-Medium',
                        }}>
                        on-Boarding Example Escalation Policy
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#e9eaed',
                        width: '50%',
                        padding: 5,
                        marginTop: 5,
                        marginBottom: 5,
                        paddingLeft: 10,
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: '500',
                          color: '#000',
                          fontFamily: 'Roboto-Medium',
                        }}>
                        Example Service
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.underLine} />
                <View
                  style={{
                    width: '70%',
                    marginLeft: '5%',
                    marginTop: 10,
                    marginBottom: 5,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#000',
                        fontFamily: 'Roboto-Medium',
                      }}>
                      Escalate after 1 min
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#e9eaed',
                        padding: 5,
                        marginTop: 10,
                        marginBottom: 5,
                        paddingRight: 10,
                        borderRadius: 5,
                        flexDirection: 'row',
                      }}>
                      <Ionicons
                        name="person-outline"
                        size={15}
                        color={'#000'}
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: '500',
                          color: '#000',
                          fontFamily: 'Roboto-Medium',
                          marginLeft: 10,
                        }}>
                        Ankit Singh
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: '#e9eaed',
                        //   width: '55%',
                        padding: 5,
                        marginTop: 10,
                        marginBottom: 5,
                        //   paddingLeft: 10,
                        borderRadius: 5,
                        flexDirection: 'row',
                        marginLeft: 15,
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '500',
                          color: '#000',
                          fontFamily: 'Roboto-Medium',
                        }}>
                        Personal Notifications Rule
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.underLine} />
                <View
                  style={{
                    width: '100%',
                    backgroundColor: '#e9eaed',
                  }}>
                  <View
                    style={{
                      marginLeft: '5%',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto-Medium',
                      }}>
                      If no one acknowledges, repeat this policy an additional
                      <Text
                        style={{
                          color: '#000',
                          fontWeight: '500',
                        }}>
                        {' '}
                        0
                      </Text>{' '}
                      time(s)
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          )}

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalEscalation}>
            <>
            <TouchableOpacity 
            onPress={() => this.setState({modalEscalation: false})}
            style={{
              height:50,
              backgroundColor:'rgba(0,0,0,0.2)'
            }}/>
            <ScrollView
              style={{
                // flex: 1,
                // marginTop: 120,
                backgroundColor: '#fff',
                width: '100%',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderTopWidth: 2,
                borderColor: '#1061dd',
                elevation: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginLeft: '5%',
                  width: '92%',
                  marginTop: '5%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: '#001038',
                  }}>
                  Add Escalation Policy
                </Text>
                <TouchableOpacity
                  onPress={() => this.setState({modalEscalation: false})}>
                  <Icon
                    name={'close'}
                    size={30}
                    color="#000"
                    style={styles.imageStyle}
                  />
                </TouchableOpacity>
              </View>
              <ScrollView>
                <View
                  style={{
                    marginTop: '5%',
                    marginLeft: '2.5%',
                  }}>
                  <View style={{marginLeft: 15, marginBottom: -5}}>
                    <Text
                      style={{
                        //   fontSize: 13,
                        color: '#001038',
                        fontWeight: '500',
                      }}>
                      Policy Name {''} <Text style={{color: 'red'}}>*</Text>
                    </Text>
                  </View>
                  <View style={styles.sectionStyle}>
                    <TextInput
                      style={{
                        flex: 1,
                        color:
                          this.state.mobileNumber == null
                            ? '#A39B9B'
                            : '#1061dd',
                        paddingLeft: 20,
                      }}
                      placeholder="Enter Policy Name"
                      underlineColorAndroid="transparent"
                      onChangeText={text => {
                        this.setState({mobileNumber: text});
                      }}
                      placeholderTextColor={'#A39B9B'}
                    />
                  </View>

                  <View
                    style={{marginLeft: 15, marginBottom: -5, marginTop: '3%'}}>
                    <Text
                      style={{
                        //   fontSize: 13,
                        color: '#001038',
                        fontWeight: '500',
                      }}>
                      Policy Description
                    </Text>
                  </View>
                  <View style={styles.sectionStyle}>
                    <TextInput
                      style={{
                        flex: 1,
                        color:
                          this.state.mobileNumber == null
                            ? '#A39B9B'
                            : '#1061dd',
                        paddingLeft: 20,
                      }}
                      placeholder="Enter Policy Description"
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
                      marginBottom: -5,
                      marginTop: '3%',
                    }}>
                    <Text
                      style={{
                        //   fontSize: 13,
                        color: '#001038',
                        fontWeight: '500',
                      }}>
                      Rules {''} <Text style={{color: 'red'}}>*</Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#f3f4f6',
                      height: 250,
                      marginTop: '5%',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            marginLeft: 15,
                            marginBottom: -5,
                            marginTop: '3%',
                          }}>
                          <Text
                            style={{
                              //   fontSize: 13,
                              color: '#001038',
                              fontWeight: '500',
                              marginTop: '25%',
                            }}>
                            Escalate in
                          </Text>
                        </View>
                        <View style={styles.sectionStyleRulesEscalate}>
                          <TextInput
                            style={{
                              flex: 1,
                              color:
                                this.state.mobileNumber == null
                                  ? '#000'
                                  : '#1061dd',
                              paddingLeft: 20,
                            }}
                            placeholder="5"
                            underlineColorAndroid="transparent"
                            numberOfLines={5}
                            multiline={true}
                            onChangeText={text => {
                              this.setState({mobileNumber: text});
                            }}
                            keyboardType={'numeric'}
                            placeholderTextColor={'#000'}
                            editable={false}
                            selectTextOnFocus={false}
                          />
                        </View>
                      </View>

                      <TouchableOpacity
                        style={{
                          alignSelf: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#001038',
                          }}>
                          min(s) from the time of
                        </Text>
                        <Text
                          style={{
                            color: '#001038',
                          }}>
                          incident trigger
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        marginLeft: 15,
                        marginBottom: -5,
                        marginTop: '3%',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          //   fontSize: 13,
                          color: '#001038',
                          fontWeight: '500',
                        }}>
                        User or Squad or Schedule
                      </Text>
                    </View>
                    <View style={styles.sectionStyle}>
                      <TextInput
                        style={{
                          flex: 1,
                          color:
                            this.state.mobileNumber == null
                              ? '#A39B9B'
                              : '#1061dd',
                          paddingLeft: 20,
                        }}
                        placeholder="Search for a user or squad or schedule"
                        underlineColorAndroid="transparent"
                        onChangeText={text => {
                          this.setState({mobileNumber: text});
                        }}
                        placeholderTextColor={'#A39B9B'}
                      />
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          marginLeft: 15,
                          marginTop: '3%',
                        }}>
                        <Text
                          style={{
                            color: '#001038',
                            fontWeight: '500',
                            marginTop: '10%',
                          }}>
                          Notification Rules
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.sectionStyle2}>
                        <TextInput
                          style={{
                            flex: 1,
                            color:
                              this.state.mobileNumber == null
                                ? '#A39B9B'
                                : '#1061dd',
                            paddingLeft: 20,
                          }}
                          placeholder="Personal"
                          underlineColorAndroid="transparent"
                          numberOfLines={5}
                          multiline={true}
                          onChangeText={text => {
                            this.setState({mobileNumber: text});
                          }}
                          placeholderTextColor={'#A39B9B'}
                          editable={false}
                          selectTextOnFocus={false}
                        />
                        <TouchableOpacity
                          onPress={() =>
                            this.state.visibility
                              ? this.setState({visibility: false})
                              : this.setState({visibility: true})
                          }>
                          <Icon
                            name={'expand-more'}
                            size={22}
                            color="#000"
                            style={styles.imageStyle}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View
                    style={{
                      backgroundColor: '#f3f4f6',
                      // height: 250,
                      marginTop: '5%',
                    }}>
                    <Text
                      style={{
                        //   fontSize: 13,
                        color: '#001038',
                        fontWeight: '500',
                        marginLeft: 15,
                        marginTop: 5,
                      }}>
                      If no one acknowledge, repeat this policy an additional
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            marginLeft: 15,
                            marginBottom: -5,
                            marginTop: '3%',
                          }}>
                          <Text
                            style={{
                              //   fontSize: 13,
                              color: '#001038',
                              fontWeight: '500',
                              marginTop: '25%',
                            }}></Text>
                        </View>
                        <View style={styles.sectionStyleRulesEscalate}>
                          <TextInput
                            style={{
                              flex: 1,
                              color:
                                this.state.mobileNumber == null
                                  ? '#000'
                                  : '#1061dd',
                              paddingLeft: 20,
                            }}
                            placeholder="5"
                            underlineColorAndroid="transparent"
                            onChangeText={text => {
                              this.setState({mobileNumber: text});
                            }}
                            keyboardType={'numeric'}
                            placeholderTextColor={'#000'}
                            editable={false}
                            selectTextOnFocus={false}
                          />
                        </View>
                      </View>

                      <TouchableOpacity
                        style={{
                          alignSelf: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#001038',
                            fontWeight: '500',
                          }}>
                          time(s) after
                        </Text>
                      </TouchableOpacity>

                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.sectionStyleRulesEscalate}>
                          <TextInput
                            style={{
                              flex: 1,
                              color:
                                this.state.mobileNumber == null
                                  ? '#000'
                                  : '#1061dd',
                              paddingLeft: 20,
                            }}
                            placeholder="0"
                            underlineColorAndroid="transparent"
                            onChangeText={text => {
                              this.setState({mobileNumber: text});
                            }}
                            keyboardType={'numeric'}
                            placeholderTextColor={'#000'}
                            editable={false}
                            selectTextOnFocus={false}
                          />
                        </View>

                        <View
                          style={{
                            marginLeft: 5,
                            //   marginBottom: -5,
                            marginTop: '12.5%',
                          }}>
                          <Text
                            style={{
                              //   fontSize: 13,
                              color: '#001038',
                              fontWeight: '500',
                              marginTop: '25%',
                            }}>
                            min(s)
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.serviceButtonEscalation}
                    onPress={() => this.setState({modalEscalation: false})}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: '500',
                        lineHeight: 22,
                      }}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </ScrollView>
            </>
          </Modal>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  headerLeftFirsrt: {
    // backgroundColor: '#2a74e0',
    borderRadius: 30,
    alignSelf: 'center',
    height: 35,
    width: 35,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
  },
  headerLeft: {
    // backgroundColor: '#2a74e0',
    borderRadius: 30,
    alignSelf: 'center',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dt: {
    // backgroundColor: '#fff',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  underLine: {
    backgroundColor: '#e9eaed',
    height: 1,
    marginTop: 5,
  },
  serviceButtonEscalation: {
    backgroundColor: '#1061dd',
    height: 44,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1061dd',
    elevation: 2,
    width: '40%',
    marginTop: '10%',
    alignItems: 'center',
    marginRight: '5%',
    // marginLeft:10
    marginBottom: '10%',
  },
  sectionStyleRulesEscalate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#000',
    height: 44,
    width: 50,
    borderRadius: 5,
    margin: 10,
    elevation: 2,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#000',
    height: 44,
    width: 350,
    borderRadius: 5,
    margin: 10,
    elevation: 2,
  },
  sectionStyle2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#000',
    height: 44,
    width: 170,
    borderRadius: 5,
    margin: 10,
    elevation: 2,
  },
});
