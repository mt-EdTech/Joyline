import React, { Component } from 'react';

import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  ListView,
  TouchableHighlight
} from 'react-native';

import Footer from './Footer';

export default class MomentsScreen extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.moments),
      child: '',
      moment: '',
      inMoment: false,
    };

    this.renderGridCell = this.renderGridCell.bind(this);
    this.selectMoment = this.selectMoment.bind(this);
  }
  
  renderGridCell(rowData) {
    return (      
        <Image source={rowData.photoUrl} style={styles.imageTile} />        
    );
  }

  selectMoment(momentId) {
    return (      
        console.log(momentId)
    );
  }

  getSize() {
    return {
      width: Dimensions.get('window').width, 
      height: Dimensions.get('window').height
    }
  }

  render() {
    return (      
      <View style={[styles.background, this.getSize()]}>        
        <ListView contentContainerStyle={styles.list}
          pageSize={20}
          dataSource={this.state.dataSource}
          renderRow={this.renderGridCell}
        />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginTop: 65,
  },
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    overflow: 'scroll',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  imageTile: {
	marginBottom: 15,
	height: 90, 
	width: 120,
	justifyContent: 'flex-end',
  },
});

MomentsScreen.defaultProps = {
  moments: [
    {
      id: 1,
      photoUrl: require('../../assets/images/moments/1.jpg'),      
    },
    {
      id: 2,
      photoUrl: require('../../assets/images/moments/2.jpg'),      
    },
    {
      id: 3,
      photoUrl: require('../../assets/images/moments/3.jpg'),      
    },
    {
      id: 4,
      photoUrl: require('../../assets/images/moments/4.jpg'),      
    },
    {
      id: 5,
      photoUrl: require('../../assets/images/moments/5.jpg'),      
    },
    {
      id: 6,
      photoUrl: require('../../assets/images/moments/6.jpg'),      
    },
    {
      id: 7,
      photoUrl: require('../../assets/images/moments/7.jpg'),      
    },
    {
      id: 8,
      photoUrl: require('../../assets/images/moments/8.jpg'),      
    },
    {
      id: 9,
      photoUrl: require('../../assets/images/moments/9.jpg'),      
    },
    {
      id: 10,
      photoUrl: require('../../assets/images/moments/10.jpg'),      
    },
    {
      id: 11,
      photoUrl: require('../../assets/images/moments/11.jpg'),      
    },
    {
      id: 12,
      photoUrl: require('../../assets/images/moments/12.jpg'),      
    },
  ]
};
