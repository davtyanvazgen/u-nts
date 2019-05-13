import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ServiceModal from "./serviceModal";

import { connect } from "react-redux";

const Service = ({ service, isSignIn }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${service.url})`,
        backgroundSize: "100% 100%"
      }}
    >
      <h1>{service ? service.title : null}</h1>
      <div className="nest-item">
        <p>{service ? service.content : null}</p>
      </div>
      <Button variant="outlined" color="primary">
        More
      </Button>

      {isSignIn ? (
        <Button onClick={handleClickOpen} variant="outlined" color="primary">
          Edit
        </Button>
      ) : null}
      <ServiceModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        service={service}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isSignIn: state.isSignIn.data
  };
};

export default connect(mapStateToProps)(Service);
