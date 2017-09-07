import React, { Component } from "react";
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  AsyncStorage,
  RefreshControl,
  ToastAndroid
} from "react-native";
import {
  Container,
  Content,
  Card,
  H1,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Icon,
  Spinner
} from "native-base";
import * as firebase from "firebase";
import { OS } from "../helpers/Helpers";

const firebaseConfig = {
  apiKey: "AIzaSyDZdd1IV_7VQ0yivbe-SeTRNkItcLxtsfY",
  authDomain: "social-app-9bae0.firebaseapp.com",
  databaseURL: "https://social-app-9bae0.firebaseio.com",
  projectId: "social-app-9bae0",
  storageBucket: "social-app-9bae0.appspot.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Ministers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ministers: [],
      loading: true
    };

    /*this.setMinisters = this.setMinisters.bind(this);*/
    this.database = firebase.database();
  }

  _doRefresh() {
    const ministersRef = this.database.ref("speakers");
    let fresh_ministers = [];
    ministersRef.on("value", snap => {
      snap.forEach(minister => {
        fresh_ministers.push(minister);
      });

      AsyncStorage.setItem("ministers", JSON.stringify(fresh_ministers));
    });
    this.setMinisters();

    ToastAndroid.show(
      "Done refreshing",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }
  renderList() {
    return this.state.ministers.map(minister => {
      const { name, designation, img, location, profile } = minister;

      return (
        <ListItem
          style={styles.item}
          avatar
          onPress={() =>
            this.props.navigation.navigate("Minister", {
              minister
            })}
        >
          <Thumbnail size={100} source={{ uri: img }} />
          <Body>
            <Text style={styles.title}>{name}</Text>
            <Text note style={styles.subtitle}>
              {designation}
            </Text>
          </Body>
          <Right style={styles.right}>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      );
    });
  }

  setMinisters() {
    AsyncStorage.getItem("ministers").then(json => {
      if (!json) {
        this._doRefresh();
      } else {
        let ministers = JSON.parse(json);
        this.setState({ ministers: ministers, loading: false });
      }
    });
  }

  componentWillMount() {
    this.setMinisters();
  }

  render() {
    console.log(this.state.ministers);
    return (
      <Container>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => this._doRefresh()}
            />
          }
          style={{ backgroundColor: "#fff" }}
        >
          {this.state.loading ? (
            <Spinner color="blue" />
          ) : (
            <List>
							<Text note style={styles.pullText}>Pull to refresh</Text>
							{this.renderList()}
						</List>
          )}
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    /*height: 100,*/
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  },
  subtitle: {
    fontStyle: "italic"
  },
  right: {
    justifyContent: "center",
    alignItems: "center"
	},
	pullText: {
		textAlign: 'center',
		fontSize: 8,
		color: "rgba(0,0,0,0.4)",
		marginTop: 6
	}
});

export default Ministers;
