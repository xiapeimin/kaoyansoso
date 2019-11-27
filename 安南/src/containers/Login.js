import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div  class="background-pic">
                <div>
                    <img style={{width:'25vw',height:'25vw',marginLeft:'35vw',marginTop:'80px'}}src={require('../images/login3.jpg')}/>
                </div>
                <ul style={{marginTop:'2.5vw',marginLeft:'12.5vw'}}>
                    <li><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../images/user.png')}/><input className='login_input' placeholder='请输入手机号/邮箱'/></li>
                    <li><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../images/logo1.png')}/><input className='login_input' placeholder='请输入密码'/></li>
                    <li><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',marginLeft:'1.25vw',fontSize:'4vw'}} src={require('../images/start.png')}/><span style={{fontSize:'4vw',color:'white'}}>记住密码</span></li>
                    <Link to='/yantiku'><button className='login_btn'>登录</button></Link>
                    <li style={{paddingTop:'2.5vw',color:'#3fcccb',marginLeft:'22.5vw',fontSize:'4vw'}}>忘记密码？</li>
                </ul>
                <li style={{paddingTop:'2.5vw',color:'#3fcccb',marginLeft:'33vw',marginTop:'12.5vw',fontSize:'4vw'}}>还没有账号？</li>
                <Link to='./register'><button className='login_btn' style={{marginLeft:'17.5vw'}}>注册</button></Link>
            </div>
        )
    }
}
