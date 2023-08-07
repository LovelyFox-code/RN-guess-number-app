import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

export default function Container({ children }) {
  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? "1%" : "25%";
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.container, { marginTop: marginTopDistance }]}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    flex: 1,
    padding: 12,
    // justifyContent: "center",
    marginTop: deviceHeight < 380 ? "1%" : "25%",
    alignItems: "center",
  },
});
