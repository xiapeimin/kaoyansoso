import React, { Component } from 'react'
import {NavBar} from 'antd-mobile'
import {Link, Redirect} from 'react-router-dom';
import moment from 'moment'

var t;
export default class Addplan extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            plan:'',
            uid:''
        }
    }
    componentDidMount(){
        var str=window.location.hash;
        var uid=str.split('=')[1];
        this.setState({
            uid:uid
        })
        var time = new Date(); // Tue Aug 28 2018 09:16:06 GMT+0800 (中国标准时间)；
        var timestamp = Date.parse(time); // 1535419062000 （Date.parse() 默认不取毫秒，即后三位毫秒为0）
        console.log(timestamp-126)
        moment(time).valueOf(); // 1535419062126
        t=moment(timestamp).format().split('T')[0]; 
    }
    gettitle=(e)=>{
       var title=e.target.value;
        this.setState({
            title:title
        })
    }
    getplan=(e)=>{
      var plan=e.target.value;
        this.setState({
            plan:plan
        })
    }
    addplan=(e)=>{
        var d=new Date();
        var y=d.getFullYear();
        var m = d.getMonth()+1;
        var day=d.getDate()+1;
        var time=''+y+'-'+m+'-'+day;
        const post={
            uid:this.state.uid,
            plan:this.state.title+'&'+this.state.plan,
            time:time
        }
        fetch(`http://zy.xpmwqhzygy.top/addplan`,{
            method:'POST',
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        });
    }
    render() {
    var uid=this.state.uid;
        return (
            <div>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/searchInfo?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}><span style={{color:'#fff',fontSize:'22px'}}>添加计划</span></NavBar> 
                <div style={{width:'100%'}}>
                <div style={{width:'100%',marginTop:'10px',float:"left"}}>
                   <div style={{textAlign:'center'}}>
                        <h2 style={{width:'20%',float:"left",marginTop:'8px'}}>标题</h2>
                        <textarea className='title' onChange={this.gettitle} style={{width:'75%',float:'left',height:'50px',fontSize:"20px",border:'1px gray solid',paddingTop:'10px'}}></textarea>
                  </div>
                </div>
               <div style={{width:'100%',marginTop:'10px',float:'left'}}>
                   <div style={{textAlign:'center'}}>
                        <h2 style={{width:'20%',float:"left",marginTop:'8px'}}>计划</h2>
                        <textarea className='plan' onChange={this.getplan} style={{width:'75%',float:'left',height:'50px',fontSize:"20px",border:'1px gray solid',paddingTop:'10px'}}></textarea>
                  </div>
               </div>
               <div style={{width:'100%',marginTop:'10px',float:'left'}}>
                   <div style={{textAlign:'center'}}>
                        <h2 style={{width:'20%',float:"left",marginTop:'8px'}}>时间</h2>
                        <textarea className='time' style={{width:'75%',float:'left',height:'50px',fontSize:"20px",border:'1px gray solid',paddingTop:'10px',paddingLeft:'10px'}} placeholder={t}></textarea>
                  </div>
               </div>
               </div>
               <button onClick={()=>{this.addplan()}} style={{backgroundColor:"#66cccc",width:'40%',height:'40px',margin:'30%',fontSize:"20px"}}>添&nbsp;&nbsp;加</button>
            </div>
        )
    }
}
