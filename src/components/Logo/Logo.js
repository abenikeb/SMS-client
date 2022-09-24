import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Logo.css";

const Logo = () => {
  return (
    // <div className="logo">
    //   <img src={logo} alt="logo" />
    // </div>
    <div className="logo-wrap flex justify-center items-center">
      <Link to="/" className="logo-content">
        AHAZ <span className=" text-gray-700">TEC</span>
      </Link>
      <span className="text-sm text-gray-500"> 1.0.0</span>
    </div>
  );
};

export default Logo;
