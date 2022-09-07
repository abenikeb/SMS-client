import _ from "lodash";
import React, { Component } from "react";
import Button from "../Button/Button";
class TableBody extends Component {
  state = {
    toggleButton: false,
  };

  renderCell = (item, column) => {
    if (column.content) {
      return column.content(item);
    }

    return _.get(item, column.path);
  };

  render() {
    const { items, columns } = this.props;

    return (
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={column.path || column.key}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
