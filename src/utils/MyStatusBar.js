//import liraries
import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import propTypes from 'prop-types';

// import StatusBarSizeIOS from 'react-native-status-bar-size';
import normalize from '../utils/helpers/normalize';
import {COLORS} from '../themes/Themes';
const MyStatusBar = ({backgroundColor, barStyle, height, ...props}) => (
  <View
    style={[
      {
        height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      },
      {backgroundColor},
    ]}>
    <StatusBar
      translucent={true}
      backgroundColor={backgroundColor}
      {...props}
      barStyle={barStyle}
      hidden={false}
    />
  </View>
);

export default MyStatusBar;
MyStatusBar.propTypes = {
  backgroundColor: propTypes.string,
  barStyle: propTypes.string,
  height: propTypes.number,
};

MyStatusBar.defaultProps = {
  backgroundColor: COLORS.white,
  barStyle: 'dark-content',
  // height: normalize(20),
};
