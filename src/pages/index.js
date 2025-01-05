import React from "react"



import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"

import Footer from "../components/footer"



  
const IndexPage = () => (

  
  
  <main style={mainStyles}>

  
    <Header />
    <div style={contentWrapperStyles}>
      <div style={leftColumnStyles}>    
        <section style={sectionStyles}>
          <div style={contentStyles}>
            <StaticImage
              src="../images/JunFeng.jpg"
              alt="导师照片"
              layout="constrained"
              width={120}
              height={180}
              style={imageStyles}
            />
            <h1>冯君 华中科技大学</h1>
                  <h3>博士 副教授 博士生导师 硕士生导师</h3>
            <p>Jun Feng is an Associate Professor in the School of Cyber Science and Engineering at Huazhong University of Science and Technology. 
               He received the PhD in the School of Computer Science and Technology at Huazhong University of Science and Technology. 
               He has published more than 40 papers in top journals and conferences (e.g., IEEE Transactions on Dependable and Secure Computing, IEEE Transactions on Computers, IEEE Transactions on Information Forensics and Security, AAAI, 
               IEEE Transactions on Industrial Informatics, IEEE Transactions on Big Data, IEEE Transactions on Sustainable Computing, IEEE Wireless Communications, 
               IEEE Internet of Things Journal, Information Sciences, ACM Transactions on Internet Technology). He is particularly interested in privacy-preserving 
               machine learning, differential privacy, artificial intelligence security and privacy, deep learning, and big data.</p>

            <p>We are hiring! We are looking for motivated students. If you are interested in doing research with me, please feel free to contact me.
              I'm also looking for all kinds of collaborations, please drop me an email if you are interested.</p>

            <p>冯君老师现招募对大模型安全与隐私保护、隐私保护机器学习、人工智能、深度学习、同态加密、安全多方计算等感兴趣的研究生以及本科科研训练学生，欢迎积极进取、热爱科研的学生与我联系，做可以落地实用的科研。</p>

            <p>邮箱：junfeng@hust.edu.cn, junfeng989@gmail.com；电话/微信：18827365073</p>
           
            <p>官方主页：<a href="http://faculty.hust.edu.cn/fengjun6/zh_CN/index.htm">http://faculty.hust.edu.cn/fengjun6/zh_CN/index.htm</a></p>

               
          </div>
        </section>
        <section style={sectionStyles}>
              <h2>研究方向</h2>
                <ul>
                <li>大模型安全与隐私保护</li>
                <li>人工智能安全</li>
                <li>深度学习</li>
                <li>张量人工智能</li>
                </ul>
        </section>
        <section style={sectionStyles}>
          <h2>联系方式</h2>
          <p>办公地址：国家网络安全与人才创新基地明德楼A343</p>
          <p>Email: <a href="">junfeng@hust.edu.cn</a>, <a href="">junfeng989@gmail.com</a></p>
          <p>Tel/Wechat：18827365073</p>
        </section>
      </div>
      <div style={rightColumnStyles}>
        <section style={newsSectionStyles}>
          <h2>近期科研动态</h2>
          <ul /*style={newsListStyles}*/>
            <li>2024年12月，新立项两项大模型安全方向课题</li>
            <li>2024年12月，安全神经网络推理论文被CCF A类期刊IEEE TIFS录用</li>
            <li>2024年12月，研二上学期硕士针对联邦学习的后门攻击论文被CCF A类会议AAAI 2025录用</li>
            <li>2024年9月，CCF A类期刊IEEE TC关于差分隐私深度学习论文入选了ESI高被引论文</li>
            <li>{/*2024年12月*/}</li>
          </ul>
        </section>
      </div>
    </div>
    <Footer />
  </main>
)

const mainStyles = {
  fontFamily: "Arial, sans-serif",
  margin: "0", // 去掉全局外边距
  padding: "0", // 去掉全局内边距
}

const contentWrapperStyles = {
  display: "flex",               // 使用 Flex 布局
  justifyContent: "space-between", // 左右内容分布
  padding: "0 20px",             // 页面左右内边距
  maxWidth: "1600px",            // 设置页面最大宽度
  margin: "0 auto",              // 内容居中
}

const leftColumnStyles = {
  flex: "3",                     // 左侧内容宽度
  paddingRight: "20px",           // 左右间隔
}

const rightColumnStyles = {
  flex: "1",                     // 右侧栏较小宽度
  paddingLeft: "20px",            // 左右间隔
}

const sectionStyles = {
  padding: "10px 0",
  margin: "0",
  borderBottom: "1px solid #ccc",
}

const newsSectionStyles = {
  background: "#f4f4f4",         // 设置背景色
  padding: "10px",                // 内边距
  borderRadius: "8px",            // 圆角效果
}

const newsListStyles = {
  listStyleType: "none",          // 去掉列表的默认样式
  paddingLeft: "0",               // 去掉左边距
}

const h1Style = {
  fontSize: "24px",
  lineHeight: "1.4",
  marginBottom: "15px",
}

const h2Style = {
  fontSize: "20px",
  marginBottom: "10px",
}

const pStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "10px",
}
const contentStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}
const imageStyles = {
//  borderRadius: "5%",           // 圆形边框
//  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",  // 添加阴影
  marginBottom: "20px",          // 图片与文字之间的间隔
//  border: "1px solid #007acc",   // 椭圆形边框，颜色为蓝色
  objectFit: "cover",            // 确保图片内容适配
  width: "140px",                // 固定宽度
  height: "180px",               // 固定高度，制造椭圆效果
}





export default IndexPage
