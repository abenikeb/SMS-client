import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Modal.css";

class Modal extends Component {
  state = {};
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {
    console.log("[Modal] WillUpdate");
  }
  render() {
    let attachedClasses = ["Modal", "Modal-Close"];
    if (this.props.show) {
      attachedClasses = ["Modal", "Modal-Open"];
    }
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.closeModal} />
        <div className={attachedClasses.join(" ")}>
          <div className="modal-header">
            <h1>Customer Info</h1>
            <span onClick={this.props.closeModal}>
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </span>
          </div>
          <div className="modal-body">{this.props.children}</div>
          <div className="modal-footer"></div>
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
