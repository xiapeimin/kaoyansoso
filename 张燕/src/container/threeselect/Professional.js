import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar,Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';


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
    constructor(){
      super();
      this.state={
        id:1,
        proname:'',
        data:[],
        uid:0
      }
    }

    componentDidMount(){
      var str = this.props.location.search;
      var uid = str.split('&')[0].split('=')[1];  //用户id
      var id = str.split('&')[1].split('=')[1];  //区分专业id

      if(id == 1){
        this.setState({
          id:id,
          uid:uid,
          proname:'哲学',
          data:arr1
        });
      }else if(id == 2){
        this.setState({
          id:id,
          uid:uid,
          proname:'经济学',
          data:arr2
        });
      }else if(id == 3){
        this.setState({
          id:id,
          uid:uid,
          proname:'法学',
          data:arr3
        });
      }else if(id == 4){
        this.setState({
          id:id,
          uid:uid,
          proname:'教育学',
          data:arr4
        });
      }else if(id == 5){
        this.setState({
          id:id,
          uid:uid,
          proname:'文学',
          data:arr5
        });
      }else if(id == 6){
        this.setState({
          id:id,
          uid:uid,
          proname:'历史学',
          data:arr6
        });
      }else if(id == 7){
        this.setState({
          id:id,
          uid:uid,
          proname:'理学',
          data:arr7
        });
      }else if(id == 8){
        this.setState({
          id:id,
          uid:uid,
          proname:'工学',
          data:arr8
        });
      }else if(id == 9){
        this.setState({
          id:id,
          uid:uid,
          proname:'农学',
          data:arr9
        });
      }else if(id == 10){
        this.setState({
          id:id,
          uid:uid,
          proname:'医学',
          data:arr10
        });
      }else if(id == 11){
        this.setState({
          id:id,
          uid:uid,
          proname:'军事学',
          data:arr11
        });
      }else if(id == 12){
        this.setState({
          id:id,
          uid:uid,
          proname:'管理学',
          data:arr12
        });
      }else if(id == 13){
        this.setState({
          id:id,
          uid:uid,
          proname:'艺术学',
          data:arr13
        });
      }
    }
    render(){
        var id = this.state.id;//用id来区别专业分类
        var uid = this.state.uid;
        return(
            <div style={{width:'100vw',height:'130vh',backgroundColor:'white'}}>
                {/* 导航栏 */}
                <NavBar
                style={{background:'#21a3e0',color:'#fff',marginBottom:'15vw'}} 
                leftContent={<Link to={`/checkPro?uid=${uid}`}><img src={require('./zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>{this.state.proname}</span></NavBar>
                
                  {/* 宫格 */}
                  <div style={{width:'88vw',borderBottom:'2px solid #21a3e0',borderTop:'2px solid #21a3e0',paddingBottom:'2vw',paddingTop:'1vw',margin:'0 auto',fontSize:'4vw',textAlign:'center',marginTop:'1vh'}}>
                    
                      {
                          this.state.data.map((item,index)=>(  //index作为参数传到专业详情页 代表每类专业的具体专业
                            <Link to={`/proCheck?id=${id}&index=${index}&uid=${uid}`}><div>
                               <div style={{height:'7vh',width:'40vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'7vh',float:'left',marginLeft:'2.2vw',borderRadius:'2vw',marginTop:'1vh'}}>{item}</div>
                            </div></Link>
                          ))
                      }
                      <div className='clear'></div>
                    
                  </div>
                  
            </div>
        )
    }
}