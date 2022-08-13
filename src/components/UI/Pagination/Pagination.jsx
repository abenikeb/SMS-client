import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <div class="btn-group">
        <button class="btn">1</button>
        <button class="btn btn-active">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
      </div>
    );
  }
}

export default Pagination;
