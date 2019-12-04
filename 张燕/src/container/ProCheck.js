import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import OtherSchool from './OtherSchool';
// import subject from '../zhuanye/zhuanye.json'
import { NavBar,Icon,WhiteSpace,WingBlank } from 'antd-mobile';
import Item from 'antd-mobile/lib/popover/Item';


export default class ProCheck extends Component {
    constructor(props){ //构造函数
        super(props);
        this.state = {
        mytext :[],
        id:1
        }
     }         
     componentWillMount(){
        fetch('http://zy.xpmwqhzygy.top/subject')
         .then((res)=>res.json())
        .then((res)=>{
            var data = JSON.parse(res);
            this.setState({mytext:data.文学});    
        })
     }
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
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
                    <h2>专业简介</h2>
                    {
                        this.state.mytext.map((item,index)=>(                       
                            <p className={this.state.id == index ? 'talk' : 'untalk'}>{item.introduce}</p>
                        ))
                    }
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
                    <h2>培养目标</h2>
                    {
                        this.state.mytext.map((item,index)=>(                       
                            <p className={this.state.id == index ? 'talk' : 'untalk'}>{item.target}</p>
                        ))
                    }
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
                    <h2>就业方向</h2>
                    {
                        this.state.mytext.map((item,index)=>(                       
                            <p className={this.state.id == index ? 'talk' : 'untalk'}>{item.direction}</p>
                        ))
                    }
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
                    <h2>招生院校推荐</h2>
                    {
                        this.state.mytext.map((item,index)=>(                       
                            <p className={this.state.id == index ? 'talk' : 'untalk'}>{item.suggestSchool}</p>
                        ))
                    }
                </div>
                </WingBlank>
                <WhiteSpace/>
                        <Link to='/otherSchool'>
                            <button style={{border:'none',bottom:'0',width:'100%',height:'10vw',backgroundColor:'#21a3e0',fontSize:'3vw',color:'#fff'}}>查看其他开设院校</button>
                        </Link>
                     
            </div>
        )
    }
}
