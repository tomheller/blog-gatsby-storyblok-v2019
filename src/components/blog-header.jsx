import propTypes from 'prop-types';
import React from 'react';
import * as dateformat from 'dateformat';

const BlogHeader = ({ title, publishDate }) => {
  let formattedDate;
  try {
    formattedDate = dateformat(
      new Date(publishDate),
      'dddd, mmmm dS, yyyy',
    );
  } catch (err) {
    formattedDate = 'Not published yet';
  }
  return (
    <div>
      <h1>{title}</h1>
      <p><small>Published on <time dateTime={publishDate}>{formattedDate}</time></small></p>
    </div>
  );
};

BlogHeader.propTypes = {
  title: propTypes.string.isRequired,
  publishDate: propTypes.string.isRequired,
};

export default BlogHeader;
