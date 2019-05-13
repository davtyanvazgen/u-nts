import React from "react";
import "./App.css";
import Main from "./components/main";

import firebase from "firebase";
import * as actionCreators from "./store/actions/actions";
import { connect } from "react-redux";

class App extends React.Component {
  state = {
    admin: null
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    const { isLogedIn } = this.props;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ admin: user });
        isLogedIn(this.state.admin);
      } else {
        this.setState({ admin: null });
        isLogedIn(this.state.admin);
      }
    });
  }

  render() {
    return (
      <>
        <Main />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignIn: state.isSignIn.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isLogedIn: data => dispatch(actionCreators.checkUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
