import React, { Component } from 'react';
import TopicList from './TopicList';
import ShowList from './ShowList.js';
import MyTopic from './MyTopic.js'
import { NavBar, Tabs, Badge, WhiteSpace, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom';
import tou1 from './images/tou1.jpg';
import tou2 from './images/tou2.jpg';
import tou3 from './images/tou3.jpg';
import good from './images/zan2.jpg';
import talk from './images/talk.jpg';
import zan1 from './images/zan1.jpg';
import back from './images/back.jpg';
import delete1 from './images/delete.jpg';

var page = 0;
const tabs = [
    { title: <Badge>热门动态</Badge> },
    { title: <Badge>我的动态</Badge> },
  ];
export default class HostTopic extends Component {   //评论弹框bug 用组件对话框 点击删除后有弹框 确认删除 点赞图片不对齐
    constructor(){
        super();
        this.state = {
            flag:0,
            uid:0,
            username:'',
            data:[],
            isLoading: true,
            touchState:false,
            good:false,
            delete1:false,
            pid:1,
            all:[],
            pinglun:'',
            fflag:0,
            del1:''
        }
    }

    componentDidMount(){
        var str = window.location.hash;
        if(str.indexOf('&')>=0){
            var uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
            page=1;
            console.log(str,'topicmu',uid);
            console.log('pppppppppppppppppppp',this.state.page);
        }else{
            var uid = str.split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
            page=0;
        }
        console.log(str,'topicmu',uid);
       fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
            method: 'GET',        
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(res.data[0]);
                console.log(typeof(res.data));
                this.setState({
                    username:res.data[0].username
                });  
            });
            fetch(`http://zy.xpmwqhzygy.top/topic/${uid}`,{
                method: 'GET'
              })
              .then((res)=>res.json())
              .then((res)=>{
                  console.log(res.data);
                  console.log(typeof(res.data));
                  this.setState({
                      data:res.data
                  });
              });
              fetch(`http://zy.xpmwqhzygy.top/all`,{
                method: 'GET'
              })
              .then((res)=>res.json())
              .then((res)=>{
                  console.log(res.data);
                  console.log(typeof(res.data));
                  this.setState({
                      all:res.data
                  });
              })
    }

    delItem=(e)=>{
       var del1=e.target.id.slice(3);
       console.log(del1);
        this.setState({
            flag:1,
            delidx:del1
        })
      }
      del=()=>{
          var index=this.state.delidx;
         var idx=document.getElementsByClassName('l'+index);
        console.log(idx);
        idx[0].innerHTML='';
        this.setState({
            flag:0
        })
        var pri=this.state.uid+this.state.data[index].topic;
        fetch(`http://zy.xpmwqhzygy.top/del/${pri}`,{
            method:"DELETE",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        })
        .then(res =>res.json())
        .then(data =>{
             console.log(data);
        })
      }
      quxiao=()=>{
          this.setState({
              flag:0
          })
      }
      good=(e)=>{       
       var index = e.target.id.slice(3);
       var imgs = document.getElementById(e.target.id); 
       if(this.state.fflag==0){
            imgs.src=zan1;
            this.setState({
                fflag:1
            })
       }else if(this.state.fflag == 1){
        imgs.src=good;
        this.setState({
            fflag:0
        })
       }
       var pri=this.state.uid+this.state.data[index].topic;
       console.log(pri);
        const post ={
            good:!this.state.good,
        }
        fetch(`http://zy.xpmwqhzygy.top/something/${pri}`,{
            method:"PUT",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
             body:JSON.stringify(post)
        })
        .then(res =>res.json())
        .then(data =>{
             console.log(data);
        })
        this.setState({
            good:!this.state.good
        })
      }
      goodall=(e)=>{       
        var index = e.target.id.slice(3);
        var imgs = document.getElementById(e.target.id); 
        if(this.state.fflag==0){
             imgs.src=zan1;
             this.setState({
                 fflag:1
             })
        }else if(this.state.fflag == 1){
         imgs.src=good;
         this.setState({
             fflag:0
         })
        }
        var uid=this.state.all[index].uid;
        var pri=uid+this.state.all[index].topic;
        console.log(pri);
         const post ={
             good:!this.state.good,
         }
         fetch(`http://zy.xpmwqhzygy.top/something/${pri}`,{
             method:"PUT",
             headers:{'Content-Type': 'application/x-www-form-urlencoded'},
              body:JSON.stringify(post)
         })
         .then(res =>res.json())
         .then(data =>{
              console.log(data);
         })
         this.setState({
             good:!this.state.good
         })
       }
      unlogin=(e)=>{
        var index=e.target.id.slice(1);
        var div1=document.getElementById('pl'+index);
        div1.className='talk';
        console.log(div1.className);
      }
      addItem=(e)=>{
        var index=e.target.id.slice(3);
        var inp=document.getElementById('in'+index);
        var value=inp.value;
        var input=document.getElementById('pls'+index);
        input.innerHTML+=value;
        var div1=document.getElementById('pl'+index);
        div1.className='untalk';
        const post ={
            talk:input.innerHTML
        }
        var uid=this.state.all[index].uid;
        var pri=uid+this.state.all[index].topic;
        fetch(`http://zy.xpmwqhzygy.top/talk/${pri}`,{
            method:"PUT",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
             body:JSON.stringify(post)
        })
        .then(res =>res.json())
        .then(data =>{
             console.log(data);
        })
      }
      alltalk=(e)=>{
        var index=e.target.id.slice(1);
        var div1=document.getElementById('al'+index);
        div1.className='talk';
        console.log(div1.className);
      }
      allItem=(e)=>{
        var index=e.target.id.slice(3);
        var inp=document.getElementById('an'+index);
        var value=inp.value;
        var input=document.getElementById('als'+index);
        input.innerHTML+=value;
        var div1=document.getElementById('al'+index);
        div1.className='untalk';
        const post ={
            talk:input.innerHTML
        }
        var uid=this.state.all[index].uid;
        var pri=uid+this.state.all[index].topic;
        fetch(`http://zy.xpmwqhzygy.top/talk/${pri}`,{
            method:"PUT",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
             body:JSON.stringify(post)
        })
        .then(res =>res.json())
        .then(data =>{
             console.log(data);
        })
      }
    render() {
        var uid = this.state.uid;
        console.log(this.state.data);
        return (
            <div>
                <NavBar style={{backgroundColor:'#66cccc',color:'white'}}
                  mode="dark"
               >动态</NavBar>
               <div style={{backgroundColor:'white'}}>
                 <Tabs tabs={tabs}
                    initialPage={page}
                    style={{fontSize:'40vw'}}
                    >
                <div>
                    <WingBlank>
                    <WhiteSpace/>
                    <div style={{height:'150vh'}}> 
                                {   this.state.all.map((item,index)=>( 
                                            <div className={index}  style={{ width:'100%',height:'15vh'}}>
                                                <div style={{width:'20%',float:'left'}}>  
                                                <img style={{ height: '10vh',width:'10vh',borderRadius:'50%',float:'left',marginRight:'2vh'}} src={tou1} alt="" />                 
                                                </div>
                                                <div style={{width:'80%',lineHeight:1.5,float:'left'}}>
                                                <div style={{width:'60%',float:'left'}}>
                                                    <span style={{float:'left'}}>{item.username}</span><br/>
                                                    <span style={{float:'left'}}>{item.topic}</span><br/>
                                                    <span style={{float:'left'}}>{item.time}</span>
                                                </div>
                                                <div style={{width:'40%',float:'left',marginTop:'30px'}}>
                                                    <img  id={`all${index}`} src={item.good ? zan1 : good} style={{width:'4.5vh',height:'4.5vh',marginRight:'2vh'}} onClick={this.goodall}/>     
                                                    <img id={`a${index}`} src={talk} style={{width:'4vh',height:'4vh',marginRight:'2vh'}} onClick={this.alltalk}/>
                                               </div>    
                                                </div>
                                               <div id={`als${index}`}>{item.talk}</div>
                                                <div className='untalk' id={`al${index}`} style={{height:'30px',width:'95%',marginLeft:'4vw',float:'left'}}>  
                                                    <input id={`an${index}`} onChange={this.changeValue} type='text' placeholder='评论' style={{width:'70%',height:'30px',float:'left'}}/>
                                                    <button id={`ain${index}`} style={{width:'20%',color:'white',marginTop:'-3px',height:'32px',backgroundColor:'#66cccc',border:'none'}} onClick={this.allItem}>完成</button>
                                                </div>
                                            </div>                    
                                        ))
                                }
                     </div>
                     </WingBlank>
                </div>
                <div>
                        <img src={back} style={{width:'100%'}}></img>
                        <img src={tou3} style={{height:'100px',width:'100px',marginRight:'10px',float:'right',position:'relative',marginTop:'-30px',borderRadius:'50px'}}></img>
                        <p style={{float:'right',marginTop:'75px',marginRight:'-80px'}}>{this.state.username}</p>
                        <Link to={`/publishTopic?uid=${uid}`}><div style={{float:'left',marginLeft:'5%',marginTop:'5%',width:'10vw',height:'10vw',borderRadius:'5vw',backgroundColor:' #66cccc',fontSize:'5vw',textAlign:'center',lineHeight:'10vw',color:'#fff'}}>+</div></Link>
                      <div style={{marginTop:'32vw',height:'15vh'}}> 
                      <div className={this.state.flag == 1 ? 'talk' : 'untalk'} style={{backgroundColor:'gray',opacity:'0.5',position:'relative',height:'20vh'}}>
                            <p style={{textAlign:'center',lineHeight:'15vh',fontWeight:'bold'}}>确认删除？</p>
                            <div className='glin'>
                                <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%',fontWeight:'bold'}} onClick={this.quxiao}>取消</div>
                                <div onClick={this.del} style={{fontWeight:'bold'}}>删除</div>
                            </div>
                        </div>
                                {   this.state.data.map((item,index)=>( 
                                            <div className={`l${index}`} style={{ width:'100%',height:'15vh',marginBottom:'3vh'}}>
                                                <div style={{width:'20%',float:'left'}}>  
                                                <img style={{ height: '10vh',width:'10vh',borderRadius:'50%',float:'left',marginRight:'2vh'}} src={tou1} alt="" />                 
                                                </div>
                                                <div style={{width:'80%',lineHeight:1.5,float:'left'}}>
                                                <div style={{width:'60%',float:'left'}}>
                                                    <span style={{float:'left'}}>{this.state.username}</span><br/>
                                                    <span style={{float:'left'}}>{item.topic}</span><br/>
                                                    <span style={{float:'left'}}>{item.time}</span>
                                                </div>
                                                <div style={{width:'40%',float:'left',marginTop:'30px'}}>
                                                    <img  src={item.good ? zan1 : good} style={{width:'4.5vh',height:'4.5vh',marginRight:'2vh'}} id={`img${index}`} onClick={this.good}/>     
                                    
                                                    <img id={`p${index}`} src={talk} style={{width:'4vh',height:'4vh',marginRight:'2vh'}} onClick={this.unlogin}/>
                                                    <img id={`del${index}`} src={delete1} style={{width:'4vh',height:'4vh'}} onClick={this.delItem}/> 
                                               </div>    
                                                </div>
                                                <div id={`pls${index}`}>{item.talk}</div>
                                                <div className='untalk' id={`pl${index}`} style={{height:'30px',width:'95%',marginLeft:'4vw',float:'left'}}>  
                                                    <input id={`in${index}`} onChange={this.changeValue} type='text' placeholder='评论' style={{width:'70%',height:'30px',float:'left'}}/>
                                                    <button id={`fin${index}`} style={{width:'20%',color:'white',marginTop:'-3px',height:'32px',backgroundColor:'#66cccc',border:'none'}} onClick={this.addItem}>完成</button>
                                                </div>
                                            </div>                    
                                        ))
                                }
                     </div>
                </div>
                
                </Tabs> 
                </div>
            </div> 
               
        )
}
}