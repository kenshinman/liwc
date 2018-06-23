import React, { Component } from "react";
import {
  Text,
  AsyncStorage,
  RefreshControl,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { Container, Content, Spinner } from "native-base";
import * as firebase from "firebase";
import ScheduleCard from "../Components/ScheduleCard";
import schedule from "../../schedule.json";
import { fetchDB } from "../actions/dbActions";

class ScheduleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: schedule[props.day],
      loading: true
    };
  }

  renderItems() {
    if (!this.props.db.isReady) return null;
    console.log(this.props.db.schedule[this.props.day]);
    return this.props.db.schedule[this.props.day].schedule.map((item, i) => {
      return <ScheduleCard key={i} item={item} />;
    });
  }

  render() {
    if (!this.props.db.isReady) {
      return <ActivityIndicator size="large" color="yellow" />;
    }
    return (
      <Container style={{ marginLeft: 10 }}>
        <ScrollView
          style={{ paddingHorizontal: 5 }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => this.props.fetchDB()}
            />
          }>
          {this.renderItems()}
        </ScrollView>
      </Container>
    );
  }
}

const mstp = state => ({
  db: state.db
});

export default connect(
  mstp,
  { fetchDB }
)(ScheduleView);
