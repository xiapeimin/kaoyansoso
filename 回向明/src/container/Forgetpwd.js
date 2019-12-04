import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';


export default class Forgetpwd extends Component{
    
    render(){
        return (
            <div>
                <NavBar
                style={{background:'#66cccc',color:'#fff',marginBottom:'10vw'}} 
                leftContent={<Link to={'/'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>忘记密码</span></NavBar>

                <ul style={{textAlign:'center'}}>
                    <li><input style={{paddingLeft:'5%'}} type='tel' className='login_input1' placeholder='手机号'/></li>                
                    <li><input style={{paddingLeft:'5%',width:'55%'}} type='text' className='login_input1' placeholder='输入验证码'/><span style={{color:'blue',marginRight:'5%',width:'20%',height:'5vw',marginTop:'7vw',float:'right'}}>获取验证码</span></li>
                </ul>

                <Link to={'/findpwd'}><div style={{width:'40%',height:'12vw',marginLeft:'30%',marginTop:'10vw',background:'#66cccc',borderRadius:'2vw',textAlign:'center',color:'#fff',lineHeight:'12vw',fontSize:'4.5vw'}}>找回密码</div></Link>
            </div>       
        )
    }
}