import React from "react"
import { Link } from "gatsby"

import { Helmet } from "react-helmet"; // 引入Helmet组件

const Header = () => (
  <header style={headerStyles}>


    <h1 style={{ textAlign: "left" }}>{/*安全AI*/}</h1>
    <nav>
      <Link to="/" style={navLinkStyles}>主页</Link> |  
      <Link to="/resume" style={navLinkStyles}>个人简介</Link> | 
      <Link to="/publication" style={navLinkStyles}>近期工作</Link> |
      <Link to="/Call_for_Paper" style={navLinkStyles}>Call for Paper</Link> |
    </nav>




      {/* 使用Helmet组件管理头部信息 */}
    <Helmet>
      {/* 设置文档的title */}
      <title>Jun Feng's Homepage</title>
      
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



  
  </header>
)

const headerStyles = {
  background: "#333",        // 深色背景
  color: "white",            // 白色文字
  padding: "5px 20px",       // 较小的内边距，减少高度
  height: "50px",            // 明确设定高度
  display: "flex",           // 使用 Flex 布局
  alignItems: "center",      // 垂直居中
}

const navStyles = {
  display: "flex",           // 水平排列链接
  justifyContent: "flex-start", // 链接靠左对齐（可改为 space-around）
  gap: "15px",               // 每个链接之间的间距
}

const navLinkStyles = {
  color: "white",            // 链接颜色
  textDecoration: "none",    // 去掉下划线
  fontSize: "14px",          // 字体大小稍微减小
  fontWeight: "bold",        // 加粗
  padding: "0 10px",         // 增加链接内间距
}

export default Header
