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
  Modal,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getFcmToken} from '../../localstorage';
import Header from '../Component/Header';

export default class CreateIncident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      modalVisible: false,
      modalEscalation: false,
    };
  }

  async componentDidMount() {
    let fcmToken = await getFcmToken();
    console.log('FCM_TOKEN', fcmToken);
    this.setState({token: fcmToken});
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  render() {
    const {modalVisible, modalEscalation} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#f7f7f7',
        }}>
        <Header
          title="Create New Incident"
          onClick={() => this.props.navigation.openDrawer()}
        />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: '10%',
          }}>
          <View>
            <View style={{marginLeft: 15, marginBottom: -5}}>
              <Text
                style={{
                  //   fontSize: 13,
                  color: 'grey',
                }}>
                Incident Title
              </Text>
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={{
                  flex: 1,
                  color:
                    this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
                  paddingLeft: 20,

                  //   borderRadius:15
                }}
                placeholder="Incident Title"
                underlineColorAndroid="transparent"
                onChangeText={text => {
                  this.setState({mobileNumber: text});
                }}
                placeholderTextColor={'#A39B9B'}
              />
            </View>

            <View style={{marginLeft: 15, marginBottom: -5, marginTop: '5%'}}>
              <Text
                style={{
                  //   fontSize: 13,
                  color: 'grey',
                }}>
                Incident Description (options)
              </Text>
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={{
                  flex: 1,
                  color:
                    this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
                  paddingLeft: 20,

                  //   borderRadius:15
                }}
                placeholder="Incident Description (supports markdown)"
                underlineColorAndroid="transparent"
                numberOfLines={5}
                multiline={true}
                onChangeText={text => {
                  this.setState({mobileNumber: text});
                }}
                placeholderTextColor={'#A39B9B'}
              />
            </View>

            <View style={{marginLeft: 15, marginBottom: -5, marginTop: '5%'}}>
              <Text
                style={{
                  //   fontSize: 13,
                  color: 'grey',
                }}>
                Service
              </Text>
            </View>
            <TouchableOpacity
              style={styles.sectionStyle}
              onPress={() => this.setState({modalVisible: true})}>
              <TextInput
                style={{
                  flex: 1,
                  color:
                    this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
                  paddingLeft: 20,

                  //   borderRadius:15
                }}
                placeholder="Select Service"
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
              <TouchableOpacity>
                <Icon
                  name={'expand-more'}
                  size={22}
                  color="#000"
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <View style={{marginLeft: 15, marginBottom: -5, marginTop: '5%'}}>
              <Text
                style={{
                  //   fontSize: 13,
                  color: 'grey',
                }}>
                Assign To
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={styles.sectionStyle2}>
                <Icon
                  name="person"
                  size={20}
                  color="#000"
                  style={styles.imageStyle}
                />
                <TextInput
                  style={{
                    flex: 1,
                    color: this.state.mobileNumber == null ? '#000' : '#1061dd',
                  }}
                  placeholder="User"
                  underlineColorAndroid="transparent"
                  numberOfLines={5}
                  multiline={true}
                  onChangeText={text => {
                    this.setState({mobileNumber: text});
                  }}
                  placeholderTextColor={'#000'}
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

              <TouchableOpacity style={styles.sectionStyle2}>
                <TextInput
                  style={{
                    flex: 1,
                    color:
                      this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
                    paddingLeft: 20,
                  }}
                  placeholder="Select User"
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

            <View style={{marginLeft: 15, marginBottom: -5, marginTop: '5%'}}>
              <Text
                style={{
                  //   fontSize: 13,
                  color: 'grey',
                }}>
                Tags (options)
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={styles.sectionStyle2}>
                <TextInput
                  style={{
                    flex: 1,
                    color:
                      this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
                    paddingLeft: 20,
                  }}
                  placeholder="Key"
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
                    color="#A39B9B"
                    style={styles.imageStyle}
                  />
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sectionStyle2}>
                <TextInput
                  style={{
                    flex: 1,
                    color:
                      this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
                    paddingLeft: 20,
                  }}
                  placeholder="Value"
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
                    color="#A39B9B"
                    style={styles.imageStyle}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.signipInner}
            // onPress={() => this.props.navigation.navigate('Drawer')}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '500',
                lineHeight: 22,
              }}>
              Create new incident
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            // onPress={() => this.props.navigation.navigate('Drawer')}
          >
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 22,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 60,
              backgroundColor: '#f7f7f7',
              width: '100%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
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
                Edit Service
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({modalVisible: false})}>
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
                    Service Name {''} <Text style={{color: 'red'}}>*</Text>
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
                    placeholder="AWS Kepware Lab"
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
                    Service Description
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
                    placeholder="Alert from IOT devices connected ..."
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
                    Escalation Policy {''} <Text style={{color: 'red'}}>*</Text>
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.sectionStyle}
                  onPress={() => this.setState({modalEscalation: true})}>
                  <TextInput
                    style={{
                      flex: 1,
                      color:
                        this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
                      paddingLeft: 20,
                    }}
                    placeholder="Lab Escalation Policy"
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
                    Email Prefix {''}{' '}
                  </Text>
                  <Icon
                    name={'error'}
                    size={20}
                    color="#000"
                    style={
                      {
                        // bottom:'-5%'
                      }
                    }
                  />
                </View>
                <View style={styles.sectionStyle}>
                  <TextInput
                    style={{
                      flex: 1,
                      color:
                        this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
                      paddingLeft: 20,
                    }}
                    placeholder="Incident Title"
                    underlineColorAndroid="transparent"
                    onChangeText={text => {
                      this.setState({mobileNumber: text});
                    }}
                    placeholderTextColor={'#A39B9B'}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        // flex:1,
                        width: 3,
                        height: 30,
                        backgroundColor: '#3c6dd8',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                      }}>
                      {' '}
                      @mlwiz-inc...{' '}
                    </Text>
                  </View>
                </View>

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
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalEscalation}>
          <View
            style={{
              flex: 1,
              marginTop: 120,
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
                        this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
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
                        this.state.mobileNumber == null ? '#A39B9B' : '#1061dd',
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
                            marginLeft:15,
                            marginTop:5
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
                          }}>
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
          </View>
        </Modal>
      </View>
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
  imageStyle: {
    margin: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  signup: {
    marginTop: '10%',
    width: '80%',
    height: 44,
    alignSelf: 'center',
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
    width: '85%',
    marginTop: '10%',
  },
  signin: {
    marginTop: '10%',
    width: '90%',
    height: 44,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  serviceButton: {
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
    marginBottom:'10%'
  },
});
