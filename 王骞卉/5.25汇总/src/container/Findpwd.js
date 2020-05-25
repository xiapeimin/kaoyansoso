import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';



export default class Findpwd extends Component{
    constructor(){
        super();
        this.state = {
            flag:0,
            email:'',
            pwd1:'',
            pwd2:'',
            unpwd:0
        }
    }

    componentDidMount(){
        var str = this.props.location.search;
        var email = str.split('=')[1];
        this.setState({
            email:email
        });
        console.log(email);
    }
    
    render(){
        
        return (
            <div>
                <NavBar
                style={{background:'#66cccc',color:'#fff',marginBottom:'10vw'}} 
                leftContent={<Link to={'/forgetpwd'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>找回密码</span></NavBar>

                <ul style={{textAlign:'center'}}>
                    <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='设置新密码' onChange={this.setpwd1} /></li>
                    <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='确认密码' onChange={this.setpwd2} /></li>
                </ul>

                <div onClick={this.changepwd} style={{width:'40%',height:'12vw',marginLeft:'30%',marginTop:'10vw',background:'#66cccc',borderRadius:'2vw',textAlign:'center',color:'#fff',lineHeight:'12vw',fontSize:'4.5vw'}}>提交</div>

                <p style={{color:'red',width:'100%',textAlign:'center',display:this.state.unpwd==0 ? 'none' : 'block'}}>密码输入不一致！</p>

                <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                    <p>密码修改成功！</p>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                        <div><Link to='/' style={{color:'#000'}}>去登录</Link></div>
                    </div>
                </div>
            
            </div>       
        )
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
        if(this.state.pwd1==this.state.pwd2 && this.state.pwd1!='' && this.state.pwd2!=''){
            var email = this.state.email;
            console.log(email);
            const post = {
                pwd:this.state.pwd1
            }
            fetch(`http://xpm.xpmwqhzygy.top/changepwd/${email}`,{
                method:"PUT",
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:JSON.stringify(post)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
            });

            this.setState({
                flag:1
            });
        }else if(this.state.pwd1!=this.state.pwd2){
            console.log('密码输入不一致');
            this.setState({
                unpwd:1
            })
        }
        
    }
    quxiao = () => {
        this.setState({
            flag:0
        })
    }
}