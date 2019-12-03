import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Family from './Family';
import User from './User';
import Topic from './Topic';
import System from './System';
import File from './File';

export default class home extends Component{
    constructor(){
        super();
        this.state={
            flag:1
        }
    }
    
    render(){
        return (
            <div className='homebox_xpm'>
                <div className='dh_xpm'>
                    <img src={require('../images/login3.jpg')} className='logo_xpm'/>
                    <span style={{marginLeft:'10px',fontSize:'20px'}}>考研soso</span>
                    <span style={{marginLeft:'20px',position:'absolute',right:'3%'}}>欢迎您！用户名 xxx</span>
                </div>
                <div className='manage_xpm'>
                    <div className='m1_xpm'>后台管理</div>
                    <div className='m2_xpm'><Link to='/'><span style={{color:'#fff'}}>&nbsp;&nbsp;退出登录&nbsp;&nbsp;</span></Link></div>
                </div>
                
                <div className='hbot_xpm'>
                    <div className='tab_xpm'>
                        <Link to='/home'><div className={this.state.flag == 1 ? 'change_xpm' : 'unchange_xpm'} onClick={this.check} style={{color:'#000'}}>首页</div></Link>
                        <Link to='/home/2'><div className={this.state.flag == 2 ? 'change_xpm' : 'unchange_xpm'} onClick={this.check} style={{color:'#000'}}>用户管理</div></Link>
                        <Link to='/home/3'><div className={this.state.flag == 3 ? 'change_xpm' : 'unchange_xpm'} onClick={this.check} style={{color:'#000'}}>动态管理</div></Link>
                        <Link to='/home/4'><div className={this.state.flag == 4 ? 'change_xpm' : 'unchange_xpm'} onClick={this.check} style={{color:'#000'}}>文件管理</div></Link>
                        <Link to='/home/5'><div className={this.state.flag == 5 ? 'change_xpm' : 'unchange_xpm'} onClick={this.check} style={{color:'#000'}}>系统管理</div></Link>
                    </div>
                    <div className='tap_xpm'>
                        <Router>
                            <Switch>
                                <Route path='/home' exact component={Family} />
                                <Route path='/home/2' component={User} />
                                <Route path='/home/3' component={Topic} />
                                <Route path='/home/4' component={File} />
                                <Route path='/home/5' component={System} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>       
        )
    }
    check = (e) => {
        if(e.target.innerHTML == '首页'){
            this.setState({
                flag:1
            });
        }else if(e.target.innerHTML == '用户管理'){
            this.setState({
                flag:2
            });
        }else if(e.target.innerHTML == '动态管理'){
            this.setState({
                flag:3
            });
        }else if(e.target.innerHTML == '文件管理'){
            this.setState({
                flag:4
            });
        }else if(e.target.innerHTML == '系统管理'){
            this.setState({
                flag:5
            });
        }
    }
}