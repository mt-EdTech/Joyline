import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppText from './AppText';
import * as appStyles from '../styles/JoylineStyles';

const ClassTitle = ({ name, style }) => (
  <View style={[styles.classHeader, style]}>
    <AppText style={styles.title}>
      {name}
    </AppText>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Arial',
    fontSize: 18,
    color: appStyles.HEADER_TEXT_COLOR,
    textAlign: 'left',    
  },
  classHeader: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    padding: 5,
    height: 30,
    alignSelf: 'stretch',
  }
});

AppText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.string,
};

export default ClassTitle;
