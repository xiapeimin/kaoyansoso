import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component{
    
    render(){
        return (
            <div className='big_xpm'>
                <img src={require('../images/login.jpg')} className='login_xpm'/>
                <div className='htai_xpm'>后台登录</div>
                <div className='lobox_xpm'>
                    <div className='limg_xpm'><img src={require('../images/loginusr.png')} className='lgusr_xpm'/></div>
                    
                    <div className='user_xpm'>
                        <div>用户名：</div> 
                        <input type='text' /> 
                    </div>
                    <div className='user_xpm'>
                        <div>密码：</div>
                        <input type='password' />                      
                    </div>

                    <Link to={'/home'}><div className='dl_xpm' style={{color:'#fff'}}>登录</div></Link>
                </div>
            </div>       
        )
    }
}