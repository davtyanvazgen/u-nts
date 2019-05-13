import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";

const styles = {
  root: {
    flexGrow: 1
  },
  links: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "orange"
    }
  },
  menuButton: {
    marginLeft: -12
  },
  signout: {
    float: "right"
  }
};

function Header(props) {
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .catch(err => {
        alert(err);
      });
  };
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" className={classes.links}>
            <Typography variant="h6" color="inherit">
              HOME
            </Typography>
          </Link>

          <Link to="/projects" className={classes.links}>
            <Typography variant="h6" color="inherit">
              PROJECTS
            </Typography>
          </Link>

          <Link to="/about" className={classes.links}>
            <Typography variant="h6" color="inherit">
              ABOUT
            </Typography>
          </Link>

          {props.isSignIn ? (
            <Button
              onClick={signOut}
              color="inherit"
              className={classes.signout}
            >
              Sign Out
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isSignIn: state.isSignIn.data
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Header));
