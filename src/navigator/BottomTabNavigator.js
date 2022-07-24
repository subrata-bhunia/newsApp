import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import {FONTS, ICONS} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import DrawerNavigation from './DrawerNavigation';
import Profile from '../screens/main/Profile';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  const [visible, setvisible] = useState(true);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: normalize(80),
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: normalize(30),
          borderTopRightRadius: normalize(30),
          paddingVertical: 10,
        },
      }}>
      <Tab.Screen
        name="Home1"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? (
                <Image
                  source={ICONS.active_home}
                  style={{
                    height: normalize(70),
                    width: normalize(70),
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Image
                  source={ICONS.inactive_home}
                  style={{
                    height: normalize(50),
                    width: normalize(50),
                    resizeMode: 'contain',
                  }}
                />
              )}
              <Text
                style={{
                  fontFamily: FONTS.Poppins_Regular,
                  marginTop: focused ? -normalize(10) : 0,
                  //   color: focused ? Colors.primary : Colors.disable,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? (
                <Image
                  source={ICONS.active_profile}
                  style={{
                    height: normalize(65),
                    width: normalize(65),
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Image
                  source={ICONS.inactive_profile}
                  style={{
                    height: normalize(50),
                    width: normalize(50),
                    resizeMode: 'contain',
                  }}
                />
              )}
              <Text
                style={{
                  fontFamily: FONTS.Poppins_Regular,
                  marginTop: focused ? -normalize(10) : 0,
                  //   color: focused ? Colors.primary : Colors.disable,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={({navigation, route}) => {
          React.useEffect(() => {
            const unsubscribe = navigation.addListener('tabPress', e => {
              e.preventDefault();
              setvisible(true);
            });
            return unsubscribe;
          }, [navigation]);
          console.log(route);
          return (
            <DrawerNavigation
              drawerVisible={visible}
              onNavigate={() => setvisible(false)}
            />
          );
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {/* {focused ? setvisible(focused) : console.log('More', focused)} */}
              <Image
                source={ICONS.more}
                style={{
                  height: normalize(50),
                  width: normalize(50),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontFamily: FONTS.Poppins_Regular,
                }}>
                More
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
