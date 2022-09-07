import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { currentPage, pageSize, itemsSize, onPageChange } = this.props;

    const totalPage = Math.ceil(itemsSize / pageSize);

    if (totalPage === 1) return;

    const pageRange = _.range(1, totalPage + 1);
    return (
      <div className="btn-group">
        {pageRange.map((page) => (
          <button
            key={page}
            className={currentPage === page ? "btn btn-active" : "btn"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  }
}

export default Pagination;
