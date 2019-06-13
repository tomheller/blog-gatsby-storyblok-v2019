import { graphql } from 'gatsby';
import React from 'react';
import BlogListItem from '../components/blog-list-item';
import Pagination from '../components/pagination';
import Layout from '../components/layout';

export default ({ data }) => {
  const posts = data.allStoryblokEntry.edges;
  const {
    currentPage,
    hasPreviousPage,
    hasNextPage,
  } = data.allStoryblokEntry.pageInfo;
  return (
    <Layout>
      {posts.map(({ node }) => (
        <BlogListItem key={node.slug} {...node} />
      ))}
      <Pagination
        currentPage={currentPage}
        hasPreviousPage={hasPreviousPage}
        hasNextPage={hasNextPage}
      />
    </Layout>
  );
};

export const blogPostQuery = graphql`
  query {
    allStoryblokEntry(
      limit: 5
      sort: { fields: [first_published_at], order: DESC }
    ) {
      edges {
        node {
          id
          name
          slug
          first_published_at
          field_excerpt_string
        }
      }
      pageInfo {
        currentPage
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;
