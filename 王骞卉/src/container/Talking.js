import React, { Component } from 'react'
import {NavBar, Button} from 'antd-mobile'
import {Link} from 'react-router-dom'

var value;
var heorshe=[];
var mytalk=[];
export default class Talking extends Component {
    constructor(){
        super();
        this.state={
           headimg:'',
            uid:0,
            pickid:0,
            talkto:[],
            myhead:'',
            username:'',
        }
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid=str.split('=')[2].split('&')[0];
        var pickid=str.split('=')[1].split('&')[0];
      //  console.log(uid,pickid);
        var itid=[];
        var myid=[];
        this.setState({
            uid:uid,
            pickid:pickid,
            headimg:`http://xpm.xpmwqhzygy.top/head/${pickid}`,
            myhead:`http://xpm.xpmwqhzygy.top/head/${uid}`
        })
         fetch(`http://zy.xpmwqhzygy.top/talk`,{
                  method:'GET'
              })
              .then((res)=>res.json())
              .then((res)=>{
                  if(res.data==''){
                      return;
                  }else{
                  console.log(res.data)
                  for(var i=0;i<res.data.length;i++){
                    myid[i]=res.data[i].uidall.split('&')[0];
                    itid[i]=res.data[i].uidall.split('&')[1];
                    console.log(itid[i]);
                    if(myid[i]==uid&&itid[i]==pickid){
                        mytalk[i]=res.data[i].mytalk
                    }
                    if(itid[i]==uid&&myid[i]==pickid){
                        heorshe[i]=res.data[i].mytalk
                    }
                  }
                }
                fetch(`http://xpm.xpmwqhzygy.top/user/${pickid}`,{
                    method: 'GET',        
                    headers:{
                        'Accept':'application/json,text/plain,*/*'
                    }
                    })
                    .then((res)=>res.json())
                    .then((res)=>{
                        this.setState({
                            username:res.data[0].username
                        });
                    })
                 this.setState({
                     talkto:res.data
                 })
              })
    }
    changeValue=(e)=>{
        value=e.target.value;
    }
    send=()=>{
        var myhead=this.state.myhead;
        const post={
            uidall:this.state.uid+'&'+this.state.pickid,
            uid:this.state.uid,
            mytalk:value,
            heorshe:''
        }
        fetch(`http://zy.xpmwqhzygy.top/talk`,{
            method:'POST',
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        });
        var talk=document.getElementsByClassName('talking')[0];
        var inp=document.getElementById('inp')
        var tell= "<div style='width:100%;float:left'>"
        +"<div style='width:20%;height:60px;float:right'>"
            +'<img src='+myhead+' style="width:60px;height:60px;border-radius:50%"/>'
         +"</div>"
        +"<div style='max-width:65%;float:right;margin-left:12%;padding-right:10px;background-color:#cceeff;padding-left:10px;padding-top:15px;border-radius:20%;margin-right:3%;margin-bottom:20px'>"
            +"<p>"+value+"</p>"
        +"</div>"
       +"</div>"
        talk.innerHTML+=tell
    }
    render() {
        var uid=this.state.uid;
        var pickid=this.state.pickid;
        var headimg=this.state.headimg;
        var myhead=this.state.myhead;
       for(var i=0;i<heorshe.length;i++){
           console.log(heorshe[i])
       }
        return (   
            <div className='talk'>
                <NavBar style={{background:'#66cccc',color:'#fff',position:'fixed',width:'100%',top:'0'}} 
                leftContent={<Link to={`/personaldetail?pickid=${pickid}&uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                 mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff',fontSize:'22px'}}>{this.state.username}</span></NavBar>
                <div style={{padding:'5%',width:'100%',marginTop:'50px',float:'left'}}>
                    <div style={{width:'20%',height:'60px',float:'left'}}>
                        <img src={headimg} style={{width:'60px',heght:'60px',borderRadius:'50%'}}/>
                    </div>
                    <div style={{float:'left',maxWidth:'65%',paddingTop:'15px',paddingLeft:'10px',paddingRight:'10px',borderRadius:'20%',backgroundColor:'#cef',marginBottom:'20px'}}>
                        <p>我是超级无敌小可爱</p>
                    </div>
                </div>
                {/* <div style={{width:'100%',float:'left'}}>
                <div style={{width:'20%',height:'60px',float:'right'}}>
                        <img src={myhead} style={{width:'60px',heght:'60px',borderRadius:'50%'}}/>
                    </div>
                    <div style={{float:'right',maxWidth:'65%',paddingRight:'10px',paddingLeft:'10px',paddingTop:'15px',backgroundColor:'#cef',borderRadius:'20%',marginBottom:"20px",marginRight:'3%'}}>
                        <p>你好</p>
                    </div>      
                </div> */}
                <div className="talking" style={{width:'100%',float:"left"}}>
                    {
                        this.state.talkto.map((item,index)=>(
                        <div>
                        <div style={{paddingLeft:'5%',width:'100%',float:'left',display:heorshe[index]==undefined?'none':'block',height:heorshe[index]==undefined?'0px':''}}>
                            <div style={{width:'20%',height:'60px',float:'left'}}>
                                <img src={headimg} style={{width:'60px',height:'60px',borderRadius:'50%'}}/>
                            </div>
                            <div style={{float:'left',maxWidth:'65%',paddingTop:'15px',paddingLeft:'10px',paddingRight:'10px',borderRadius:'20%',backgroundColor:'#cef',marginBottom:'20px'}}>
                                <p>{heorshe[index]}</p>
                            </div>
                        </div>
                        <div style={{width:'100%',float:'left',display:mytalk[index]==undefined?'none':'block'}}>
                            <div style={{width:'20%',height:'60px',float:'right'}}>
                                <img src={myhead} style={{width:'60px',heght:'60px',borderRadius:'50%'}}/>
                            </div>
                            <div style={{float:'right',maxWidth:'65%',paddingRight:'10px',paddingLeft:'10px',paddingTop:'15px',backgroundColor:'#cef',borderRadius:'20%',marginBottom:"20px",marginRight:'3%'}}>
                                <p>{mytalk[index]}</p>
                            </div>      
                        </div>
                        </div>
                        ))
                    }
                   
                </div>
                <div style={{position:"fixed",bottom:'0',width:'100%',height:'50px'}}>
                    <input id='inp' style={{width:'80%',height:"50px",fontSize:'20px'}} onChange={this.changeValue}/>
                    <button style={{width:"20%",height:'57px',backgroundColor:'#66cccc',fontSize:'20px',color:'white'}} onClick={this.send}>发送</button>
                </div>
            </div>
        )
    }
}
