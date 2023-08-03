import React from "react";
import { View, StyleSheet } from "react-native";

export default function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    // justifyContent: "center",
    marginTop: "25%",
    alignItems: "center",
  },
});
