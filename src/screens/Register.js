import React, { Component } from "react";
import { Text, Image, StyleSheet, View, Dimensions, findNodeHandle, TextInputState } from "react-native";
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
import * as firebase from "firebase";
import DropdownAlert from "react-native-dropdownalert";

const { height, width } = Dimensions.get("window");

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      phone: "",
    };

    //this.database = firebase.database();
  }

  handleSubmit() {
    const { fullname, email, phone } = this.state;
    if (!fullname || !email || !phone) {
      this.dropdown.alertWithType("warn", "Alert", "Please fill all fields");
    } else {
      var userId = new Date();
      var done = firebase
        .database()
        .ref("register/" + userId.getTime())
        .set({
          username: this.state.fullname,
          email: this.state.email,
          phone: this.state.phone,
          createdAt: userId
        });
      if (done) {
        this.setState({ fullname: "", email: "", phone: "" });
        this.dropdown.alertWithType(
          "success",
          "Congrats",
          "Your registration has been submited"
        );
      }
    }
  }

  focusTextInput(node) {
    try {
      TextInputState.focusTextInput(findNodeHandle(node))
    } catch(e) {
      alert(e.message);
      console.log("Couldn't focus text input: ", e.message)
    }
  }

  render() {
    return (
      <Container>
        <View>
          <DropdownAlert ref={ref => (this.dropdown = ref)} />
        </View>
        <Image
          source={require("../../assets/app_bg.jpg")}
          resizeMode="cover"
          style={styles.bg}
        >
          <Text style={styles.legend}>Registration Form</Text>
          <View style={styles.form}>
            <Item style={styles.inputWrap}>
              <Label style={styles.label}>Full Name</Label>
              <Input
                ref='fullname'
                style={styles.input}
                onChangeText={fullname => this.setState({ fullname })}
                value={this.state.fullname}
                autoFocus={true}
                keyboardType="default"
                returnKeyType="next"
                returnKeyLabel="Next"
                onSubmitEditing={event => {
                  this.focusTextInput(this.refs.email)
                }}
              />
            </Item>
            <Item style={styles.inputWrap}>
              <Label style={styles.label}>Email</Label>
              <Input
                ref='email'
                style={styles.input}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                keyboardType="email-address"
                textColor="#fff"
                returnKeyType="next"
              />
            </Item>
            <Item style={styles.inputWrap} last>
              <Label style={styles.label}>Phone</Label>
              <Input
                style={styles.input}
                onChangeText={phone => this.setState({ phone })}
                value={this.state.phone}
                keyboardType="phone-pad"
                returnKeyType="go"
              />
            </Item>

            <Button
              full
              light
              bordered
              rounded
              onPress={() => this.handleSubmit()}
            >
              <Text style={styles.btnTxt}>Submit</Text>
            </Button>
          </View>
        </Image>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 10
  },
  label: {
    color: "rgba(225,225,225, 0.5)"
  },
  bg: {
    flex: 1,
    justifyContent: "flex-start",
    width
  },
  inputWrap: {
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#fff"
  },
  input: {
    borderStyle: "solid",
    color: "#f3f3f3"
  },
  legend: {
    fontSize: 22,
    color: "#f6f6f6",
    textAlign: "center",
    marginVertical: 10
  },
  btnTxt: {
    color: "#fff"
  },
  btn: {}
});

export default Register;
