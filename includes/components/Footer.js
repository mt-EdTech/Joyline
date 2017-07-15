import React, {PropTypes, Component} from 'react';
import {View, 
        Image, 
        StyleSheet,
        TouchableHighlight,
        Navigator,
} from "react-native";

import {
  StackNavigator,  
} from 'react-navigation';

const leftFooterIcon = require('../../assets/images/footer-grid-icon.png');
const centerFooterCTAImage = require('../../assets/images/icon_apple.png')
const rightFooterIcon = require('../../assets/images/footer-profile-icon-inverse.png');

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.footer}>
          <TouchableHighlight style={styles.bottomButtons}>
            <Image style={styles.footerIcon} source={leftFooterIcon} />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.bottomButtons, {padding: 10}]} onPress={() => navigate('Capture')}>
            <View style={styles.CTAButtonView}>
              <Image source={centerFooterCTAImage}
            />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
            <Image style={styles.footerIcon} source={rightFooterIcon} />
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1daecd',
    flexDirection: 'row',
    height:50,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowRadius: 1,
    shadowOpacity: 0.25,
  },
  bottomButtons: {
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
  },
  footerIcon: {
    width: 20,
    height: 20,
  },
  CTAButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    height:75,
    width:75,
    borderRadius: 38,
    bottom: 20,
    backgroundColor: '#1daecd',
    padding: 5,
    shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 1,
      shadowOpacity: 0.5,
      overflow: 'visible',
  },
});
