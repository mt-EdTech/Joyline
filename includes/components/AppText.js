import React, { PropTypes } from 'react';
import { Text } from 'react-native';

import * as appStyles from '../styles/JoylineStyles';

const AppText = ({ children, style, ...rest }) => (
  <Text style={[appStyles.TEXT_STYLES.standardtext, style]} {...rest}>
    {children}
  </Text>
);

AppText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

export default AppText;
