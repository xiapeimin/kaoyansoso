import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <Link to='/my'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{color:'black'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >设置</NavBar>
                </Link>
                <div style={{marginTop:'20px',marginBottom:'0',backgroundColor:'white',height:'50px',borderBottom:'2px solid #DDDDDD'}}>
                    <p style={{lineHeight:'50px',marginLeft:'20px',marginBottom:'0'}}>头像</p>
                </div>
                <div style={{backgroundColor:'white',height:'50px',borderBottom:'2px solid #DDDDDD'}}>
                    <p style={{lineHeight:'50px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>昵称</p>
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}>
                    <p style={{lineHeight:'70px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>考研宣言</p>
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}>
                    <p style={{lineHeight:'70px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>考研院校</p>
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}>
                    <p style={{lineHeight:'70px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>考研专业</p>
                </div>
                <div style={{backgroundColor:'white',height:'50px',borderBottom:'2px solid #DDDDDD',borderTop:'2px solid #DDDDDD',marginTop:'20px'}}>
                    <p style={{lineHeight:'50px',textAlign:"center",margin:'0'}}>退出登录</p>
                </div>
            </div>
        )
    }
}