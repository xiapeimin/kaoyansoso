import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar,  WhiteSpace,WingBlank,Flex,Icon } from 'antd-mobile';
import { green } from 'ansi-colors';
import '../School/school.css';

export default class CheckPro extends Component {
    
    render(){
        return(
            <div>
                <div style={{width:'100vm',height:'120vh',backgroundColor:'white'}}>
                {/* 导航栏 */}
                <NavBar style={{backgroundColor:'#66cccc',color:'white',height:'13vh',marginBottom:'-3vh'}}
                  mode="dark"
                  icon={<Icon type="left" />}
                  onLeftClick={() => console.log('onLeftClick')}
               >选专业</NavBar>
               {/* 宫格 */}
                  <div style={{width:'66vw',height:'100vh',margin:'0 auto',fontSize:'5vw',textAlign:'center',paddingTop:'-10vw'}}>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left',borderTopLeftRadius:'3vw',backgroundColor:'white'}}>哲学</div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left',borderTopRightRadius:'3vw',backgroundColor:'white'}}>经济学</div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>法学</div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>教育学</div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>文学</div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>历史学</div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>理学</div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>工学</div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>农学</div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>医学</div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>军事学</div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left'}}>管理学</div>
                      </div>
                      <div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left',borderBottomLeftRadius:'3vw'}}>艺术学</div>
                          <div style={{height:'10vh',width:'32vw',border:'1px solid lightgray',textAlign:'center',lineHeight:'10vh',float:'left',borderBottomRightRadius:'3vw'}}>--</div>
                      </div>
                  </div>
               </div>
            </div>
        )
    }
}