/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/navigation';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import {removeNotificationData, setNotificationData} from './src/localstorage'
// const RNApp = () => (
//     <App />
// )

// Register background handler
removeNotificationData()
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('NOTIFICATION_DATA_ON_INDEX:', remoteMessage);
    console.log("NOTOFICATION_WITH_DATA:", remoteMessage.data)

    if(remoteMessage.data != null && remoteMessage.data != undefined){
        await setNotificationData(remoteMessage.data);
    }
  });
AppRegistry.registerComponent(appName, () => App);