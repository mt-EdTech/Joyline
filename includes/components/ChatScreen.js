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
    title: 'Chat',
    headerStyle: {
            backgroundColor: 'green',
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
