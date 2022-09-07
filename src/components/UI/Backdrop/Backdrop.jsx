import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import "./Backdrop.css";

const Backdrop = ({ show, clicked }) => {
  return (
    <Auxiliary>
      {show ? <div onClick={clicked} className="Backdrop"></div> : null}
    </Auxiliary>
  );
};

export default Backdrop;
