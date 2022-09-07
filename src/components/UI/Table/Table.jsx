import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ items, columns, sortColumns, onSort }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* {console.log("sortColumns", sortColumns)} */}
        <TableHeader
          columns={columns}
          sortColumns={sortColumns}
          onSort={onSort}
        />
        <TableBody items={items} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
