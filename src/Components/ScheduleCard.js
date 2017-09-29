import React, { Component } from "react";
import { Text, Image } from "react-native";
import { Container, Content, Card, CardItem, Body, H2, H3 } from "native-base";
import Accordion from "react-native-accordion";

const renderHeader = time => {
  return (
    <CardItem header>
      <Text style={{ fontWeight: "bold", color: "#333" }}>{time}</Text>
    </CardItem>
  );
};

const renderContent = period => {
  console.log(period);
  return (
    <CardItem>
      <Text>{period.topics}</Text>
    </CardItem>
  );
};

const ScheduleCard = ({ content }) => {
  const { day, morning, afternoon, evening, date } = content;
  console.log(morning);
  return (
    <Card>
      <CardItem header>
        <Text style={styles.cardHeading}>{`Day ${day}`}</Text>
      </CardItem>
      <Accordion
        header={renderHeader("Morning")}
        content={renderContent(morning)}
        easing="easeInOutBounce"
      />
      <Accordion
        header={renderHeader("Afternoon")}
        content={renderContent(afternoon)}
        easing="easeOutCubic"
      />
      <Accordion
        header={renderHeader("Evening")}
        content={renderContent(evening)}
        easing="easeOutCubic"
      />
      <CardItem footer>
        <Text>{`Date: ${date}`}</Text>
      </CardItem>
    </Card>
  );
};

const styles = {
  cardHeading: {
    fontSize: 16,
    color: "#333"
  }
};

export default ScheduleCard;
