import React, { Component } from 'react';

import {
  Image,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

import ChatListRow from './ChatListRow';

const imageName = require('../../assets/images/learnerImages/chloe.png');
const imageName2 = require('../../assets/images/learnerImages/mia.png');
const header = 'Annie(Tommie)';
const recentMsg = 'Tommie did great withi his numbers today! And this text should be too long and hopefully wrap';

export default class ChatListScreen extends Component {
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
        <ChatListRow parentImage = {imageName}
                     childImage = {imageName2}
                     header = {header}
                     recentMsg = {recentMsg}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    marginTop: 50,    
    backgroundColor: 'white',
  },  
});
