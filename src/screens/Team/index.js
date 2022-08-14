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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TEAMS_URL} from '../../config';
import teamsData from '../../Data/teams.json';
import {getAccessToken} from '../../localstorage';
import Header from '../Component/Header';
export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      toggle: false,
      loader: true,
      data: null,
    };
  }

  componentDidMount() {
    this.fetchTeamsData();
  }

  fetchTeamsData = async () => {
    let accessToken = await getAccessToken();

    var config = {
      method: 'get',
      url: TEAMS_URL,
      headers: {
        Authorization: `Bearer ${accessToken.data.access_token}`,
      },
    };

    axios(config)
      .then(response => {
        // console.log('TEAMS_DATA :', JSON.stringify(response.data));
        if (response.data) {
          this.setState({data: response.data.data});
          this.setState({loader: false});
        }
      })
      .catch(error => {
        console.log('error:', error);
      });
  };

  render() {
    console.log('====>>', this.state.data);
    return (
      <>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Header
            title="Team"
            onClick={() => this.props.navigation.openDrawer()}
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
            <View style={{width: '94%', alignSelf: 'center', marginTop: '5%'}}>
              <FlatList
                nestedScrollEnabled={true}
                data={this.state.data}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => (
                  <>
                    <View
                      style={{flexDirection: 'row', marginTop: 15}}
                      key={index}>
                      <View
                        style={{
                          backgroundColor: 'red',
                          padding: 10,
                          height: 45,
                          width: 45,
                          borderRadius: 45 / 2,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{color: '#fff'}}>
                          {item.name.charAt(0)}
                        </Text>
                      </View>

                      <View style={{marginLeft: '5%'}}>
                        <Text style={{color: '#000', fontSize: 16}}>
                          {item.name}
                        </Text>
                        <Text>demo@mail.com</Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text>User </Text>
                          <Icon
                            name="fiber-manual-record"
                            size={5}
                            color="green"
                            style={{marginTop: 2}}
                          />
                          <Text> On call</Text>
                        </View>
                      </View>
                    </View>
                  </>
                )}
              />
            </View>
          )}
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({});
