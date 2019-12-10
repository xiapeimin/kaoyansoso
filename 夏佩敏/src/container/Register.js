import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar, Button} from 'antd-mobile';


export default class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            phone:'',
            email:'',
            pwd:'',
            pwd2:'',
            flag:0,
            rad:0,
            uninput:0,
            unname:'',
            data:'',
            captchaStr:''
        }
    }
    

    render() {
        //var checkimg = this.state.data[0];
        //console.log(checkimg);
        return (
            <div>
            <NavBar
                style={{background:'#66cccc',color:'#fff',marginBottom:'10vw'}} 
                leftContent={<Link to={'/'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>注册</span></NavBar>
                
            <ul style={{textAlign:'center'}}>
                <li><input style={{paddingLeft:'5%'}} type='text' className='login_input1' placeholder='昵称' onChange={this.inpName} /></li>
                <li><input style={{paddingLeft:'5%'}} type='tel' className='login_input1' placeholder='手机号' onChange={this.inpPhone}/></li>
                <li><input style={{paddingLeft:'5%'}} type='email' className='login_input1' placeholder='邮箱' onChange={this.inpEmail}/></li>
                <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='密码' onChange={this.inpPwd}/></li>
                <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='确认密码' onChange={this.inpPwd2}/></li>
                <li><input style={{paddingLeft:'5%',width:'50%'}} type='text' className='login_input1' placeholder='输入验证码' onChange={this.getcaptcha} /><span style={{background:'#68d2de',borderRadius:'2px',color:'blue',marginRight:'5%',width:'25%',height:'10vw',marginTop:'5vw',float:'right'}}><img src='http://xpm.xpmwqhzygy.top/captcha' alt="captcha" onClick={this.editCaptcha} style={{width:'90%'}} /></span></li> 
            </ul>
            
            <div>
            <input type='radio' style={{width:'5.8vw',height:'5.8vw',marginTop:'9vw',marginLeft:'10vw'}} onClick={this.checkRadio}/>
            <div style={{marginTop:'-6.25vw',marginLeft:'19vw'}} >
            <span style={{fontSize:'4vw'}}>我已阅读并同意《考研soso用户协议》</span></div>            
            </div>

            <button type='submit' onClick={this.registerGo} className='login_btn' style={{borderRadius:'1.5vw',marginLeft:'17.5vw',marginTop:'12.5vw'}}><span style={{color:'white',fontSize:'5vw'}}>
                注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</span></button>

                <p style={{width:'100%',textAlign:'center',color:'red'}}>{this.state.unname}</p>
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
    editCaptcha = (e) => {      
        console.log(e.target.src);
        e.target.src="http://xpm.xpmwqhzygy.top/captcha?="+Math.random();
    }

    getcaptcha = (e) => {
        this.setState({
            captchaStr:e.target.value
        });
    }
    inpName = (e) => {
        this.setState({
            username:e.target.value
        });
    }
    inpPhone = (e) => {
        this.setState({
            phone:e.target.value
        });
    }
    inpEmail = (e) => {
        this.setState({
            email:e.target.value
        });
    }
    inpPwd = (e) => {
        this.setState({
            pwd:e.target.value
        });
    }
    inpPwd2 = (e) => {
        this.setState({
            pwd2:e.target.value
        });
    }

    onSubmit = (e) => {
        console.log('提交用户数据开始。。。。。')
        // 阻止事件传递
       //e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            username:this.state.username,
            phone:this.state.phone,
            email:this.state.email,
            pwd:this.state.pwd,
            num:0
        };

        //注册用户信息
        fetch(`http://xpm.xpmwqhzygy.top/register`,{
            // post提交
            method:"POST",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        });

    }
    

    registerGo = () =>{
        var captcha='';
        fetch(`http://xpm.xpmwqhzygy.top/capstr`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                captcha=res.data[0];
                console.log(captcha);

                if(this.state.captchaStr!='' && this.state.captchaStr==captcha && this.state.rad == 1 && this.state.username!='' && this.state.phone!='' && this.state.email!='' && this.state.email!='' && this.state.pwd!='' && this.state.pwd2!='' && this.state.pwd==this.state.pwd2){
                    fetch(`http://xpm.xpmwqhzygy.top/user`,{
                    method: 'GET'
                    })
                    .then((res)=>res.json())
                    .then((res)=>{
                        var data=res.data;
                        console.log(data,'llllllllllllll');
                        for(var i=0;i < data.length;i++){
                            if(data[i].phone == this.state.phone || data[i].email == this.state.email){
                                console.log('手机号或邮箱已经注册过！');
                                this.setState({
                                    unname:'手机号或邮箱已经注册过！'
                                })
                                i = data.length;
                            }else if(i == data.length-1 && data[i].phone != this.state.phone && data[i].email != this.state.email){
                                this.onSubmit();
                                this.setState({
                                    flag:1
                                });
                            }
                        }
                        if(data.length==0){
                            this.onSubmit();
                            this.setState({
                                flag:1
                            });
                        }
                    });
                    
                    
                }else if(this.state.captchaStr=='' || this.state.username == '' || this.state.phone == '' || this.state.email == '' || this.state.pwd == '' || this.state.pwd2 == ''){
                    this.setState({
                        uninput:1,
                        unname:'输入不能为空！'
                    });
                }else if((this.state.pwd != this.state.pwd2) && this.state.pwd != '' && this.state.pwd2 != ''){
                    this.setState({
                        uninput:1,
                        unname:'密码输入不一致！'
                    });
                }else if(this.state.captchaStr!=captcha){
                    this.setState({
                        uninput:1,
                        unname:'验证码错误！'
                    });
                }else if(this.state.rad == 0){
                    this.setState({
                        unname:'请同意用户协议！'
                    })
                }
                console.log(this.state.username,this.state.phone,this.state.email,this.state.pwd,this.state.pwd2);
        
            });
        
        
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
