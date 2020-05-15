import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import img from '../imgs/usrhead.png'
var uid=[];
var pickid=[];
var all=[];
var pick=[];
var usernames=[];
var headimg=[];
export default class Sayto extends Component {
    constructor(){
        super();
        this.state={
            headimg:'',
            username:[],
            talk:'',
            myid:'',
        }
    }
        componentDidMount(){
            var str=this.props.location.search;
            var myid=str.split('=')[1];
            this.setState({
                myid:myid
            })
            fetch(`http://zy.xpmwqhzygy.top/talking`,{
                method:'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
               for(var i=0;i<res.data.length;i++){
                    uid[i]=res.data[i].uidall.split('&')[0];
                    pickid[i]=res.data[i].uidall.split('&')[1];
                    if(uid[i]==myid){
                        pick[i]=pickid[i];
                    }
                    if(pickid[i]==myid){
                        pick[i]=uid[i];
                    }
               }
               this.setState({
                   pick:pick
               })
                fetch(`http://xpm.xpmwqhzygy.top/user`,{
                    method: 'GET',        
                })
                .then((res)=>res.json())
                .then((res)=>{
                  console.log(res.data)
                  for(var i=0;i<pick.length;i++){
                      for(var j=0;j<res.data.length;j++){
                        if(pick[i]==res.data[j].uid){
                            usernames[i]=res.data[j].username
                        }
                      }
                  }
                  for(var i=0;i<pick.length;i++){
                    headimg[i]=`http://xpm.xpmwqhzygy.top/head/${pick[i]}`
                 }
                  this.setState({
                      username:usernames
                  })
                })
               for(var j=0;j<uid.length;j++){
                   if(uid[j]==myid||pickid[j]==myid){
                       all[j]=res.data[j].mytalk;
                   }
               }
            })
        }
        render() {
           var myid=this.state.myid
        return (
            <div>
                <NavBar style={{background:'#66cccc',color:'#fff',position:'fixed',width:'100%',top:'0'}}>
                    <span style={{color:'#fff',fontSize:'22px'}}>消息</span>
                </NavBar>
            <div style={{width:'100%',marginTop:'47px',float:'left'}}>
               {
                  this.state.username.map((item,index)=>(
                    <Link to={`/talkto?uid=${myid}&pickid=${pick[index]}`}>
                    <div style={{borderBottom:'0.1px gray solid',width:'100%',height:'80px',padding:'10px',display:usernames[index++]==usernames[index]?'none':'block'}}>
                        <img src={headimg[index-1]} style={{height:'60px',width:'60px',borderRadius:'30px',float:'left'}}/>  
                        <div style={{float:'left',height:"16px",paddingLeft:'15px'}}>
                            <p style={{color:'black',height:'10px'}}>{item}</p>
                            <p style={{color:'gray'}}>我是{item}</p>
                        </div>
                    </div>
                    </Link>
                ))
                }  
            </div>
            </div>
        )
    }
}
