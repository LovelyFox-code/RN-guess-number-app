import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../common/Colors";

export default function NumberContainer({ children }) {
  return (
    <View>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  number: {
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 42,
    margin: 16,
    textAlign: "center",
    width: 100,
  },
});
