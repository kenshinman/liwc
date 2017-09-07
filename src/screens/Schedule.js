import React, { Component } from "react";
import { Text, Image } from "react-native";
import { Container, Content, Card, CardItem, Body } from "native-base";

const Tab1 = () => {
  return (
    <Container>
      <Content style={{paddingHorizontal: 5}}>
        <Card>
          <CardItem header>
            <Text>Morning Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Nathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Afternoon Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Chingtok IsaakuNathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Morning Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Nathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Afternoon Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Chingtok IsaakuNathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
const Tab2 = () => {
  return (
    <Container>
      <Content style={{paddingHorizontal: 5}}>
        <Card>
          <CardItem header>
            <Text>Morning Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Nathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Afternoon Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Chingtok IsaakuNathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Morning Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Nathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Afternoon Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Chingtok IsaakuNathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
const Tab3 = () => {
  return (
    <Container>
      <Content style={{paddingHorizontal: 5}}>
        <Card>
          <CardItem header>
            <Text>Morning Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Nathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Afternoon Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Chingtok IsaakuNathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Morning Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Nathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Afternoon Session</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Topic: Honouring the Fathers</Text>
              <Text>Speakers: Chingtok IsaakuNathaniel Bassey & Olumide Iyun</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text note>Time: 9:00am - 11:00am</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};


const Schedule = () => {
  return (
    <Container>
      <Tabs initialPage={0}>
        <Tab heading="Tab1">
          <Tab1 />
        </Tab>
        <Tab heading="Tab2">
          <Tab2 />
        </Tab>
        <Tab heading="Tab3">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
};

export { Tab1, Tab2, Tab3 };
