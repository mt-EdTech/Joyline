import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const imageName = require('../../assets/images/chloe.png');

export default class CapturePreview extends React.Component {
  static navigationOptions = {
    title: 'Preview',
  };

  constructor(props) {
    super(props);

    this.imageSource: null;
  }

  //static propTypes = { 
  //  imageSource: PropTypes.string.isRequired,    
  //}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          hidden>
        </StatusBar>
        <Image source={{ isStatic: true,
                         uri: 'data:image/jpeg;base64,' + {this.props.imageSource},}}
               style={styles.previewImage}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },  
});
