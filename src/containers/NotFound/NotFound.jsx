import React, { Component } from "react";
import { Link } from "react-router-dom";
class NotFound extends Component {
  state = {};
  render() {
    return (
      <section className="p-20 flex flex-col justify-center items-center">
        <h1
          className="text-gray-500 text-center"
          style={{ fontSize: 150, marginBottom: 3 }}
        >
          404
        </h1>
        <h5>
          Not Found
          <Link to="/" className="text-blue-500">
            Go to Home page
          </Link>
        </h5>
      </section>
    );
  }
}

export default NotFound;
