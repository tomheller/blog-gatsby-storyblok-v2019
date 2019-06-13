import React from 'react';
import SbEditable from 'storyblok-react';

const Content = ({ blok }) => (
  <SbEditable content={blok}>
    <div>
      <h2>{blok.component}</h2>
    </div>
  </SbEditable>
);

export default Content;
