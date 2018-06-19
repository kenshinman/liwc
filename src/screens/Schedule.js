import React, { Component } from "react";
import { Text, AsyncStorage, RefreshControl, ScrollView } from "react-native";
import { Container, Content, Spinner } from "native-base";
import * as firebase from "firebase";
import ScheduleCard from "../Components/ScheduleCard";
import schedule from "../../schedule.json";

class ScheduleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: schedule[props.day],
      loading: true
    };
  }

  renderItems() {
    return this.state.schedule.schedule.map((item, i) => {
      return <ScheduleCard key={i} item={item} />;
    });
  }

  render() {
    return (
      <Container style={{ marginLeft: 10 }}>
        <ScrollView
          style={{ paddingHorizontal: 5 }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              // onRefresh={this.fetchSchedule()}
            />
          }>
          {this.renderItems()}
        </ScrollView>
      </Container>
    );
  }
}
const Tab1 = () => {
  return <ScheduleView day={0} />;
};
const Tab2 = () => {
  return <ScheduleView day={1} />;
};
const Tab3 = () => {
  return <ScheduleView day={2} />;
};

export { Tab1, Tab2, Tab3 };
