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
import Footer from './Footer';

const imageName = require('../../assets/images/learnerImages/chloe.png');

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
          source={rowData.photoUrl}
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
      <View style={styles.background}>        
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
    marginTop: 50,
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
      photoUrl: require('../../assets/images/learnerImages/alyssa.jpg'),      
    },
    {
      id: 2,
      firstName: 'Amardeep',
      lastName: 'Singh',
      photoUrl: require('../../assets/images/learnerImages/amardeep.jpg'),      
    },
    {
      id: 3,
      firstName: 'Brendan',
      lastName: 'Tsia',
      photoUrl: require('../../assets/images/learnerImages/brendan.png'),      
    },
    {
      id: 4,
      firstName: 'Camden',
      lastName: 'Claverie',
      photoUrl: require('../../assets/images/learnerImages/camden.jpg'),      
    },
    {
      id: 5,
      firstName: 'Chase',
      lastName: 'Wong',
      photoUrl: require('../../assets/images/learnerImages/chase.jpg'),      
    },
    {
      id: 6,
      firstName: 'Chase',
      lastName: 'Fujardo',
      photoUrl: require('../../assets/images/learnerImages/chase2.jpg'),      
    },
    {
      id: 7,
      firstName: 'Chloe',
      lastName: 'Torres',
      photoUrl: require('../../assets/images/learnerImages/chloe.png'),      
    },
    {
      id: 8,
      firstName: 'Chris',
      lastName: 'anikoa',
      photoUrl: require('../../assets/images/learnerImages/chris.jpg'),      
    },
    {
      id: 9,
      firstName: 'Colt',
      lastName: 'Fester',
      photoUrl: require('../../assets/images/learnerImages/colt.jpg'),      
    },
    {
      id: 10,
      firstName: 'Colton',
      lastName: 'Clav',
      photoUrl: require('../../assets/images/learnerImages/colton.jpg'),      
    },
    {
      id: 11,
      firstName: 'Jim',
      lastName: 'Beasley',
      photoUrl: require('../../assets/images/learnerImages/jim.jpg'),      
    },
    {
      id: 12,
      firstName: 'Madison',
      lastName: 'Tieu',
      photoUrl: require('../../assets/images/learnerImages/madison.jpg'),      
    },
    {
      id: 13,
      firstName: 'Mia',
      lastName: 'Torres',
      photoUrl: require('../../assets/images/learnerImages/mia.png'),      
    },
    {
      id: 14,
      firstName: 'Luke',
      lastName: 'Hoshi',
      photoUrl: require('../../assets/images/learnerImages/reesa-luke.jpg'),      
    },
    {
      id: 15,
      firstName: 'Savannah',
      lastName: 'Raby',
      photoUrl: require('../../assets/images/learnerImages/savannah.jpg'),      
    },
    {
      id: 16,
      firstName: 'Stella',
      lastName: 'Chan',
      photoUrl: require('../../assets/images/learnerImages/stella.jpg'),      
    },
    {
      id: 17,
      firstName: 'Westin',
      lastName: 'Touesnard',
      photoUrl: require('../../assets/images/learnerImages/westin.jpg'),      
    },
  ]
};
