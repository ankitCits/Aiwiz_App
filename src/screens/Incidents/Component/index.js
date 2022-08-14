import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const tags = [
    {
      value: 'ALARM',
      color: '#9900ef',
    },
    {
      value: 'US East-N.Virginia',
      color: '#00d084',
    },
    {
      value: 'US East-N.Virginia',
      color: '#00d084',
    },
  ];
const CommonComponent = props => {
    const {
      name,
      nameColor,
      title,
      service,
      assignee,
      alert_source,
      onClick,
      time,
      id
    } = props
  return (
    <>
      <TouchableWithoutFeedback
      onPress={()=>onClick()}
        style={{
          height: 220,
          width: '96%',
          backgroundColor: '#fff',
          alignSelf: 'center',
          borderRadius: 5,
        }}>
        <View style={{width: '96%', alignSelf: 'center'}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 5,
            }}>
            <View>
              <Text style={{fontSize: 15, padding: 5}}>#..{id}</Text>
            </View>

            <View
              style={{
                backgroundColor: nameColor,
                padding: 5,
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 14,color:'#000'}}>{name}</Text>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#000'}}>
              {title}
            </Text>
          </View>

          <View style={{marginTop: 30}}>
            <View
              style={{
                width: '85%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="info-outline"
                  size={20}
                  color="#969799"
                  style={{marginTop: 1}}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    marginLeft: 5,
                    fontSize: 16,
                  }}>
                  {service}
                </Text>
              </View>
              <View>
                <Icon
                  name="arrow-back"
                  size={20}
                  color="#969799"
                  style={{marginTop: 1}}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="stream"
                  size={20}
                  color="#969799"
                  style={{marginTop: 1}}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    marginLeft: 5,
                    fontSize: 16,
                  }}>
                  {assignee}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="person"
                size={21}
                color="#969799"
                style={{marginTop: 1}}
              />
              <Text style={{textAlign: 'center', marginLeft: 7, fontSize: 17}}>
                {alert_source}
              </Text>
            </View>

            <View>
              <Text style={{fontSize: 17}}>{time}</Text>
            </View>
          </View>
          {/* <View style={styles.underlinePicker} />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            {tags.map((item, index) => {
              return (
                <>
                  <View
                    style={{
                      marginLeft: 10,
                      backgroundColor: item.color,
                      padding: 5,
                      borderRadius: 5,
                      opacity: 0.8,
                    }}>
                    <Text style={{color: '#fff'}}>{item.value}</Text>
                  </View>
                </>
              );
            })}
          </View> */}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export {CommonComponent};
const styles = StyleSheet.create({
  underlinePicker: {
    backgroundColor: '#e2e3e5',
    height: 1.5,
    marginTop: 20,
  },
});
