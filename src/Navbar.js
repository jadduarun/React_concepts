import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="title">The Dojo Blog</h1>
      <div className="btns">
        <button className="home--btn btn">Home</button>
        <a href="./create" className="blog--btn btn">New Blog</a>
      </div>
    </div>
  );
};

export default Navbar;
