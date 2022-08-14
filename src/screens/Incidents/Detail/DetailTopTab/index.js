import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const width = Dimensions.get('window').width;
import Details from '../Details';
import Timeline from '../Timeline';
import Notes from '../Notes';
import StarredNotes from '../StarredNotes';
import TabBarDetail from './TabBarDetail';
const Tab = createMaterialTopTabNavigator();

class DetailTopTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      data: null,
    };
  }
  render() {
    return (
      <Tab.Navigator
        allowFontScaling={false}
        tabBar={props => <TabBarDetail {...props} />}
        >
        <Tab.Screen name="Details" component={Details} initialParams={this.props}/>
        <Tab.Screen name="Timeline" component={Timeline}  initialParams={this.props}/>
        <Tab.Screen name="Notes" component={Notes} />
        {/* <Tab.Screen name="Starred Notes" component={StarredNotes} /> */}
      </Tab.Navigator>
    );
  }
}

export default DetailTopTab;
