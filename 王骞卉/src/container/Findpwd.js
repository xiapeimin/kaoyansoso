import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';



export default class Findpwd extends Component{
    constructor(){
        super();
        this.state = {
            flag:0
        }
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
                    <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='设置新密码'/></li>
                    <li><input style={{paddingLeft:'5%'}} type='password' className='login_input1' placeholder='确认密码'/></li>
                </ul>

                <div onClick={this.changepwd} style={{width:'40%',height:'12vw',marginLeft:'30%',marginTop:'10vw',background:'#66cccc',borderRadius:'2vw',textAlign:'center',color:'#fff',lineHeight:'12vw',fontSize:'4.5vw'}}>提交</div>

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
    changepwd = () => {
        this.setState({
            flag:1
        })
    }
    quxiao = () => {
        this.setState({
            flag:0
        })
    }
}