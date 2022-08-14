import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from './DrawerComponent';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/Profile';
import Incidemt from '../screens/Incidents';
import MomentsScreen from '../screens/CreateIncident';
import SettingsScreen from '../screens/Dashboard';

import Escalation from '../screens/EscalationPolicy';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#1061dd',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Incidents"
        component={Incidemt}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="albums-outline" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Escalation Policies"
        component={Escalation}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="bar-chart-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Create Incidents"
        component={MomentsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
