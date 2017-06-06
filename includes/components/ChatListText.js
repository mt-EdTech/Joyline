import React, { PropTypes } from 'react'; 

import { Text,
		 View,
         StyleSheet
	   } from 'react-native';

const ChatText = ({ headerText, bodyText }) => ( 
  <View style={styles.chatTextView}>
  	<Text style={styles.chatHeader}>
  		{headerText}
	</Text>
	<Text style={styles.chatText}>
		{bodyText}
	</Text>
  </View>
);
 
const styles = StyleSheet.create({
  chatTextView: {
    flexShrink: 4,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  chatHeader: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  chatText: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: 'black',
    textAlign: 'left',
    paddingRight: 5,
  },
});

export default ChatText;
