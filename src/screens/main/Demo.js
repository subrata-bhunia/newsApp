import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  View,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RadialGradient from 'react-native-radial-gradient';
import {COLORS, ICONS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
const {height, width} = Dimensions.get('screen');

export default function Demo() {
  const [darkMode, setDarkmode] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <RadialGradient
        style={{height, width}}
        colors={
          darkMode
            ? [COLORS.black, '#111A35', COLORS.dark_gradient]
            : [COLORS.gradient1, COLORS.gradient2]
        }
        stops={[0.2, 0.75]}
        center={[100, 100]}
        radius={500}>
        <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
          <Text>DEMO</Text>
        </View>
      </RadialGradient>
    </SafeAreaView>
  );
}
