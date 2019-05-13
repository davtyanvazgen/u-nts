import React from "react";
import "../home.css";
import Service from "./service";

import { connect } from "react-redux";

const Services = ({ services }) => {
  return (
    <>
      <div className="container">
        {services.map(elem => (
          <Service key={elem.id} service={elem} />
        ))}
      </div>

      {/* <div className="container2">
        <div className="itemProjects">
          <h1>{props.services[2] ? props.services[2].title : null}</h1>
          {props.services[2] ? props.services[2].content : null}

          <Button onClick={handleClickOpen} variant="outlined" color="primary">
            Edit
          </Button> */}

      {/* <ServiceModal
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            service={props.services[2]}
          /> */}
      {/* </div>

        <div className="itemProjects">
          We want to present you our latest projects, cause we have too much of
          them, so here you can see them with all their adorableness.
        </div>

        <div className="itemProjects">
          We want to present you our latest projects, cause we have too much of
          them, so here you can see them with all their adorableness.
        </div>
      </div> */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    services: state.services.data
  };
};

export default connect(mapStateToProps)(Services);
