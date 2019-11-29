import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import OtherSchool from './OtherSchool'
import { NavBar,Icon,WhiteSpace,WingBlank } from 'antd-mobile';


export default class ProCheck extends Component {
    render() {
        return (
            <div>
               <NavBar               
                mode="light"
                icon={<Icon type="left" />}
                style={{backgroundColor:'#66cccc',color:'white',height:'6vw'}}>
                    <span style={{backgroundColor:'#66cccc',color:'white',fontSize:'4vw'}}>xxx专业</span>
                </NavBar>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{height:'20vw',width:'100%',border:'2px solid gray',borderRadius:'10px',fontSize:'3vw'}}>
                    <h2>专业简介</h2>
                    <p>...专业是一门。。。</p>
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{height:'20vw',width:'100%',border:'2px solid gray',borderRadius:'10px',fontSize:'3vw'}}>
                    <h2>培养目标</h2>
                    <p>...专业是培养。。。</p>
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{height:'20vw',width:'100%',border:'2px solid gray',borderRadius:'10px',fontSize:'3vw'}}>
                    <h2>就业方向</h2>
                    <p>...专业的就业方向。。。</p>
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{height:'25vw',width:'100%',border:'2px solid gray',borderRadius:'10px',fontSize:'3vw'}}>
                    <h2>招生院校推荐</h2>
                    <p>河北师范大学/软件学院</p>
                    <p>北京师范大学/软件学院</p>
                </div>
                </WingBlank>
                <WhiteSpace/>
                        <Link to='/otherSchool'>
                            <button style={{width:'100%',height:'10vw',backgroundColor:'#66cccc',fontSize:'3vw'}}>查看其他开设院校</button>
                        </Link>
            </div>
        )
    }
}
