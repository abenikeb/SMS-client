import React, { Component } from "react";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <section className="p-20">
        <h1 className="text-gray-600 text-center" style={{ fontSize: 75 }}>
          404 <br /> Not Found
        </h1>
      </section>
    );
  }
}

export default NotFound;
