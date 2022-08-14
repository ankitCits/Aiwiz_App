import React, {useEffect} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SidebarNavigation from './DrawerComponent';
import StackScreen from './stack';
import SplashScreen from 'react-native-splash-screen';
import Drawer from './drawer';
import Login from '../screens/Auth/login';

const Stack = createStackNavigator();
const DrawerScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  const auth = 1;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
        }}
        initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default DrawerScreen;
