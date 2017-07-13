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
  Button,
  Image,
  Header
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
import Footer from './includes/components/Footer';
import ProfileScreen from './includes/components/ProfileScreen';
import MomentsScreen from './includes/components/MomentsScreen';

const imageName = require('./assets/images/learnerImages/chloe.png');
const headerImg = require('./assets/images/header-mobile.png');

const ImageHeader = props => (
      <View style={{ backgroundColor: '#CFABF4', height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={headerImg} />        
      </View>
    );
//<Header {...props} style={{ backgroundColor: 'transparent' }}/>

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default class LaunchScreen extends Component {  
  static navigationOptions = {
    headerTitleStyle: { color: '#fff' },
    headerStyle: {
            backgroundColor: '#CFABF4',
            height: 50,
    },    
    header: (props) => <ImageHeader {...props} />,
    /*
    headerTitle: 'Joyline',
    headerTitleStyle: {
            fontSize: 16,
    },
    headerRight: <ChatButton badgeCount='3' />,     
    headerTintColor: '#FFFFFF',
    */
    
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
        <TouchableOpacity onPress={() => navigate('Moments')} style={styles.button}>
          <Text style={styles.buttonText}>
            Moments
          </Text>
        </TouchableOpacity>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#CFABF4',
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

const routerConfig = {
  Home: {
      screen: LaunchScreen
  },
  Class: {
      screen: ClassroomGridScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#CFABF4',
                height: 50,
        },    
        header: (props) => <ImageHeader {...props}/>,
      }),
  },
  ChatList: {
      screen: ChatListScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#CFABF4',
                height: 50,
        },    
        header: (props) => <ImageHeader {...props}/>,
      }),
  },
  Chat: {
      screen: ChatScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#CFABF4',
                height: 50,
        },    
        header: (props) => <ImageHeader {...props}/>,
      }),
  },
  Capture: {
      screen: CaptureScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#CFABF4',
                height: 50,
        },    
        header: (props) => <ImageHeader {...props}/>,
      }),
  },
  Profile: {
      screen: ProfileScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#CFABF4',
                height: 50,
        },    
        header: (props) => <ImageHeader {...props}/>,
      }),
  },
  Moments: {
      screen: MomentsScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#CFABF4',
                height: 50,
        },    
        header: (props) => <ImageHeader {...props}/>,
      }),
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'float',
};

const Joyline = StackNavigator(routerConfig, StackNavigatorConfig );

AppRegistry.registerComponent('Joyline', () => Joyline);
