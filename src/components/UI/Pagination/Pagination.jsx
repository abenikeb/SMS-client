import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <div className="btn-group">
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
      </div>
    );
  }
}

export default Pagination;
