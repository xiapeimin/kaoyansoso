import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar,  WhiteSpace,WingBlank,Icon,Flex} from 'antd-mobile';

const arr1=['哲学','马克思主义哲学','中国哲学','外国哲学','逻辑学','伦理学','美学','宗教学','科学技术哲学'];
const arr2=['理论经济学','政治经济学','经济思想','经济史','西方经济学','应用经济学','国民经济学','财政学','金融学','产业经济学','金融','应用统计','税务','国际商务','保险','资产评估','审计','统计学'];
const arr3=['法学','法学理论','法律史','刑法学','民商法学','经济法学','军事法学','政治学','国际关系','外交学','人口学','民族学','公安学','法律','社会工作','警务'];
const arr4=['教育学','教育学原理','教育史','心理学','基础心理学','应用心理学','体育学','教育管理','学科教学','小学教学','学前教育','特殊教育','体育教学','运动训练','竞赛组织','汉语国际教育','应用心理'];
const arr5=['中国语言文学','文艺学','汉语言文字学','中国古代文学','中国现当代文学','英语笔译','英语口译','俄语笔译','俄语口译','日语笔译','日语口译','法语笔译','法语口译','德语笔译','德语口译','朝鲜语笔译','朝鲜语口译'];
const arr6=['考古学','中国史','中国史','文物与博物馆'];
const arr7=['数学','物理学','化学','天文学','地理学','大气科学','海洋科学','地球物理学','地质学','生物学','系统科学','科学技术史','生态学','统计学','心理学','力学','材料科学与工程','电子科学与技术','计算机科学与技术','环境科学与工程','生物医学工程','基础医学','公共卫生与防御医学','药学','中药学'];
const arr8=['力学','机械工程','光学工程','仪器科学与技术','材料科学与工程','冶金工程','电气工程','电子科学与技术','信息与通信工程','控制科学与工程','计算机科学与技术','建筑学','土木工程','水利工程','测绘科学与技术','化学工程与技术','矿业工程','石油与天然气功工程','纺织科学与工程','轻工技术与工程','交通运输工程','船舶与海洋工程','农业工程','林业工程','生物医学工程'];
const arr9=['作物学','园艺学','农业资源与环境','植物保护','畜牧学','兽医学','林学','水产','草学','农业推广','兽医','园林风景','林业','环境科学与工程','食品科学与工程','园林风景学'];
const arr10=['基础医学','临床医学','口腔医学','中医学','中西医结合','药学','中药学','特种医学','护理学','临床医学','口腔医学','公共卫生','护理','药学','中药学','生物医学工程'];
const arr11=['战略学','战役学','战术学','军事指挥学','军制学','军事后勤学','军事装备学','军事'];
const arr12=['工商管理','会计学','农业经济管理','公共管理','会计','旅游管理','图书情报','工程管理'];
const arr13=['艺术学理论','音乐与舞蹈艺术','戏剧与影视学','美术学','设计学','艺术'];

export default class Professional extends Component {
    render(){
        return(
            <div style={{width:'100vw',height:'130vh',backgroundColor:'white'}}>
                {/* 导航栏 */}
                <NavBar style={{backgroundColor:'#66cccc',color:'white',height:'10vh'}}
                  mode="dark"
                  icon={<Icon type="left" />}
                  onLeftClick={() => console.log('onLeftClick')}
               >选专业</NavBar>
               
                {/* 下拉菜单 */}
                <form>
                  <select  style={{width:'50vw',height:'7vh',color:'gray',borderRadius:'2vw',borderColor:'lightgray'}}>
                    <option>学术类型</option>
                    <option>全部</option>
                    <option>学硕</option>
                    <option>专硕</option>
                  </select>
                  <select  style={{width:'50vw',height:'7vh',color:'gray',borderRadius:'2vw',borderColor:'lightgray'}}>
                    <option>专业学科</option>
                    <option>数学</option>
                    <option>电子科学</option>
                  </select>
                  </form> 
                  {/* 宫格 */}
                  <div style={{width:'88vw',height:'100vh',margin:'0 auto',fontSize:'4vw',textAlign:'center',border:'1px solid lightgray',marginTop:'1vh'}}>
                      {
                          arr8.map((item)=>(
                            <div>
                               <div style={{height:'7vh',width:'40vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'7vh',float:'left',marginLeft:'2.2vw',borderRadius:'2vw',marginTop:'1vh'}}>{item}</div>
                            </div>
                          ))
                      }
                  </div>
            </div>
        )
    }
}