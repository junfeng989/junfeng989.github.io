/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `冯君 华中科技大学 个人主页`,
    description: `冯君老师现招募对大模型安全与隐私保护、隐私保护机器学习、人工智能、深度学习、同态加密、安全多方计算等感兴趣的研究生以及本科科研训练学生，欢迎积极进取、热爱科研的学生与我联系，做可以落地实用的科研。`,
    author: `@gatsbyjs`,
    siteUrl: `https://junfeng989.github.io/`,
    keywords: `冯君，fengjun，华中科技大学，hust，个人主页，homepage`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
