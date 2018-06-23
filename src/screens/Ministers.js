import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDB } from "../actions/dbActions";
// import { Image } from "react-native-cached-image";
import {
  ScrollView,
  Text,
  StyleSheet,
  RefreshControl,
  Image,
  ActivityIndicator
} from "react-native";
import {
  Container,
  List,
  ListItem,
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
      ministers: props.db.ministers,
      loading: true
    };
  }

  renderList() {
    return this.props.db.ministers.map((minister, i) => {
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
          <Image
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

  componentWillMount() {
    if (this.props.db.ministers.length === 0) {
      this.props.fetchDB();
    }
  }

  render() {
    console.log(this.props);
    if (this.props.db.fetchingDb) {
      return <ActivityIndicator />;
    }
    return (
      <Container>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.db.fetchingDb}
              onRefresh={() => this.props.fetchDB()}
            />
          }
          style={{ backgroundColor: "#fff" }}>
          {this.props.db.fetchingDb || !this.props.db.isReady ? (
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
  db: state.db
});

export default connect(
  maStateToProps,
  { fetchDB }
)(Ministers);
