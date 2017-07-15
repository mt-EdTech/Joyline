import React, { Component } from 'react';

import {
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const registrationBackground = require('../../assets/images/registration_background.png');
const height = Dimensions.get('window').height; 
const width = Dimensions.get('window').width;

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: 'parent',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={registrationBackground}>
          <Image style={{ width: width*.7, height: 75, alignItems: 'center', overflow: 'visible' }} source={require('../../assets/images/header-mobile-lg.png')} />          
          <Text style={styles.welcomeText}>
            Are you a parent or teacher?
          </Text>
          <Image source={require('../../assets/images/registration_select_parent.png')} />
          <Text style={styles.standardText}>
            Parent
          </Text>
          <View style={{ marginTop: 30, marginBottom: 30, borderBottomColor: 'white', borderBottomWidth: 1, width: width*.8, }} />
          <Image source={require('../../assets/images/registration_select_teacher.png')} />
          <Text style={styles.standardText}>
            Teacher
          </Text>          
        </Image>
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
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  standardText: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',    
  },
});