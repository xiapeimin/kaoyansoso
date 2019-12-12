import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';


export default class Forgetpwd extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            pass:'',
            text:'获取验证码',
            pwd:'',
            unpwd:0
        }
    }
    render(){
        return (
            <div>
                <NavBar
                style={{background:'#66cccc',color:'#fff',marginBottom:'10vw'}} 
                leftContent={<Link to={'/'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>忘记密码</span></NavBar>

                <ul style={{textAlign:'center'}}>
                    <li><input style={{paddingLeft:'5%'}} type='tel' className='login_input1' placeholder='请输入邮箱' onChange={this.getemail} /></li>                
                    <li><input style={{paddingLeft:'5%',width:'55%'}} type='text' className='login_input1' placeholder='输入邮箱验证码' onChange={this.inppass} /><span style={{color:'blue',marginRight:'5%',width:'20%',height:'5vw',marginTop:'7vw',float:'right'}} onClick={this.getpass}>{this.state.text}</span></li>
                </ul>

                <div onClick={this.getnext} style={{width:'40%',height:'12vw',marginLeft:'30%',marginTop:'10vw',background:'#66cccc',borderRadius:'2vw',textAlign:'center',color:'#fff',lineHeight:'12vw',fontSize:'4.5vw'}}>下一步</div>

                <p style={{color:'red',width:'100%',textAlign:'center',display:this.state.unpwd==0 ? 'none' : 'block'}}>{this.state.text2}</p>
            </div>       
        )
    }
    getemail = (e) => {
        var email = e.target.value;
        this.setState({
            email:email
        });
        console.log(email);
    }
    inppass = (e) => {
        var pass = e.target.value;
        this.setState({
            pass:pass
        });
        console.log(pass);
    }
    getpass = () => {
        var flag=0;
        if(this.state.email!=''){
            fetch(`http://xpm.xpmwqhzygy.top/user`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{    
                var data=res.data;
                console.log(data,'llllllllllllll');
                for(var i=0;i < data.length;i++){
                    if(data[i].email == this.state.email){
                        flag=1
                        i = data.length;
                        console.log(i);
                    }else if(i == data.length-1 && data[i].email != this.state.email){
                        console.log('邮箱不存在！')
                        this.setState({
                            unpwd:1,
                            text2:'邮箱不存在，请正确输入！'
                        })
                    }
                }
                console.log(flag);
                if(flag==1){
                    const post={
                        email:this.state.email
                    };
                    fetch(`http://xpm.xpmwqhzygy.top/email`,{
                        method:"POST",
                        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                        body:JSON.stringify(post)//把提交的内容转字符串
                    })
                    .then(res =>res.json())
                    .then(res =>{
                        console.log(res.data);//返回验证码用于验证
                        this.setState({
                            pwd:res.data
                        });
                    });
    
                    //60秒倒计时
                    var t = 60;
                    var tid = setInterval(()=>{
                        this.setState({
                            text:t+'秒后重试'
                        });
                        t = t-1;
                        if(t<0){
                            clearInterval(tid);
                            this.setState({
                                text:'获取验证码',
                                pwd:'***'
                            });
                        }
                    },1000);
                    
    
                }
            });
            
            
            
        }

    }
    getnext = () => {  //可能有bug 将用户邮箱和验证码存于数据库 从数据库中存取验证 每个用户不同 不是直接返回验证码 安全性低
        if(this.state.pass==this.state.pwd && this.state.pass!=''){
            var email = this.state.email;
            window.location.hash=`/findpwd?email=${email}`;
        }else if(this.state.pass!=this.state.pwd){
            this.setState({
                unpwd:1,
                text2:'验证码错误或超时！'
            })
        }
    }
}