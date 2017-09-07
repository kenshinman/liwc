import React, { Component } from "react";
import { Text, Image, StyleSheet, View, Dimensions } from "react-native";
import {
  Container,
  Content,
  H1,
  Form,
  Item,
  Label,
  Input,
  Card,
  Button
} from "native-base";
import ImageBg from "../Components/ImageBg";

const { height } = Dimensions.get("window");

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      phone: ""
    };
  }

  handleSubmit() {
    alert("submitted");
  }

  render() {
    return (
      <Container>
        <ImageBg height={height} behavior="padding">
         
            <Item style={styles.inputWrap} stackedLabel>
              <Label>Full Name</Label>
              <Input
                style={styles.input}
                onChangeText={fullname => this.setState({ fullname })}
                value={this.state.fullname}
                autoFocus={true}
                keyboardType="default"
              />
            </Item>
            <Item style={styles.inputWrap} stackedLabel>
              <Label>Email</Label>
              <Input
                style={styles.input}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                keyboardType="email-address"
              />
            </Item>
            <Item style={styles.inputWrap} stackedLabel last>
              <Label>Phone</Label>
              <Input
                onChangeText={phone => this.setState({ phone })}
                value={this.state.phone}
                keyboardType="phone-pad"
              />
            </Item>

            <Button full success bordered onPress={() => this.handleSubmit()}>
              <Text>Submit</Text>
            </Button>
        </ImageBg>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 10
  },
  inputWrap: {
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid"
  },
  input: {
    borderWidth: 2,
    height: 20,
    borderColor: "#fff",
    borderStyle: "solid"
  }
});

export default Register;
