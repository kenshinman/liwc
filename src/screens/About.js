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
              Worship is a very powerful act. It works wonders and miracles, it calls God onto our presence because he loves to habitat wherever is full of Him praises(Psalm 22:3). God knows how much power can be wielded in simple worship that's why in Psalm 8:2 he makes known to us that we can conquer the foe and every negative and demonic presence around us by singing His praises and giving thanks to Him.
              </Text>
              <Text allowFontScaling={true} style={styles.p}>
              Worship ministers have been solely gifted by God to help lead others in praising His holy name. Just as the priests and trumpeters  led the march that brought down the wall of Jericho (Joshua 6) so do the worship ministers lead the congregation of Christ into victory by ministering to souls -by the guide of the Holy Spirit- with the songs of praises that comes from their mouths and that is being uplifted to the heavens.
              </Text>
              <Text allowFontScaling={true} style={styles.p}>
              To help guide -through God's word- worship leaders and those blessed in the ministry of praise and worship, the LAGOS INTERNATIONAL WORSHIP CONFERENCE was birthed in 2016. With this purpose in mind, a three day conference was set up in September 2016 to equip, prepare and fortify everyone in the praise and worship ministry with the necessary word based skills and knowledge that are needed to function properly in the world and continually impact lives positively by the guide of the Holy Spirit through Jesus Christ.
              </Text>
              <Text allowFontScaling={true} style={styles.p}>
              It's been observed that not many music ministers reach their full God given potential because of some limitations that they are faced with though they are well gifted and versed in God's word. These limitations could come in the form of insufficient meditation and dedication to God in their secret places; confusion over honorarium, guilt over charging for ministrations or a feeling of inadequacy for not charging. Further limitations could come by not knowing how to hear God's voice clearly above all else. It could also come in the form of fear and pressure over financial difficulties, family care, marriage issues as well as the church. Questions like; "Is it wrong to want to make a living off this gift God gas given me?", "How do I continue to minister and still stay in God's presence effectively?", " How do I ensure the fame doesn't get to me and affect my spiritual growth?", "How do I ensure I don't overwork and overexert myself?", " How do I keep writing songs?", "Am I a gospel musician simply because I'm a Christian musician?".
              </Text>
              <Text allowFontScaling={true} style={styles.p}>
              LIWC has been established with the aim of answering these questions and more by the guide of the Holy Spirit and faith based principles. Experienced worship ministers -who have come across these problems and asked themselves these questions before and have come out more than conquerors by Christ Jesus- have been invited from far and near to inform, instruct and guide us on how to forge ahead in our ministry and still ensure God is the author and finisher of our faith and sole focus when as we care for ourselves, homes, families and minister unto souls as we help call back home to God those that have been lost.
              Shalom!
              
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
    paddingVertical: 5,
  }
});

export default About;
