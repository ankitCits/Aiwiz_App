import messaging from '@react-native-firebase/messaging';
import {setFcmToken,getFcmToken} from '../localstorage'
export async function requestUserPermission() {
  // const authStatus = await messaging().requestPermission();
  // const enabled =
  //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  // if (enabled) {
  //   console.log('Authorization status:', authStatus);
  //   getFcmTokenFun();
  // }

  try {
    await messaging().requestPermission();
    getFcmTokenFun();
  } catch (error) {
    alert('permission rejected');
  }
}

const getFcmTokenFun = async () => {
  let fcmToken = await getFcmToken();
  console.log('OLD_TOKEN', fcmToken);
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('NEW_TOKEN', fcmToken);
        await setFcmToken(fcmToken);
      }
    } catch (error) {
      console.log('CATCH_ERROR_IN_SET_FCM_TOKEN', error.message);
    }
  }
};

export const notificationListerner = async () => {
  messaging().onMessage(async remoteMessage => {
    console.log('NOTIFICATION_MESSAGE:', remoteMessage);
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('NOTIFICATION_OPEN_QUIT:', remoteMessage.notification);
      }
    });
};
