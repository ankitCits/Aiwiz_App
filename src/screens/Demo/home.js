import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import images from '../../assets/images';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleInput = text => {
    if (text == 'password') {
      this.props.navigation.navigate('Login');
    }
    if (text == 'main') {
      this.props.navigation.navigate('Dashboard');
    }
    this.setState({text: text});
  };

  render() {
    return (
      <View
        style={styles.mainView}>
        <ImageBackground
          source={images.Demo}
          resizeMode="cover"
          style={styles.image}>
          <TextInput
            style={{height: '100%'}}
            autoCorrect={false}
            keyboardType="visible-password"
            underlineColorAndroid="transparent"
            placeholder=""
            onChangeText={this.handleInput}
            value={this.state.text}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
