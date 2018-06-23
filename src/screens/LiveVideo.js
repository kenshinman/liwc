import React, { Component } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { connect } from "react-redux";
import { Container, Content, View } from "native-base";
import YouTube from "react-native-youtube";
import Orientation from "react-native-orientation-locker";
import { fetchDB } from "../actions/dbActions";

class LiveVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loading: true,
      videoId: props.db.liveBroadcast.data.videos.latest,
      audioUrl: ""
    };

    // this.database = firebase.database();
  }

  componentWillMount() {
    if (!this.props.db.isReady) {
      this.props.fetchDB();
    }
  }
  render() {
    if (!this.props.db.isReady) {
      return <ActivityIndicator size="large" color="yellow" />;
    }
    return (
      <Container>
        <View style={{ flex: 1 }}>
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
            onError={e => {
              console.log(e.error);
              this.setState({
                error: e.error
              });
            }}
            style={{
              alignSelf: "stretch",
              height: 300
              // width: null
            }}
            onChangeFullscreen={e => {
              console.log(e);
              if (e.isFullscreen) {
                Orientation.lockToLandscape();
              } else {
                Orientation.lockToPortrait();
              }
            }}
          />
        </View>
      </Container>
    );
  }
}

const mstp = state => ({
  db: state.db
});

export default connect(
  mstp,
  { fetchDB }
)(LiveVideo);
