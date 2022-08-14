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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Timeline from 'react-native-timeline-flatlist';

export default class Timelines extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{width: '90%', alignSelf: 'center',marginTop: '5%'}}>
          {this.props.route.params.data.data.logs.length > 0 ? (
            <View>
              <FlatList
                nestedScrollEnabled={true}
                data={this.props.route.params.data.data.logs}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => (
                  <>
                    <View style={{flexDirection: 'row',}}>
                      <View>
                        <View style={styles.verticalDot}>
                          <Icon
                            name="fiber-manual-record"
                            size={15}
                            color="#1061dd"
                          />
                        </View>
                        <View style={styles.verticleLine} />
                      </View>
                      <View>
                        <View style={styles.firstView}>
                          <Text style={{fontSize: 13}}>{item.type}</Text>
                        </View>

                        <View style={styles.secondView}>
                          <Text style={{fontSize: 17}}>
                            {item.action}
                          </Text>
                        </View>

                        <View style={styles.thirdView}>
                          <Text style={{fontSize: 13}}>{item.time}</Text>
                        </View>
                      </View>
                    </View>
                  </>
                )}
              />
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10%',
                flexDirection: 'row',
              }}>
              <Icon name="info" size={20} color="grey" />
              <Text style={{fontSize: 16, marginLeft: 5}}>No Data </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstView: {
    marginLeft: 10,
    backgroundColor: '#e4ecf9',
    height: 25,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  secondView: {
    marginLeft: 15,
    fontSize: 16,
    marginTop: 5,
  },
  thirdView: {
    marginLeft: 15,
    fontSize: 16,
    marginTop: 5,
  },
  innerText: {
    marginLeft: 5,
    fontSize: 16,
  },
  verticleLine: {
    height: 100,
    width: 1.5,
    backgroundColor: '#1061dd',
    borderTopLeftRadius: 10,
    margin: 10,
    marginTop: 3,
  },
  verticalDot: {
    marginLeft: 3,
  },
});
