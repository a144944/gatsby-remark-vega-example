module.exports = {
  siteMetadata: {
    title: "Example of gatsby-remark-vega",
    author: "Kevin Scott",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-external-links`,
          'gatsby-remark-copy-linked-files',
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-vega`,
        ],
      },
    },
  ],
}
