import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Table from "../../components/UI/Table/Table";
import Search from "../../components/SearchBox/Search";
import Pagination from "../../components/UI/Pagination/Pagination";
import Button from "../../components/UI/Button/Button";
import { getCustomers } from "../../services/fakeCustomerServices";
import { getCategories } from "../../services/fakeCategoryService";
import "./Customer.css";

class CustomerList extends Component {
  state = {
    customers: [],
    categories: [],
  };

  componentDidMount() {
    const customers = getCustomers();
    const categories = getCategories();
    this.setState({ customers, categories });
  }

  render() {
    const { customers } = this.state;
    return (
      <Auxiliary>
        <div className="container">
          <h1>User List</h1>
          <hr />
          <header>
            <div>
              <Search />
            </div>
            <div>
              <Button label="Import Excel" btn_class="btn-success-ghost" />
              <Button label="Export Excel" btn_class="btn-success-ghost" />
              <Button label="Add Customer" btn_class="btn-primary-wrap" />
            </div>
          </header>
          <Table customers={customers} />
          <Pagination />
        </div>
      </Auxiliary>
    );
  }
}

export default CustomerList;
