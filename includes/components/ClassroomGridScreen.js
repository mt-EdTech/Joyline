import React, { Component } from 'react';

import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  ListView,
  TouchableHighlight
} from 'react-native';

import ImageCircle from './ImageCircle';
import ClassPicker from './ClassPicker';
import CTAButton from './CTAButton';

const imageName = require('../../assets/images/chloe.png');

export default class ClassroomGridScreen extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.learners),
      child: '',
      moment: '',
      inMoment: false,
    };

    this.renderGridCell = this.renderGridCell.bind(this);
    this.selectLearner = this.selectLearner.bind(this);
  }

  getSize() {
    return {
      width: Dimensions.get('window').width, 
      height: Dimensions.get('window').height
    }
  }

  renderGridCell(rowData) {
    const namelabel = rowData.firstName + ' ' + rowData.lastName.substr(0,1);
    return (      
        <ImageCircle          
          source={imageName}
          label={namelabel}
        />      
    );
  }

  selectLearner(learnerId) {
    //navigate('Profile');
    console.log(learnerId);
  }

  render() {
    return (      
      <View style={[styles.background, this.getSize()]}>        
        <ListView contentContainerStyle={styles.list}
          pageSize={20}
          dataSource={this.state.dataSource}
          renderRow={this.renderGridCell}
        />
        <CTAButton />
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
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    resizeMode: 'stretch',
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
    flexWrap: 'wrap'
  },
});

ClassroomGridScreen.defaultProps = {
  learners: [
    {
      id: 1,
      firstName: 'Alyssa',
      lastName: 'Cox',
      photoUrl: '',      
    },
    {
      id: 2,
      firstName: 'Chloe',
      lastName: 'Torres',
      photoUrl: '',      
    },
    {
      id: 3,
      firstName: 'Mia',
      lastName: 'Torres',
      photoUrl: '',      
    },
    {
      id: 4,
      firstName: '4',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 5,
      firstName: '5',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 6,
      firstName: '6',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 7,
      firstName: '7',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 8,
      firstName: '8',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 9,
      firstName: '9',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 10,
      firstName: '10',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 11,
      firstName: '11',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 12,
      firstName: '12',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 13,
      firstName: '13',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 14,
      firstName: '14',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 15,
      firstName: '15',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 16,
      firstName: '16',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 17,
      firstName: '17',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 18,
      firstName: '18',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 19,
      firstName: '19',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 20,
      firstName: '20',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 21,
      firstName: '21',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 22,
      firstName: '22',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 23,
      firstName: '23',
      lastName: 'T',
      photoUrl: '',      
    },
    {
      id: 24,
      firstName: '24',
      lastName: 'T',
      photoUrl: '',      
    },
  ]
};
