import React, { Component } from "react";
import { Text, Image, AsyncStorage } from "react-native";
import { Container, Content, Card, CardItem, Body, H2, H3 } from "native-base";
import Accordion from "react-native-accordion";
import ScheduleCard from "../Components/ScheduleCard";
import * as firebase from "firebase";

class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: []
    };

    this.database = firebase.database();
  }

  fetchSchedule() {
    const schedulesRef = this.database.ref("schedule");
    schedulesRef.on("value", snap => {
      var temp_schedule = [];
      snap.forEach(day => {
        temp_schedule.push(day);
      });

      //this.setState({schedule: temp_schedule});

      AsyncStorage.setItem("schedules", JSON.stringify(temp_schedule), err => {
        if (err) {
          console.log(err);
        }else{
          console.log('message');
        }
      });
    });
  }

  componentWillMount() {
    this.fetchSchedule();
  }

  render() {
    //console.log(this.state.schedule[0].day);
    return (
      <Container>
        <Content style={{ paddingHorizontal: 5 }}>
          <ScheduleCard day={`Day 1`} />
          <ScheduleCard day={`Day 2`} />
          <ScheduleCard day={`Day 3`} />
        </Content>
      </Container>
    );
  }
}
const Tab2 = () => {
  return (
    <Container>
      <Content style={{ paddingHorizontal: 5 }}>
        <Text>Topics and Spreakers</Text>
      </Content>
    </Container>
  );
};

export { Tab1, Tab2 };
