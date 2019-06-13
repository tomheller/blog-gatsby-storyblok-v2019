const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.jsx');

    resolve(
      graphql(
        `
          {
            stories: allStoryblokEntry {
              edges {
                node {
                  id
                  name
                  created_at
                  first_published_at
                  uuid
                  slug
                  field_component
                  full_slug
                  content
                  is_startpage
                  parent_id
                  group_id
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const entries = result.data.stories.edges;
        const contents = entries.filter((entry) => {
          return entry.node.field_component !== 'global_navi';
        });

        // Create content pages.
        contents.forEach((entry) => {
          const pagePath = entry.node.full_slug === 'home' ? '' : `${entry.node.full_slug}/`;

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              story: entry.node,
            },
          });
        });

        // Create blog post pagination
        const postsPerPage = 6;
        const numberOfPages = Math.ceil(contents.length / postsPerPage);
        Array.from({ length: numberOfPages }).forEach((_, index) => {
          createPage({
            path: `/blog/${index + 1}`,
            component: path.resolve('./src/templates/bloglist.jsx'),
            context: {
              limit: postsPerPage,
              skip: index * postsPerPage,
              numberOfPages,
              currentPage: index + 1,
            },
          });
        });
      }),
    );
  });
};
