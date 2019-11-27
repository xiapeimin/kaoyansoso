import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar, WingBlank,Flex,Carousel,Icon,SearchBar} from 'antd-mobile';

export default class RegisterSuccess extends Component {
    render() {
        return (
            <div>            
            <NavBar   
                style={{backgroundColor:'#66cccc',color:'white',height:'15vw'}}                             
                    ><span style={{color:'white',fontSize:'8vw',height:'10vw'}}>考研soso</span></NavBar>
            <Flex style={{marginLeft:'12.5vw',marginTop:'5vw',fontWeight:'bold',fontSize:'4vw'}}>亲爱的小伙伴~：</Flex>
            <Flex style={{marginLeft:'20vw',marginTop:'5vw',fontWeight:'bold',fontSize:'4vw'}}> 注册成功啦!</Flex>
            <Flex style={{marginLeft:'27.5vw',marginTop:'5vw',fontWeight:'bold',fontSize:'4vw'}}>考研soso预祝你考研顺利哦!</Flex>
            <button className='login_btn1' style={{marginLeft:'20vw'}}><Link to='./Login'><span style={{fontSize:'8VW'}}>去登录</span></Link></button>
            </div>
        )
    }
}