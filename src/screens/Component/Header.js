import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
        }}>
        <StatusBar
          animated={true}
          backgroundColor="#1061dd"
          barStyle="light-content"
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={hidden}
        />
        <View
          style={{
            height: 60,
            backgroundColor: '#1061dd',
            justifyContent: 'center',
            elevation: 5,
          }}>
          <View style={{width: '94%', alignSelf: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.dt}
                  onPress={() => this.props.onClick()}>
                  <Ionicons name="filter-outline" size={22} color={'#fff'} />
                </TouchableOpacity>
                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      fontFamily: 'Roboto-Medium',
                      color: '#fff',
                    }}>
                    {this.props.title}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.dt}
                  onPress={() => this.props.onClick()}>
                  <Ionicons
                    name="notifications-outline"
                    size={22}
                    color={'#fff'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dt: {
    // backgroundColor: '#fff',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  headerLeftFirsrt: {
    backgroundColor: '#2a74e0',
    borderRadius: 30,
    alignSelf: 'center',
    height: 35,
    width: 35,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
  },
  headerLeft: {
    backgroundColor: '#2a74e0',
    borderRadius: 30,
    alignSelf: 'center',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
