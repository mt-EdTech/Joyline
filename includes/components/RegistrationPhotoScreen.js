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
  CameraRoll,
} from 'react-native';

const registrationBackground = require('../../assets/images/registration_background.png');
const height = Dimensions.get('window').height; 
const width = Dimensions.get('window').width;

export default class RegistrationPhotoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoUri: '',
      currentStep: 4,
      regSteps: 4,
      photos: [],
    };
  }

  cameraRoll = () => {
    CameraRoll.getPhotos({first: 25, groupTypes: 'All',}).then(
      (data) =>{
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        this.setState({
          photos: images
        })
        console.log(photos);
      },
      (error) => {
        console.warn(error);
      }
    );
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
          <Image style={{ width: width*.7, height: 75, alignItems: 'center', overflow: 'visible' }} source={require('../../assets/images/header-mobile-lg.png')} />          
          <Text style={styles.welcomeText}>
            Add your child's photo
          </Text>
          <View>
          	<TouchableOpacity onPress={this.cameraRoll}>
            	<Image style={{ width: 200, height: 200 }} source={require('../../assets/images/registration_add_photo.png')} />
          	</TouchableOpacity>
          </View>          
          <View style={styles.circlesContainer}>
            {circles}
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
  button: {
  	position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: width * .5 - 38,
    bottom: 120,
    width: 75, 
    height: 75, 
    backgroundColor: '#1daecd', 
    borderRadius: 38, 
    borderColor: 'white', 
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    overflow: 'visible',
  },
  circlesContainer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 20,
    height:40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1daecd',
    margin: 5,
  },
  whiteDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    margin: 5,
  }
});