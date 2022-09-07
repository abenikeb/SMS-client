import _ from "lodash";

const paginate = function (items, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
};

export default paginate;
