import React, {Component} from 'react';
import {Text, View, Clipboard, TouchableOpacity} from 'react-native';
import {getFcmToken} from '../../localstorage';
import Header from '../Component/Header';

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  async componentDidMount() {
    let fcmToken = await getFcmToken();
    console.log('FCM_TOKEN', fcmToken);
    this.setState({token: fcmToken});
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Header
          title="Analytics"
          onClick={() => this.props.navigation.openDrawer()}
        />
        <View
          style={{
            width: '94%',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => Clipboard.setString(this.state.token)}>
            <Text>{this.state.token}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
