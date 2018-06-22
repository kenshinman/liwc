import React, { Component } from "react";
import { Image, Text, StyleSheet } from "react-native";
import { Container, Content, H1, Card, CardItem, Body } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import ImageBg from "../Components/ImageBg";

const About = () => {
  return (
    <Container>
      <Content>
        <ImageBg justBanner title="ABOUT LIWC" height={250} />
        <Card>
          <CardItem>
            <Body>
              <Text allowFontScaling={true} style={styles.p}>
                Everyday news headlines break intermittently with reports of
                unprecedented events around the world. From severe weather
                conditions to increased terrorist activities. Economic decline
                and depression to political instability. These events take on
                natural, political, social, religious, economic and cultural
                dimensions and many of them without human answers or
                understanding.
              </Text>
              <Text allowFontScaling={true} style={styles.p}>
                As believers we are forewarned by the Holy Scriptures of
                perilous times such as these (2 Timothy 3 v 1).
              </Text>
              <Text allowFontScaling={true} style={styles.p}>
                Nonetheless, Isaiah 60:1-2 testifies that as the Earth becomes
                engulfed in gross darkness, simultaneously, the Church will rise
                and shine brighter and brighter. So the good news is that
                notwithstanding how the earth groans under the strain of sin and
                brokenness, we stand on the brink of what could be the greatest
                revival and harvests of souls before the coming of our Lord and
                Saviour, Jesus Christ.
              </Text>
              <Text allowFontScaling={true} style={styles.p}>
                Worship through the ministry of music and the arts will play a
                key role in this revival. It is with this in mind, that the
                Lagos International Worship Conference has been put together –
                to equip, prepare and fortify music ministers, worshippers and
                believers with requisite knowledge and faith-based principles
                for effectiveness and relevance in these last days.
              </Text>
              <Text allowFontScaling={true} style={styles.p}>
                We earnestly urge you to join this army of worshippers as we
                come to be instructed and imparted by the Holy Ghost. Shalom!
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
    fontFamily: "Oxygen-Regular",
    textAlign: "auto",
    paddingVertical: 5
  }
});

export default About;
