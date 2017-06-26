import React, { PropTypes } from 'react';
import { Image, 
         TouchableHighlight, 
         StyleSheet,
         Navigator,
         View } from 'react-native';

import {
  StackNavigator,  
} from 'react-navigation';

export default class CTAButton extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.cta}>
        <TouchableHighlight onPress={() => navigate('Capture')}>
          <Image
            style={styles.button}
            source={require('../../assets/images/CTA.png')}
          />
        </TouchableHighlight>
      </View>
    )    
  }
}

const styles = StyleSheet.create({
  button: {
    height: 65,
    width: 65,
  },
  cta: {
    position: 'absolute',
    right: 25,
    bottom: 25,
  }
});

