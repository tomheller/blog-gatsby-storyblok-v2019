module.exports = {
  siteMetadata: {
    title: 'Toms journey in web development',
  },
  plugins: [
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: process.env.NODE_ENV === 'production' ? process.env.SB_ACCESSKEY : import('./env').accessToken,
        homeSlug: 'home',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
