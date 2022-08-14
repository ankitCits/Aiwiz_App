import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Incident from '../screens/Incidents';
import Triggered from '../screens/Incidents/Triggered';
import Acknowledge from '../screens/Incidents/Acknowledge';
import Resolved from '../screens/Incidents/Resolved';
import AllIncidents from '../screens/Incidents/All';
import IncidenDetail from '../screens/Incidents/Detail'
import IncidenDetailTab from '../screens/Incidents/Detail/Details';
import Timeline from '../screens/Incidents/Detail/Timeline';
import Notes from '../screens/Incidents/Detail/Notes';
import Team from '../screens/Team'
import Schedule from '../screens/Schedule'
import Status from '../screens/Status'
import Analytics from '../screens/Analytics';
import CreateIncident from '../screens/CreateIncident';
import Profile from '../screens/Profile';
import Escalation from '../screens/EscalationPolicy';
//Demo

import Home from '../screens/Demo/home'
import Login from '../screens/Demo/login'
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
      }}
      initialRouteName="Dashboard">
        {/* Demo */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        {/* Demo End */}
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Incident" component={Incident} />
      <Stack.Screen name="Triggered" component={Triggered} />
      <Stack.Screen name="Acknowledge" component={Acknowledge} />
      <Stack.Screen name="Resolved" component={Resolved} />
      <Stack.Screen name="AllIncidents" component={AllIncidents} />
      <Stack.Screen name="IncidenDetail" component={IncidenDetail} />
      <Stack.Screen name="IncidenDetailTab" component={IncidenDetailTab} />
      <Stack.Screen name="Timeline" component={Timeline} />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="Team" component={Team} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="Analytics" component={Analytics} />
      <Stack.Screen name="CreateIncident" component={CreateIncident} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Escalation" component={Escalation} />
    </Stack.Navigator>
  );
};
export default Navigation;
