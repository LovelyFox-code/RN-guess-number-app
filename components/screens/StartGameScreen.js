import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  useWindowDimensions,
  Platform,
} from "react-native";
import Colors from "../common/Colors";
import PrimaryButton from "../ui/PrimaryButton";
import Title from "../typography/Title";
import Container from "../ui/Container";
import SubTitle from "../typography/SubTitle";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number should be a number", [
        { text: "okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };
  const { width, height } = useWindowDimensions();
  let content = (
    <View style={styles.inputContainerLandscape}>
      <View style={styles.btn}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          maxLength={2}
          placeholder="0"
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
      </View>
      <View style={styles.btn}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
  if (width < 500) {
    content = (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          maxLength={2}
          placeholder="0"
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    );
  }
  return (
    <Container>
      <Title>Start</Title>
      <SubTitle>Enter your number</SubTitle>
      {content}
    </Container>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  inputContainer: {
    justifyContent: "",
    alignItems: "center",
    margin: 16,
    padding: 8,
    borderColor: Colors.primaryLighter,
    opacity: 0.9,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  inputContainerLandscape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  input: {
    padding: 8,
    borderBottomColor: Colors.primary,
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 42,
    margin: 16,
    textAlign: "center",
    width: 100,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderBottomWidth: Platform.select({ ios: 0, android: 2 }),
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
  },
  btn: {
    flex: 1,
  },
});
