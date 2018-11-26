import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default ({ onPress, title }) => {
  const { button, text } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={button}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: "stretch",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    borderColor: "rgb(249, 99,2)"
  },
  text: {
    color: "rgb(249,99,2)",
    fontWeight: "600",
    fontSize: 16,
    paddingVertical: 10
  }
});
