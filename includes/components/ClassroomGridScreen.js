import React, { Component } from 'react';

import {
  Image,
  View,
  StyleSheet
} from 'react-native';

import ImageTile from './ImageTile';
import ClassTitle from './ClassTitle';

const imageName = require('../../assets/images/chloe.png');

export default class ClassroomGridScreen extends Component {
  static navigationOptions = {
    title: 'Class',
  };
  render() {
    return (
      <Image source={require('../../assets/images/chalkboard.png')} style={styles.backgroundImage}>
        <ClassTitle
          name={'Ms. Elizabeth (9am-12am)'} 
        />
        <View style={styles.imageGrid}>
          <View style={styles.imageGridRow}>
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
        </View>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
