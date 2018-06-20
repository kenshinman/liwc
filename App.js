import React, { Component } from "react";
import { StatusBar, View, Platform } from "react-native";
import RootNavigator from "./src/config/routes";
import Orientation from "react-native-orientation-locker";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $primaryColor: "#4534fe"
});

const prefix = Platform.OS == "android" ? "liwc://liwc/" : "liwc://";

export default class App extends Component {
  componentWillMount() {
    Orientation.lockToPortrait();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="black" />
        <RootNavigator uriPrefix={prefix} key="nav" />
      </View>
    );
  }
}
