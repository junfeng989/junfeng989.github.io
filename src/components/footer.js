import React from "react"

const Footer = () => (
  <footer style={footerStyles}>
    <p>&copy; 2024 冯君   可信大模型</p>
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
