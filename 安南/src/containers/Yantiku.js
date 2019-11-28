import React, { Component } from 'react';
import {NavBar, Flex,Icon,SearchBar} from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Yantiku extends Component {
    render() {
        return (
            <div>
                <NavBar   
                style={{backgroundColor:'#66cccc',color:'white',height:'15vw'}}                             
                    ><Link to='/Login'><div style={{height:'5vw',width:'5vw',marginLeft:'-32vw'}}>
                        <img  style={{height:'5vw',width:'5vw'}} src={require('../images/jiantou.png')}/></div></Link>
                        <span style={{color:'white',fontSize:'8vw',height:'10vw'}}>研题库</span></NavBar>
                <input type='search' style={{height:'12vw',marginLeft:'3vw',width:'95vw',fontSize:'4VW' ,marginTop:'2.5vw',border:'2px'}} placeholder="小可爱想搜索哪一年的真题" maxLength={8} />
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <Link to='./tiKu'>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../images/timg1.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold'}}>英语真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'2.5vw',marginTop:'3vw',color:"gray"}}>2018年-2019年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw'}} src={require('../images/jiantou.jpg')}/>
                    </div>
                    </Link>
                </div>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                <Link to='./tiKu'>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../images/timg.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold'}}>政治真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'2.5vw',marginTop:'3vw',color:"gray"}}>2018年-2019年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw'}} src={require('../images/jiantou.jpg')}/>
                    </div>
                </Link>
                </div>
                <Link to='./tiKu'>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../images/timg2.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold'}}>管理学真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'2.5vw',marginTop:'3vw',color:"gray"}}>2018年-2019年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw'}} src={require('../images/jiantou.jpg')}/>
                    </div>
                </div>
                </Link>
                <Link to='./tiKu'>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../images/timg3.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold'}}>数学真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'2.5vw',marginTop:'3vw',color:"gray"}}>2018年-2019年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw'}} src={require('../images/jiantou.jpg')}/>
                    </div>
                </div>
                </Link>
                <Link to='./tiKu'>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../images/timg4.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold'}}>法理学真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'2.5vw',marginTop:'3vw',color:"gray"}}>2018年-2019年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw'}} src={require('../images/jiantou.jpg')}/>
                    </div>
                </div>
                </Link>
                <Link to='./tiKu'>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../images/timg5.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold'}}>公共政策学真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'2.5vw',marginTop:'3vw',color:"gray"}}>2018年-2019年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw'}} src={require('../images/jiantou.jpg')}/>
                    </div>
                </div> 
                </Link>              
            </div>
        )
    }
}
