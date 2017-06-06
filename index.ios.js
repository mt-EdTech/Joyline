/**
 * Joyline Mobile App
 * https://ediolabs.com
 * info@ediolabs.com
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  Navigator,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

//import * as appStyles from './includes/styles/JoylineStyles';
//import SearchBar from 'react-native-search-bar';
import ClassroomGridScreen from './includes/components/ClassroomGridScreen';
import CaptureScreen from './includes/components/CaptureScreen';
import ChatListScreen from './includes/components/ChatListScreen';

const imageName = require('./assets/images/chloe.png');

// Set the status bar for iOS to light
StatusBar.setBarStyle('dark-content');

export default class LaunchScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  constructor(props) {
    super(props);    
  }

  getSize() {
    return {
      width: Dimensions.get('window').width, 
      height: Dimensions.get('window').height
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.container, this.getSize()]}>
        <TouchableOpacity onPress={() => navigate('Class')} style={styles.button}>
          <Text style={styles.buttonText}>
            Class
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Capture')} style={styles.button}>
          <Text style={styles.buttonText}>
            Camera
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Chat')} style={styles.button}>
          <Text style={styles.buttonText}>
            Chat
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',    
  },
  button: {
    backgroundColor: 'blue',
    width: 100,
    marginBottom: 20,
    padding: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});

const Joyline = StackNavigator({
  Home: {
      screen: LaunchScreen
  },
  Class: {
      screen: ClassroomGridScreen
  },
  Chat: {
      screen: ChatListScreen
  },
  Capture: {
      screen: CaptureScreen
  },
});

AppRegistry.registerComponent('Joyline', () => Joyline);
