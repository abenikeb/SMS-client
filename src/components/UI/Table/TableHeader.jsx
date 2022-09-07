import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TableHeader extends Component {
  //   const { columns, sortColumns, onSort } = this.props
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumns };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.path = path;
    }
    this.props.onSort(sortColumn);
  };

  raiseColumnIcon = (column) => {
    if (column.path !== this.props.sortColumns.path) return null;
    if (this.props.sortColumns.order === "asc")
      return <FontAwesomeIcon icon="fa-solid fa-sort-down" />;
    else return <FontAwesomeIcon icon="fa-solid fa-sort-up" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {/* <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th> */}
          {this.props.columns.map((column) => (
            <th
              onClick={() => this.raiseSort(column.path)}
              key={column.path || column.key}
              style={{ cursor: "pointer" }}
            >
              {column.label}
              {this.raiseColumnIcon(column)}
            </th>
          ))}
          <th></th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
