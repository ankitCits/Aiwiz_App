import React, {Component} from 'react';
import {
  Text,
  View,
  Clipboard,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import {getFcmToken} from '../../localstorage';
import Header from '../Component/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      modalVisible: false,
      notificationModalVisible: false,
    };
  }

  async componentDidMount() {
    let fcmToken = await getFcmToken();
    console.log('FCM_TOKEN', fcmToken);
    this.setState({token: fcmToken});
  }

  render() {
    const {modalVisible, notificationModalVisible} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Header
          title="My Profile"
          onClick={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={{
            width: '96%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              borderWidth: 2,
              width: '100%',
              height: 200,
              marginTop: '5%',
              borderColor: '#e9eaed',
              borderRadius: 5,
            }}>
            <TouchableOpacity
              onPress={() => this.setState({modalVisible: true})}
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
              <LinearGradient
                colors={['#acbc62', '#7a4f7e']}
                style={{
                  width: 80,
                  height: 80,
                  marginLeft: '5%',
                  borderRadius: 200,
                  backgroundColor: '#a0a068',
                  marginTop: '0%',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    top: '10%',
                    fontSize: 40,
                    fontWeight: '500',
                    color: '#fff',
                  }}>
                  VS
                </Text>

                <View
                  style={{
                    alignSelf: 'flex-end',
                  }}>
                  <Icon
                    name={'fiber-manual-record'}
                    size={25}
                    color="#0aff1a"
                  />
                </View>
              </LinearGradient>

              <View
                style={{
                  width: '70%',
                  marginLeft: '5%',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: '#000',
                  }}>
                  Vaishali Saraswat
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Icon name={'email'} size={18} color="#7a8297" />
                  <Text
                    style={{
                      marginLeft: 5,
                    }}>
                    vaishali@mlwiz.com
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Icon name={'call'} size={18} color="#7a8297" />
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 13,
                    }}>
                    9871094304
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Icon name={'schedule'} size={18} color="#7a8297" />
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 13,
                    }}>
                    (-04:00 EDT) America/New York
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Icon name={'event'} size={18} color="#7a8297" />
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 13,
                    }}>
                    DD/MM/YYYY
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
            }}>
            <View
              style={{
                height: 80,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'red',
                  borderWidth: 5,
                  borderColor: '#e9eaed',
                  justifyContent: 'center',
                  borderTopLeftRadius: 10,
                }}>
                <View
                  style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.boxText}>Acknowledge</Text>
                  <Text style={styles.boxTextDes}>0</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'red',
                  borderWidth: 5,
                  borderColor: '#e9eaed',
                  justifyContent: 'center',
                  borderTopRightRadius: 10,
                }}>
                <View
                  style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.boxText}>Resolved</Text>
                  <Text style={styles.boxTextDes}>0</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 80,
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'red',
                  borderWidth: 5,
                  borderColor: '#e9eaed',
                  justifyContent: 'center',
                  borderBottomLeftRadius: 10,
                }}>
                <View
                  style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.boxText}>MTTA (Last Week)</Text>
                  <Text style={styles.boxTextDes}>0.00 Hrs</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'red',
                  borderWidth: 5,
                  borderColor: '#e9eaed',
                  justifyContent: 'center',
                  borderBottomRightRadius: 10,
                }}>
                <View
                  style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.boxText}>MTTR (Last Week)</Text>
                  <Text style={styles.boxTextDes}>0.00 Hrs.</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 2,
              width: '100%',
              // height: 200,
              marginTop: '5%',
              borderColor: '#e9eaed',
              borderRadius: 5,
            }}>
            <TouchableOpacity
              onPress={() => this.setState({notificationModalVisible: true})}
              style={{
                alignItems: 'flex-end',
                padding: 10,
              }}>
              <Icon name={'more-horiz'} size={22} color="#000" />
            </TouchableOpacity>

            <View
              style={{
                marginLeft: '5%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  fontWeight: '500',
                }}>
                Incident Notification Rules
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#000',
                }}>
                If an incident is assigned to you, you will be notified via
              </Text>

              <View
                style={{marginTop: '5%', width: '100%', flexDirection: 'row'}}>
                <View
                  style={{
                    // flexDirection:'row',
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                    width: '20%',
                    bottom: 5,
                  }}>
                  <Ionicons name="arrow-down-circle-outline" size={30} />
                  <View style={styles.underLineIncidentRule} />
                  <Ionicons name="arrow-down-circle-outline" size={30} />
                  <View style={styles.underLineIncidentRule} />
                  <Ionicons name="arrow-down-circle-outline" size={30} />
                  <View style={styles.underLineIncidentRule} />
                  <Ionicons name="arrow-down-circle-outline" size={30} />
                </View>

                <View
                  style={{
                    // flexDirection:'row',
                    // alignSelf: 'center',
                    justifyContent: 'space-between',
                    width: '80%',
                  }}>
                  <Text style={styles.notificationText}>Email immediately</Text>
                  <View style={styles.underLineIncidentRuleText} />
                  <Text style={styles.notificationText}>Push immediately</Text>
                  <View style={styles.underLineIncidentRuleText} />
                  <Text style={styles.notificationText}>
                    SMS after 1 minute
                  </Text>
                  <View style={styles.underLineIncidentRuleText} />
                  <Text
                    style={{
                      marginBottom: 10,
                      color: '#000',
                      fontWeight: '400',
                    }}>
                    Phone after 2 minutes
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{height: 20}} />
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <TouchableOpacity
            onPress={() => this.setState({modalVisible: false})}
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.2)',
              height: 50,
            }}>
            <View
              style={{
                marginTop: 65,
                backgroundColor: '#f7f7f7',
                width: '100%',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                flex: 1,
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
                  Edit Details
                </Text>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: false})}>
                  <Icon
                    name={'close'}
                    size={26}
                    color="#A39B9B"
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
                      First Name
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
                      placeholder="vaishali"
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
                      Last Name
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
                      placeholder="Saraswat"
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
                      Email ID
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
                      placeholder="vaishali@mlwiz.com"
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
                      Timezone
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.sectionStyle}
                    onPress={() => this.setState({modalEscalation: true})}>
                    <TextInput
                      style={{
                        flex: 1,
                        color:
                          this.state.mobileNumber == null
                            ? '#A39B9B'
                            : '#1061dd',
                        paddingLeft: 20,
                      }}
                      placeholder="(+05:30 
                      GMT+5:30) 
                      Asia/Kolkata"
                      underlineColorAndroid="transparent"
                      onChangeText={text => {
                        this.setState({mobileNumber: text});
                      }}
                      placeholderTextColor={'#A39B9B'}
                      editable={false}
                      selectTextOnFocus={false}
                    />

                    <TouchableOpacity>
                      <Icon
                        name={'expand-more'}
                        size={22}
                        color="#000"
                        style={styles.imageStyle}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>

                  <View
                    style={{marginLeft: 15, marginBottom: -5, marginTop: '3%'}}>
                    <Text
                      style={{
                        //   fontSize: 13,
                        color: '#001038',
                        fontWeight: '500',
                      }}>
                      Date Format
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.sectionStyle}
                    onPress={() => this.setState({modalEscalation: true})}>
                    <TextInput
                      style={{
                        flex: 1,
                        color:
                          this.state.mobileNumber == null
                            ? '#A39B9B'
                            : '#1061dd',
                        paddingLeft: 20,
                      }}
                      placeholder="DD/MM/YYYY"
                      underlineColorAndroid="transparent"
                      onChangeText={text => {
                        this.setState({mobileNumber: text});
                      }}
                      placeholderTextColor={'#A39B9B'}
                      editable={false}
                      selectTextOnFocus={false}
                    />

                    <TouchableOpacity>
                      <Icon
                        name={'expand-more'}
                        size={22}
                        color="#000"
                        style={styles.imageStyle}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.serviceButton}
                    onPress={() => this.setState({modalVisible: false})}>
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
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={notificationModalVisible}
          onRequestClose={() => {
            this.setState({notificationModalVisible: false});
          }}>
          <TouchableOpacity
            onPress={() => this.setState({notificationModalVisible: false})}
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.2)',
              height: 50,
            }}>
            <View
              style={{
                flex: 1,
                marginTop: 65,
                backgroundColor: '#f7f7f7',
                width: '100%',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
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
                  Edit Incident Notification Rules
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({notificationModalVisible: false})
                  }>
                  <Icon
                    name={'close'}
                    size={26}
                    color="#A39B9B"
                    style={styles.imageStyle}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '92%',
                  alignSelf: 'center',
                  marginTop: '5%',
                }}>
                <Text style={{color: '#000'}}>
                  If an incident is assigned to you, you will be notified via
                </Text>
              </View>

              <ScrollView
                style={{
                  width: '92%',
                  alignSelf: 'center',
                  marginTop: '5%',
                }}>
                <View style={{
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  marginTop:'5%'
                }}>
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
                      placeholder="Email"
                      underlineColorAndroid="transparent"
                      onChangeText={text => {
                        this.setState({mobileNumber: text});
                      }}
                      placeholderTextColor={'#A39B9B'}
                      editable={false}
                      selectTextOnFocus={false}
                    />
                    <TouchableOpacity>
                      <Icon
                        name={'expand-more'}
                        size={22}
                        color="#000"
                        style={{marginRight: 5}}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>

                  <Text style={styles.notiRuleText}>after</Text>

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

                        <Text style={styles.notiRuleText}>minutes</Text>

                        <TouchableOpacity>
                        <Ionicons name="trash-outline" size={30} color={'red'} />
                        </TouchableOpacity>
                </View>


                

                
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  boxText: {
    fontSize: 14,
    fontWeight: '500',
  },
  boxTextDes: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
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
    borderWidth: 1,
    borderColor: '#b6bcc8',
    height: 44,
    width: 150,
    borderRadius: 5,
    // margin: 10,
    elevation: 0,
  },
  serviceButton: {
    backgroundColor: '#1061dd',
    height: 44,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b6bcc8',
    elevation: 0,
    width: '30%',
    marginTop: '10%',
    alignItems: 'center',
    // marginRight: '5%',
    // marginLeft:10
  },
  underLineIncidentRule: {
    backgroundColor: '#f3f4f6',
    height: 15,
    width: 2,
  },
  underLineIncidentRuleText: {
    backgroundColor: '#fff',
    height: 5,
    width: 2,
  },
  notificationText: {
    color: '#000',
    fontWeight: '400',
  },
  sectionStyleRulesEscalate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#b6bcc8',
    height: 44,
    width: 50,
    borderRadius: 5,
    // margin: 10,
    elevation: 0,
  },
  notiRuleText:{
    color:'#000',
    fontSize:15
  }
});
