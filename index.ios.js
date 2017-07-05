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
  Text,
  Button
} from 'react-native';

import {
  StackNavigator,  
} from 'react-navigation';

//import * as appStyles from './includes/styles/JoylineStyles';
//import SearchBar from 'react-native-search-bar';
import ClassroomGridScreen from './includes/components/ClassroomGridScreen';
import CaptureScreen from './includes/components/CaptureScreen';
import ChatListScreen from './includes/components/ChatListScreen';
import ChatScreen from './includes/components/ChatScreen';
import ChatButton from './includes/components/ChatButton';
import CTAButton from './includes/components/CTAButton';
import ProfileScreen from './includes/components/ProfileScreen';

const imageName = require('./assets/images/chloe.png');

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default class LaunchScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: <ChatButton badgeCount='3' />,
    headerStyle: {
            backgroundColor: 'green',
            height: 50,
    },
    headerTintColor: '#FFFFFF',
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
        <TouchableOpacity onPress={() => navigate('ChatList')} style={styles.button}>
          <Text style={styles.buttonText}>
            ChatList
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Profile')} style={styles.button}>
          <Text style={styles.buttonText}>
            Profile
          </Text>
        </TouchableOpacity>
        <CTAButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    width: 300,
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
  ChatList: {
      screen: ChatListScreen
  },
  Chat: {
      screen: ChatScreen
  },
  Capture: {
      screen: CaptureScreen
  },
  Profile: {
      screen: ProfileScreen
  },
});

AppRegistry.registerComponent('Joyline', () => Joyline);
