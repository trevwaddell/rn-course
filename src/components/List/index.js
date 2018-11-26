import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";

import ListItem from "../ListItem";

class LibraryList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.libraries}
          renderItem={({ item }) => {
            return <ListItem {...item} />;
          }}
          keyExtractor={library => `${library.id}`}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ libraries }) => ({ libraries });

export default connect(mapStateToProps)(LibraryList);
