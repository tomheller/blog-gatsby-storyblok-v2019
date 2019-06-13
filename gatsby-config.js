module.exports = {
  siteMetadata: {
    title: 'Toms journey in web development',
  },
  plugins: [
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        // eslint-disable-next-line global-require
        accessToken: process.env.NODE_ENV === 'production' ? process.env.SB_ACCESSKEY : require('./env').accesstoken,
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
