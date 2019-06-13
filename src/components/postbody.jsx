import React from 'react';
import * as markdownit from 'markdown-it';

const md = markdownit();
md.use(require('markdown-it-highlightjs'));

export default class Postbody extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { blok } = this.props;
    const { postbody } = blok;
    const htmlContent = md.render(postbody);
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  }
}
