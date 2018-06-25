import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Dimensions } from "react-native";
import { Icon, Button } from "native-base";
import Gallery from "react-native-image-gallery";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      index: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (this.props.navigation.getParam("index", {})) {
      this.setState({ index: this.props.navigation.getParam("index", {}) });
    }
  }

  componentWillMount() {
    this.setState({ index: this.props.navigation.state.params.index });
  }

  render() {
    const media = this.props.db.media.pictures.map((url, i) => {
      return {
        source: { uri: `${url}?image=${i + i + 4 + 10}` },
        caption: "this is the caption"
      };
    });
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Gallery
          style={{ flex: 1, backgroundColor: "black" }}
          images={media}
          onPageScroll={e => {
            console.log(e);
            this.setState({ position: e.position });
          }}
          initialPage={this.state.index}
        />
        <View style={styles.titleWrap}>
          <Button
            onPress={() => this.props.navigation.goBack()}
            transparent
            style={styles.closeBtn}>
            <Icon name="close" />
          </Button>
          <Text style={styles.titleText}>
            {this.state.position + 1}/{media.length}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  titleWrap: {
    position: "absolute",
    width: Dimensions.get("window").width,
    top: 10,
    right: 10,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleText: {
    color: "#fff",
    textAlign: "right",
    fontSize: 24,
    fontStyle: "italic"
  },
  closeBtn: {
    flex: 1
  }
};

const mstp = state => ({
  db: state.db
});

export default connect(
  mstp,
  {}
)(PhotoGallery);
