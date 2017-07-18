import React, { Component } from 'react';

import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const registrationBackground = require('../../assets/images/registration_background.png');
const height = Dimensions.get('window').height; 
const width = Dimensions.get('window').width;

export default class RegistrationLoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',      
    };
  }

  render() {

    var circles = [];
    for(let i = 1; i <= this.state.regSteps; i++){
      if( i <= this.state.currentStep) {
          circles.push(
            <View key={i} style={styles.filledDot} />
          )
      } else {
          circles.push(
            <View key={i} style={styles.whiteDot} />
          )
      }
    }

    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={registrationBackground}>
          <Image style={{ width: width*.7, height: 75, alignItems: 'center', overflow: 'visible', marginBottom: 30 }} source={require('../../assets/images/header-mobile-lg.png')} />          
          <View>
            <TextInput
              style={styles.inputText}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            <TextInput
              style={styles.inputText}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
            <View style={styles.rectangularButton}>
	        	<Text style={styles.standardText}>Sign In</Text>
	        </View>
	        <Text style={styles.subText }>Forgot Password?</Text>
            <View style={styles.dividerSection}>
	        	<View style={styles.hr} />
	        	<Text style={styles.standardText}>OR</Text>
	        	<View style={{ borderBottomColor: 'white', borderBottomWidth: 1, width: width*.3, }} />
	        </View>
	        <View style={styles.rectangularButton}>
	        	<Image style={styles.buttonIcon} source={require('../../assets/images/icon_apple.png')} />
	        	<Text style={styles.standardText}>CREATE AN ACCOUNT</Text>
	        </View>
	        <View style={ [styles.rectangularButton, {backgroundColor: 'white'} ] }>
	        	<Image style={styles.buttonIcon} source={require('../../assets/images/logo_google.png')} />
	        	<Text style={ [styles.standardText, {color: '#585858'}] }>SIGN IN WITH GOOGLE</Text>	        	
	        </View>
	        <View style={ [styles.rectangularButton, {backgroundColor: 'rgb(68,87,142)'}] }>
	        	<Image style={styles.buttonIcon} source={require('../../assets/images/icon_facebook_white.png')} />
	        	<Text style={styles.standardText}>SIGN IN WITH FACEBOOK</Text>
	        </View>
          </View>
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
  subText: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: 'white',
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  standardText: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',    
  },
  buttonText: {
  	flex: 1,
    fontFamily: 'Arial',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',    
  },
  inputText: {
    height: 40, 
    width: width*.8,
    borderRadius: 3, 
    backgroundColor: "#FFFFFF", 
    marginBottom: 10,
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#1daecd',
    textAlign: 'center'
  },
  dividerSection: {
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  	alignItems: 'center',
  	marginBottom: 20, 
  	marginTop: 20,
  },
  hr: { 
  	borderBottomColor: 'white', 
  	borderBottomWidth: 1, 
  	width: width*.3, 
  },
  rectangularButton: {
  	flexDirection: 'row',
  	justifyContent: 'center',
  	alignItems: 'center',
  	borderRadius: 5,
  	height: 45, 
    width: width*.8, 
    backgroundColor: "#1daecd", 
    marginBottom: 10,
    padding: 5,
  },
  buttonIcon: {
  	height: 25,
  	width: 25,
  	margin: 10,
  	borderRightWidth: 1,
  	borderColor: 'white',
  },
});