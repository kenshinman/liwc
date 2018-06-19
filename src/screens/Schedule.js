import React, { Component } from "react";
import { Text, AsyncStorage, RefreshControl, ScrollView } from "react-native";
import { Container, Content, Spinner } from "native-base";
import * as firebase from "firebase";
import ScheduleCard from "../Components/ScheduleCard";

class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      loading: true
    };

    this.database = firebase.database();
  }

  // fetchSchedule() {
  //   AsyncStorage.removeItem("schedule");

  //   const schedulesRef = this.database.ref("schedule");
  //   schedulesRef.on("value", snap => {
  //     var temp_schedule = [];
  //     snap.forEach(day => {
  //       temp_schedule.push(day);
  //     });
  //     AsyncStorage.setItem("schedule", JSON.stringify(temp_schedule), err => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         AsyncStorage.getItem("schedule").then(json => {
  //           if (!json) {
  //             console.log("no data");
  //           } else {
  //             var schedule = JSON.parse(json);
  //             this.setState({ schedule, loading: false });
  //           }
  //         });
  //       }
  //     });
  //   });
  // }

  componentWillMount() {
    // AsyncStorage.getItem("schedule").then(json => {
    //   if (!json) {
    //     this.fetchSchedule();
    //   } else {
    //     var schedule = JSON.parse(json);
    //     this.setState({ schedule, loading: false });
    //   }
    // });
  }

  render() {
    // const [day1, day2, day3] = this.state.schedule;
    //console.log(day1);
    return (
      <Container style={{ marginLeft: 10 }}>
        {/* {this.state.loading ? (
          <Spinner />
        ) : ( */}
        <ScrollView
          style={{ paddingHorizontal: 5 }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              // onRefresh={this.fetchSchedule()}
            />
          }>
          <ScheduleCard />
        </ScrollView>
        {/* )} */}
      </Container>
    );
  }
}
const Tab2 = () => {
  return (
    <Container>
      <Content style={{ paddingHorizontal: 5 }}>
        <Text>Day 2</Text>
      </Content>
    </Container>
  );
};
const Tab3 = () => {
  return (
    <Container>
      <Content style={{ paddingHorizontal: 5 }}>
        <Text>Day 3</Text>
      </Content>
    </Container>
  );
};

export { Tab1, Tab2, Tab3 };
