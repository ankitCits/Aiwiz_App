import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import images from '../../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HTMLView from 'react-native-htmlview';
import {WebView} from 'react-native-webview';
import {
  requestUserPermission,
  notificationListerner,
} from '../../notifications';
import {getNotificationData, setAccessToken} from '../../localstorage';
import {AXIOS_INSTANCE, REFRESH_URL, REFRES_TOKEN} from '../../config';
import axios from 'axios';
import Header from '../Component/Header';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
    };
  }

  async componentDidMount() {
    await requestUserPermission();
    await notificationListerner();
    let notificationData = await getNotificationData();
    console.log('NOTIFICATION_DATA_LOCAL_STORAGE:', notificationData);

    if (notificationData) {
      this.setState({loader: false});
      this.props.navigation.navigate('IncidenDetail');
    } else {
      this.setState({loader: false});
    }

    this.fetchToken();
  }

  // For Fetch Bearer Token
  fetchToken = () => {
    var config = {
      method: 'get',
      url: REFRESH_URL,
      headers: {
        'X-Refresh-Token': REFRES_TOKEN,
      },
    };

    axios(config)
      .then(response => {
        if (response) {
          setAccessToken(response.data);
          console.log('ACCESS_TOKEN>', response.data);
        }
      })
      .catch(error => {
        console.log('error:', error);
      });
  };

  // Navigate Screen Common Method
  onPressGraph = url => {
    console.log('CallFun');
    Linking.openURL(url);
  };
  render() {
    return (
      <>
        {this.state.loader ? (
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
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Header
              title="Dashboard"
              onClick={() => this.props.navigation.openDrawer()}
            />
            <ScrollView
              style={{margin: 15,marginBottom:0}}
              showsVerticalScrollIndicator={false}>
              {/* 1 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=2',
                  )
                }>
                <Image
                  style={styles.graphIcon}
                  resizeMode={'cover'}
                  source={images.Graph1}
                  defaultSource={images.Graph1}
                />
              </TouchableOpacity>

              {/* 2 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=6',
                  )
                }>
                <Image
                  style={styles.graphIcon}
                  resizeMode={'cover'}
                  source={images.Graph2}
                  defaultSource={images.Graph2}
                />
              </TouchableOpacity>

              {/* 3 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=4',
                  )
                }>
                <Image
                  style={styles.graphIcon}
                  resizeMode={'cover'}
                  source={images.Graph3}
                  defaultSource={images.Graph3}
                />
              </TouchableOpacity>

              {/* 4 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=8',
                  )
                }>
                <Image
                  style={styles.graphIcon2}
                  resizeMode={'cover'}
                  source={images.Graph4}
                  defaultSource={images.Graph4}
                />
              </TouchableOpacity>

              {/* 5 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=9',
                  )
                }>
                <Image
                  style={styles.graphIcon2}
                  resizeMode={'cover'}
                  source={images.Graph5}
                  defaultSource={images.Graph5}
                />
              </TouchableOpacity>

              {/* 6 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=12',
                  )
                }>
                <Image
                  style={styles.graphIcon2}
                  resizeMode={'cover'}
                  source={images.Graph6}
                  defaultSource={images.Graph6}
                />
              </TouchableOpacity>

              {/* 7 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=13',
                  )
                }>
                <Image
                  style={styles.graphIcon2}
                  resizeMode={'cover'}
                  source={images.Graph7}
                  defaultSource={images.Graph7}
                />
              </TouchableOpacity>

              {/* 8 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=15',
                  )
                }>
                <Image
                  style={styles.graphIcon2}
                  resizeMode={'cover'}
                  source={images.Graph8}
                  defaultSource={images.Graph8}
                />
              </TouchableOpacity>

              {/* 9 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=16',
                  )
                }>
                <Image
                  style={styles.graphIcon2}
                  resizeMode={'cover'}
                  source={images.Graph9}
                  defaultSource={images.Graph9}
                />
              </TouchableOpacity>

              {/* 10 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=17',
                  )
                }>
                <Image
                  style={styles.graphIcon2}
                  resizeMode={'cover'}
                  source={images.Graph10}
                  defaultSource={images.Graph10}
                />
              </TouchableOpacity>

              {/* 11 */}
              <TouchableOpacity
                onPress={() =>
                  this.onPressGraph(
                    'https://aiwiz.com/d/m2GiQkQnk/kepwaredata?tab=alert&orgId=1&viewPanel=18',
                  )
                }>
                <Image
                  style={styles.graphIcon2}
                  resizeMode={'cover'}
                  source={images.Graph11}
                  defaultSource={images.Graph11}
                />
              </TouchableOpacity>
              <View style={{marginBottom:15}} />
            </ScrollView>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  innerView: {
    marginTop: '5%',
    flexDirection: 'row',
    alignContent: 'center',
  },
  innerText: {
    fontSize: 20,
    color: '#164dbd',
    fontWeight: '800',
    fontFamily: 'Roboto-Medium',
    marginLeft: '5%',
  },
  graphIcon: {
    height: 150,
    width: '100%',
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 5,
  },
  graphIcon2: {
    height: 170,
    width: '100%',
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 5,
  },
});
