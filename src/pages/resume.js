import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const ResumePage = () => (
  <main style={mainStyles}>
    <Header />
    <section style={sectionStyles}>
      <h1>个人简介</h1>
      <p>冯君，华中科技大学网络空间安全学院副教授，博生生导师。在华中科技大学计算机科学与技术学院获得博士学位。从事大模型安全、机器学习安全与隐私保护、人工智能、深度学习、区块链等研究工作</p>

  
      
      <h2>学术成果与荣誉</h2>
      <ul>
        <li>发表重要学术论文50余篇，包括IEEE TDSC、IEEE TC、IEEE TIFS、NIPS、AAAI、IEEE TII、ACM TOIT、IEEE TBD、IEEE TSUSC、IEEE IOT、INS、IEEE WCM等，
            其中第一作者IEEE/ACM Transactions论文10余篇</li>
        <li>入选国家级博士后人才计划</li>
        <li>IEEE TCSC杰出博士论文奖获得者</li>
        <li>获得博士研究生国家奖学金、硕士研究生国家奖学金</li>
      </ul>
      


      <h2>专家履历</h2>
      <ul>
        <li>主持CCF-华为胡杨林基金可信计算专项“安全高效的大模型资产保护技术研究”</li>
        <li>主持国家重点研发计划项目课题“大模型的安全微调关键技术研究”</li>
        <li>主持国家自然科学基金面上项目“实用不经意差分隐私张量机器学习研究”，2024-01-01 至 2027-12-31</li>
        <li>主持国家自然科学基金青年项目“面向人机物系统的实用隐私保护张量深度学习研究”，2021-01-01 至 2023-12-31</li>
        <li>参与国家重点研发计划网络空间安全重点专项、国家自然科学基金重点项目</li>
        <li>担任国际会议IEEE ATC 2024、ICBC 2023、IEEE PriComp 2022、IEEE DependSys 2021、IEEE DependSys 2020、SpaCCS 2019的程序委员会主席</li>
        <li>担任CCF A类期刊IEEE Transactions on Information Forensics and Security (IEEE TIFS) 的Associate Editor</li>
        <li>担任顶级会议ICLR 2026、AAAI 2026、ACSAC 2025、NeurIPS 2025、ACM MM 2025、IJCAI 2025、ICML 2025、WWW 2025 (ACM TheWebConf 2025)、ICLR 2025、AAAI 2025、NeurIPS 2024、ACM MM 2024、AAAI 2024、AAAI 2023等领域主席、程序委员会委员或审稿人</li>
        <li>担任20多个国际学术期刊例如IEEE TDSC、IEEE TIFS、IEEE TC、IEEE TMC、ACM TOSEM的审稿专家</li>
        <li>担任通信学报、CAAI Artificial Intelligence Research、网络与信息安全学报、网络空间安全科学学报等期刊青年编委</li>
        <li>担任电子学报、电子与信息学报、计算机研究与发展、China Communications等国内期刊的审稿专家</li>
        <li>担任中国中文信息学会大数据安全与隐私计算专委会委员、中国计算机学会嵌入式系统专委会执行委员</li>
        <li>担任蚂蚁集团隐语学术委员会委员</li>
        <li>担任国家科技专家库专家；担任国家自然科学基金评审专家；担任加拿大国家自然科学基金评审专家</li>
        <li>担任湖北省科技厅专家库专家、浙江省科技专家库专家、陕西省科技项目评审专家、北京市自然科学基金评审专家等科技项目评审专家</li>
      </ul>

       <h2>国际期刊审稿专家</h2>
       <ul>
        <li>IEEE Transactions on Dependable and Secure Computing (CCF A, IF=7.3)</li>
        <li>IEEE Transactions on Information Forensics and Security (CCF A, IF=7.231, 中科院一区)</li>
        <li>IEEE Transactions on Computers (CCF A)</li>
        <li>IEEE Transactions on Mobile Computing (CCF A)</li>
        <li>ACM Transactions on Software Engineering and Methodology (CCF A)</li>
        <li>ACM Transactions on Internet Technology (CCF B, IF=3.989)</li>
        <li>IEEE Transactions on Industrial Informatics (IF=11.648, 中科院一区)</li>
        <li>IEEE Transactions on Engineering Management (IF=8.702)</li>
        <li>IEEE Transactions on Network and Service Management</li>
        <li>IEEE Transactions on Neural Networks and Learning Systems (IF=14.255, 中科院一区)</li>
        <li>IEEE Transactions on Intelligent Transportation Systems (IF=9.551, 中科院一区)</li>
        <li>IEEE Transactions on Sustainable Computing (IF=3.9)</li>
        <li>IEEE Internet of Things Journal (IF=10.238, 中科院一区)</li>
        <li>IEEE/CAA Journal of Automatica Sinica (IF=7.847, 中科院一区)</li>
        <li>IEEE Wireless Communications (IF=12.777, 中科院一区)</li>
        <li>IEEE Consumer Electronics Magazine (IF=4.135)</li>
        <li>Information Sciences (IF=8.233, 中科院一区)</li>
        <li>Future Generation Computer Systems (IF=7.307)</li>
        <li>IEEE Transactions on Big Data</li>
        <li>Computers & Security</li>
        <li>Information Fusion (IF=18.6, 中科院一区)</li>
        <li>Knowledge-Based Systems (IF=8.8, 中科院一区)</li>
        <li>Expert Systems With Applications</li>
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
