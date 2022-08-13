import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import "./AddCustomer.css";

class AddCustomer extends Component {
  state = {};
  render() {
    return (
      <Auxiliary>
        <section className="container">
          <h1>Add Customer</h1>
          <form>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Category</span>
              </label>
              <select class="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
              </select>
            </div>
          </form>
        </section>
      </Auxiliary>
    );
  }
}

export default AddCustomer;
