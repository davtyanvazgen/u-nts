import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button color="secondary">Home</Button>
          </Link>
          <Link to="/about">
            <Button color="secondary">ABOUT</Button>
          </Link>
          <Link to="/news">
            <Button color="secondary">NEWS</Button>
          </Link>

          {/* <Button color="inherit">SERVICES</Button>
          <Button color="inherit">PROJECTS</Button>
          <Button color="inherit">RESIST</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
