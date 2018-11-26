import React from "react";
import { View } from "react-native";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "../reducers";

import Header from "./Header";
import LibraryList from "./List";

const App = props => (
  <Provider store={createStore(reducers)}>
    <View>
      <Header title="Tech Foo" />
      <LibraryList />
    </View>
  </Provider>
);

export default App;
