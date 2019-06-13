import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { blok } = this.props;
    const { src, alt, figcaption } = blok;
    return (
      <figure>
        <img src={src} alt={alt} />
        <figcaption>{figcaption}</figcaption>
      </figure>
    );
  }
}

export default Image;
