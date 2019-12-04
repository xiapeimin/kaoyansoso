import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar } from 'antd-mobile';
import {Link} from 'react-router-dom';
import '../School/school.css';

export default class CheckPro extends Component {
    
    render(){
        return(
            <div>
                <div style={{width:'100vm',height:'120vh',backgroundColor:'white'}}>
                {/* 导航栏 */}
                <NavBar
                style={{background:'#21a3e0',color:'#fff',marginBottom:'15vw'}} 
                leftContent={<Link to={'/confirmSchool'}><img src={require('./zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>专业推荐</span></NavBar>
               {/* 宫格 */}
                  <div style={{width:'66vw',height:'100vh',margin:'0 auto',fontSize:'5vw',textAlign:'center',paddingTop:'-10vw'}}>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left',borderTopLeftRadius:'3vw',backgroundColor:'white'}}><Link to={'/professional/1'}>哲学</Link></div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left',borderTopRightRadius:'3vw',backgroundColor:'white'}}><Link to={'/professional/2'}>经济学</Link></div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/3'}>法学</Link></div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/4'}>教育学</Link></div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/5'}>文学</Link></div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/6'}>历史学</Link></div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/7'}>理学</Link></div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/8'}>工学</Link></div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/9'}>农学</Link></div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/10'}>医学</Link></div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/11'}>军事学</Link></div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left'}}><Link to={'/professional/12'}>管理学</Link></div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left',borderBottomLeftRadius:'3vw'}}><Link to={'/professional/13'}>艺术学</Link></div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid #21a3e0',textAlign:'center',lineHeight:'10vh',float:'left',borderBottomRightRadius:'3vw'}}>--</div>
                      </div>
                  </div>
               </div>
            </div>
        )
    }
}