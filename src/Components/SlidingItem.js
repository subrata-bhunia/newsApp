import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {COLORS, FONTS} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';

const SlidingItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        // height: normalize(100),
        width: width,
      }}>
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          backgroundColor: COLORS.white,
          shadowColor: 'rgba(12, 27, 151, 0.25)',
          shadowOpacity: 0.6,
          elevation: 8,
          shadowOffset: {height: 0, width: 1},
          marginVertical: normalize(10),
          padding: normalize(20),
        }}>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Bold,
            textTransform: 'uppercase',
            fontSize: normalize(18),
            color: COLORS.primary,
            lineHeight: normalize(30),
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Medium,
            textTransform: 'uppercase',
            fontSize: normalize(12),
            color: COLORS.black,
          }}>
          {item.sub_title}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.Roboto_Regular,
            fontSize: normalize(12),
            color: COLORS.black,
            marginTop: normalize(10),
          }}>
          {item.post_by}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONTS.Poppins_Bold,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 50,
  },
});
export default SlidingItem;
