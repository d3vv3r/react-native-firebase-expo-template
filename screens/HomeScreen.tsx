import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { Navigation } from "../model/types";

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Orders"R"Us Login</Header>

    <Paragraph>
      Ordering made easy!
    </Paragraph>
    <Button mode="contained" textColor="#ffffff" buttonColor="#be2596" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      textColor="#ffffff" 
      mode="contained" 
      buttonColor="#be2596" 
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);