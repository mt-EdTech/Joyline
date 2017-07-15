import React, { Component } from 'react';

import {
  Image,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

import Footer from './Footer';
import ChatMessage from './ChatMessage';

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.data),
      userId: '123',
      chatUsers: [],
    };

    this.renderMessage = this.renderMessage.bind(this);
  }

  renderMessage(rowData) {
    return (      
        <ChatMessage          
          data={rowData}
        />
    );
  }

  render() {
    return (
      <View style={styles.container}>

	    </Footer>  
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

ChatScreen.defaultProps = {
  data: [
    {
      id: 1,
      senderId: 123,
      message: 'Hey this is a cool message',
      mediaURI: require('../../assets/images/learnerImages/alyssa.jpg'),
    },
    {
      id: 2,
      senderId: 456,
      message: 'Hey this is a cool message',
      mediaURI: require('../../assets/images/learnerImages/alyssa.jpg'),
    },
    {
      id: 3,
      senderId: 456,
      message: 'Hey this is a cool message',
      mediaURI: require('../../assets/images/learnerImages/alyssa.jpg'),
    },
    {
      id: 4,
      senderId: 123,
      message: 'Hey this is a cool message',
      mediaURI: require('../../assets/images/learnerImages/alyssa.jpg'),
    },
    {
      id: 5,
      senderId: 123,
      message: 'Hey this is a cool message',
      mediaURI: require('../../assets/images/learnerImages/alyssa.jpg'),
    },

  ]
};
