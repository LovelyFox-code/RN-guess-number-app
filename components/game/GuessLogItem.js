import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../common/Colors";

export default function GuessLogItem({ guess }) {
  return (
    <View style={styles.listItem}>
      <Text> Your Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primaryLighter,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100",
    elevation: 4,
    shadowColo: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
