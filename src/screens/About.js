import React, { Component } from "react";
import { Image, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Container, Content, H1, Card, CardItem, Body } from "native-base";
import ImageBg from "../Components/ImageBg";
import HTMLView from "react-native-htmlview";
import { connect } from "react-redux";
import { fetchDB } from "../actions/dbActions";
import EStyleSheet from "react-native-extended-stylesheet";

const About = ({ db, fetchDB }) => {
  if (db.fetchingDb) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <Container>
      <Content>
        <ImageBg justBanner title="ABOUT LIWC" height={250} />
        <Card>
          <CardItem>
            <Body>
              <HTMLView value={db.meta.about} stylesheet={styles} />
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = EStyleSheet.create({
  p: {
    fontSize: 16,
    color: "#222",
    fontWeight: "200",
    textAlign: "justify"
  },
  avatar: {
    height: 120,
    width: 120,
    borderColor: "#fff",
    // borderWidth: 3,
    borderRadius: 60
  },
  name: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Dosis-Medium"
  },
  title: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Dosis-Bold"
  },
  location: {
    fontSize: 10,
    color: "#fff",
    marginVertical: 10
  },
  content: {
    marginHorizontal: 5,
    fontFamily: "Oxygen-Regular"
  },
  icon: {
    fontSize: 12,
    color: "#fff"
  },
  p: {
    fontFamily: "Oxygen-Light",
    fontSize: 16,
    textAlign: "justify"
  }
});

const mstp = state => ({
  db: state.db
});

export default connect(
  mstp,
  {}
)(About);
