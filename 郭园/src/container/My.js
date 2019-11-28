import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import touxiang from '../images/头像.jpg'
import yanxiao from '../images/研校.png'
import jihua from '../images/计划.png'
import shoucang from '../images/收藏.png'
import wenjian from '../images/文件.png'
import shezhi from '../images/设置.png'
import bangzhu from '../images/帮助.png'
import jiantou from '../images/箭头.png'
import beijing from '../images/yh.jpg'
export default class My extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#FFFFFF'}}>
                <div style={{width:'100%',height:'250px',backgroundImage: `url(${beijing})`}}>
                <Link to='/myset'><img src={shezhi} alt="" style={{width:'45px',height:'40px',padding:'10px',float:'right'}}></img></Link>
                    <img src={touxiang} alt="" style={{width:'26%',height:'100px',paddingTop:'20px',marginLeft:'37%'}}/>
                    <div style={{fontSize:'18px',color:'#FFFFFF'}}>
                        <p name="username" style={{textAlign:'center',margin:'4px'}}>学渣考研</p> 
                        <p name="qianming" style={{textAlign:'center',margin:'4px'}}>我是学渣，我要考研</p>
                    </div>
                    <div style={{width:'100%',height:'74px',fillOpacity:'50',opacity:'0.5',backgroundColor:'#FFFFFF'}}>
                        <div style={{width:'33%',height:'68px',float:'left',borderRightColor:'#AAAAAA',borderRightStyle:'solid',borderRightWidth:'1px'}}>
                            <p style={{margin:'0',fontSize:'35px',textAlign:'center'}}>1</p>
                            <p style={{margin:'0',fontSize:'15px',textAlign:'center'}}>动态</p>
                        </div>
                        <div style={{width:'33%',height:'68px',float:'left',borderRightColor:'#AAAAAA',borderRightStyle:'solid',borderRightWidth:'1px'}}>
                            <p style={{margin:'0',fontSize:'35px',textAlign:'center'}}>0</p>
                            <p style={{margin:'0',fontSize:'15px',textAlign:'center'}}>收藏</p>
                        </div>
                        <div style={{width:'33%',height:'68px',float:'left'}}>
                            <p style={{margin:'0',fontSize:'35px',textAlign:'center'}}>3</p>
                            <p style={{margin:'0',fontSize:'15px',textAlign:'center'}}>计划</p>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{width:'100%',height:'75px',margin:'20px',fontSize:'20px'}}>
                        <Link to='/myschool'>
                        <img src={yanxiao} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                        <p style={{width:'70%',height:'70px',float:'left',margin:'0',paddingTop:'20px'}}>我的研校</p>
                        <img src={jiantou} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                        </Link>
                    </div>
                    <div style={{width:'100%',height:'75px',margin:'20px',fontSize:'20px'}}>
                        <img src={jihua} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                        <p style={{width:'70%',height:'70px',float:'left',margin:'0',paddingTop:'20px'}}>我的计划</p>
                        <img src={jiantou} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                    </div>
                    <div style={{width:'100%',height:'75px',margin:'20px',fontSize:'20px'}}>
                        <Link to='/mysave'>
                        <img src={shoucang} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                        <p style={{width:'70%',height:'70px',float:'left',margin:'0',paddingTop:'20px'}}>我的收藏</p>
                        <img src={jiantou} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                        </Link>
                    </div>
                    <div style={{width:'100%',height:'75px',margin:'20px',fontSize:'20px'}}>
                        <img src={wenjian} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                        <p style={{width:'70%',height:'70px',float:'left',margin:'0',paddingTop:'20px'}}>我的动态</p>
                        <img src={jiantou} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                    </div>
                    <div style={{width:'100%',height:'75px',margin:'20px',fontSize:'20px'}}>
                        <Link to='/help'>
                        <img src={bangzhu} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                        <p style={{width:'70%',height:'70px',float:'left',margin:'0',paddingTop:'20px'}}>帮助与反馈</p>
                        <img src={jiantou} alt="" style={{width:'15%',height:'70px',float:'left'}}/>
                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}