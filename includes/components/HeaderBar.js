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

const headerImg = require('../../assets/images/header-mobile.png');

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.header}>
        <Image source={headerImg} />
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  header: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    top: 0,
    height: 50,
    backgroundColor: '#1daecd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.25,
  },
});
