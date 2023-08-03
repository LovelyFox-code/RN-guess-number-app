import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../ui/PrimaryButton";
import Title from "../typography/Title";
import NumberContainer from "../game/NumberContainer";
import Container from "../ui/Container";
import SubTitle from "../typography/SubTitle";

const generateRandomNumberBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minBoundary = 1;
let maxBoundary = 100;
export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    setGuessRounds((prevGuessRound) => [newRndNum, ...prevGuessRound]);
  };
  return (
    <Container>
      <View style={styles.numberWrapper}>
        <Title>Guess</Title>
        <SubTitle>your phone is in charge</SubTitle>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          Lower
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          Higher
        </PrimaryButton>
      </View>
      <View>
        {/* {guessRounds.map((guessRound) => (
          <SubTitle key={guessRound}>{guessRound}</SubTitle>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => {
            item;
          }}
        ></FlatList>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  numberWrapper: {
    justifyContent: "",
    alignItems: "center",
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: "5%",
  },
});
