import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
const width = Dimensions.get('window').width;
const activeTab = label => {
  return (
    <View style={styles.tabButton}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{color: '#000', fontSize: 15, marginTop: 0}}>{label}</Text>
        <View style={styles.underlinePicker} />
      </View>
    </View>
  );
};

const inactiveTab = label => {
  return (
    <View
      style={[
        styles.tabButton,
        {backgroundColor: 'transparent', shadowColor: 'transparent'},
      ]}>
      <Text style={{color: '#726f96'}}>{label}</Text>
    </View>
  );
};

const TabBarDetail = ({state, descriptors, navigation, position}) => {
  const [colour, seColour] = useState('#ead4fa');
  return (
    <View style={{height: 40, backgroundColor: colour}} key={state}>
      <ScrollView horizontal={true} style={{height: 30, width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colour,
            justifyContent: 'center',
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            // let undefined = '';
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }

              if (!isFocused && !event.defaultPrevented) {
                // console.log('=======>', route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            const inputRange = state.routes.map((_, i) => i);
            const opacity = 1;
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  backgroundColor: 'transparent',
                  borderRadius: 80,
                  paddingLeft: 10,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                }}>
                <View>{isFocused ? activeTab(label) : inactiveTab(label)}</View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TabBarDetail;

const styles = StyleSheet.create({
  tabButton: {
    height: 30,
    margin: 0,
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  underlinePicker: {
    backgroundColor: '#000',
    height: 2,
    top: '50%',
  },
});
