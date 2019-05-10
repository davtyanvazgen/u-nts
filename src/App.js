import React from "react";
import "./App.css";

import Main from "./components/main";
import SignIn from "./components/signin";

import firebase from "firebase";

class App extends React.Component {
  state = {
    admin: null
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ admin: user });
      } else {
        this.setState({ admin: null });
      }
    });
  }

  render() {
    return <div>{this.state.admin ? <Main /> : <SignIn />}</div>;
  }
}

export default App;
