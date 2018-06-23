import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Grid from "react-native-grid-component";

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderItem = (data, index) => (
    <TouchableOpacity
      onPress={() => {
        id = this.props.db.media.pictures.indexOf(data);
        this.props.navigation.navigate("Photos", { index: id });
      }}
      style={styles.item}
      key={index}>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <Image source={{ uri: data }} style={{ width: null, height: 160 }} />
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Text>Images</Text> */}
        <Grid
          style={styles.list}
          renderItem={this._renderItem}
          renderPlaceholder={this._renderPlaceholder}
          data={this.props.db.media.pictures}
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
