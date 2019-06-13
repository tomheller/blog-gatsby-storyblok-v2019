import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {
  render() {
    const { currentPage, hasPreviousPage, hasNextPage } = this.props;
    const nextPageLink = `/blog/${currentPage + 1}`;
    let prevPageLink = `/blog/${currentPage - 1}`;
    if (currentPage - 1 <= 1) {
      prevPageLink = '/';
    }
    return (
      <div>
        { hasPreviousPage &&
          <a href={prevPageLink}>Previous page</a>
        }
        { hasNextPage &&
          <a href={nextPageLink}>Next page</a>
        }
      </div>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
};
