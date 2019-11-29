import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import on from './on.png';
import off from './off.png';

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
                <div>
                    <img style={{width:'25vw',height:'25vw',marginLeft:'35vw',marginTop:'50px',borderRadius:'40vw'}}src={require('../images/login3.jpg')}/>
                </div>
                <ul style={{marginTop:'10vw',marginLeft:'12.5vw'}}>
                    <li><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../images/user.png')}/><input className='login_input' placeholder='请输入手机号/邮箱'/></li>
                    <li><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../images/logo1.png')}/><input className='login_input' placeholder='请输入密码'/></li>
                    <li> <div style={{height:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',marginLeft:'1.25vw',fontSize:'4vw'}} onClick={this.touchStart.bind(this)}>
                        <img  style={{height:'7.5vw',width:'7.5vw'}} src={this.state.touchState ? on : off} />
                        </div>			
                    <p style={{fontSize:'4vw',color:'white',marginLeft:'10vw',marginTop:'-6.5vw'}}>记住密码</p></li>
                    <Link to='/yantiku'><button className='login_btn'>登录</button></Link>
                    <li style={{paddingTop:'4vw',color:'#3fcccb',marginLeft:'28vw',fontSize:'4vw'}}>忘记密码？</li>
                </ul>
                <li style={{paddingTop:'2.5vw',color:'#3fcccb',marginLeft:'38vw',marginTop:'9vw',fontSize:'4vw'}}>还没有账号？</li>
                <Link to='./register'><button className='login_btn' style={{marginLeft:'16.5vw'}}>注册</button></Link>
            </div>
        )
    }
}
