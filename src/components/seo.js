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
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <> 

    <Helmet>




      {/* 添加Google Analytics脚本（只添加一次） */}
      <script src="https://www.google-analytics.com/analytics.js" async />
      <script src="https://www.google-analytics.com/analytics.js" async />
      <script src="https://www.google-analytics.com/analytics.js" async />
      <script src="https://www.google-analytics.com/analytics.js" async />
      {/* 添加自定义的JavaScript函数 */}
      <script type="text/javascript">
        {`
          function show(x) {
            var pubs = document.getElementsByClassName('pub');
            for (var i=0; i<pubs.length; i++) {
              if ((" "+pubs[i].className+" ").indexOf(" "+x+" ") >= 0) {
                pubs[i].style.display = "inline";
                pubs[i].style.opacity = '1';
              } else {
                pubs[i].style.display = "none";
                pubs[i].style.opacity = '0';
              }
            }
          }

          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-76469747-1', 'auto');
          ga('send', 'pageview');
        `}
      </script>

       
   
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
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
