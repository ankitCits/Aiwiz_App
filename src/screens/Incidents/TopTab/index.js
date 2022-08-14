import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const width = Dimensions.get('window').width;
import Triggered from '../Triggered';
import Acknowledge from '../Acknowledge';
import Resolved from '../Resolved';
import All from '../All';
import MyTabBar from './TabBar';
const Tab = createMaterialTopTabNavigator();

class MyTabs extends Component {
  render() {
    return (
      <Tab.Navigator
        allowFontScaling={false}
        initialRouteName="All"
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Triggered" component={Triggered} />
        <Tab.Screen name="Acknowledge" component={Acknowledge} />
        <Tab.Screen name="Resolved" component={Resolved} />
        <Tab.Screen name="All" component={All} />
      </Tab.Navigator>
    );
  }
}

export default MyTabs;
