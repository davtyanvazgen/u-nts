import React from "react";
import { Link } from "react-router-dom";

const How = () => {
  return (
    <>
      <button>user</button>

      <Link to="/signin">
        <button>admin</button>
      </Link>
    </>
  );
};

export default How;
