import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  AsyncStorage
} from "react-native";
import {
  Container,
  Header,
  Body,
  Left,
  Right,
  Content,
  Title,
  Button
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Col, Row, Grid } from "react-native-easy-grid";
import * as firebase from "firebase";
import CountDownTimer from "react_native_countdowntimer";
import HomeButton from "../Components/HomeButton";

const os = Platform.OS == "ios" ? "ios" : "md";

console.disableYellowBox = true;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ministers: [],
      loading: true
    };

    this.database = firebase.database();
  }

  componentWillMount() {
    const liveRef = this.database.ref("liveBroadcast");
    liveRef.on("value", snap => {
      snap.forEach(data => {
        AsyncStorage.setItem("liveData", JSON.stringify(data));
      });
    });
  }

  render() {
    return (
      <Image
        style={styles.imgBg}
        source={require("../../assets/app_bg.jpg")}
        resizeMode="cover"
      >
        <Grid style={styles.mainGrid}>
          <Col>
            <Row style={styles.topRow} size={50}>
              <Text style={styles.welcomeTxt}>
                LAGOS{"\n"}INTERNATIONAL{"\n"}WORSHIP{"\n"}CONFERENCE
              </Text>
              <View style={styles.space} />
              <CountDownTimer
                style={{ marginTop: 20 }}
                date="2017-09-29T00:00:00+00:00"
                days={{ plural: " Days", singular: "Day " }}
                hours=""
                mins=""
                segs=""
                daysStyle={[styles.time, styles.days]}
                hoursStyle={[styles.time, styles.hours]}
                minsStyle={[styles.time, styles.mins]}
                secsStyle={[styles.time, styles.secs]}
                firstColonStyle={styles.colon}
                secondColonStyle={styles.colon}
              />
            </Row>
            <Row style={styles.bottomRow} size={25}>
              <Col style={styles.buttonCol}>
                <Button
                  onPress={() => this.props.navigation.navigate("About")}
                  primary={true}
                  style={[styles.myButton, { backgroundColor: "#e74c3c" }]}
                >
                  <Icon name={`${os}-text`} color="#ffffff" size={50} />
                </Button>
                <Text style={styles.btnText}>ABOUT{"\n"}LIWC 2017</Text>
              </Col>
              <Col style={styles.buttonCol}>
                <Button
                  onPress={() => this.props.navigation.navigate("Schedule")}
                  primary={true}
                  style={[styles.myButton, { backgroundColor: "#f1c40f" }]}
                >
                  <Icon name={`${os}-calendar`} color="#ffffff" size={50} />
                </Button>
                <Text style={styles.btnText}>SCHEDULE</Text>
              </Col>
              <Col style={styles.buttonCol}>
                <Button
                  onPress={() => this.props.navigation.navigate("Ministers")}
                  primary={true}
                  style={[styles.myButton, { backgroundColor: "#8e44ad" }]}
                >
                  <Icon name={`${os}-people`} color="#ffffff" size={50} />
                </Button>
                <Text style={styles.btnText}>MINSITERS</Text>
              </Col>
            </Row>
            <Row style={styles.bottomRow} size={25}>
              <Col style={styles.buttonCol}>
                <Button
                  onPress={() => this.props.navigation.navigate("Location")}
                  primary={true}
                  style={[styles.myButton, { backgroundColor: "#7f8c8d" }]}
                >
                  <Icon name={`${os}-pin`} color="#ffffff" size={50} />
                </Button>
                <Text style={styles.btnText}>LOCATION</Text>
              </Col>
              <Col style={styles.buttonCol}>
                <Button
                  onPress={() => this.props.navigation.navigate("Media")}
                  primary={true}
                  style={[styles.myButton, { backgroundColor: "#d35400" }]}
                >
                  <Icon name={`${os}-videocam`} color="#ffffff" size={50} />
                </Button>
                <Text style={styles.btnText}>LIVE {"/"} MEDIA</Text>
              </Col>
              <Col style={styles.buttonCol}>
                <Button
                  onPress={() => this.props.navigation.navigate("Register")}
                  primary={true}
                  style={[styles.myButton, { backgroundColor: "#2ecc71" }]}
                >
                  <Icon name={`${os}-finger-print`} color="#ffffff" size={50} />
                </Button>
                <Text style={styles.btnText}>REGISTER</Text>
              </Col>
            </Row>
          </Col>
        </Grid>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  welcomeTxt: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2
  },
  space: {
    height: 20
  },
  imgBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width
  },
  mainGrid: {
    flex: 1
  },
  topRow: {
    /*flex: 1,*/
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  bottomRow: {
    /*flex: 1,*/
    justifyContent: "center",
    alignItems: "flex-start"
  },
  buttonCol: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column"
  },
  myButton: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center"
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13
  },
  days: {
    backgroundColor: "rgba(46, 204, 113,0.65)"
  },
  hours: {
    backgroundColor: "rgba(211, 84, 0,0.65)"
  },
  mins: {
    backgroundColor: "rgba(241, 196, 15,0.65)"
  },
  secs: {
    backgroundColor: "rgba(149, 165, 166,1.0))"
  },
  time: {
    padding: 10,
    fontSize: 16,
    color: "white",
    marginHorizontal: 3,
    borderRadius: 5
  },
  colon: {
    fontSize: 16,
    color: "#fff",
    color: "rgba(0,0,0,0.1)"
  }
});
