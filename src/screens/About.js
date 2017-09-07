import React, { Component } from "react";
import { Image, Text, StyleSheet } from "react-native";
import { Container, Content, H1, Card, CardItem, Body } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import ImageBg from '../Components/ImageBg';


const About = () => {
  return (
    <Container>
      <Content>
          <ImageBg justBanner title='ABOUT LIWC' height={250} />
        <Card>
          <CardItem>
            <Body>
              <Text allowFontScaling={true} style={styles.p}>
                It is no longer news that we are in the the last days . This
                fact is further corroborated by events and happenings around the
                world. News headlines break intermittently with unprecedented
                events around the world. This events take natural, political,
                social, religious, economic and cultural dimensions and many of
                them without answers.
              </Text>
              <Text style={styles.p}>
                From severe weather conditions, to increased terrorist
                activities. Economic decline and depression to political
                instability. These have changed in no small measure the way we
                live and interact. But as believers, these come as expected,
                having been forewarned in scriptures of perilous times (2Tim
                3:1).
              </Text>
              <Text style={styles.p}>
                The good news, however, is that we stand at the brink of what
                would be known as the greatest revival and harvests of souls
                before the coming of our Lord and saviour Jesus. And worship
                through the ministry of music and the arts will play a key role
                in this revival.
              </Text>
              <Text style={styles.p}>
                It is to this end that LIWC is put together to equip, prepare
                and fortify music ministers, worshippers and believers with
                requisite knowledge and faith-based kingdom principles for
                effectiveness and relevance in the last days.
              </Text>
              <Text style={styles.p}>
                We welcome you to join this army of worshippers as we come to be
                instructed and imparted by the Holy Ghost.
              </Text>
              <Text style={styles.p}>Shalom</Text>
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
    fontFamily: "notoserif",
    textAlign: "justify",
    paddingVertical: 5
  }
});

export default About;
