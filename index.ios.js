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
import WelcomeScreen from './includes/components/WelcomeScreen';
import RegistrationLoginScreen from './includes/components/RegistrationLoginScreen';
import RegistrationSignup from './includes/components/RegistrationSignupScreen';
import RegistrationNameScreen from './includes/components/RegistrationNameScreen';
import RegistrationBirthdateScreen from './includes/components/RegistrationBirthdateScreen';
import RegistrationGenderScreen from './includes/components/RegistrationGenderScreen';
import RegistrationPhotoScreen from './includes/components/RegistrationPhotoScreen';
import ClassroomGridScreen from './includes/components/ClassroomGridScreen';
import CaptureScreen from './includes/components/CaptureScreen';
import CapturePreview from './includes/components/CapturePreview';
import ChatListScreen from './includes/components/ChatListScreen';
import ChatScreen from './includes/components/ChatScreen';
import ChatButton from './includes/components/ChatButton';
import Footer from './includes/components/Footer';
import HeaderBar from './includes/components/HeaderBar';
import ProfileScreen from './includes/components/ProfileScreen';
import MomentsScreen from './includes/components/MomentsScreen';

const imageName = require('./assets/images/learnerImages/chloe.png');

/*
const ImageHeader = props => (
      <View style={{ backgroundColor: '#1daecd', height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={headerImg} />        
      </View>
    );
//<Header {...props} style={{ backgroundColor: 'transparent' }}/>
*/

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default class LaunchScreen extends Component {  
  static navigationOptions = {
    headerTitleStyle: { color: '#fff' },
    headerStyle: {
            backgroundColor: '#1daecd',
            height: 50,
    },    
    header: (props) => <HeaderBar />,
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
        <TouchableOpacity onPress={() => navigate('Welcome')} style={styles.button}>
          <Text style={styles.buttonText}>
            Welcome
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('RegistrationLogin')} style={styles.button}>
          <Text style={styles.buttonText}>
            Registration Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('RegistrationSignup')} style={styles.button}>
          <Text style={styles.buttonText}>
              Registration Signup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('RegistrationName')} style={styles.button}>
          <Text style={styles.buttonText}>
            Registration Name
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('RegistrationBirthdate')} style={styles.button}>
          <Text style={styles.buttonText}>
            Registration Birthdate
          </Text>
        </TouchableOpacity>        
        <TouchableOpacity onPress={() => navigate('RegistrationGender')} style={styles.button}>
          <Text style={styles.buttonText}>
            Registration Gender
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('RegistrationPhoto')} style={styles.button}>
          <Text style={styles.buttonText}>
            Registration Photo
          </Text>
        </TouchableOpacity>
        {/*
        <TouchableOpacity onPress={() => navigate('Class')} style={styles.button}>
          <Text style={styles.buttonText}>
            Class
          </Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Capture')} style={styles.button}>
          <Text style={styles.buttonText}>
              Capture Screen
          </Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('CapturePreview')} style={styles.button}>
          <Text style={styles.buttonText}>
            Capture Preview
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
        */}
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
    backgroundColor: '#1daecd',
    width: 300,
    marginBottom: 10,
    padding: 10
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
  Welcome: {
      screen: WelcomeScreen,      
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                height: 0,
        },    
        header: () => {},
      }),
  },
  RegistrationLogin: {
      screen: RegistrationLoginScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                height: 0,
        },    
        header: () => {},
      }),
  },
  RegistrationSignup: {
    screen: RegistrationSignup,
    navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
            height: 0,
        },
        header: () => {},
    }),
  },
  RegistrationName: {
      screen: RegistrationNameScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                height: 0,
        },    
        header: () => {},
      }),
  },
  RegistrationBirthdate: {
      screen: RegistrationBirthdateScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                height: 0,
        },    
        header: () => {},
      }),
  },
  RegistrationGender: {
      screen: RegistrationGenderScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                height: 0,
        },    
        header: () => {},
      }),
  },
  RegistrationPhoto: {
      screen: RegistrationPhotoScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                height: 0,
        },    
        header: () => {},
      }),
  },
  Class: {
      screen: ClassroomGridScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#1daecd',
                height: 50,
        },    
        header: (props) => <HeaderBar />,
      }),
  },
  ChatList: {
      screen: ChatListScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#1daecd',
                height: 50,
        },    
        header: (props) => <HeaderBar />,
      }),
  },
  Chat: {
      screen: ChatScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#1daecd',
                height: 50,
        },    
        header: (props) => <HeaderBar />,
      }),
  },
  Capture: {
      screen: CaptureScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#1daecd',
                height: 50,
        },    
        header: (props) => {},
      }),
  },
  CapturePreview: {
      screen: CapturePreview,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#1daecd',
                height: 50,
        },    
        header: (props) => {},
      }),
  },  
  Profile: {
      screen: ProfileScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#1daecd',
                height: 50,
        },    
        header: (props) => <HeaderBar />,
      }),
  },
  Moments: {
      screen: MomentsScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
                backgroundColor: '#1daecd',
                height: 50,
        },    
        header: (props) => <HeaderBar />,
      }),
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'float',
};

const Joyline = StackNavigator(routerConfig, StackNavigatorConfig );

AppRegistry.registerComponent('Joyline', () => Joyline);
