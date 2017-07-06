import React, { Component } from 'react';

import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

import ImageTile from './ImageTile';
import ClassTitle from './ClassTitle';
import CTAButton from './CTAButton';

const momentImage = require('../../assets/images/moment.jpg');
const imageName = require('../../assets/images/chloe.png');

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
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
        <View style={styles.profileSection}>
            <View style={styles.profilePhotoSection}>
              <Image source={ imageName } style={ styles.profileImage } />
              <Text style={styles.text}>Age: 4</Text>
              <Text style={styles.text}>Grade: Pre-K</Text>              
            </View>
            <View style={styles.profileCategorySection}>
              <Text style={styles.text}>Category1</Text>
              <Text style={styles.text}>Category2</Text>
              <Text style={styles.text}>Category3</Text>
              <Text style={styles.text}>Category4</Text>
              <Text style={styles.text}>Category5</Text>
              <Text style={styles.text}>Category6</Text>
            </View>
        </View>
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
    width: 75,
    height: 75,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 38,
    marginTop:15,
  },  
  profileCategorySection: {
    justifyContent: 'flex-start',
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
    color: 'black'
  },
  roundedBar: {
    width: 100 * 2,
    height: 10,
    backgroundColor: 'red'
  }  
});
