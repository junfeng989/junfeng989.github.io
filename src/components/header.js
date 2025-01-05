import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header style={headerStyles}>

  
  <title>Jun Feng's Homepage</title>
    <h1 style={{ textAlign: "left" }}>{/*安全AI*/}</h1>
    <nav>
      <Link to="/" style={navLinkStyles}>主页</Link> |  
      <Link to="/resume" style={navLinkStyles}>个人简介</Link> | 
      <Link to="/publication" style={navLinkStyles}>近期工作</Link> |
      <Link to="/Call_for_Paper" style={navLinkStyles}>Call for Paper</Link> |
    </nav>
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
