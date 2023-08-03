import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./components/screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./components/screens/GameScreen";
import GameOverSreen from "./components/screens/GameOverSreen";

export default function App() {
  const [userNumber, setUserNamber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNamber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverSreen onGameOver={gameOverHandler} />;
  }

  return (
    <LinearGradient
      colors={["#9d135d", "#ff69b4", "#f987c0"]}
      style={styles.container}
    >
      {screen}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
