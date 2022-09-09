import React, { Component } from "react";
import logo from "../../assets/logo.jpg";
import "./Logo.css";

const Logo = () => {
  return (
    // <div className="logo">
    //   <img src={logo} alt="logo" />
    // </div>
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-2xl text-primary font-bold">
        SMS
      </a>
    </div>
  );
};

export default Logo;
