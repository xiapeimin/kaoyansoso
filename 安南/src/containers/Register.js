import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar, WingBlank,Flex,Carousel,Icon,SearchBar} from 'antd-mobile';

export default class Register extends Component {
    render() {
        return (
            <div>
            <NavBar   
                style={{backgroundColor:'#66cccc',color:'white',height:'15vw'}}                             
                    ><Link to='/Login'><div style={{height:'5vw',width:'5vw',marginLeft:'-32vw'}}>
                        <img  style={{height:'5vw',width:'5vw'}} src={require('../images/jiantou.png')}/></div></Link>
                        <span style={{color:'white',fontSize:'6vw',height:'10vw',marginTop:'3vw'}}>用户注册</span></NavBar>

            <ul>
                <li><input className='login_input1' placeholder='昵称'/></li>
                <li><input className='login_input1' placeholder='手机号昵称'/></li>
                <li><input className='login_input1' placeholder='邮箱'/></li>
                <li><input className='login_input1' placeholder='密码'/></li>
                <li><input className='login_input1' placeholder='确认密码'/></li>
            </ul>
            <div>
            <input type='radio' style={{width:'7.5vw',height:'7.5vw',marginTop:'9vw',marginLeft:'10vw'}}/>
            <div style={{marginTop:'-6.25vw',marginLeft:'19vw'}} >
            <span style={{fontSize:'4vw'}}>我已阅读并同意《考研soso用户协议》</span></div>            
            </div>

            <button className='login_btn' style={{marginLeft:'17.5vw',marginTop:'12.5vw'}}><Link to='./registerSuccess'><span style={{color:'white',fontSize:'5vw'}}>
                注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</span></Link></button>

            

            </div>
        )
    }
}
