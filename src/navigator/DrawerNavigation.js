import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import DrawerMenu from '../Components/DrawerMenu';
import PropTypes from 'prop-types';
import {COLORS, FONTS, ICONS} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import {useNavigation, useRoute} from '@react-navigation/native';
export default function DrawerNavigation(props) {
  const drawerMenus = [
    {name: 'Blog', icon: ICONS.blog_icon, page: 'Blog'},
    {name: 'Video', icon: ICONS.video_icon, page: 'Videos'},
    {name: 'Financial Planning', icon: ICONS.fina_icon, page: 'Planning'},
    {
      name: 'Portfolio Strategies',
      icon: ICONS.portfolio_icon,
      page: 'Portfolio',
    },
    {name: 'Insurance', icon: ICONS.insurence_icon, page: 'Insurance'},
    {
      name: 'Medicare Toolkit',
      icon: ICONS.toolkit_icon,
      page: 'MedicareToolkit',
    },
    {name: 'Private Consultation', icon: ICONS.p_policy_icon, page: 'Home1'},
    {name: `About Jae's Corner`, icon: ICONS.about_icon, page: 'About'},
    {name: 'Appointment', icon: ICONS.appointment_icon, page: 'Appointment'},
    {name: 'My Profile', icon: ICONS.my_profile_icon, page: 'Profile'},
    {name: 'Change Password', icon: ICONS.lock_icon, page: 'Home1'},
    {name: 'Privacy Policy', icon: ICONS.p_policy_icon, page: 'Home1'},
    {name: 'The Basics', icon: ICONS.basics_icon, page: 'Basics'},
    {name: 'Log Out', icon: ICONS.log_out, page: 'LOG_OUT'},
  ];
  const navigation = useNavigation();
  const route = useRoute();

  const [lastPage, setLastpage] = useState('Home1');

  const gotoPage = pageName => {
    setLastpage('Test');
    if (pageName === 'LOG_OUT') {
      gotoPage('Sign_in');
    } else {
      if (props.onNavigate) {
        navigation.navigate(`${pageName}`, pageName);
        props.onNavigate();
      }
    }
    console.log('Last Page Name', lastPage);
  };

  //   const [visible, setvisible] = useState(props.drawerVisible);
  const renderItem = ({item}) => {
    return (
      <Pressable
        style={{
          flexDirection: 'row',
          padding: normalize(7),
          alignItems: 'center',
          paddingHorizontal: 20,
          borderBottomWidth: 0.5,
          borderBottomColor: '#ECF0EE',
          backgroundColor:
            item.name == 'Video' ? 'rgba(45, 66, 118, 0.1)' : undefined,
        }}
        onPress={() => gotoPage(item.page)}>
        <Image
          source={item.icon}
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
            marginLeft: 5,
            marginRight: 10,
          }}
        />
        <Text
          style={{
            fontFamily: FONTS.Poppins_Medium,
            color: COLORS.sidebar_text_color,
            fontSize: normalize(14),
          }}>
          {item.name}
        </Text>
      </Pressable>
    );
  };
  return (
    <DrawerMenu
      modalVisible={props.drawerVisible}
      onBackdropPress={props.onBackdropPress}
      onPressCross={() => gotoPage(lastPage)}
      data={drawerMenus}
      renderItem={renderItem}
    />
  );
}
DrawerNavigation.propTypes = {
  drawerVisible: PropTypes.bool,
  onBackdropPress: PropTypes.func,
  onPressCross: PropTypes.func,
  onNavigate: PropTypes.func,
};
DrawerNavigation.defaultProps = {
  drawerVisible: false,
};
