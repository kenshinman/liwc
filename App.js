import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import RootNavigator from './src/config/routes';
import Orientation from 'react-native-orientation-locker';

export default class App extends Component {
  componentWillMount() {
    Orientation.lockToPortrait()
  }
  render() {
    return <RootNavigator/>;
  }
}
