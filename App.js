import React, { Component } from "react";
import { StatusBar, View, Platform } from "react-native";
import firebase from "firebase";
import RootNavigator from "./src/config/routes";
import Orientation from "react-native-orientation-locker";
import EStyleSheet from "react-native-extended-stylesheet";
import OneSignal from "react-native-onesignal";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/lib/integration/react";

EStyleSheet.build({
  $primaryColor: "#4534fe"
});

const prefix = Platform.OS == "android" ? "liwc://liwc/" : "liwc://";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // var config = {
    //   apiKey: "AIzaSyDZdd1IV_7VQ0yivbe-SeTRNkItcLxtsfY",
    //   authDomain: "social-app-9bae0.firebaseapp.com",
    //   databaseURL: "https://social-app-9bae0.firebaseio.com",
    //   projectId: "social-app-9bae0",
    //   storageBucket: "social-app-9bae0.appspot.com",
    //   messagingSenderId: "622903118906"
    // };
    // firebase.initializeApp(config);
    Orientation.lockToPortrait();
    OneSignal.init("875cab67-b11f-4589-97a9-3929eed99aca");
    // OneSignal.configure();
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="black" />
            <RootNavigator uriPrefix={prefix} />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
