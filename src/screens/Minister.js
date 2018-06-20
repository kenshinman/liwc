import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Image, ActivityIndicator } from "react-native";
import { Container, Content, Body, Card, CardItem } from "native-base";
import ImageBg from "../Components/ImageBg";
import HTMLView from "react-native-htmlview";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  setCurrentMinister,
  fetchMinisters
} from "../actions/ministersActions";

class Minister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: props.navigation.state.params.index,
      minister: {}
    };
  }

  componentWillMount() {
    if (this.props.ministers.ministers.length == 0) {
      this.props.fetchMinisters();
    } else {
      this.setState({
        minister: this.props.ministers.ministers[this.state.index]
      });
    }
  }
  render() {
    const {
      name,
      designation,
      img,
      location,
      profile
    } = this.props.ministers.ministers[this.state.index];
    console.log(this.props);
    if (this.props.ministers.fetchingMinisters) {
      return <ActivityIndicator size="large" color="yellow" />;
    }
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
  }
}

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
    borderWidth: 3,
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

const mapStateToprops = state => ({
  ministers: state.ministers
});

export default connect(
  mapStateToprops,
  { setCurrentMinister, fetchMinisters }
)(Minister);
