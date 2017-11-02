import React, { Component } from "react";
import { Image, Text, Dimensions, StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const width = Dimensions.get("window").width;

const ImageBg = props => {
    const imgUrl = props.imgUrl;
  return (
    <Image 
      source={require("../../assets/app_bg.jpg")} 
      style={[styles.banner, {height: props.height}]}>
      {props.children}
      {props.justBanner ? <Text style={styles.bannerTxt}>{props.title}</Text>: null}
    </Image>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: width,
    justifyContent: "center",
    alignItems: "center"
  },
  bannerTxt: {
    color: "#fff",
    fontSize: 26,
    /*fontWeight: "bold"*/
    fontFamily: "Dosis-Medium"
  }
});

export default ImageBg;
