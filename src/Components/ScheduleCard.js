import React, { Component } from "react";
import { Text, Image } from "react-native";
import { Container, Content, Card, CardItem, Body, H2, H3 } from "native-base";
import Accordion from "react-native-accordion";

const renderHeader = time => {
  return (
    <CardItem header>
      <Text style={{fontWeight: 'bold', color: '#333'}}>{time}</Text>
    </CardItem>
  );
};

const renderContent = content => {
  return (
    <CardItem>
      <Text>
        {content}
      </Text>
    </CardItem>
  );
};

const ScheduleCard = (props) => {
  return (
    <Card>
      <CardItem header>
        <H3>{props.day}</H3>
      </CardItem>
      <Accordion
        header={renderHeader("Morning")}
        content={renderContent("This is morning content")}
        easing="easeInOutBounce"
      />
      <Accordion
        header={renderHeader("Afternoon")}
        content={renderContent("This is afternoon content")}
        easing="easeOutCubic"
      />
      <CardItem footer>
        <Text>footer</Text>
      </CardItem>
    </Card>
  );
};

export default ScheduleCard;
