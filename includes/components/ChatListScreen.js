import React, { Component } from 'react';

import {
  Image,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

import ChatText from './ChatListText';
import ChatProfileImage from './ChatListProfileImage';

const imageName = require('../../assets/images/chloe.png');
const imageName2 = require('../../assets/images/mia.png');

export default class ChatListScreen extends Component {
  static navigationOptions = {
    title: 'Chat',
    headerRight: <Button title="New" />
  };
  render() {
    return (
      <View style={styles.chat}>
	      <View style={styles.chatrow}>
	        <ChatProfileImage
	        	parentImgSource={imageName}
	            learnerImgSource={imageName2}
	        />
	        <ChatText
	        	headerText={'Annie(Tommie)'}
	        	bodyText={'Tommie did great withi his numbers today! And this text should be too long and hopefully wrap'}
	        />
	      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 20,    
  },
  chat: {
    flex: 1,
    backgroundColor: 'white',    
  },
  chatrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: 'green',
    padding: 5, 
  },
});
