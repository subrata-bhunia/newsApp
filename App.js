import React from 'react';
import {LogBox} from 'react-native';
import StackNavigatior from './src/navigator/StackNavigator';

export default function App() {
  LogBox.ignoreAllLogs();
  return <StackNavigatior />;
}
