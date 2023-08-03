import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../common/Colors";
import SubTitle from "../typography/SubTitle";
import Title from "../typography/Title";
import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";

export default function GameOverSreen({
  roundNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <Container>
      <Title>Game is Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/diego-ph-fIq0tET6llw-unsplash.jpg")}
        />
      </View>
      <SubTitle>
        Your phone needed <Text style={styles.highlight}>{roundNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </SubTitle>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </Container>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "",
    alignItems: "center",
    marginBottom: 18,
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: Colors.primary,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: "400",
  },
});
