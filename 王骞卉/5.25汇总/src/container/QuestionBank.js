import React, { Component } from 'react';
import {NavBar, Flex} from 'antd-mobile';
import {SearchBar} from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class QuestionBank extends Component {
    
    render() {
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        return (
            <div className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/appTab?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff',fontSize:'22px'}}>研题库</span></NavBar>
                <Link to={`/search?uid=${uid}&type=test&his=yes`}><SearchBar value={'小可爱搜索一下想要的真题吧'} placeholder="Search" cancelText={'搜索'} /></Link>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <Link to={`/TestList?uid=${uid}&test=1`}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../imgs/timg1.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold',color:'#000'}}>英语真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'3.5vw',marginTop:'3vw',color:"gray"}}>2008年-2018年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw',marginRight:'4%'}} src={require('../imgs/jiantou.jpg')}/>
                    </div>
                    </Link>
                </div>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                <Link to={`/TestList?uid=${uid}&test=2`}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../imgs/timg.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold',color:'#000'}}>政治真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'3.5vw',marginTop:'3vw',color:"gray"}}>2008年-2018年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw',marginRight:'4%'}} src={require('../imgs/jiantou.jpg')}/>
                    </div>
                </Link>
                </div>
                <Link to={`/TestList?uid=${uid}&test=3`}>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../imgs/timg2.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold',color:'#000'}}>数学真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'3.5vw',marginTop:'3vw',color:"gray"}}>2008年-2018年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw',marginRight:'4%'}} src={require('../imgs/jiantou.jpg')}/>
                    </div>
                </div>
                </Link>
                <Link to={`/TestList?uid=${uid}&test=4`}>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../imgs/timg3.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold',color:'#000'}}>软件工程真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'3.5vw',marginTop:'3vw',color:"gray"}}>2008年-2018年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw',marginRight:'4%'}} src={require('../imgs/jiantou.jpg')}/>
                    </div>
                </div>
                </Link>
                <Link to={`/TestList?uid=${uid}&test=5`}>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../imgs/timg4.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold',color:'#000'}}>法理学真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'3.5vw',marginTop:'3vw',color:"gray"}}>2008年-2018年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw',marginRight:'4%'}} src={require('../imgs/jiantou.jpg')}/>
                    </div>
                </div>
                </Link>
                <Link to={`/TestList?uid=${uid}&test=6`}>
                <div style={{height:'20vw',marginTop:'5vw',borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <div style={{marginLeft:'5vw',marginTop:'2.5vw'}}>
                        <img style={{height:'12.5vw',width:'12.5vw'}} src={require('../imgs/timg5.jpg')}/>
                        <div style={{marginLeft:'20vw', marginTop:'-12.5vw'}}>
                            <span style={{fontSize:'5vw',marginTop:'1vw',fontWeight:'bold',color:'#000'}}>公共政策学真题</span>                                    
                            <Flex>
                            <span style={{fontSize:'3.5vw',marginTop:'3vw',color:"gray"}}>2008年-2018年</span>
                            </Flex>
                        </div>
                        <img style={{width:'5vw',float:"right",marginTop:'-6vw',marginRight:'4%'}} src={require('../imgs/jiantou.jpg')}/>
                    </div>
                </div> 
                </Link>              
            </div>
        )
    }
}
