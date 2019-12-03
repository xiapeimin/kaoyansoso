import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Flex,NavBar, Icon } from 'antd-mobile';

export default class Words extends Component {  //有bug 页面布局混乱  
  render() {
    return (
     <div className='testbox'>
       <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={'/appTab'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>背单词</span></NavBar>

                <img src={require('../imgs/remword.jpg')} style={{display:'block',width:'100%',height:'25%'}} />

                <Flex.Item style={{position:'relative',height:'20vw',lineHeight:'20vw',width:'100%',
                    }}>
                        <Flex.Item style={{position:'absolute',width:'100%',fontSize:'5vw',
                        textAlign:'center',color:'black'
                    }}>
                       开始你的背单词计划吧        
                    </Flex.Item>
                    </Flex.Item>
                         
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%'}}>
                      
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'10vw',height:'10vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/danci.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'2vw',fontSize:'5vw',color:'black'}}>
                        我的收藏单词(可增删)
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'1vw'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    
                    </Flex.Item>                                    

                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%'}}>
                      <Link to='/wordlist1/1'>
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'10vw',height:'10vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/danci2.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'2vw',fontSize:'5vw',color:'black'}}>
                        易错单词5000
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'1vw'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Link>
                    </Flex.Item>

                    <Flex.Item style={{position:'relative',height:'100px',width:'100%'}}>
                      <Link to='/wordlist1/2'>
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'10vw',height:'10vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/danci3.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'2vw',fontSize:'5vw',color:'black'}}>
                        易混单词5000
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'1vw'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Link>
                    </Flex.Item>
                    

                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'-5vw'}}>
                      <Link to='/wordlist1/3'>
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'10vw',height:'10vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/danci4.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'2vw',fontSize:'5vw',color:'black'}}>
                        常考单词5000
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'1vw'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Link>
                    </Flex.Item>  
                
                <Flex.Item style={{position:'absolute',height:'60px',width:'70%',bottom:'10vw',left:'15%',
                fontSize:'5vw',textAlign:'center'}}>
                  相信对你来说都不是问题，攻破它，离胜利更进一步哦...
                </Flex.Item>   
      
     </div> 
    );
  }
}