import React from 'react';
import Components from './components';
import BlogHeader from './blog-header';
import Layout from './layout';

const Page = ({ blok, first_published_at }) => {
  return (
    <Layout>
      <BlogHeader title={blok.title} publishDate={first_published_at} />
      { blok.body &&
        blok.body.map(b => React.createElement(Components[b.component], {
          // eslint-disable-next-line no-underscore-dangle
          key: b._uid,
          blok: b,
        }))}

    </Layout>
  );
};

export default Page;
