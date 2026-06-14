const React = require("react")

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  // 1. 保留您原有的设置语言属性的逻辑
  setHtmlAttributes({ lang: `en` })

  // 2. 增加注入 meta 标签的逻辑
  setHeadComponents([
    <meta key="title" name="title" content="冯君 华中科技大学 个人主页" />,
    <meta key="description" name="description" content="冯君老师现招募对大模型安全与隐私保护、隐私保护机器学习、人工智能、深度学习、同态加密、安全多方计算等感兴趣的研究生以及本科科研训练学生，欢迎积极进取、热爱科研的学生与我联系，做可以落地实用的科研。" />,
    <meta key="keywords" name="keywords" content="冯君，fengjun，Jun Feng，华中科技大学，hust，大模型安全与隐私保护，顶会审稿人，Trustworthy Large Model，homepage，IEEE TIFS Associate Editor" />,
    <meta key="siteUrl" name="siteUrl" content="https://junfeng989.github.io/resume/" />,
    <meta key="google-site-verification" name="google-site-verification" content="0duOuR8u3-1yTOLj1EV2w6cWdrRuN64oW_M9C1lHiZA" />
  ])
}
