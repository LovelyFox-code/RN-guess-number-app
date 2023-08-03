import React from "react";
import { Text } from "react-native";
import SubTitle from "../typography/SubTitle";
import Title from "../typography/Title";
import Container from "../ui/Container";

export default function GameOverSreen() {
  return (
    <Container>
      <Title>Game is Over</Title>
      <SubTitle>Your phone guess the number</SubTitle>
    </Container>
  );
}
