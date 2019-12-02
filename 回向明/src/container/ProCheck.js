import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import OtherSchool from './OtherSchool'
import { NavBar,Icon,WhiteSpace,WingBlank } from 'antd-mobile';


export default class ProCheck extends Component {
    render() {
        return (
            <div className='testbox'>
               <NavBar
                style={{background:'#21a3e0',color:'#fff'}} 
                leftContent={<Link to={'/professional/1'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>专业详情</span></NavBar>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw'}}>
                    <h2>专业简介</h2>
                    <p>...专业是一门。。。</p>
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw'}}>
                    <h2>培养目标</h2>
                    <p>...专业是培养。。。</p>
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw'}}>
                    <h2>就业方向</h2>
                    <p>...专业的就业方向。。。</p>
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw'}}>
                    <h2>招生院校推荐</h2>
                    <p>河北师范大学/软件学院</p>
                    <p>北京师范大学/软件学院</p>
                </div>
                </WingBlank>
                <WhiteSpace/>
                        <Link to='/otherSchool'>
                            <button style={{border:'none',position:'absolute',bottom:'0',width:'100%',height:'10vw',backgroundColor:'#21a3e0',fontSize:'3vw',color:'#fff'}}>查看其他开设院校</button>
                        </Link>
            </div>
        )
    }
}
