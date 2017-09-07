import React from "react";
import { ScrollView, Text, Platform, View } from "react-native";
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
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

const ScheduleTabs = TabNavigator({
  Day1: {
    screen: Tab1,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarLabel: "Day 1",
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
  },
},{
  tabBarOptions: {
    style: {
      backgroundColor: 'black',
    },
  }
});

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    About: {
      screen: About,
      title: "About LIWC",
      navigationOptions: ({ navigation }) => ({
        headerTitle: "ABOUT LIWC 2017"
      })
    },
    Schedule: {
      screen: ScheduleTabs,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "SCHEDULE"
      })
    },
    Ministers: {
      screen: Ministers,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "MINISTERS"
      })
    },
    Minister: {
      screen: Minister,
      navigationOptions: ({ navigation }) => ({
        headerTitle: `${navigation.state.params.minister.name}`
      })
    },
    Location: {
      screen: Location,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "LOCATION"
      })
    },
    Media: {
      screen: Media,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "MEDIA"
      })
    },
    Register: {
      screen: Register,
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
