import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Table from "../../../components/UI/Table/Table";
import Search from "../../../components/SearchBox/Search";
import Pagination from "../../../components/UI/Pagination/Pagination";
import Button from "../../../components/UI/Button/Button";
import { Link } from "react-router-dom";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.buttonAction = React.createRef();
  }

  columns = [
    {
      key: "select",
      content: (customer) => <input type="checkbox" className="checkbox" />,
    },
    {
      path: "first_name",
      label: "Name",
      content: (customer) => (
        <Link to={`customer/${customer.id}`}>{customer.first_name}</Link>
      ),
    },
    { path: "name", label: "Category" },
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
                  to={`/customer/${customer.id}`}
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

  render() {
    const { currentPage, pageSize, itemsSize, paginateItems } = this.props;

    return (
      <Auxiliary>
        <div className="container">
          <h1>User List</h1>
          <hr />
          <header>
            <div>
              <Search
                searchValue={this.props.searchQuery}
                onChange={this.props.onSearch}
              />
            </div>
            <div>
              <Button label="Import Excel" btn_class="btn-success-ghost" />
              <Button label="Export Excel" btn_class="btn-success-ghost" />
              <Link to="/customer/new" className="btn btn-primary btn-sm">
                Add Customer
              </Link>
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
