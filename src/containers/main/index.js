import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../../components/header";
import About from "../../components/about";
import News from "../../components/news";
import Home from "../../components/home";

const main = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default main;
