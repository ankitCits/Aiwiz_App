import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tabs from './TopTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Incidemt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      toggle: false,
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            height: 60,
            backgroundColor: '#1061dd',
            justifyContent: 'center',
          }}>
          <View style={{width: '94%', alignSelf: 'center'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.dt}
                  onPress={() => this.props.navigation.openDrawer()}>
                  <Ionicons name="filter-outline" size={22} color={'#fff'} />
                </TouchableOpacity>
                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                  <Text
                    style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>
                    Incidents
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.headerLeft}>
                  <TouchableOpacity
                    onPress={() => this.setState({showFilter: true})}>
                    <Ionicons name="funnel-outline" size={22} color={'#fff'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.headerLeftFirsrt}>
                  <View>
                  <Ionicons name="search-outline" size={22} color={'#fff'} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Tabs />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showFilter}
          style={{margin: 0}}
          onBackButtonPress={() => {
            this.setState({showFilter: false});
          }}
          onRequestClose={() => {
            this.setState({showFilter: false});
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.2)',
              flex: 1,
              justifyContent: 'flex-end',
            }}
            onPress={() => this.setState({showFilter: false})}>
            <View
              style={{
                width: '100%',
                height: '30%',
                backgroundColor: '#fff',
              }}>
              <View style={{margin: 15}}>
                <View style={styles.filterItemViewFirst}>
                  <Text style={styles.filterItemText}>Assign Me</Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({toggle: !this.state.toggle ? true : false})
                    }>
                    {this.state.toggle ? (
                      <Icon name={'toggle-on'} size={50} color={'#1061dd'} />
                    ) : (
                      <Icon name={'toggle-off'} size={50} color={'#cecece'} />
                    )}
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.filterItemView}>
                  <Text style={styles.filterItemText}>Last Week</Text>
                </TouchableOpacity>
                <View style={styles.underlinePicker} />
                <TouchableOpacity style={styles.filterItemView}>
                  <Text style={styles.filterItemTextLast}>Last 3 Month</Text>
                </TouchableOpacity>
                <View style={styles.underlinePicker} />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dt: {
    // backgroundColor: '#fff',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  headerLeftFirsrt: {
    // backgroundColor: '#2a74e0',
    borderRadius: 30,
    alignSelf: 'center',
    height: 35,
    width: 35,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
  },
  headerLeft: {
    // backgroundColor: '#2a74e0',
    borderRadius: 30,
    alignSelf: 'center',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  underlinePicker: {
    backgroundColor: '#cecece',
    height: 1,
    opacity: 0.5,
    width: '95%',
    alignSelf: 'center',
  },
  filterItemViewFirst: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterItemView: {
    padding: 10,
  },
  filterItemText: {
    fontSize: 18,
  },
  filterItemTextLast: {
    fontSize: 18,
    color: '#1061dd',
  },
});
