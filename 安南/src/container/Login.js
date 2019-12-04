import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import on from '../imgs/on.png';
import off from '../imgs/off.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touchState: false
        }	
    }	
    touchStart() {
        this.setState({ touchState: !this.state.touchState });
	}

    render() {
        return (
            
            <div  class="background-pic">
                <div  className='anlogo'>
                    {/* //修改了marginTop */}
                    <img style={{width:'25vw',height:'25vw',marginTop:'30vw',borderRadius:'40vw'}} src={require('../imgs/login3.jpg')}/>
                </div>
                <ul style={{marginTop:'10vw',textAlign:'center'}}>
                    <li style={{marginBottom:'2.5vw'}}><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../imgs/user.png')}/><input type='text' className='login_input' placeholder='请输入手机号/邮箱'/></li>
                    <li style={{marginBottom:'2.5vw'}}><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../imgs/logo1.png')}/><input type='password' className='login_input' placeholder='请输入密码'/></li>
                    
                </ul>
                
                <div className='anpwd'>
                    <div><img src={this.state.touchState ? off : on} onClick={this.touchStart.bind(this)}/></div>
                    <p>记住密码</p>
                </div>
                {/* //添加了marginTop */}
                <Link to='/appTab'><button className='login_btn' style={{background:'#09cdd9',marginTop:'2vw'}}>登录</button></Link>
                <Link to='/forgetpwd'><p style={{color:'#047c84',textAlign:'center',fontSize:'4vw'}}>忘记密码？</p></Link>
                <div className='zhuce'>
                    <p style={{color:'#047c84',textAlign:'center',fontSize:'4vw'}}>还没有账号？</p>
                    <Link to='/register'><button className='login_btn' style={{background:'#77cfc2',opacity:'0.7'}}>注册</button></Link>
                </div>
            </div>
        )
    }
}
