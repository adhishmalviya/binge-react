import React from "react";
import _ from "lodash";
import PropTypes from "proptypes";
const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  //  console.log(props.currentPage);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={
              page === props.currentPage ? "page-item active" : "page-item"
            }
            key={page}
          >
            <span
              onClick={() => props.onPageChange(page)}
              className="page-link"
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};
