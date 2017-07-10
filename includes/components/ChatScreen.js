import React, { Component } from 'react';

import {
  Image,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

export default class ChatScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Joyline',
    headerTitleStyle: {
            fontSize: 16,
    },
    headerStyle: {
            backgroundColor: '#CFABF4',
            height: 50,
    },
    headerTintColor: '#FFFFFF',
  };

  render() {
    return (
      <View style={styles.container}>
	      
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,    
  },
});
