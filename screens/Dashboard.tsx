import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Navigation } from "../model/types";
import { logoutUser } from "../api/auth-api";

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Orders"R"Us</Header>
    <Paragraph>
      Get ready your journey starts here! Easy and quick ordering at your service.  
    </Paragraph>
    <Button mode="contained" buttonColor="#be2596"  onPress={() => logoutUser()}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);