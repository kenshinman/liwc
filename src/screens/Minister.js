import React, { Component } from "react";
import { Text, Image, StyleSheet } from "react-native";
import {
  Container,
  Content,
  H1,
  H2,
  Body,
  H3,
  Card,
  CardItem,
  Icon
} from "native-base";
import ImageBg from "../Components/ImageBg";
import HTMLView from "react-native-htmlview";

const Minister = props => {
  const {
    name,
    designation,
    img,
    location,
    profile
  } = props.navigation.state.params.minister;
  return (
    <Container key={name}>
      <Content>
        <ImageBg height={250}>
          <Image style={styles.avatar} source={{ uri: img }} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{designation}</Text>
          <Text style={styles.location}>{location}</Text>
        </ImageBg>
        <Card style={styles.content}>
          <CardItem>
            <Body>
              <HTMLView value={profile} stylesheet={styles} />
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
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
    borderWidth: 3,
    borderRadius: 75
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

export default Minister;
