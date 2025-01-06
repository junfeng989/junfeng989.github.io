/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

 import { useStaticQuery, graphql } from "gatsby"

import { Helmet } from "react-helmet"


function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )
 
  const keywords = site.siteMetadata.keywords
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <> 

    <Helmet>

      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>

   <meta name="google-site-verification" content="0duOuR8u3-1yTOLj1EV2w6cWdrRuN64oW_M9C1lHiZA"/>
 
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

   </Helmet>

      {children}
    </>
  )
}

export default Seo
