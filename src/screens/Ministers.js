import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMinisters } from "../actions/ministersActions";
import { CachedImage } from "react-native-cached-image";
import {
  ScrollView,
  Text,
  StyleSheet,
  AsyncStorage,
  RefreshControl
} from "react-native";
import {
  Container,
  H1,
  List,
  ListItem,
  Thumbnail,
  Body,
  Right,
  Icon,
  Spinner
} from "native-base";
// import * as firebase from "firebase";

class Ministers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ministers: props.ministers.ministers,
      loading: true
    };

    /*this.setMinisters = this.setMinisters.bind(this);*/
    // this.database = firebase.database();
  }

  renderList() {
    return this.props.ministers.ministers.map((minister, i) => {
      const { name, designation, img } = minister;

      return (
        <ListItem
          style={styles.item}
          avatar
          onPress={() =>
            this.props.navigation.navigate("Minister", {
              index: i
            })
          }>
          <CachedImage
            style={{ width: 60, height: 60, borderRadius: 30 }}
            size={100}
            source={{ uri: img }}
          />
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

  // setMinisters() {
  //   AsyncStorage.getItem("ministers").then(json => {
  //     if (!json) {
  //       this._doRefresh();
  //     } else {
  //       let ministers = JSON.parse(json);
  //       this.setState({ ministers: ministers, loading: false });
  //     }
  //   });
  // }

  componentWillMount() {
    // this.setMinisters();
    if (this.props.ministers.ministers.length === 0) {
      this.props.fetchMinisters();
    }
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.ministers.fetchingMinisters}
              onRefresh={() => this.props.fetchMinisters()}
            />
          }
          style={{ backgroundColor: "#fff" }}>
          {this.props.ministers.fetchingMinisters ? (
            <Spinner color="yellow" />
          ) : (
            <List>
              <Text note style={styles.pullText}>
                Pull to refresh
              </Text>
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
    fontSize: 18,
    /*fontWeight: "bold",*/
    fontFamily: "Dosis-Bold",
    color: "black"
  },
  subtitle: {
    fontStyle: "italic",
    fontFamily: "Oxygen-Regular"
  },
  right: {
    justifyContent: "center",
    alignItems: "center"
  },
  pullText: {
    textAlign: "center",
    fontSize: 8,
    color: "rgba(0,0,0,0.4)",
    marginTop: 6
  }
});

const maStateToProps = state => ({
  ministers: state.ministers
});

export default connect(
  maStateToProps,
  { fetchMinisters }
)(Ministers);
