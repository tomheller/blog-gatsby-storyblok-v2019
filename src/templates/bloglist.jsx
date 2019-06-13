import { graphql } from 'gatsby';
import React, { Component } from 'react';
import BlogListItem from '../components/blog-list-item';
import Layout from '../components/layout';
import Pagination from '../components/pagination';

export default class BlogList extends Component {
  render() {
    const posts = this.props.data.allStoryblokEntry.edges;
    const {
      currentPage,
      hasPreviousPage,
      hasNextPage,
    } = this.props.data.allStoryblokEntry.pageInfo;
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
  }
}

export const blogPostQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allStoryblokEntry(
      sort: { fields: [first_published_at], order: DESC }
      limit: $limit
      skip: $skip
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
