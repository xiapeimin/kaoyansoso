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
            linksrc:'',
            storage:window.localStorage,
            flag:0
        }	
        //设置本地存储键值对
      var storage = this.state.storage; 
      if(storage.getItem("appsoso") == null){
        var appsoso= [];
        var d=JSON.stringify(appsoso); 
        storage.setItem("appsoso",d);
      }
    }	
    touchStart() {
        this.setState({ touchState: !this.state.touchState });
    }
    
    componentDidMount(){
        var storage = this.state.storage;
        var json=storage.getItem("appsoso"); 
        var jsonObj=JSON.parse(json);
        console.log(jsonObj);
        this.setState({
            uid:jsonObj[0],
            pwd:jsonObj[1]
        });
    }

    render() {
        var linksrc = this.state.linksrc;
        return (
            
            <div  class="background-pic">
                <div  className='anlogo'>
                    <img style={{width:'25vw',height:'25vw',marginTop:'30%',borderRadius:'40vw'}} src={require('../imgs/login3.jpg')}/>
                </div>
                <ul style={{marginTop:'10vw',textAlign:'center'}}>
                    <li style={{marginBottom:'10px'}}><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../imgs/user.png')}/><input type='text' className='login_input' placeholder='请输入手机号/邮箱' value={this.state.uid} onChange={this.getuid} /></li>
                    <li style={{marginBottom:'10px'}}><img style={{height:'7.5vw',width:'7.5vw',marginTop:'5vw',marginBottom:'-2.5vw',fontSize:'4vw'}} src={require('../imgs/logo1.png')}/><input type='password' className='login_input' placeholder='请输入密码' value={this.state.pwd} onChange={this.getpwd}/></li>
                    
                </ul>
                
                <div className='anpwd'  style={{marginLeft:'-5px'}}>
                    <div><img src={this.state.touchState ? off : on} onClick={this.touchStart.bind(this)}/></div>
                    <p style={{color:'#4d4e4f'}}>记住密码</p>
                </div>
                <button onClick={this.goHome} type='submit' className='login_btn' style={{background:'#7bc1de'}}>登 录</button>
                <Link to='/forgetpwd'><p style={{color:'#047c84',textAlign:'center',fontSize:'4vw'}}>忘记密码？</p></Link>
                <div className='zhuce'>
                    <p style={{color:'#047c84',textAlign:'center',fontSize:'4vw'}}>还没有账号？</p>
                    <Link to='/register'><button className='login_btn' style={{background:'#8d9fb8',opacity:'0.8'}}>注 册</button></Link>
                </div>

                <div style={{display:this.state.flag==0 ? 'none' : 'block',position:'absolute',top:'40%',width:'50%',left:'25%',background:'#fff',height:'8vw',lineHeight:'8vw',textAlign:'center'}}>用户名或密码错误！</div>

            </div>
        )
    }

    getuid = (e) => {  //#09cdd9   background:'#77cfc2',opacity:'0.7'  90c8e0
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
        var storage = this.state.storage;
        var json=storage.getItem("appsoso"); 
        var jsonObj=JSON.parse(json);
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
                        if(!this.state.touchState){
                            console.log('记住密码');
                            jsonObj[0]=this.state.uid;
                            jsonObj[1]=this.state.pwd;
                            var d=JSON.stringify(jsonObj); 
                            storage.setItem("appsoso",d);
                            console.log(jsonObj,'jjjjjj');
                        }else if(this.state.touchState){
                            console.log('不记住密码');
                            jsonObj[0]='';
                            jsonObj[1]='';
                            var d=JSON.stringify(jsonObj); 
                            storage.setItem("appsoso",d);
                            console.log(jsonObj,'jjjjjj');
                        }

                        window.location.hash=`/appTab?uid=${data[i].uid}`;
                        storage.setItem('setisLogin',`/appTab?uid=${data[i].uid}`);  //设置已登录状态 用于自动登录
                        console.log('用户id',data[i].uid);
                        i = data.length;
                        console.log(i);
                    }else if(i == data.length-1 && ((data[i].phone != this.state.uid || data[i].email != this.state.uid) || data[i].pwd != this.state.pwd)){
                        console.log('用户名或密码错误');
                        this.setState({
                            flag:1
                        });
                        var t=1;
                        var tid = setInterval(()=>{
                            t=t-1;
                            if(t<0){
                                this.setState({
                                    flag:0
                                })
                                clearInterval(tid);
                            }
                        },1000);
                    }
                }
            });
            
            
        }
        
        console.log('///////////////////');
    }
}
