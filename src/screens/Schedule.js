import React, { Component } from "react";
import {
  Text,
  Image,
  AsyncStorage,
  RefreshControl,
  ScrollView
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  H2,
  H3,
  Spinner
} from "native-base";
import Accordion from "react-native-accordion";
import ScheduleCard from "../Components/ScheduleCard";
import * as firebase from "firebase";

class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      loading: true
    };

    this.database = firebase.database();
  }

  fetchSchedule() {
    AsyncStorage.removeItem("schedule");

    const schedulesRef = this.database.ref("schedule");
    schedulesRef.on("value", snap => {
      var temp_schedule = [];
      snap.forEach(day => {
        temp_schedule.push(day);
      });
      AsyncStorage.setItem("schedule", JSON.stringify(temp_schedule), err => {
        if (err) {
          console.log(err);
        } else {
          AsyncStorage.getItem("schedule").then(json => {
            if (!json) {
              console.log("no data");
            } else {
              var schedule = JSON.parse(json);
              this.setState({ schedule, loading: false });
            }
          });
        }
      });
    });
  }

  componentWillMount() {
    AsyncStorage.getItem("schedule").then(json => {
      if (!json) {
        this.fetchSchedule();
      } else {
        var schedule = JSON.parse(json);
        this.setState({ schedule, loading: false });
      }
    });
  }

  render() {
    const [day1, day2, day3] = this.state.schedule;
    //console.log(day1);
    return (
      <Container>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <ScrollView
            style={{ paddingHorizontal: 5 }}
            refreshControl={
              <RefreshControl 
                refreshing={false}
                onRefresh={this.fetchSchedule()}
              />
              }
          >
            <ScheduleCard content={day1} />
            <ScheduleCard content={day2} />
            <ScheduleCard content={day3} />
          </ScrollView>
        )}
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
