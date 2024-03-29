module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cannonlock.com",
    title: "LockDotCom",
    description: `The website you didn't know you needed.`,
    author: "Cannon Lock"
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Titillium Web', 'Montserrat']
        }
      }
    },
    `gatsby-plugin-mdx`,
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cannon Lock's Personal Website`,
        short_name: `Lock Dot Com`,
        start_url: `/index.js`,
        display: `minimal-ui`,
        icon: `src/static/images/WebsiteFavicon32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-LZ8602BHP1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "/static/images/WebsiteFavicon32x32.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/static/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "icons",
        path: `${__dirname}/src/static/icons/`,
      },
      __key: "icons",
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/static/data/`,
      },
      __key: "data",
    },
  ],
};
