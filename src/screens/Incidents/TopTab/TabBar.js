import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const activeTab = label => {
  return (
    <View style={styles.tabButton}>
      <View style={{flexDirection:'column'}}>
        <Text style={{color: '#fff',fontSize:15,marginTop:1}}>{label}</Text>
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
      <Text style={{color: '#a4bcf1'}}>{label}</Text>
    </View>
  );
};

const MyTabBar = ({state, descriptors, navigation, position}) => (
  <View style={{height: 50}} key={state}>
    <ScrollView
      horizontal={true}
      style={{height: 30, width: '100%', backgroundColor: '#1061dd'}}>
      <View style={styles.parentTab}>
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
              console.log('event', navigation);
              navigation.navigate(route.name);
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

const mapStateToProps = state => ({
  //currentLanguage: state.SettingReducer.language || 'en',
});

export default MyTabBar;

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
  parentTab: {
    flexDirection: 'row',
    backgroundColor: '#1061dd',
    shadowRadius: 20,
    elevation: 2,
    justifyContent: 'center',
  },
  underlinePicker: {
    backgroundColor: '#fff',
    height: 3,
    top: '100%',
  },
});
