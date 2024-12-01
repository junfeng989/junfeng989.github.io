import React from "react"

const Footer = () => (
  <footer style={footerStyles}>
    <p>&copy; 2024 华中科技大学人机物系统与安全实验室</p>
    <p>
      <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener noreferrer">
        {/*Powered by Gatsby*/}
      </a>
    </p>
  </footer>
)

const footerStyles = {
  background: "#333",
  color: "white",
  padding: "20px",
  textAlign: "left", // 改为左对齐
}

export default Footer
