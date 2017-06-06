import React, { PropTypes } from 'react'; 
import { Image, 
	     Text,
	     StyleSheet
	   } from 'react-native';

const ImageTile = ({ source, labeltext }) => ( 
  <Image source={source} style={styles.imageTile}>
    <Text style={styles.tileLabel}>
      {labeltext}
    </Text>
  </Image>
); 
 
ImageTile.propTypes = { 
  style: Text.propTypes.style,   
}; 

const styles = StyleSheet.create({
  imageTile: {
	borderWidth: 1, 
	borderColor: 'white', 
	height: 100, 
	width: 125,
	justifyContent: 'flex-end',
  },
  tileLabel: {
    fontFamily: 'Arial',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#202020',
    backgroundColor: '#FFFFFFaa',
    padding: 2,
  },
});

export default ImageTile;
