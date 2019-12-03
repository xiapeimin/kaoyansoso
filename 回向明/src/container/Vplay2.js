import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Introduce from './Introduce';
import Important from './Important';
import { NavBar,WhiteSpace,WingBlank,Tabs,Flex} from 'antd-mobile';
import vedio2 from '../imgs/vedio2.mp4';
import good from './images/zan2.jpg';
import zan1 from './images/zan1.jpg';
import count from './images/count.jpg';

export default class Vplay extends Component {
    constructor(){
        super();
        this.state={
            flag:1,
            text:'本课程是为2020考研复试全程计划公开课'
        }
    }
    good(){
        var god=document.getElementById('good');
        console.log(god.src);
        god.src=zan1
    }
    changeColor = () => {
        this.setState({
            flag:1,
            text:'本课程是为2020考研复试全程计划公开课'
        })
    }
    changeColor2 = () => {
        this.setState({
            flag:2,
            text:'本课程要点...'
        })
    }
    changeColor3 = () => {
        this.setState({
            flag:3,
            text:'讲师：'
        })
    }
    render() {
        return (
            <div>
                 <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={'/appTab'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>课程</span></NavBar>
                <video height='100%' width='100%' controls='controls' object-fit='container'>
                        <source src={vedio2} type='video/mp4'/>
                        您的浏览器不支持Video
                </video>
                <WhiteSpace/>
                <WingBlank>
                <img id='good' src={good} style={{height:'5vw',width:'5vw'}} onClick={this.good}/><span style={{fontSize:'5vw',marginLeft:'1vw'}}>0</span>
                <img src={count} style={{height:'4vw',width:'5vw',marginLeft:'5vw'}}/><span style={{fontSize:'5vw',marginLeft:'1vw'}}>10</span>
                </WingBlank>
                <WhiteSpace/>
                <h2 style={{textIndent:'2em'}}>【2020考研】 复试全程计划公开课</h2>
               
                   <div style={{width:'100%',background:'red'}}>
                        <div className='btn'style={{width:'100%'}}>
                            <div id='btn' style={{textAlign:'center',width:'33%',height:'8vw',lineHeight:'8vw',fontSize:'5vw',color:'black',float:'left'}} onClick={this.changeColor} className={this.state.flag == 1 ? 'vpaychange' : ''}>课程介绍</div>
                            <div id='btn1' style={{textAlign:'center',width:'33%',height:'8vw',lineHeight:'8vw',fontSize:'5vw',color:'black',float:'left'}} onClick={this.changeColor2} className={this.state.flag == 2 ? 'vpaychange' : ''}>课程要点</div>
                            <div id='btn2' style={{textAlign:'center',width:'34%',height:'8vw',lineHeight:'8vw',fontSize:'5vw',color:'black',float:'left'}} onClick={this.changeColor3} className={this.state.flag == 3 ? 'vpaychange' : ''}>讲师简介</div>
                        </div>
                    </div> 
                    <div className='clear'></div>
                    <div style={{padding:'5%'}}>{this.state.text}</div>
                
             </div>
        )
    }
}
