import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator
} from "react-native";
import {
  Container,
  Card,
  CardItem,
  Icon,
  Grid,
  Col,
  Row,
  Body
} from "native-base";
import { fetchDB } from "../actions/dbActions";
import { connect } from "react-redux";

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loading: true
    };
  }
  componentWillMount() {
    if (!this.props.db.isReady) {
      this.props.fetchDB();
    }
  }

  render() {
    if (!this.props.db.isReady) {
      return <ActivityIndicator size="large" color="yellow" />;
    }
    return (
      <Container>
        <View style={{ marginHorizontal: 5, flex: 1 }}>
          <Grid>
            <Row>
              <Col>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate("VideoStream")}>
                  <Card style={styles.cardBtn}>
                    <CardItem>
                      <Body
                        style={{
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
                        <Icon
                          name="logo-youtube"
                          style={{ fontSize: 60, color: "red" }}
                        />
                        <Text>LIVE VIDEO</Text>
                      </Body>
                    </CardItem>
                  </Card>
                </TouchableWithoutFeedback>
              </Col>
            </Row>
            {this.props.db.media.audio.length > 0 && (
              <Row>
                <Col>
                  <TouchableWithoutFeedback
                    onPress={() => this.props.navigation.navigate("Audio")}>
                    <Card style={styles.cardBtn}>
                      <CardItem>
                        <Body
                          style={{
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                          <Icon
                            name="radio"
                            style={{ fontSize: 60, color: "#2980b9" }}
                          />
                          <Text>AUDIO</Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableWithoutFeedback>
                </Col>
              </Row>
            )}
            {this.props.db.media.pictures.length > 0 && (
              <Row>
                <Col>
                  <TouchableWithoutFeedback
                    onPress={() => this.props.navigation.navigate("PhotoGrid")}>
                    <Card style={styles.cardBtn}>
                      <CardItem>
                        <Body
                          style={{
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                          <Icon
                            name="photos"
                            style={{ fontSize: 60, color: "#2ecc71" }}
                          />
                          <Text>IMAGES</Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableWithoutFeedback>
                </Col>
              </Row>
            )}
          </Grid>
        </View>
      </Container>
    );
  }
}

const styles = {
  cardBtn: {
    height: null,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40
  }
};
const mstp = state => ({
  db: state.db
});

export default connect(
  mstp,
  { fetchDB }
)(Media);
