import React, { Component, Fragment } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";

import Button from "../Button";
import Card from "../Card";
import TextField from "../TextField";
import Loader from "../Loader";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  login = async () => {
    const { email, password } = this.state;

    console.log("LOGIN WAS CALLED");

    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        this.onLoginSuccess();
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => this.onLoginFailure());
      });
  };

  onLoginSuccess = () => {
    this.setState({ loading: false, error: "", email: "", password: "" });
  };

  onLoginFailure = () => {
    this.setState({ error: "Authentication Error", loading: false });
  };

  render() {
    return (
      <Card>
        <Card.Item>
          <TextField
            label="Email"
            placeholder={"user@gmail.com"}
            value={this.state.email}
            onChage={email => this.setState({ email })}
          />
        </Card.Item>
        <Card.Item>
          <TextField
            label="Password"
            placeholder={"password"}
            secureTextEntry={true}
            textContentType="password"
            value={this.state.password}
            onChage={password => this.setState({ password })}
          />
        </Card.Item>
        <Text
          style={{
            color: "tomato",
            fontStyle: "italic",
            fontWeight: "600",
            fontSize: 20,
            alignSelf: "center"
          }}
        >
          {this.state.error}
        </Text>
        <Card.Item>
          {this.state.loading ? (
            <Loader />
          ) : (
            <Button onPress={() => this.login()} title="Login" />
          )}
        </Card.Item>
      </Card>
    );
  }
}

export default LoginForm;
