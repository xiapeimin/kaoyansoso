import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Introduce from './Introduce';
import Important from './Important';
import { NavBar,WhiteSpace,WingBlank,Tabs,Flex} from 'antd-mobile';
import vedio0 from './images/vedio0.mp4';
import vedio1 from '../imgs/vedio1.mp4';
import vedio2 from '../imgs/vedio2.mp4';
import vedio3 from '../imgs/vedio3.mp4';

import good from './images/zan2.jpg';
import zan1 from './images/zan1.jpg';
import count from './images/count.jpg';

export default class Vplay extends Component {
    constructor(){
        super();
        this.state={
            flag:1,
            text:'',
            fflag:'',
            flag2:0,
            todo1:[], 
            todo2:[],
            id:0,
            goodnum:0
        }
    }
    good = () => {
        var god=document.getElementById('good');
        console.log(god.src);
        god.src=zan1;
        this.setState({
            goodnum:1
        })
    }
    changeColor = () => {
        this.setState({
            flag:1
        })
        if(this.state.id==1){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>上知天文,下知地理的老梁为你解答是否该考研</div>]
            })
        }else if(this.state.id==2){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>张雪峰给你讲考研</div>]
            })
        }else if(this.state.id==3){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>爆笑张雪峰</div>]
            })
        }else if(this.state.id==4){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>张雪峰讲讲跨专业</div>]
            })
        }
    }
    changeColor2 = () => {
        this.setState({
            flag:2
        })
        if(this.state.id==1){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>很多人迷茫是考研还是就业，那么今天老梁来跟你说一说</div>]
            })
        }else if(this.state.id==2){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>张雪峰告诉你考研的重要性</div>]
            })
        }else if(this.state.id==3){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>张雪峰爆笑集锦</div>]
            })
        }else if(this.state.id==4){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>跨专业考研，需要注意些什么</div>]
            })
        }
    }
    changeColor3 = () => {
        this.setState({
            flag:3
        })
        if(this.state.id==1){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>梁宏达，1972年2月20日出生在黑龙江省绥化市兰西县，毕业于黑龙江大学新闻专业。中国媒体评论人、出版人。</div>]
            })
        }else if(this.state.id==2){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>张雪峰，1984年出生于齐齐哈尔，毕业于郑州大学。 研途考研VIP名师。</div>]
            })
        }else if(this.state.id==3){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>张雪峰，1984年出生于齐齐哈尔，毕业于郑州大学。 研途考研VIP名师。</div>]
            })
        }else if(this.state.id==4){
            this.setState({
                text:[<div style={{fontSize:'5vw'}}>张雪峰，1984年出生于齐齐哈尔，毕业于郑州大学。 研途考研VIP名师。</div>]
            })
        }
    }
    componentDidMount(){
        var str = this.props.location.search;
        var uid = str.split('&')[0].split('=')[1];
        var fflag = str.split('&')[1].split('=')[1];
        var id = str.split('&')[2].split('=')[1];
        this.setState({
            id:id,
            uid:uid,
            fflag:fflag
        });
        if(fflag=='home'){
            this.setState({
                flag2:0
            })
        }else if(fflag == 'more'){
            this.setState({
                flag2:1
            })
        }else if(fflag == 'search'){
            this.setState({
                flag2:2
            })
        }

        if(id == 1){
            this.setState({
                todo1:[vedio0],
                todo2:['老梁观世界'],
                text:[<div style={{fontSize:'5vw'}}>上知天文,下知地理的老梁为你解答是否该考研</div>]
            });
        }else if(id == 2){
            this.setState({
                todo1:[vedio1],
                todo2:['张雪峰课堂'],
                text:[<div style={{fontSize:'5vw'}}>张雪峰给你讲考研</div>]
            });
        }else if(id == 3){
            this.setState({
                todo1:[vedio2],
                todo2:['爆笑张雪峰'],
                text:[<div style={{fontSize:'5vw'}}>爆笑张雪峰</div>]
            });
        }else if(id == 4){
            this.setState({
                todo1:[vedio3],
                todo2:['张雪峰讲讲跨专业'],
                text:[<div style={{fontSize:'5vw'}}>张雪峰讲讲跨专业</div>]
            });
        }

    }
   

    //跳转
    goout = () => {
        var uid = this.state.uid;
        if(this.state.flag2==0){
            window.location.hash = `/appTab?uid=${uid}&type=home`
        }else if(this.state.flag2==1){
            window.location.hash = `/video?uid=${uid}&flag=more`
        }else if(this.state.flag2==2){
            window.location.hash = `/search?uid=${uid}&type=home`
        }
    }
    render() {
        

        return (
            <div style={{background:'#fff',position:'absolute',top:'0',bottom:'0',width:'100%'}}>
                 <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>课程</span></NavBar>
                <div>{
                    this.state.todo1.map(
                        (item)=><video height='100%' width='100%' controls='controls' object-fit='container'>
                        <source src={item} type='video/mp4'/>
                        您的浏览器不支持Video
                </video>
                    )
    }
                </div>
                <WhiteSpace/>
                <WingBlank>
                <img id='good' src={good} style={{height:'5vw',width:'5vw'}} onClick={this.good}/><span style={{fontSize:'5vw',marginLeft:'1vw'}}>{this.state.goodnum}</span>
                <img src={count} style={{height:'4vw',width:'5vw',marginLeft:'5vw'}}/><span style={{fontSize:'5vw',marginLeft:'1vw'}}>10</span>
                </WingBlank>
                <WhiteSpace/>
                <div>
                    {
                        this.state.todo2.map(
                        (item)=><h2 style={{textIndent:'2em'}}>{item}</h2>
                        )
                    }
                </div> 
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