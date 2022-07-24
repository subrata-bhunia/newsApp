import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/auth/Splash';
import {navigationRef} from '../utils/helpers/RootNavigation';
import Home from '../screens/main/Home';
const Stack = createStackNavigator();

export default function StackNavigatior() {
  const AuthScreens = {
    Splash: Splash,
    Home: Home,
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {Object.entries({
          ...AuthScreens,
        }).map(([name, component]) => {
          return <Stack.Screen key={name} name={name} component={component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
