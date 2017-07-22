import React, { Component } from 'react';

import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList
} from 'react-native';

import Footer from './Footer';

const imageName = require('../../assets/images/learnerImages/chloe.png');
const spacer = require('../../assets/images/spacer.png');

const profileData = [
    { id : 1,
      key: 'Art', 
      textColor: 'rgba(128, 70, 129, 0.7)', 
      value: 23
    }, 
    { id : 2,
      key: 'Cognitive', 
      textColor: 'rgba(75, 160, 199, 0.7)', 
      value: 41
    },
    { id : 3,
      key: 'English', 
      textColor: 'rgba(116, 217, 89, 0.7)', 
      value: 65
    }, 
    { id : 4,
      key: 'Physical', 
      textColor: 'rgba(251, 164, 59, 0.7)', 
      value: 90
    },
    { id : 5,
      key: 'Social', 
      textColor: 'rgba(215, 62, 65, 0.7)', 
      value: 51
    }
  ];


export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  
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

  calcCircles() {
    return profileData.map(function(item, i) {
      let count = profileData.length;
      if (count > 0) {        
        let degrees = Math.round(360/count)*i;
        let radians = degrees*Math.PI/180;
        let radius = 50;
        let horizOffset = -1*Math.round(radius*Math.cos(radians) + 0);
        let verticalOffset = -1*Math.round(radius*Math.sin(radians) + 0);
        let size = item.value*1.5;
        let r = size/2;
        let bg = item.textColor;
        
        if( !(verticalOffset) ) {
          verticalOffset = 0;
        }
        console.log("color:"+bg+",count:"+count+",index:"+i+",degrees:"+degrees+",horizOffset:"+horizOffset+",verticalOffset:"+verticalOffset);
        return (
          <Image key={item.id} style={{ position: 'absolute', height: size, width: size, borderRadius: r, backgroundColor: bg, left: horizOffset, bottom: verticalOffset, overflow: 'visible' }} source={spacer} />
        );
      }
    });
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
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <View style={styles.profilePhotoSection}>
            <Image source={ imageName } style={ styles.profileImage } />              
          </View>
          <View style={styles.profileDetailsSection}>
            <Text style={styles.textPurple}>Chloe Torres</Text>
            <Text style={styles.text}>Age: 4</Text>
            <Text style={styles.text}>Class: Quails</Text>            
          </View>
        </View>
        <View style={styles.analyticsSection}>
          <View style={styles.categories}>
            <View style={{flex:0.5}} />
            <View style={{flex:3, paddingLeft: 20}} >
              <FlatList
                data={profileData}
                renderItem={({item, index}) => <Text style={{ fontFamily: 'Arial',
                                                              fontSize: 18,
                                                              fontWeight: '600',
                                                              marginBottom: 20,
                                                              color: item.textColor}}>{item.key}
                                               </Text>}
              />
            </View>
            <View style={{flex:0.5}} />
          </View>
          <View style={styles.categoryCircles}>
            {this.calcCircles()}
          </View>
        </View>
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
    marginTop: 50,
  },
  profileSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor: 'white',
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: '#9a9c9e',
  },
  analyticsSection: {
    flex: 2.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',    
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  profilePhotoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    padding: 20,
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 63,
  },  
  profileDetailsSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    color: '#9a9c9e',
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '200',
    marginBottom: 5,
  },
  textPurple: {
    color: '#CFABF4',
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  categoryText: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  categories: {
    flex: 1,
    alignItems: 'center',
  },
  categoryCircles: {
    position: 'relative',
    flex: 2,
    marginLeft: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
