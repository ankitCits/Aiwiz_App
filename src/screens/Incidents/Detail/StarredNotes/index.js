import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class StarredNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#e2e3e5'}}>
        <View>
          <Text>StandardNotes</Text>
        </View>
      </View>
    );
  }
}
