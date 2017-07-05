import React, { Component } from 'react';

import {
  Image,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

import ImageTile from './ImageTile';
import ClassTitle from './ClassTitle';
import CTAButton from './CTAButton';

const imageName = require('../../assets/images/chloe.png');

export default class ClassroomGridScreen extends Component {
  static navigationOptions = {
    title: 'Class',
    headerStyle: {
            backgroundColor: 'green',
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
    return (
      <Image source={require('../../assets/images/chalkboard.png')} style={[styles.backgroundImage, this.getSize()]}>
        <ClassTitle
          name={'Ms. Elizabeth (9am-12am)'} 
        />
        <View style={styles.imageGrid}>
          <ImageTile 
              source={imageName}
              labeltext={'Chloe'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Brendan'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Mia'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Chloe'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Brendan'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Mia'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Chloe'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Brendan'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Mia'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Chloe'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Brendan'} 
          />
          <ImageTile 
              source={imageName}
              labeltext={'Mia'} 
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
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    overflow: 'scroll',
  },  
});
