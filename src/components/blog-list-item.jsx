import * as dateformat from 'dateformat';
import React from 'react';
import PropTypes from 'prop-types';
import style from './blog-list-item.module.css';

export default class BlogListItem extends React.Component {
  render() {
    const {
      name,
      slug,
      first_published_at,
      field_excerpt_string,
    } = this.props;
    let publishDate;
    try {
      publishDate = dateformat(
        new Date(first_published_at),
        'dddd, mmmm dS, yyyy',
      );
    } catch (err) {
      publishDate = 'define a date';
    }
    return (
      <div>
        <a href={`/${slug}`}>
          <h2>{name}</h2>
        </a>
        <p className={style.meta}>
          Published on <time>{publishDate}</time>
        </p>
        <p>{field_excerpt_string}</p>
      </div>
    );
  }
}
BlogListItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  first_published_at: PropTypes.string.isRequired,
  field_excerpt_string: PropTypes.string.isRequired,
};
