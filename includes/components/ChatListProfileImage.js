import React, { PropTypes } from 'react'; 
import { View,
         Image,
         StyleSheet
	   } from 'react-native';

const ChatProfileImage = ({ parentImgSource, learnerImgSource }) => ( 
  <View style={styles.chatImageView}>
    <Image source={ parentImgSource } style={ styles.chatProfilePrimaryImg } />    
    <Image source={ learnerImgSource } style={ styles.chatProfileSecondaryImg } />
  </View>
);
 
const styles = StyleSheet.create({  
  chatImageView: {
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',    
  },
  chatProfilePrimaryImg: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  chatProfileSecondaryImg: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: -20,
    marginTop: -20,
  },
});

export default ChatProfileImage;
