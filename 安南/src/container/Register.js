import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar, Button} from 'antd-mobile';

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            flag:0,
            rad:0
        }
    }
    render() {
        return (
            <div>
            <NavBar
                style={{background:'#66cccc',color:'#fff',marginBottom:'10vw'}} 
                leftContent={<Link to={'/'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>注册</span></NavBar>
                
            <ul style={{textAlign:'center'}}>
                <li><input style={{paddingLeft:'5%'}} type='text' className='login_input1' placeholder='昵称'/></li>
                <li><input style={{paddingLeft:'5%'}} type='tel' className='login_input1' placeholder='手机号'/></li>
                <li><input style={{paddingLeft:'5%'}} type='email' className='login_input1' placeholder='邮箱'/></li>
                <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='密码'/></li>
                <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='确认密码'/></li>
                <li><input style={{paddingLeft:'5%',width:'55%'}} type='text' className='login_input1' placeholder='输入验证码'/><span style={{color:'blue',marginRight:'5%',width:'20%',height:'5vw',marginTop:'7vw',float:'right'}}>获取验证码</span></li>
            </ul>
            
            <div>
            <input type='radio' style={{width:'5.8vw',height:'5.8vw',marginTop:'9vw',marginLeft:'10vw'}} onClick={this.checkRadio}/>
            <div style={{marginTop:'-6.25vw',marginLeft:'19vw'}} >
            <span style={{fontSize:'4vw'}}>我已阅读并同意《考研soso用户协议》</span></div>            
            </div>

            <button onClick={this.registerGo} className='login_btn' style={{marginLeft:'17.5vw',marginTop:'12.5vw'}}><span style={{color:'white',fontSize:'5vw'}}>
                注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</span></button>

            <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}>
            
            </div>
            <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                <p>注册成功！</p>
                <div className='glin'>
                    <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                    <div><Link to='/' style={{color:'#000'}}>去登录</Link></div>
                </div>
            </div>
            
              
            </div>
        )
    }

    registerGo = () =>{
        if(this.state.rad == 1){
            this.setState({
                flag:1
            })
        }
    }
    quxiao = () => {
        this.setState({
            flag:0
        })
    }
    checkRadio = () => {
        this.setState({
            rad:1
        })
    }

}
