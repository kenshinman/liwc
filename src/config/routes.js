import React from "react";
import { ScrollView, Text, Platform, View } from "react-native";
import {
  DrawerNavigator,
  createStackNavigator,
  TabNavigator,
  createTabNavigator
} from "react-navigation";
import Home from "../screens/Home";
import About from "../screens/About";
import { Tab1, Tab2, Tab3 } from "../screens/Schedule";
import Ministers from "../screens/Ministers";
import Minister from "../screens/Minister";
import Location from "../screens/Location";
import Media from "../screens/Media";
import Register from "../screens/Register";
/*import About from '../screens/About';*/

const os = Platform.OS === "ios" ? "ios" : "md";

const ScheduleTabs = createTabNavigator(
  {
    Day1: {
      screen: Tab1,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Day 1"
        };
      }
    },
    Day2: {
      screen: Tab2,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Day 2"
        };
      }
    },
    Day3: {
      screen: Tab3,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Day 3"
        };
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "rgba(0, 0, 0,0.8)"
      }
    }
  }
);

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    About: {
      screen: About,
      path: "about",
      navigationOptions: ({ navigation }) => ({
        headerTitle: "ABOUT LIWC 2017"
      })
    },
    Schedule: {
      screen: ScheduleTabs,
      path: "schedule",
      navigationOptions: ({ navigation }) => ({
        headerTitle: "SCHEDULE"
      })
    },
    Ministers: {
      screen: Ministers,
      path: "ministers",
      navigationOptions: ({ navigation }) => ({
        headerTitle: "MINISTERS"
      })
    },
    Minister: {
      screen: Minister,
      path: "minister/:index",
      navigationOptions: ({ navigation }) => ({
        headerTitle: `Speaker`
      })
    },
    Location: {
      screen: Location,
      path: "location",
      navigationOptions: ({ navigation }) => ({
        headerTitle: "LOCATION"
      })
    },
    Media: {
      screen: Media,
      path: "media",
      navigationOptions: ({ navigation }) => ({
        headerTitle: "MEDIA"
      })
    },
    Register: {
      screen: Register,
      path: "register",
      navigationOptions: ({ navigation }) => ({
        headerTitle: "REGISTER"
      })
    }
  },
  {
    headerMode: "screen"
  }
);

export default RootNavigator;
