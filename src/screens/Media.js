import React, { Component } from "react";
import {
  Text,
  Image,
  AsyncStorage,
  View,
  TouchableWithoutFeedback
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Icon,
  Grid,
  Col,
  Row,
  Body
} from "native-base";
import * as firebase from "firebase";

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loading: true,
      videoId: "",
      audioUrl: ""
    };

    this.database = firebase.database();
  }

  componentWillMount() {
    AsyncStorage.getItem("liveData").then(json => {
      const { audioUrl, videos } = JSON.parse(json);
      console.log(audioUrl, videos);
      this.setState({ videoId: videos.latest, audioUrl });
    });
  }

  render() {
    return (
      <Container>
        <Content style={{ marginHorizontal: 5 }}>
          <Grid>
            <Row>
              <Col>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate("VideoStream")}>
                  <Card style={styles.cardBtn}>
                    <CardItem>
                      <Body
                        style={{
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
                        <Icon
                          name="logo-youtube"
                          style={{ fontSize: 60, color: "red" }}
                        />
                        <Text>LIVE VIDEO</Text>
                      </Body>
                    </CardItem>
                  </Card>
                </TouchableWithoutFeedback>
              </Col>
              {/* <Col>
                <Card style={styles.cardBtn}>
                  <CardItem>
                    <Body
                      style={{
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                      <Icon
                        name="radio"
                        style={{ fontSize: 60, color: "green" }}
                      />
                      <Text>LIVE AUDIO</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col> */}
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = {
  cardBtn: {
    height: null,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40
  }
};

export default Media;
