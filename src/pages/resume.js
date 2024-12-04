import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const ResumePage = () => (
  <main style={mainStyles}>
    <Header />
    <section style={sectionStyles}>
      <h1>个人简介</h1>
      <p>冯君，华中科技大学副教授。在华中科技大学计算机科学与技术学院获得博士学位。从事大模型安全、机器学习安全与隐私保护、人工智能安全、深度学习、区块链等研究工作。</p>

  /*
      <h2>教育背景</h2>
      <ul>
        <li>博士 - 计算机科学与技术，北京大学，2000年。</li>
        <li>硕士 - 软件工程，清华大学，1997年。</li>
        <li>学士 - 计算机科学，浙江大学，1994年。</li>
      </ul>
*/
  
      
      <h2>学术成果与荣誉</h2>
      <ul>
        <li>在信息安全领域发表重要学术论文40余篇，包括IEEE TDSC、IEEE TC、IEEE TII、ACM TOIT、IEEE TBD、IEEE TSUSC、IEEE IOT、INS、IEEE WCM等，
            其中第一作者IEEE/ACM Transactions论文10余篇。</li>
        <li>IEEE TCSC杰出博士论文奖获得者。</li>
      </ul>
      


      <h2>专家履历</h2>
      <ul>
        <li>主持国家自然科学基金面上项目“实用不经意差分隐私张量机器学习研究”，国家自然科学基金青年项目“面向人机物系统的实用隐私保护张量深度学习研究”。</li>
        <li>参与国家重点研发计划网络空间安全重点专项、国家自然科学基金重点项目。</li>
        <li>担任国际会议IEEE ATC 2024、ICBC 2023、IEEE PriComp 2022、IEEE DependSys 2021、IEEE DependSys 2020、SpaCCS 2019的程序委员会主席。</li>
        <li>担任A类会议WWW 2025, ICLR 2025, AAAI 2025, NeurIPS 2024, ACM MM 2024, AAAI 2024, AAAI 2023等顶级会议程序委员会委员。</li>
        <li>担任20多个国际学术期刊和会议例如A类期刊IEEE TDSC、IEEE TIFS、IEEE TC、ACM TOSEM的审稿专家。</li>
        <li>担任中国中文信息学会大数据安全与隐私计算专委会委员、中国计算机学会嵌入式系统专委会执行委员。</li>
        <li>担任国家科技专家库专家；担任国家自然科学基金评审专家；担任加拿大国家自然科学基金评审专家。</li>
        <li>担任湖北省科技厅专家库专家、浙江省科技专家库专家、北京市自然科学基金评审专家等科技项目评审专家。</li>
      </ul>
    </section>
    <Footer />
  </main>
)

const mainStyles = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
}

const sectionStyles = {
  padding: "20px",
  marginBottom: "20px",
}

export default ResumePage
