import React from "react";
import "../home.css";

import NewsCard from "./newsCard";

const latest = () => {
  return (
    <>
      <h1 className="h1">LATEST NEWS</h1>
      <div className="container3">
        <div className="cardItem">
          <NewsCard />
        </div>

        <div className="cardItem">
          <NewsCard />
        </div>
      </div>

      <div className="container3">
        <div className="cardItem">
          <NewsCard />
        </div>

        <div className="cardItem">
          <NewsCard />
        </div>
      </div>
    </>
  );
};

export default latest;
