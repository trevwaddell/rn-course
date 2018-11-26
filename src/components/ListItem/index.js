import React, { Component, Fragment } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import Card from "../Card";
import { selectLibrary } from "../../actions";

class ListItem extends Component {
  select = id => {
    this.props.selectLibrary(id);
  };

  renderDescription = (id, description) => {
    const { selectedLibraryId } = this.props;
    if (selectedLibraryId === id)
      return (
        <Card.Item>
          <Text>{description}</Text>
        </Card.Item>
      );
  };

  render() {
    const {
      item: { id, description, title },
      selectedLibraryId
    } = this.props;
    const { titleStyles } = styles;
    return (
      <Fragment>
        <TouchableOpacity onPress={() => this.select(id)}>
          <Card.Item>
            <Text style={titleStyles}> {title} </Text>
          </Card.Item>
        </TouchableOpacity>
        {this.renderDescription(id, description)}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  titleStyles: { fontWeight: "600", padding: 5 }
});

const mapStateToProps = ({ selectedLibraryId }) => ({
  selectedLibraryId
});

export default connect(
  mapStateToProps,
  { selectLibrary }
)(ListItem);
