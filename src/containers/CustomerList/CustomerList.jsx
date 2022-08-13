import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Table from "../../components/UI/Table/Table";
import Search from "../../components/SearchBox/Search";
import Pagination from "../../components/UI/Pagination/Pagination";
import "./Customer.css";

class CustomerList extends Component {
  state = {};
  render() {
    return (
      <Auxiliary>
        <div className="container">
          <h1>User List</h1>
          <hr />
          <header>
            <Search />
          </header>
          <Table />
          <Pagination />
        </div>
      </Auxiliary>
    );
  }
}

export default CustomerList;
