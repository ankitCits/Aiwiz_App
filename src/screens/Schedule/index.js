import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import scheduleData from '../../Data/schedule.json';
import {useNavigation} from '@react-navigation/native';
import {getAccessToken} from '../../localstorage';
import {SCHEDULE_URL} from '../../config';
import axios from 'axios';
import Header from '../Component/Header';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};
const Schedule = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState({
    '2022-04-22': [
      {
        height: 50,
        name: 'Item for 2022-04-22 #0',
      },
      {
        height: 55,
        name: 'Item for 2022-04-22 #1',
      },
    ],
    '2022-04-23': [
      {
        height: 57,
        name: 'Item for 2022-04-23 #0',
      },
      {
        height: 51,
        name: 'Item for 2022-04-23 #1',
      },
    ],
    '2022-04-24': [
      {
        height: 50,
        name: 'Item for 2022-04-24 #0',
      },
      {
        height: 61,
        name: 'Item for 2022-04-24 #1',
      },
      {
        height: 95,
        name: 'Item for 2022-04-24 #2',
      },
    ],
    '2022-04-25': [
      {
        height: 99,
        name: 'Item for 2022-04-25 #0',
      },
    ],
    '2022-04-26': [
      {
        height: 141,
        name: 'Item for 2022-04-26 #0',
      },
      {
        height: 88,
        name: 'Item for 2022-04-26 #1',
      },
    ],
    '2022-04-28': [
      {
        height: 123,
        name: 'Item for 2022-04-28 #0',
      },
    ],
    '2022-04-29': [
      {
        height: 122,
        name: 'Item for 2022-04-29 #0',
      },
      {
        height: 50,
        name: 'Item for 2022-04-29 #1',
      },
    ],
    '2022-04-30': [
      {
        height: 109,
        name: 'Item for 2022-04-30 #0',
      },
      {
        height: 50,
        name: 'Item for 2022-04-30 #1',
      },
    ],
  });
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchScheduleData();
  });

  const fetchScheduleData = async () => {
    let accessToken = await getAccessToken();

    var config = {
      method: 'get',
      url: SCHEDULE_URL,
      headers: {
        Authorization: `Bearer ${accessToken.data.access_token}`,
      },
    };

    axios(config)
      .then(response => {
        // console.log('SCHEDULE_DATA :', JSON.stringify(response.data));
        if (response.data) {
          setData(response.data.data);
          setLoader(false);
        }
      })
      .catch(error => {
        console.log('error:', error);
      });
  };

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={{
          marginRight: 10,
          marginTop: 17,
          backgroundColor: '#fff',
          flexDirection: 'row',
        }}>
        <View style={styles.verticleLine} />
        <View style={{padding: 10}}>
          <Text>12:00 AM - 2:30 PM</Text>
          <Text>Dan Korean</Text>
          <Text>{item.name} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header title="Schedule" onClick={() => navigation.openDrawer()} />
      {loader ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#1061dd" />
        </View>
      ) : (
        <View
          style={{
            alignSelf: 'center',
            marginTop: '5%',
            flex: 1,
            width: '100%',
          }}>
          <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={'2022-04-29'}
            renderItem={renderItem}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  verticleLine: {
    // height: 50,
    width: 3,
    backgroundColor: '#9900ef',
    borderTopLeftRadius: 10,
  },
});

export default Schedule;
