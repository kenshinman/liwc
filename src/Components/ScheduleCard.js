import React, { Component } from "react";
import { Image, View } from "react-native";
import { Card, Text, Icon } from "native-base";
// import Accordion from "react-native-accordion";

const ScheduleCard = ({ item }) => {
  return (
    <Card>
      <View style={styles.wrapper}>
        {item.status === "done" && (
          <View style={styles.doneIcon}>
            <Icon name="checkmark" style={{ color: "#fff", fontSize: 16 }} />
          </View>
        )}
        <View style={styles.time}>
          <Icon name="time" />
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.main}>
            <Text>{item.topic}</Text>
            {/* <Text note>Topic is this</Text> */}
          </View>
          <View style={styles.footer}>
            <View style={styles.footerItem}>
              <Text note style={styles.footerItemText}>
                <Icon name="contact" style={{ fontSize: 20 }} /> {item.speaker}
              </Text>
            </View>
            <View style={[styles.footerItem, { flex: 1 }]}>
              <Text note style={[styles.footerItemText]}>
                Foot
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: "row",
    minHeight: 60,
    paddingVertical: 20,
    paddingRight: 10
  },
  time: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  details: {
    flex: 3,
    flexDirection: "column"
  },
  timeText: {
    fontWeight: "600"
  },
  main: {
    flex: 2
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10
  },
  footerItem: {
    flex: 2,
    marginRight: 10
  },
  footerItemText: {
    fontStyle: "italic"
  },
  doneIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "green",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 5,
    top: 5
  }
};

export default ScheduleCard;
