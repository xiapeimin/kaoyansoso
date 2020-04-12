import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Flex,NavBar, Icon } from 'antd-mobile';

export default class Words extends Component {  //有bug 页面布局混乱  
  render() {
    var str = this.props.location.search;
    var uid = str.split('=')[1];
    return (
     <div className='testbox'>
       <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/words`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>背单词</span></NavBar>

                <img src={require('../imgs/dci.jpg')} style={{display:'block',width:'100%'}} />

                <Flex.Item style={{position:'relative',height:'20vw',lineHeight:'20vw',width:'100%',
                    }}>
                        <Flex.Item style={{position:'absolute',width:'100%',fontSize:'5vw',
                        textAlign:'center',color:'black'
                    }}>
                       单词测试    
                    </Flex.Item>
                    </Flex.Item>            
     </div> 
    );
  }
}