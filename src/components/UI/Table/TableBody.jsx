import _ from "lodash";
import React, { Component } from "react";

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

    let body = (
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={column.path || column.key}>
                {this.renderCell(item, column)}
                {console.log("column", column.path)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );

    if (items.length === 0) {
      body = <p className="p-10">No items found</p>;
    }

    return body;
  }
}

export default TableBody;
