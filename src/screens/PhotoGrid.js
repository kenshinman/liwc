import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Grid from "react-native-grid-component";
import ImageLoad from "react-native-image-placeholder";

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderItem = (data, index) => {
    const i = this.props.db.media.pictures.indexOf(data);
    return (
      <TouchableOpacity
        onPress={() => {
          const id = this.props.db.media.pictures.indexOf(data);
          this.props.navigation.navigate("Photos", { index: id });
        }}
        style={styles.item}
        key={index}>
        {/* <Text>{JSON.stringify(data)}</Text> */}
        <ImageLoad
          source={{
            uri: `${data}?image=${i}`
          }}
          style={{ width: null, height: 160 }}
          // loadingStyle={{ size: "large", color: "blue" }}
        />
      </TouchableOpacity>
    );
  };

  _renderPlaceholder = i => (
    <View style={styles.item} key={i}>
      {/* <Icon name="photos" style={{ fontSize: 60, color: "#999" }} />
      <Text>Loading...</Text> */}
    </View>
  );
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Grid
          style={styles.list}
          renderItem={this._renderItem}
          renderPlaceholder={this._renderPlaceholder}
          data={this.props.db.media.pictures}
          // renderPlaceholder={this._renderPlaceholder}
          itemsPerRow={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  list: {
    flex: 1
  }
});

const mstp = state => ({
  db: state.db
});

export default connect(
  mstp,
  {}
)(PhotoGrid);
