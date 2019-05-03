import React from "react";
import "./home.css";

import SCard from "./seconcCard";

const second = () => {
  return (
    <>
      <h1 className="h1">LATEST NEWS</h1>
      <div className="container3">
        <div className="cardItem">
          <SCard />
        </div>

        <div className="cardItem">
          <SCard />
        </div>
      </div>

      <div className="container3">
        <div className="cardItem">
          <SCard />
        </div>

        <div className="cardItem">
          <SCard />
        </div>
      </div>
    </>
  );
};

export default second;
