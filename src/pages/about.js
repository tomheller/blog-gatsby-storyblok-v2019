import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>

  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;