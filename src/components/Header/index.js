import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  const { header, title } = styles;
  return (
    <View style={header}>
      <Text style={title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "rgb(249,99,2)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    position: "relative",
    elevation: 2
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  }
});

export default Header;
