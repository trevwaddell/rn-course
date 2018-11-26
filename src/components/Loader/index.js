import React from "react";
import { View, ActivityIndicator } from "react-native";

export default props => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      padding: 5,
      justifyContent: "center"
    }}
  >
    <ActivityIndicator size="large" color="rgb(249,99,2)" />
  </View>
);
