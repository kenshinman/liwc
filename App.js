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
import config from "./config"; // gitignored

EStyleSheet.build({
	$primaryColor: "#4534fe",
});

const prefix = Platform.OS == "android" ? "liwc://liwc/" : "liwc://";

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		Orientation.lockToPortrait();
		OneSignal.init(config.oneSignalKey);
		// OneSignal.configure();
	}
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<View style={{ flex: 1 }}>
						<StatusBar backgroundColor="black" barStyle="light-content" />
						<RootNavigator uriPrefix={prefix} />
					</View>
				</PersistGate>
			</Provider>
		);
	}
}
