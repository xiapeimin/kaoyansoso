import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import on from '../imgs/on.png';
import off from '../imgs/off.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touchState: false,
            data:[],
            uid:'',
            pwd:'',
            linksrc:''
        }	
    }	
    touchStart() {
        this.setState({ touchState: !this.state.touchState });
    }
    

    render() {
        var linksrc = this.state.linksrc;
        return (
            
            <div  class="background-pic">
                <div  className='anlogo'>
                    <img style={{width:'25vw',height:'25vw',marginTop:'30%',borderRadius:'40vw'}} src={require('../imgs/login3.jpg')}/>
                </div>
                <ul style={{marginTop:'10vw',textAlign:'center'}}>
                    <li style={{marginBottom:'10px'}}><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../imgs/user.png')}/><input type='text' className='login_input' placeholder='请输入手机号/邮箱' onChange={this.getuid} /></li>
                    <li style={{marginBottom:'10px'}}><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../imgs/logo1.png')}/><input type='password' className='login_input' placeholder='请输入密码' onChange={this.getpwd}/></li>
                    
                </ul>
                
                <div className='anpwd'>
                    <div><img src={this.state.touchState ? off : on} onClick={this.touchStart.bind(this)}/></div>
                    <p>记住密码</p>
                </div>
                <button onClick={this.goHome} type='submit' className='login_btn' style={{background:'#09cdd9'}}>登录</button>
                <Link to='/forgetpwd'><p style={{color:'#047c84',textAlign:'center',fontSize:'4vw'}}>忘记密码？</p></Link>
                <div className='zhuce'>
                    <p style={{color:'#047c84',textAlign:'center',fontSize:'4vw'}}>还没有账号？</p>
                    <Link to='/register'><button className='login_btn' style={{background:'#77cfc2',opacity:'0.7'}}>注册</button></Link>
                </div>
            </div>
        )
    }

    getuid = (e) => {
        this.setState({
            uid:e.target.value
        })
    }
    getpwd = (e) => {
        this.setState({
            pwd:e.target.value
        })
        
    }

    goHome = (e) => {
        if(this.state.uid != '' && this.state.pwd != ''){
            console.log(this.state.uid,this.state.pwd);
            fetch(`http://xpm.xpmwqhzygy.top/user`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    data:res.data
                });    
                
                var data=this.state.data;
                console.log(data,'llllllllllllll');
                for(var i=0;i < data.length;i++){
                    if((data[i].phone == this.state.uid || data[i].email == this.state.uid) && data[i].pwd == this.state.pwd){
                        window.location.hash=`/appTab?uid=${data[i].uid}`;
                        console.log('用户id',data[i].uid);
                        i = data.length;
                        console.log(i);
                    }else if(i == data.length-1 && ((data[i].phone != this.state.uid || data[i].email != this.state.uid) || data[i].pwd == this.state.pwd)){
                        console.log('用户名或密码错误')
                    }
                }
            });
            
            
        }
        
        console.log('///////////////////');
    }
}
