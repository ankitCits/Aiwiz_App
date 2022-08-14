import axios from 'axios';
import React, {Component} from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  Clipboard,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {INCIDENT_DETAIL} from '../../../config';
import {getAccessToken, getNotificationData} from '../../../localstorage';
import DetailTopTab from './DetailTopTab';

export default class IncidenDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      data: null,
    };
  }

  async componentDidMount() {
    let notificationData = await getNotificationData();
    console.log('NOTIFICATION_DATA_LOCAL_STORAGE:', notificationData);

    if (notificationData) {
      this.fetchTeamsData(notificationData.id);
    } else {
      this.fetchTeamsData(this.props.route.params.id);
    }
  }

  fetchTeamsData = async (id) => {
    let accessToken = await getAccessToken();

    var config = {
      method: 'get',
      url: `${INCIDENT_DETAIL}/${id}`,
      headers: {
        Authorization: `Bearer ${accessToken.data.access_token}`,
      },
    };

    axios(config)
      .then(response => {
        if (response.data) {
          console.log("RESPONSE_DATA",response.data)
          this.setState({data: response.data});
          this.setState({loader: false});
        }
      })
      .catch(error => {
        console.log('error:', error);
      });
  };

  render() {
    return (
      <>
      <StatusBar
          animated={true}
          backgroundColor="#ead4fa"
          barStyle="dark-content"
        />
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
          <View style={{flex: 1, backgroundColor: '#e2e3e5'}}>
            <View style={{height: 130, backgroundColor: '#ead4fa'}}>
              <View style={{width: '90%', alignSelf: 'center'}}>
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icon
                      name="arrow-back"
                      size={21}
                      color="#474c69"
                      style={{marginTop: 1}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{marginLeft: 15, color: '#5a5373', fontSize: 16}}>
                    #...{this.state.data.data.id.slice(this.state.data.data.id.length - 3)}
                  </Text>
                  <TouchableOpacity onPress={() => Clipboard.setString(this.state.data.data.id)}>
                    <Icon
                      name="content-copy"
                      size={15}
                      color="#1464d8"
                      style={{marginTop: 5, marginLeft: 5}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 10}}>
                  <Text>
                    {this.state.data.data.message}
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text>Event At : {this.state.data.data.timeOfCreation}</Text>
                </View>
              </View>
            </View>
            <View style={{height:'100%'}}>
              <DetailTopTab  data={this.state.data}/>
            </View>
          </View>
        )}
      </>
    );
  }
}
