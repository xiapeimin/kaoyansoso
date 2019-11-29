import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Introduce from './Introduce';
import Important from './Important';
import Content from './Content';
import { NavBar,Icon,WhiteSpace,WingBlank} from 'antd-mobile';
import vedio0 from './images/vedio0.mp4';
import good from './images/zan2.jpg';
import zan1 from './images/zan1.jpg';
import count from './images/count.jpg';
export default class Vplay extends Component {
    changeColor(){
        var btn=document.getElementById('btn');
        btn.style.backgroundColor='#66cccc';
        btn.style.color='white'
    }
    change(){
        var btn=document.getElementById('btn');
        btn.style.backgroundColor='white';
        btn.style.color='black'
    }
    changeColor1(){
        var btn=document.getElementById('btn1');
        btn.style.backgroundColor='#66cccc'
        btn.style.color='white'
    }
    change1(){
        var btn=document.getElementById('btn1');
        btn.style.backgroundColor='white'
        btn.style.color='black'
    }
    changeColor2(){
        var btn=document.getElementById('btn2');
        btn.style.backgroundColor='#66cccc'
        btn.style.color='white'
    }
    change2(){
        var btn=document.getElementById('btn2');
        btn.style.backgroundColor='white'
        btn.style.color='black'
    }
    good(){
        var god=document.getElementById('good');
        console.log(god.src);
        god.src=zan1
    }
    render() {
        return (
            <div>
                 <NavBar               
                mode="light"
                icon={<Icon type="left" />}
                style={{backgroundColor:'#66cccc',color:'white',height:'6vw'}}>
                    <span style={{backgroundColor:'#66cccc',color:'white',fontSize:'4vw'}}>课程</span>
                </NavBar>
                <video height='100%' width='100%' controls='controls' object-fit='container'>
                        <source src={vedio0} type='video/mp4'/>
                        <source src={vedio0} type='video/ogg'/>
                        您的浏览器不支持Video
                </video>
                <WhiteSpace/>
                <WingBlank>
                <img id='good' src={good} style={{height:'5vw',width:'5vw'}} onClick={this.good}/><span style={{fontSize:'5vw',marginLeft:'1vw'}}>0</span>
                <img src={count} style={{height:'4vw',width:'5vw',marginLeft:'5vw'}}/><span style={{fontSize:'5vw',marginLeft:'1vw'}}>10</span>
                </WingBlank>
                <WhiteSpace/>
                <h2 style={{textIndent:'2em'}}>【2020考研】 复试全程计划公开课</h2>
               <Router>
                   <div style={{width:'100%'}}>
                        <div className='btn'style={{width:'100%'}}>
                            <Link to='/introduce'><div id='btn' style={{textAlign:'center',width:'33%',height:'8vw',fontSize:'5vw',color:'black',float:'left',border:'1px solid gray'}} onClick={this.changeColor} onMouseOut={this.change}>课程介绍</div></Link>
                            <Link to='/important'><div id='btn1' style={{textAlign:'center',width:'33%',height:'8vw',fontSize:'5vw',color:'black',float:'left',border:'1px solid gray'}} onClick={this.changeColor1} onMouseOut={this.change1}>课程要点</div></Link>
                            <Link to='/content'><div id='btn2' style={{textAlign:'center',width:'34%',height:'8vw',fontSize:'5vw',color:'black',float:'left',border:'1px solid gray'}} onClick={this.changeColor2} onMouseOut={this.change2}>课程评价</div></Link>
                        </div>
                        <div style={{width:'100%'}}>
                            <Route path='/introduce' component={Introduce}></Route>
                            <Route path='/important' component={Important}></Route>
                            <Route path='/content' component={Content}></Route>
                        </div>  
                    </div> 
                </Router>
             </div>
        )
    }
}
