import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar,  WhiteSpace,WingBlank,Flex,Icon} from 'antd-mobile';
import { CoverageMap } from 'istanbul-lib-coverage';

export default class ConfirmSchool extends Component {
    render(){
        return(
            <div>
                {/* 导航栏 */}
                <NavBar style={{backgroundColor:'#66cccc',color:'white'}}
                  mode="dark"
                  icon={<Icon type="left" />}
                  onLeftClick={() => console.log('onLeftClick')}
               >定高校</NavBar>
               <div style={{
                   height:610,
                   backgroundImage:"url("+require("../images/1.jpg")+")",
                   opacity:0.6
                   }}>
                       <div style={{marginLeft:'20%',paddingTop:'30%'}}>
                          <div><img src={require('../images/3.jpg')} style={{height:100,width:'80%',opacity:1}}></img></div>
                       </div>
                       <Flex style={{marginLeft:'20%',paddingTop:'10%'}}>
                          <Flex.Item><img src={require('../images/2.jpg')} style={{height:100,width:'80%',opacity:1}}></img></Flex.Item>
                       </Flex>
                       <WhiteSpace></WhiteSpace>
                       <WhiteSpace></WhiteSpace>
                       <WingBlank>
                        <WingBlank>
                       <p style={{color:'white',fontSize:16,textAlign:'center'}}>全国近千所院校轻松检索，为您推荐最适合您的研校</p>
                       </WingBlank>
                       </WingBlank>
                </div>

            </div>
        )
    }
}