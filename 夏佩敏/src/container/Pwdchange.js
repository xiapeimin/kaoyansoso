import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';



export default class Pwdchange extends Component{
    constructor(){
        super();
        this.state = {
            flag:0,
            uid:'',
            pwd1:'',
            pwd2:'',
            oldpwd:'',
            unpwd:0,
            text:'',
            storage:window.localStorage
        }
    }

    componentDidMount(){
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        this.setState({
            uid:uid
        });
        console.log(uid);
    }
    
    render(){
        var uid = this.state.uid;
        return (
            <div>
                <NavBar
                style={{background:'#fff',color:'#000',marginBottom:'10vw'}} 
                leftContent={<Link to={`/myset?uid=${uid}`}><img src={require('../imgs/zjt2.png')} /></Link>}
                mode="light"
                ><span style={{fontSize:'22px'}}>修改密码</span></NavBar>
                

                <ul style={{textAlign:'center'}}>
                    <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='输入原密码' onChange={this.oldpwd} /></li>
                    <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='设置新密码' onChange={this.setpwd1} /></li>
                    <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='确认密码' onChange={this.setpwd2} /></li>
                </ul>

                <div onClick={this.changepwd} style={{width:'40%',height:'12vw',marginLeft:'30%',marginTop:'10vw',background:'#66cccc',borderRadius:'2vw',textAlign:'center',color:'#fff',lineHeight:'12vw',fontSize:'4.5vw'}}>提交</div>

                <p style={{color:'red',width:'100%',textAlign:'center',display:this.state.unpwd==0 ? 'none' : 'block'}}>{this.state.text}</p>

                <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                    <p>密码修改成功！</p>
                    <Link to={'/'}><div className='glin' style={{background:'#66cccc',color:'#fff',justifyContent:'center',fontSize:'18px',alignItems:'center',display: '-webkit-flex'}}>
                        请重新登录
                    </div></Link>
                </div>
            
            </div>       
        )
    }
    oldpwd = (e) => {
        var oldpwd = e.target.value;
        this.setState({
            oldpwd:oldpwd
        })
    }
    setpwd1 = (e) => {
        var pwd = e.target.value;
        this.setState({
            pwd1:pwd
        })
    }
    setpwd2 = (e) => {
        var pwd = e.target.value;
        this.setState({
            pwd2:pwd
        })
    }
    changepwd = () => {
        var uid = this.state.uid;
        var storage = this.state.storage;

        if(this.state.oldpwd!='' && this.state.pwd1!='' && this.state.pwd2!=''){
            fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
            method: 'GET',        
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data[0].pwd);
                var oldpwd =  res.data[0].pwd; 
                if(this.state.oldpwd == oldpwd){
                    if(this.state.pwd1==this.state.pwd2 && this.state.pwd1!='' && this.state.pwd2!=''){
                        const post = {
                            pwd:this.state.pwd1
                        }
                        fetch(`http://xpm.xpmwqhzygy.top/setpwd/${uid}`,{
                            method:"PUT",
                            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                            body:JSON.stringify(post)
                        })
                        .then(res =>res.json())
                        .then(data =>{
                            console.log(data);
                        });
                        var data = [];
                        var d=JSON.stringify(data); 
                        storage.setItem('appsoso',d);
                        this.setState({
                            flag:1
                        });
                    }else if(this.state.pwd1!=this.state.pwd2){
                        console.log('新密码设置不一致');
                        this.setState({
                            unpwd:1,
                            text:'新密码设置不一致!'
                        })
                    }
                }else if(this.state.oldpwd != oldpwd) {
                        console.log('原密码错误！');
                        this.setState({
                            unpwd:1,
                            text:'原密码错误！'
                        })
                }
            });
        }


        
        
    }
    quxiao = () => {
        this.setState({
            flag:0
        })
    }
}