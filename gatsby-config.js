module.exports = {
  siteMetadata: {
    title: `Ranch to Plate`,
    description: `The best place to find a ranch near you and order fresh meat straight from the rancher. No hassle, save money, know where your food comes from.`,
    ketwords: 'beef, pork, chicken, ranch near me, ranches near me, order meat, order fresh meat, find a rancher, ranches near me, ranch, cows, eggs, meat, fresh meat, fresh beef, order beef, local beef, local meat, local food, best place to find local meat',
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
