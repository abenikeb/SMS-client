import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Table from "../../../components/UI/Table/Table";
import Search from "../../../components/SearchBox/Search";
import Pagination from "../../../components/UI/Pagination/Pagination";
import Button from "../../../components/UI/Button/Button";
import paginate from "../../../components/utils/paginate";
import { Link } from "react-router-dom";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.buttonAction = React.createRef();
  }

  state = {
    searchQuery: "",
  };

  columns = [
    {
      key: "select",
      content: (customer) => <input type="checkbox" className="checkbox" />,
    },
    {
      path: "fullName",
      label: "Name",
      content: (customer) => (
        <Link to={`customer/${customer._id}`}>{customer.fullName}</Link>
      ),
    },
    { path: "category.name", label: "Category" },
    { path: "tel", label: "Tel" },
    { path: "territory", label: "Teritory" },
    { path: "city", label: "City" },
    {
      key: "action",
      content: (customer) => (
        <section className="drop-down-wrap">
          <button className="drop-down-btn">
            Action <FontAwesomeIcon icon="fa-solid fa-caret-down" />
          </button>
          <div className="drop-down-content">
            <ul>
              <li>
                <Link
                  className="btn btn-sm btn-ghost"
                  to={`/customer/${customer._id}`}
                >
                  Edit
                </Link>
              </li>
              <li>
                <button onClick={this.props.openModals}>View</button>
              </li>
            </ul>
          </div>
        </section>
      ),
    },
  ];

  handleSearch = ({ target }) => {
    // console.log("target.value", target.value);
    this.setState({ searchQuery: target.value });
  };

  render() {
    const { customers: allCustomers, currentPage, pageSize } = this.props;
    const { searchQuery } = this.state;
    const itemsSize = this.props.customers.length;

    let filtered = allCustomers;

    if (searchQuery) {
      filtered = allCustomers.filter((m) =>
        m.fullName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    let paginateItems = paginate(filtered, currentPage, pageSize);
    return (
      <Auxiliary>
        <div className="container">
          <h1>User List</h1>
          <hr />
          <header>
            <div>
              <Search
                searchValue={this.state.searchQuery}
                onChange={this.handleSearch}
              />
            </div>
            <div>
              <Button label="Import Excel" btn_class="btn-success-ghost" />
              <Button label="Export Excel" btn_class="btn-success-ghost" />
              <Button label="Add Customer" btn_class="btn-primary-wrap" />
            </div>
          </header>
          <Table
            items={paginateItems}
            columns={this.columns}
            sortColumns={this.props.sortColumns}
            onSort={this.props.onSort}
          />
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            itemsSize={itemsSize}
            onPageChange={this.props.onHandlePageChange}
          />
        </div>
      </Auxiliary>
    );
  }
}

export default List;
