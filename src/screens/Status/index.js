import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../Component/Header';

export default class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Header
          title="Status"
          onClick={() => this.props.navigation.openDrawer()}
        />
        <Text> Status screen </Text>
      </View>
    );
  }
}
