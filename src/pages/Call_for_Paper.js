import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const CallForPaperPage = () => (
  <main style={mainStyles}>
    <Header />
    <section style={sectionStyles}>
      <h1 style={h1Style}>Call for Papers: Special Issue on Recent Advances in Security, Privacy, and Trust</h1>
      
      <p style={pStyle}>The full call for papers is available on the official website: <a href="https://www.mdpi.com/topics/ELY82W061L" style={linkStyle}>https://www.mdpi.com/topics/ELY82W061L</a></p>

      <h2 style={h2Style}>Participating Journals</h2>
      <ul style={journalsListStyles}>
        <li>Electronics (SCIE, IF=2.9)</li>
        <li>Journal of Cybersecurity and Privacy</li>
        <li>Mathematics (SCIE, IF=2.4)</li>
        <li>Remote Sensing (SCIE, IF=5.0)</li>
        <li>Sustainability (SCIE and SSCI, IF=3.9)</li>
      </ul>

      <h2 style={h2Style}>Paper Submission</h2>
      <p style={pStyle}>All papers need to be submitted electronically through the website: <a href="https://www.mdpi.com/topics/ELY82W061L" style={linkStyle}>https://www.mdpi.com/topics/ELY82W061L</a></p>

      <h2 style={h2Style}>Important Dates</h2>
      <ul style={datesListStyles}>
        <li>Abstract submission deadline: 31 October 2025</li>
        <li>Manuscript submission deadline: 31 December 2025</li>
      </ul>

      <h2 style={h2Style}>Topics</h2>
      <p style={pStyle}>The proliferation of information, communication, and computer technologies has brought us into the realm of cyber-physical-social system (CPSS). CPSS comprises the cyber space, physical space and social space, and their integration such as cyber-physical system (CPS), Internet of Things (IoT), social computing systems, and even the system integrating all three spaces. Recently, CPSS has brought enormous opportunities that have significantly influenced applications. However, there are increasing security, privacy, and trust concerns such as exposure of user privacy and business information in CPSS.</p>
      <p style={pStyle}>Although theories and technologies about security, privacy, and trust have been widely studied and applied in recent years, existing methods are still insecure, impractical or inefficient. To address these challenges, this topic solicits the latest research outcomes and developments on security, privacy, and trust. The topics of interest include, but not limited to the following:</p>

      <ul style={topicsListStyles}>
        <li>Privacy-enhancing technologies</li>
        <li>Privacy-preserving/secure/trust data analysis and processing</li>
        <li>Network security, privacy, and trust</li>
        <li>Differentially private data analysis</li>
        <li>Sustainable security, privacy, and trust</li>
        <li>Economics of security, privacy, and trust</li>
        <li>Blockchain and its applications</li>
        <li>IoT/CPS/CPSS security, privacy, and trust</li>
        <li>Security, privacy, and trust in edge/fog/cloud computing</li>
        <li>AI/Machine learning security</li>
        <li>Federated learning</li>
        <li>System security</li>
        <li>Hardware security</li>
        <li>Web security, privacy, and trust</li>
        <li>Big data, artificial intelligence for security, privacy, and trust</li>
        <li>Digital twin security, privacy, and trust</li>
        <li>Cryptographic techniques, cryptographic protocols</li>
      </ul>

      <h2 style={h2Style}>Topic Editors</h2>
      <ul style={editorsListStyles}>
        <li><strong>Dr. Jun Feng</strong> (Huazhong University of Science and Technology, China) - <a href="mailto:junfeng@hust.edu.cn">junfeng@hust.edu.cn</a> - <a href="http://faculty.hust.edu.cn/fengjun6/en/">Website</a></li>
        <li><strong>Dr. Changqing Luo</strong> (Virginia Commonwealth University, USA) - <a href="mailto:cluo@vcu.edu">cluo@vcu.edu</a> - <a href="http://www.people.vcu.edu/~cluo/">Website</a></li>
        <li><strong>Dr. Mamoun Alazab</strong> (Charles Darwin University, Australia) - <a href="mailto:mamoun.alazab@cdu.edu.au">mamoun.alazab@cdu.edu.au</a> - <a href="https://researchers.cdu.edu.au/en/persons/mamoun-alazab">Website</a></li>
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

const h2Style = {
  fontSize: "24px",
  marginBottom: "15px",
}

const pStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "15px",
}

const linkStyle = {
  color: "#0077cc",
  textDecoration: "none",
}

const journalsListStyles = {
  listStyleType: "none",
  paddingLeft: "0",
}

const datesListStyles = {
  listStyleType: "none",
  paddingLeft: "0",
}

const topicsListStyles = {
  listStyleType: "none",
  paddingLeft: "0",
}

const editorsListStyles = {
  listStyleType: "none",
  paddingLeft: "0",
}

export default CallForPaperPage
