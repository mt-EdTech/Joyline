import React, { PropTypes } from 'react'; 
import { Image, 
	     Text,
	     StyleSheet,
       View
	   } from 'react-native';

const ImageCircle = ({ source, label }) => ( 
  <View style={styles.imageArea}>
    <Image source={source} style={styles.imageCircle}></Image>
    <Text style={styles.labelText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  imageArea: {
    height: 93, 
    width: 93,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageCircle: {
  	height: 64, 
  	width: 64,
    borderRadius: 32,
	},
  labelText: {
    fontFamily: 'Helvetica-Light',
    fontSize: 10,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#95989a',
    marginTop: 5,
  },
});

ImageCircle.propTypes = { 
  //TODO
}; 

export default ImageCircle;
