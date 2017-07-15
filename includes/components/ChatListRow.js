import React, { PropTypes } from 'react';
import { Text, 
         View, 
         StyleSheet } from 'react-native';

import ChatListText from './ChatListText';
import ChatProfileImage from './ChatListProfileImage';

const ChatListRow = ({ parentImage, childImage, header, recentMsg }) => (
  <View style={styles.chatrow}>
    <ChatProfileImage
      parentImgSource={parentImage}
      learnerImgSource={childImage}
    />
    <ChatListText
      headerText={header}
      bodyText={recentMsg}
    />    
  </View>
);

const styles = StyleSheet.create({
  chatrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    borderBottomColor: '#CFABF4',
    borderBottomWidth: 1,
  },  
});

export default ChatListRow;
