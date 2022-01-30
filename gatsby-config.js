module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cannonlock.com",
    title: "LockDotCom",
    description: `The website you didn't know you needed.`,
    author: "Cannon Lock"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-remark-images`,
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-LZ8602BHP1",
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Titillium Web', 'Montserrat']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cannon Lock's Personal Website`,
        short_name: `Lock Dot Com`,
        start_url: `/index.js`,
        display: `minimal-ui`,
        icon: `src/static/images/WebsiteFavicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout/MD_Layout.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      }
    },
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
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`,
      }
    },
  ],
};
