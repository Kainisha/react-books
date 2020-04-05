import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './Pager.module.scss';

const Pager = ({ page, perPage, items, changePage }) => {
  const countPages = () => {
    const pagesNumber = Math.ceil(items.length / perPage);
    return [...Array(pagesNumber).keys()];
  };

  const itemClasses = (number) => {
    return cx('pagination-link', { 'is-current': page - 1 === number });
  };

  const handleChange = (event) => {
    event.preventDefault();
    changePage(event.target.innerHTML);
  };

  return (
    <nav className={cx('pagination', style.pagination)} role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {countPages().map((number) => (
          <a
            href="false"
            type="button"
            className={itemClasses(number)}
            key={`page-${number}`}
            onClick={handleChange}
          >
            {number + 1}
          </a>
        ))}
      </ul>
    </nav>
  );
};

Pager.propsTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number,
  items: PropTypes.array,
  changePage: PropTypes.func.isRequired,
};

Pager.defaultProps = {
  page: 1,
  perPage: 1,
  items: [],
};

export default Pager;
