import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import CardItem from "./CardItem";

export default class Card extends Component {
  static Item = CardItem;

  render() {
    const { container } = styles;
    return <View style={container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    marginHorizontal: 5,
    marginTop: 10
  }
});
