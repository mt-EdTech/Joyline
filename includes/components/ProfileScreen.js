import React, { Component } from 'react';

import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

import ImageTile from './ImageTile';
import CTAButton from './CTAButton';

import { Radar } from 'react-native-pathjs-charts'

const momentImage = require('../../assets/images/moment.jpg');
const imageName = require('../../assets/images/chloe.png');

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Joyline',
    headerStyle: {
            backgroundColor: '#CFABF4',
            height: 50,
    },
    headerTintColor: '#FFFFFF',
  };

  getSize() {
    return {
      width: Dimensions.get('window').width, 
      height: Dimensions.get('window').height
    }
  }

  render() {

    let data = [{
      "Art": 5,
      "English": 3,
      "Cognitive": 6,
      "Social": 4,
      "Physical": 2 
    }]

    let options = {
      width: 185,
      height: 185,
      margin: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      r: 70,
      max: 10,
      fill: "#fca222",
      stroke: "#e6e8e9",
      animate: {
        type: 'oneByOne',
        duration: 200
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 11,
        fontWeight: 500,
        color: '#202020'        
      }
    }

    return (
      <Image source={require('../../assets/images/chalkboard.png')} style={[styles.backgroundImage, this.getSize()]}>
        <View style={styles.profileSection}>
            <View style={styles.profilePhotoSection}>
              <Image source={ imageName } style={ styles.profileImage } />
              <Text style={styles.text}>Age: 4</Text>
              <Text style={styles.text}>Grade: Pre-K</Text>              
            </View>
            <View style={styles.profileCategorySection}>
              <Radar data={data} options={options} />
            </View>
        </View>
        <View style={styles.imageGrid}>
            <ImageTile 
                source={momentImage}                
            />
            <ImageTile 
                source={momentImage}                
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
            <ImageTile 
                source={momentImage}
            />
          </View>
          <CTAButton />
      </Image>
    );
  }
}

const styles = StyleSheet.create({  
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    resizeMode: 'stretch',

  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  profilePhotoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    borderRadius: 50,
    marginTop:15,
  },  
  profileCategorySection: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    overflow: 'scroll',
  },
  text: {
    color: '#202020',
    fontFamily: 'Arial',
    fontSize: 11,
    fontWeight: '500',
  },
  roundedBar: {
    width: 100 * 2,
    height: 10,
    backgroundColor: 'red'
  }  
});
