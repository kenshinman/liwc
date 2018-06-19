import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  H2,
  H3,
  Text
} from "native-base";
import Accordion from "react-native-accordion";

// const renderHeader = time => {
//   return (
//     <CardItem header>
//       <Text style={{ fontWeight: "bold", color: "#333" }}>{time}</Text>
//     </CardItem>
//   );
// };

// const renderContent = period => {
//   //console.log(period);
//   return (
//     <CardItem>
//       <Text>{period.topics}</Text>
//     </CardItem>
//   );
// };

const ScheduleCard = ({ content }) => {
  // const { day, morning, afternoon, evening, date } = content;
  //console.log(morning);
  return (
    <Card>
      <View style={styles.wrapper}>
        <View style={styles.time}>
          <Text style={styles.timeText}>16.00</Text>
        </View>
        <View style={styles.details}>
          <Text>Topic is this</Text>
          <Text note>Topic is this</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: "row",
    minHeight: 60
  },
  time: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  details: {
    flex: 3
  },
  timeText: {
    fontWeight: "600"
  }
};

export default ScheduleCard;
