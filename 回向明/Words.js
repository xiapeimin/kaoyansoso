import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Flex,NavBar, Icon } from 'antd-mobile';
export default class Words extends Component {
  render() {
    return (
     <div>
       <NavBar               
                mode="light"
                icon={<Icon type="left" />}
                style={{backgroundColor:'#66cccc',color:'white'}}>
                  <span style={{backgroundColor:'#66cccc',color:'white'}} to='./Home1'>背单词</span>      
                </NavBar>

                <Flex.Item style={{position:'relative',height:'100px',width:'90%',left:'5%',top:'10vw'
                    }}>
                        <Flex.Item style={{position:'absolute',width:'100%',fontSize:'5vw',top:'40%',
                        textAlign:'center'
                    }}>
                            开始你的背单词计划吧
                        </Flex.Item>
                    </Flex.Item>
                         
                    <Flex.Item style={{position:'relative',height:'100px',width:'100%',top:'20vw'}}>
                      <Link to='./wordlist'>
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'10vw',height:'10vw',borderRadius:'50%',left:'5%'}} src={require('../images/danci.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'20%',fontSize:'5vw'}}>
                        常考单词5000
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} />
                    </Flex>
                    </Link>
                    </Flex.Item>                                    

                    <Flex.Item style={{position:'relative',height:'100px',width:'100%',top:'20vw'}}>
                      <Link to='./wordlist'>
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'10vw',height:'10vw',borderRadius:'50%',left:'5%'}} src={require('../images/danci2.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'20%',fontSize:'5vw'}}>
                        易错单词5000
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} />
                    </Flex>
                    </Link>
                    </Flex.Item>

                    <Flex.Item style={{position:'relative',height:'100px',width:'100%',top:'20vw'}}>
                      <Link to='./wordlist'>
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'10vw',height:'10vw',borderRadius:'50%',left:'5%'}} src={require('../images/danci3.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'20%',fontSize:'5vw'}}>
                        易混单词5000
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} />
                    </Flex>
                    </Link>
                    </Flex.Item>
                
                <Flex.Item style={{position:'relative',height:'60px',width:'70%',top:'30vw',left:'10vw',
                fontSize:'5vw',textAlign:'center'}}>
                  相信对你来说都不是问题，攻破它，离胜利更进一步
                </Flex.Item>
     </div> 
    );
  }
}