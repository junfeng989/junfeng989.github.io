import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const WorkPubPage = () => (
  <main style={mainStyles}>
    <Header />
    <section style={sectionStyles}>
      <h1 style={h1Style}>近期发表论文、出版专著和申请专利</h1>

      <ul style={pubListStyles}>
        <li style={pubItemStyles}>
          <h2>Paper</h2>
          <p>"Panther: Practical Secure Two-Party Neural Network Inference," IEEE Transactions on Information Forensics and Security, vol. 20, pp. 1149-1162, 2025, doi: 10.1109/TIFS.2025.3526063.</p>
        </li>
        <li style={pubItemStyles}>
          <h2>Paper</h2>
          <p><strong>《人工智能安全》</strong>XXXXXXXX</p>
        </li>
        <li style={pubItemStyles}>
          <h2>Paper</h2>
          <p><strong>《隐私计算》</strong>XXXXXXXX</p>
        </li>
      </ul>
    </section>
    <Footer />
  </main>
)

const mainStyles = {
  fontFamily: "Arial, sans-serif",
  margin: "0",
  padding: "0",
}

const sectionStyles = {
  padding: "20px",
  margin: "0",
}

const h1Style = {
  fontSize: "28px",
  lineHeight: "1.4",
  marginBottom: "20px",
}

const pubListStyles = {
  listStyleType: "none",
  paddingLeft: "0",
}

const pubItemStyles = {
  marginBottom: "20px",
  paddingBottom: "10px",
  borderBottom: "1px solid #ccc", // 分隔线
}

export default WorkPubPage
