import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  }
});
