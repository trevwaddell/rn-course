import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default ({
  label,
  value,
  onChage,
  placeholder,
  secureTextEntry = false,
  textContentType = "none"
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      placeholder={placeholder}
      value={value}
      onChangeText={onChage}
      textContentType={textContentType}
      style={{ ...styles.input, width: 100, height: 20 }}
    />
  </View>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  input: {
    color: "#000",
    paddingHorizontal: 5,
    lineHeight: 23,
    fontSize: 18,
    flex: 2
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});
