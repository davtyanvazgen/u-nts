import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../../components/header";
import About from "../../components/about";
import News from "../../components/news";
import Home from "../../components/home";
import fireManager from "../../firebase/firemanager";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";

class Main extends Component {
  componentDidMount() {
    fireManager.getServices("services").then(data => {
      this.props.setServiceToRedux(data);
      console.log("componentDidMount this.props", this.props);
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route
              path="/"
              component={() => <Home services={this.props.services} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.services.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setServiceToRedux: data => dispatch(actionCreators.getServices(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
