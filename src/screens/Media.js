import React, { Component } from "react";
import { Text, Image, AsyncStorage } from "react-native";
import { Container, Content, H3 } from "native-base";
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
    AsyncStorage.getItem("liveData").then((json) => {
      const {audioUrl, videos} = JSON.parse(json);
      console.log(audioUrl, videos);
      this.setState({videoId: videos.latest, audioUrl})
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <YouTube
            apiKey="AIzaSyBh034CfQZb-91WjuwHqHJz39pE6KMLXDs"
            videoId={this.state.videoId} // The YouTube video ID
            play={true} // control playback of video with true/false
            fullscreen={true} // control whether the video should play in fullscreen or inline
            loop={false} // control whether the video should loop when ended
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: "stretch", height: 300 }}
          />
        </Content>
      </Container>
    );
  }
}

export default Media;
