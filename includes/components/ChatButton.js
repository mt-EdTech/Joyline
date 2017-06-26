import React, { PropTypes } from 'react'; 
import { Image, 
	     Text,
	     StyleSheet,
       TouchableOpacity,
       View
	   } from 'react-native';

export default class ChatButton extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = { 
        badgeCount: this.props.badgeCount 
      };
    }

    render() {
        return (
            <View style={styles.chatButtonContainer}>
                <TouchableOpacity onPress={() => this.props.navigate('ChatList')} >
                    <Image style={styles.chatImage} source={require('../../assets/images/edio_chat.png')} />
                    {this.state.badgeCount > 0 ? <View style={styles.badge}><Text style={styles.badgeText}>{this.state.badgeCount}</Text></View> : null}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  chatButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  chatImage: {
    borderWidth: 0, 
    height: 30, 
    width: 28,
    justifyContent: 'center',
  },
  badge: {
    position:'absolute',
    top:1,
    right:-3,
    width:12,
    height:12,
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',    
  },
  badgeText: {
    color: '#FFFFFF',
    fontFamily: 'Arial',
    fontSize: 8,
    fontWeight: 'bold',
  }
});
