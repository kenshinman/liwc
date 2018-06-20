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
import YouTube from "react-native-youtube";

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
                <TouchableWithoutFeedback onPress={() => null}>
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
              <Col>
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
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={styles.cardBtn}>
                  <CardItem>
                    <Body
                      style={{
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                      <Icon
                        name="photos"
                        style={{ fontSize: 60, color: "#2ecc71" }}
                      />
                      <Text>LIVE VIDEO</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <View />
              </Col>
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

export class LiveVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false, loading: true, videoId: "", audioUrl: "" };

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
      <YouTube
        apiKey="AIzaSyBh034CfQZb-91WjuwHqHJz39pE6KMLXDs"
        videoId={this.state.videoId}
        play={
          true // The YouTube video ID
        }
        fullscreen={
          true // control playback of video with true/false
        }
        loop={
          false // control whether the video should play in fullscreen or inline
        }
        onReady={e =>
          this.setState({
            // control whether the video should loop when ended
            isReady: true
          })
        }
        onChangeState={e =>
          this.setState({
            status: e.state
          })
        }
        onChangeQuality={e =>
          this.setState({
            quality: e.quality
          })
        }
        onError={e =>
          this.setState({
            error: e.error
          })
        }
        style={{ alignSelf: "stretch", height: 300 }}
      />
    );
  }
}

export default Media;
