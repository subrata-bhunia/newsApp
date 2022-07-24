import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, ICONS} from '../themes/Themes';

const ContactCard = props => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const onPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: props.marginHorizontal,
        margin: props.margin,
        marginVertical: props.marginVertical,
      }}>
      {props.profile_image.uri !== undefined &&
      props.profile_image.uri !== '' ? (
        <Image
          source={props.profile_image}
          style={{
            height: normalize(40),
            width: normalize(40),
            borderRadius: normalize(10),
            marginRight: normalize(10),
            resizeMode: 'contain',
          }}
        />
      ) : (
        <View
          style={{
            height: normalize(40),
            width: normalize(40),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `rgba(${red},${green},${blue},0.3)`,
            borderRadius: normalize(10),
            marginRight: normalize(10),
          }}>
          <Text
            style={{
              fontFamily: FONTS.Poppins_600,
              textTransform: 'uppercase',
              color: COLORS.dark_gradient,
              fontSize: normalize(18),
            }}>
            {props.name.charAt(0)}
          </Text>
        </View>
      )}
      <View>
        <Text
          style={{
            fontFamily: FONTS.Poppins_500,
            color: COLORS.dark_gradient,
            fontSize: normalize(14),
            lineHeight: normalize(16),
          }}>
          {props.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.Poppins_400,
            color: COLORS.dark_gradient,
            fontSize: normalize(12),
          }}>
          {props.mobileNo}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ContactCard.propTypes = {
  height: PropTypes.number,
  width: PropTypes.any,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  marginVertical: PropTypes.number,
  margin: PropTypes.number,
  marginHorizontal: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  onPress: PropTypes.func,
  name: PropTypes.string,
  mobileNo: PropTypes.string,
  profile_image: PropTypes.any,
};

ContactCard.defaultProps = {
  height: normalize(50),
  width: '95%',
  borderRadius: normalize(50),
  fontSize: normalize(14),
  borderWidth: 4,
  marginVertical: 5,
  borderColor: COLORS.dotColor,
  mobileNo: '',
  name: '',
};

export default ContactCard;

const styles = StyleSheet.create({});
