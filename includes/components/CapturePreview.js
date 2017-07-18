import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Text,
  TextInput,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const categoryIconData = [
  {
    id: 1,
    name: 'Art',
    icon: require('../../assets/images/core-icons-atl.png'),
    color: 'blue',
  },
  {
    id: 2,
    name: 'Cognitive',
    icon: require('../../assets/images/core-icons-cogs.png'),
    color: 'orange',
  },
  {
    id: 3,
    name: 'English',
    icon: require('../../assets/images/core-icons-eld.png'),
    color: 'green',
  },
  {
    id: 4,
    name: 'Physical',
    icon: require('../../assets/images/core-icons-physical.png'),
    color: 'purple',
  },
  {
    id: 5,
    name: 'Social',
    icon: require('../../assets/images/core-icons-social.png'),
    color: 'red',
  },
];

export default class CapturePreview extends React.Component {
  static navigationOptions = {
    title: 'Preview',
  };

  constructor(props) {
    super(props);

    this.state = {
      imageSource: null,
      comment: '',
    }
  }

  showCategories() {
    return categoryIconData.map(function(item, i) {
      let count = categoryIconData.length;
      let categoryHeight = Math.min(height*.8/count,75);
      return (
        <View key={item.name} style={{ justifyContent: 'center', alignItems: 'center', height: categoryHeight, width: categoryHeight, backgroundColor: item.color, borderRadius: 10, marginTop: 5, }}>
          <Image key={item.id} style={styles.categoryIcon} source={item.icon} />
          <Text key={i} style={styles.categoryText}>{item.name}</Text>
        </View>
      );      
    });

  }

  //static propTypes = { 
  //  imageSource: PropTypes.string.isRequired,    
  //}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        {/*
          <Image source={{ isStatic: true,
                         uri: 'data:image/jpeg;base64,' + {this.props.imageSource},}}
               style={styles.preview}></Image>
        */}
        <Image style={styles.preview} source={require('../../assets/images/moments/moment2.jpg')}>
          <View style={styles.categoryIcons}>
            {this.showCategories()}
          </View>
          <View style={styles.commentBar}>
            <TextInput
                  style={styles.inputText}
                  onChangeText={(comment) => this.setState({comment})}
                  value={this.state.comment}
            />
          </View>
        </Image>
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
    height: height,
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  categoryIcons: {
    height: height-35,
    width: width*.9,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  categoryIcon: {
    width: 40,
    height: 40,
  },
  categoryText: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  commentBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: width,
    height: 35,
    paddingLeft:5,
    backgroundColor: '#1daecd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    height: 25, 
    width: width*.85,
    borderRadius: 8,
    backgroundColor: "#FFFFFF", 
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#1daecd',
    textAlign: 'center'
  }
});
