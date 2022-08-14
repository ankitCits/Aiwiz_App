import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CommonComponent} from '../Component';
import incidentData from '../../../Data/incidents.json';
import {getAccessToken} from '../../../localstorage';
import {INCIDENT_URL} from '../../../config';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Acknowledge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerId: '6252fb0915b9607a2171c0dd',
      status: 'acknowledged',
      startTime: '2022-05-04T05:24:48.945Z',
      endTime: '2023-05-04T11:43:51.947Z',
      loader: true,
      data: null,
      error: false,
    };
  }

  componentDidMount() {
    this.fetchTeamsData({fetch: false});
  }

  fetchTeamsData = async () => {
    if (fetch.fetch) {
      this.setState({isFetching: true});
    }
    let accessToken = await getAccessToken();

    var config = {
      method: 'get',
      url: `${INCIDENT_URL}/incidents/export/?start_time=${this.state.startTime}&end_time=${this.state.endTime}&status=${this.state.status}&type=json&owner_id=${this.state.ownerId}`,
      headers: {
        Authorization: `Bearer ${accessToken.data.access_token}`,
      },
    };

    axios(config)
      .then(response => {
        if (response.data) {
          this.setState({data: response.data});
          this.setState({loader: false});
          this.setState({isFetching: false});
          this.setState({error: false});
        }
      })
      .catch(error => {
        this.setState({isFetching: false});
        this.setState({error: true});
        console.log('error:', error);
      });
  };

  render() {
    if (this.state.error) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={['#1061dd']}
              refreshing={this.state.isFetching}
              onRefresh={() => {
                this.fetchTeamsData({fetch: true});
              }}
            />
          }>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10%',
            }}>
            <Ionicons name="rocket-outline" size={100} color={'grey'} />
            <Text
              style={{
                fontSize: 20,
                marginTop: 10,
                fontFamily: 'Roboto-Medium',
              }}>
              Everything's sorted!{' '}
            </Text>
          </View>
        </ScrollView>
      );
    }
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
          <View style={{flex: 1, backgroundColor: '#e2e3e5'}}>
            {this.state.data.incidents.length > 0 && !this.state.error ? (
              <View>
                <FlatList
                  nestedScrollEnabled={true}
                  data={this.state.data.incidents}
                  initialNumToRender={5}
                  maxToRenderPerBatch={10}
                  keyExtractor={(item, index) => index}
                  refreshControl={
                    <RefreshControl
                      colors={['#1061dd']}
                      refreshing={this.state.isFetching}
                      onRefresh={() => {
                        this.fetchTeamsData({fetch: true});
                      }}
                    />
                  }
                  renderItem={({item, index}) => (
                    <>
                      {item.status == 'acknowledge' ? (
                        <View style={{marginTop: '5%'}} key={index}>
                          <CommonComponent
                            name={item.status}
                            nameColor={'#f9f0c1'}
                            title={item.title}
                            service={item.service}
                            assignee={item.assignee}
                            alert_source={'Alarm'}
                            time={item.created_at}
                            id={item.id.slice(item.id.length - 3)}
                            onClick={() =>
                              this.props.navigation.navigate('IncidenDetail', {
                                id: item.id,
                              })
                            }
                          />
                        </View>
                      ) : null}
                    </>
                  )}
                />
              </View>
            ) : (
              <ScrollView
                refreshControl={
                  <RefreshControl
                    colors={['#1061dd']}
                    refreshing={this.state.isFetching}
                    onRefresh={() => {
                      this.fetchTeamsData({fetch: true});
                    }}
                  />
                }>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10%',
                  }}>
                  <Ionicons name="rocket-outline" size={100} color={'grey'} />
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 10,
                      fontFamily: 'Roboto-Medium',
                    }}>
                    Everything's sorted!{' '}
                  </Text>
                </View>
              </ScrollView>
            )}
          </View>
        )}
      </>
    );
  }
}
