import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="not-found">
      <h1>Sorry!!! page not found....</h1>
      <Link to="/"> link to home page </Link>
    </div>
  );
};

export default Notfound;
