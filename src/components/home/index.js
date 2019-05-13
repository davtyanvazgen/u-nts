import React from "react";

import Services from "./servic/services";
// import Latest from "./latest/latest";
import Feedback from "./feedback/feedback";

const Home = props => {
  // console.log("home,props", props);
  return (
    <>
      <Services />
      {/* <Latest /> */}
      <Feedback />
    </>
  );
};

export default Home;
