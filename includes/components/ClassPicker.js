import React, { PropTypes } from 'react';
import { Text, 
         View,
         Picker, 
         StyleSheet 
} from 'react-native';

const ClassPicker = ({classId}) => (
  <View>
    <Picker selectedValue={100}>
      <Picker.Item label="Morning - Room 100" value="100" />
      <Picker.Item label="Afternoon - Room 200" value="200" />
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#006738',
    textAlign: 'left',    
  },
  classHeader: {
    padding: 5,
    height: 30,
    //alignSelf: 'stretch',
  }
});

export default ClassPicker;
