import React, { Component } from "react";
import { toast } from "react-toastify";

const Toast = (props) => {
  console.log("props.show", props.show);
  return <div>{props.show && toast("ERROR FOUND")}</div>;
};

export default Toast;
