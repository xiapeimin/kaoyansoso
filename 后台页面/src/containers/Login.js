import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            touchState: false,
            data:[],
            id:'',
            passwd:'',
            linksrc:'',
            flag:0,
            captchaStr:'',
            text:''
        }	
    }	
    touchStart() {
        this.setState({ touchState: !this.state.touchState });
    }
    
    render(){
        return (
            <div className='big_xpm'>
                <img src={require('../images/login.jpg')} className='login_xpm'/>
                <div className='htai_xpm'>后台登录</div>
                <div className='lobox_xpm'>
                    <div className='limg_xpm'><img src={require('../images/loginusr.png')} className='lgusr_xpm'/></div>
                    
                    <div className='user_xpm'>
                        <div>手机号：</div> 
                        <input type='text' value={this.state.id} onChange={this.getid} /> 
                    </div>
                    <div className='user_xpm'>
                        <div>密码：</div>
                        <input type='password' value={this.state.passwd} onChange={this.getpwd}/>                      
                    </div>
                    <div className='user_xpm'>
                        <div>验证码：</div>
                        <input type='text' value={this.state.captchaStr} onChange={this.getcaptcha} style={{width:'38%'}} />                      
                        <div style={{width:'20%',height:'3vw',marginTop:'-1vw',float:'right',background:'rgb(121, 190, 247)'}}><img src='http://xpm.xpmwqhzygy.top/captcha' alt="captcha" onClick={this.editCaptcha} style={{width:'90%'}} /></div>
                    </div>

                    <div style={{height:'2%'}}></div>
                    <button className='dl_xpm' onClick={this.goHome} style={{color:'#fff',border:'none'}}>登录</button>
                </div>

                <div style={{display:this.state.flag==0 ? 'none' : 'block',position:'absolute',top:'40%',width:'50%',left:'25%',background:'#fff',height:'8vw',lineHeight:'8vw',textAlign:'center'}}>{this.state.text}</div>
            </div>       
        )
    }
    editCaptcha = (e) => {      
        console.log(e.target.src);
        e.target.src="http://xpm.xpmwqhzygy.top/captcha?="+Math.random();
    }
    getid = (e) => {
        this.setState({
            id:e.target.value
        })
    }
    getpwd = (e) => {
        this.setState({
            passwd:e.target.value
        })
        
    }
    getcaptcha = (e) => {
        this.setState({
            captchaStr:e.target.value
        });
    }

    goHome = (e) => {
        var captcha='';
        fetch(`http://xpm.xpmwqhzygy.top/capstr`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                captcha=res.data[0];
                console.log(captcha);

                if(this.state.captchaStr!='' && this.state.captchaStr==captcha && this.state.id != '' && this.state.passwd != ''){
                    console.log(this.state.id,this.state.passwd);
                    fetch(`https://xiangming.yflzy.cn/admin`,{
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
                            if((data[i].phone == this.state.id || data[i].email == this.state.id) && data[i].passwd == this.state.passwd){
                                window.location.hash=`/home?id=${data[i].id}`;
                                console.log('用户id',data[i].id);
                                i = data.length;
                                console.log(i);
                            }else if(i == data.length-1 && ((data[i].phone != this.state.id || data[i].email != this.state.id) || data[i].passwd != this.state.passwd)){
                                console.log('用户名或密码错误');
                                this.setState({
                                    flag:1,
                                    text:'用户名或密码错误！'
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
                    
                    
                }else if(this.state.captchaStr!='' && this.state.captchaStr!=captcha && this.state.id != '' && this.state.passwd != ''){
                                console.log('验证码错误');
                                this.setState({
                                    flag:1,
                                    text:'验证码错误！'
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

            });
        
        
        console.log('///////////////////');
    }
}