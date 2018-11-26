import React, { Component, Fragment } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import Card from "../Card";
import { selectLibrary } from "../../actions";

class ListItem extends Component {
  select = id => {
    this.props.selectLibrary(id);
  };

  renderDescription = () => {
    if (this.props.expanded)
      return (
        <Card.Item>
          <Text>{this.props.description}</Text>
        </Card.Item>
      );
  };

  render() {
    const { id, description, title, selectedLibraryId } = this.props;
    const { titleStyles } = styles;
    return (
      <Fragment>
        <TouchableOpacity onPress={() => this.select(id)}>
          <Card.Item>
            <Text style={titleStyles}> {title} </Text>
          </Card.Item>
        </TouchableOpacity>
        {this.renderDescription()}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  titleStyles: { fontWeight: "600", padding: 5 }
});

const mapStateToProps = ({ selectedLibraryId }, { id }) => {
  return { expanded: selectedLibraryId === id };
};

export default connect(
  mapStateToProps,
  { selectLibrary }
)(ListItem);
