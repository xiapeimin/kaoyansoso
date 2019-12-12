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
            flag:0,
            touchState:false,
            good:false,
            delete1:false,
            pid:1,
            all:[],
            pinglun:''
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
                  console.log(res.data[0].good);
                  console.log(typeof(res.data));
                  this.setState({
                      data:res.data,
                      good:res.data.good
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
            //   fetch(`http://zy.xpmwqhzygy.top/some/${pri}`,{
            //     method: 'GET'
            //   })
            //   .then((res)=>res.json())
            //   .then((res)=>{
            //       console.log(res.data);
            //       console.log(typeof(res.data));
            //       this.setState({
            //           data:res.data
            //       });
            //   })
    }

    delItem=(index)=>{
        alert('是否确定删除');
        console.log(index);
        var idx=document.getElementsByClassName(index);
        console.log(idx[1]);
        idx[1].innerHTML='';
        var pri;
         const post ={
             pri:this.state.uid+this.state.data[index].topic,
             good:this.state.good,
             uid:this.state.pid,
             topic:this.state.data[index].topic,
             username:this.state.username,
             delete1:this.state.delete1
         }
        fetch(`http://zy.xpmwqhzygy.top/del/${pri}`,{
            method:"DELETE",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)
        })
        .then(res =>res.json())
        .then(data =>{
             console.log(data);
        })
      }
      good=(index)=>{
          console.log(index);
       var pri=this.state.uid+this.state.data[index].topic;
       console.log(pri);
        const post ={
            good:!this.state.good,
        }
        console.log(post.pri);
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
      unlogin=(index)=>{
        this.setState({
          flag:index
        })
        console.log(index);
      }
      changeValue=(e)=>{
         this.setState({
             pinglun:e.target.value
         })
      }
      addItem=(index)=>{
        var talk=document.getElementById(index);
        talk.innerHTML=this.state.pinglun; 
        console.log(talk);
        this.setState({
            flag:0
        })
      }
    render() {
        var uid = this.state.uid;
        console.log(this.state.good);
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
                    <div style={{height:'15vh'}}> 
                                {   this.state.all.map((item,index)=>( 
                                            <div className={index} style={{ width:'100%',height:'15vh'}}>
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
                                                    <img  src={this.state.good?zan1:good} style={{width:'4.5vh',height:'4.5vh',marginRight:'2vh'}} onClick={()=>this.good(index)}/>     
                                                    <img src={talk} style={{width:'4vh',height:'4vh',marginRight:'2vh'}} onClick={()=>this.unlogin(index)}/>
                                               </div>    
                                                </div>
                                                {/* <div id={index}> </div> */}
                                                <div className={this.state.flag !=0 ? 'talk' : 'untalk'} style={{height:'30px',width:'100%',float:'left'}}>  
                                                    <input type='text' placeholder='评论' style={{width:'70%',height:'30px',float:'left'}}/>
                                                    <button style={{width:'20%',color:'white',marginTop:'-3px',height:'32px',backgroundColor:'#66cccc',border:'none'}} onClick={()=>this.addItem()}>完成</button>
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
                                {   this.state.data.map((item,index)=>( 
                                            <div className={index} style={{ width:'100%',height:'15vh'}}>
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
                                                    <img  src={this.state.good?zan1:good} style={{width:'4.5vh',height:'4.5vh',marginRight:'2vh'}} onClick={()=>this.good(index)}/>     
                                                    <img src={talk} style={{width:'4vh',height:'4vh',marginRight:'2vh'}} onClick={()=>this.unlogin(index)}/>
                                                    <img src={delete1} style={{width:'4vh',height:'4vh'}} onClick={()=>this.delItem(index)}/> 
                                               </div>    
                                                </div>
                                                <div id={index}> </div>
                                                <div className={this.state.flag !=0 ? 'talk' : 'untalk'} style={{height:'30px',width:'95%',marginLeft:'4vw',float:'left'}}>  
                                                    <input onChange={this.changeValue} type='text' placeholder='评论' style={{width:'70%',height:'30px',float:'left'}}/>
                                                    <button style={{width:'20%',color:'white',marginTop:'-3px',height:'32px',backgroundColor:'#66cccc',border:'none'}} onClick={()=>this.addItem(index)}>完成</button>
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