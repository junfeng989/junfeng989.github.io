/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Helmet } from "react-helmet"; // 引入Helmet组件

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>


      {/* 使用Helmet组件管理头部信息 */}
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
    </Helmet>


    
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
