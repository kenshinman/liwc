import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
  Geolocation,
  Linking,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { Container, Card, CardItem, Body } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from "react-native-vector-icons/Ionicons";
import getDirections from "react-native-google-maps-directions";
// import MapView from "react-native-maps";
import { OS } from "../helpers/Helpers";
import { AppInstalledChecker } from "react-native-check-app-install";

import { mapStyle } from "../helpers/mapStyle";

let { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.001; //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      }
    };
  }

  uberInstalled(uberString) {
    AppInstalledChecker.checkURLScheme("uber") // omit the :// suffix
      .then(isInstalled => {
        // isInstalled is true if the app is installed or false if not
        if (isInstalled) {
          Linking.openURL(uberString);
        } else {
          Alert.alert("Uber Not Installed", "Install now?", [
            {
              text: "Yes",
              onPress: () =>
                Linking.openURL(
                  "https://play.google.com/store/apps/details?id=com.ubercab&hl=en"
                )
            },
            { text: "No", onPress: () => {} }
          ]);
        }
      });
  }

  handleGetDirections = () => {
    const { long, lat } = this.state.currentPosition;
    const data = {
      source: {
        latitude: lat,
        longitude: long
      },
      destination: {
        latitude: 6.4345992,
        longitude: 3.4255899
      },
      params: [
        {
          key: "dirflg",
          value: "d"
        }
      ]
    };

    getDirections(data);
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };
        this.setState({ currentPosition: initialRegion });
      },
      error => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    const destination = {
      dLat: 6.434602,
      dLong: 3.425604
    };
    const nickname = encodeURIComponent("RCCG King's Court");
    const { dLong, dLat } = destination;
    const { longitude, latitude } = this.state.currentPosition;

    const uberString = `uber://?client_id=-IPVJi1yPP29rqlA6f-aER9qxj-jIL9Y&action=setPickup&pickup=my_location&dropoff[latitude]=${dLat}&dropoff[longitude]=${dLong}&dropoff[nickname]=${nickname}&promo=kehindeo152ue`;
    return (
      <Container>
        <View style={styles.container}>
          {/* <MapView
            style={styles.map}
            customMapStyle={mapStyle}
            initialRegion={{
              latitude: 6.434602,
              longitude: 3.425604,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }}
            minZoomLevel={4}
            maxZoomLevel={20}
          >
            <MapView.Marker
              onPress={e => console.log(e)}
              title="RCCG King's Court"
              description="3, Keystone Bank Crescent, Victoria Island, Eti Osa, Lagos, Nigeria"
              image={require("../../assets/marker.png")}
              coordinate={{
                latitude: 6.434602,
                longitude: 3.425604
              }}
            />
          </MapView> */}
        </View>
        <Card style={styles.addressBlock}>
          <CardItem>
            <Body>
              <Text style={[styles.strong, { fontSize: 18 }]}>Address</Text>
              <Text style={styles.strong}>RCCG The King's Court</Text>
              <Text>
                3, Keystone Bank Crescent, Victoria Island, Eti Osa, Lagos,
                Nigeria
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={[styles.footerIcon, styles.left]}>
          <TouchableWithoutFeedback
            onPress={() => {
              //console.log(uberString);
              this.uberInstalled(uberString);
            }}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../../assets/uber.png")}
            />
          </TouchableWithoutFeedback>
        </Card>
        <Card style={[styles.footerIcon, styles.right]}>
          <TouchableWithoutFeedback onPress={this.handleGetDirections}>
            <View style={styles.inner}>
              <Icon
                name={`${OS}-map`}
                color="rgba(41, 128, 185,1.0)"
                style={{ fontSize: 40 }}
              />
              <Text
                style={[
                  styles.strong,
                  { color: "rgba(41, 128, 185,1.0)", fontSize: 8 }
                ]}>
                Use Map
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  addressBlock: {
    zIndex: 2,
    position: "absolute",
    top: 5,
    left: 5,
    right: 5,
    /*height: 100,*/
    backgroundColor: "#fff"
  },
  strong: {
    fontWeight: "500"
  },
  icon: {
    height: 60,
    width: 120
  },
  footerIcon: {
    position: "absolute",
    bottom: 5,
    left: 5,
    zIndex: 5
  },
  left: {
    bottom: 5,
    left: 5
  },
  right: {
    bottom: 5,
    right: 5,
    left: null,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60
  }
});

export default Location;
