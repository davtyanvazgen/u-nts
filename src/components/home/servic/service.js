import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import ServiceModal from "./serviceModal";

const Service = props => {
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
      style={{ backgroundImage: `url(${props.service.url})` }}
    >
      <h1>{props.service ? props.service.title : null}</h1>
      <div className="nest-item">
        <p>{props.service ? props.service.content : null}</p>
      </div>
      <Button variant="outlined" color="primary">
        More
      </Button>
      <Button onClick={handleClickOpen} variant="outlined" color="primary">
        Edit
      </Button>
      <ServiceModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        service={props.service}
      />
    </div>
  );
};

export default Service;
