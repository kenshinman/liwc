import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  findNodeHandle
} from "react-native";
import {
  Container,
  Content,
  H1,
  Form,
  Item,
  Label,
  Input,
  Card,
  Button,
  Picker
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
      title: "",
      gender: "",
      maritalStatus: "",
      denomination: ""
    };

    this.database = firebase.database();
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
          createdAt: userId,
          gender: this.state.gender,
          title: this.state.title
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
      TextInputState.focusTextInput(findNodeHandle(node));
    } catch (e) {
      alert(e.message);
      console.log("Couldn't focus text input: ", e.message);
    }
  }

  onValueChange(value) {
    this.setState({ title: value });
  }

  render() {
    return (
      <Container>
        <View>
          <DropdownAlert ref={ref => (this.dropdown = ref)} />
        </View>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <Text style={styles.legend}>Registration Form</Text>
          <View style={styles.form}>
            <Item>
              {/* <Label>Title</Label> */}
              <Picker
                iosHeader="Select one"
                selectedValue={
                  this.state.title // mode="dropdown"
                }
                onValueChange={value => this.setState({ title: value })}>
                <Picker.Item label="Select Title" value="" />
                <Picker.Item label="Brother" value="brother" />
                <Picker.Item label="Sister" value="sister" />
              </Picker>
            </Item>
            <Item floatingLabel style={styles.inputWrap}>
              <Label style={styles.label}>Full Name</Label>
              <Input
                ref="fullname"
                style={styles.input}
                onChangeText={fullname => this.setState({ fullname })}
                value={this.state.fullname}
                autoFocus={false}
                keyboardType="default"
                returnKeyType="next"
                returnKeyLabel="Next"
                onSubmitEditing={event => {
                  this.focusTextInput(this.refs.email);
                }}
              />
            </Item>
            <Item floatingLabel style={styles.inputWrap}>
              <Label style={styles.label}>Email</Label>
              <Input
                ref="email"
                style={styles.input}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                keyboardType="email-address"
                textColor="#fff"
                returnKeyType="next"
              />
            </Item>
            <Item
              floatingLabel
              style={[styles.inputWrap, { marginBottom: 20 }]}>
              <Label style={styles.label}>Phone</Label>
              <Input
                style={styles.input}
                onChangeText={phone => this.setState({ phone })}
                value={this.state.phone}
                keyboardType="phone-pad"
                returnKeyType="go"
              />
            </Item>
            <Item>
              {/* <Label>Title</Label> */}
              <Picker
                iosHeader="Select Gender"
                selectedValue={
                  this.state.gender // mode="dropdown"
                }
                onValueChange={value => this.setState({ gender: value })}>
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </Item>

            {/* <Item>
              <Picker
                iosHeader="Select one"
                selectedValue={
                  this.state.title // mode="dropdown"
                }
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="Select Title" value="" />
                <Picker.Item label="Brother" value="brother" />
                <Picker.Item label="Sister" value="sister" />
              </Picker>
            </Item> */}

            <Button
              full
              dark
              bordered
              rounded
              onPress={
                () => this.handleSubmit() // style={{ marginTop: 20 }}
              }>
              <Text style={styles.btnTxt}>Submit</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 10
  },
  inputWrap: {
    marginLeft: 10
  },
  input: {
    height: 60
  }
});

export default Register;
