import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1> BLOG's</h1>
      <div className="nav-links">
        {/* <a href="./">Home</a>
        <a href="./create"> New Blog</a> */}
        <Link to="/"> Home </Link>
        <Link to="/create"> New Blog </Link>
      </div>
    </nav>
  );
};

export default Navbar;
