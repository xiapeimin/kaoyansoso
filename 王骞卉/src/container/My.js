import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import touxiang from '../imgs/头像.jpg'
import yanxiao from '../imgs/yanxiao.png'
import jihua from '../imgs/jihua.png'
import shoucang from '../imgs/shoucang.png'
import wenjian from '../imgs/wenjian.png'
import shezhi from '../imgs/设置.png'
import bangzhu from '../imgs/bangzhu.png'
import jiantou from '../imgs/箭头.png'
import beijing from '../imgs/yh.jpg'
import headimg from '../imgs/usrhead.png';

var usertd;
export default class My extends Component {
    constructor(){
        super();
        this.state={
            username:' ',
            text:'考研宣言：说点什么吧...',
            uid:0,
            headimg2:'',
            pre:0,
            storage:window.localStorage,
            planNum:0,
            topicNum:0,
            saveNum:0,
            fans:0,
            watch:0
        }
    
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid=1;
        if(str.indexOf('&')>=0){
            uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
        }else{
            uid = str.split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
        }

        usertd='todouser'+uid;  
        var storage = this.state.storage; 
        if(storage.getItem(usertd) == null){
            this.setState({
                planNum:0
            });
        }else if(storage.getItem(usertd) != null){
            var data = storage.getItem(usertd);
            var planNum = JSON.parse(data).length;
            this.setState({
                planNum:planNum
            });
        }

        console.log(str,'mymu',uid);
        if(uid != 'undefined'){
            fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
            method: 'GET',        
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    username:res.data[0].username,
                    text:res.data[0].xyan
                });  
                if(this.state.text == ''){
                    this.setState({
                        text:'考研宣言：说点什么吧...'
                    })
                }
            });
        }

        fetch(`http://xpm.xpmwqhzygy.top/headlist`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                var data = res.data;
                for(var i=0;i<data.length;i++){
                    if(uid==data[i].uid){
                        this.setState({
                            headimg2:`http://xpm.xpmwqhzygy.top/head/${uid}`,
                            pre:1
                        });
                        i=data.length;
                    }else if(i==data.length-1 && uid != data[i].uid){
                        this.setState({
                            pre:0
                        })
                    }
                }
            });

            fetch(`http://zy.xpmwqhzygy.top/topic/${uid}`,{
                method: 'GET'
              })
              .then((res)=>res.json())
              .then((res)=>{
                  console.log(res.data);
                  var data = res.data;
                  if(data.length == 0){
                      this.setState({
                          topicNum:0
                      })
                  }else if(data.length != 0){
                      this.setState({
                          topicNum:data.length
                      })
                  }
                  console.log('kkkkkkkkkkk')
              });
  
              fetch(`http://xpm.xpmwqhzygy.top/testsave/${uid}`,{
                method: 'GET'
                })
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res.data);
                    this.setState({
                        saveNum:res.data.length
                    });
                });

            fetch(`http://wqh.xpmwqhzygy.top/love1/${uid}`,{
                method: 'GET'
              })
              .then((res)=>res.json())
              .then((res)=>{
                  console.log(res.data);
                  var data = res.data;
                  if(data.length == 0){
                      this.setState({
                          watch:0
                      })
                  }else if(data.length != 0){
                      this.setState({
                          watch:data.length
                      })
                  }
              });

              fetch(`http://wqh.xpmwqhzygy.top/love2/${uid}`,{
                method: 'GET'
              })
              .then((res)=>res.json())
              .then((res)=>{
                  console.log(res.data);
                  var data = res.data;
                  if(data.length == 0){
                      this.setState({
                          fans:0
                      })
                  }else if(data.length != 0){
                      this.setState({
                          fans:data.length
                      })
                  }

              });
        
    }
    render() {
        var uid = this.state.uid;
        var headimg2 = this.state.headimg2;

        return (
            <div className='testbox'>
                <div style={{width:'100%',height:'70vw'}}>
                    <img src={beijing} style={{width:'100%',height:'70vw',position:'absolute',top:'0'}} />
                    <Link to={`/myset?uid=${uid}`}><img src={shezhi} alt="" style={{position:'absolute',width:'10vw',height:'10vw',top:'3vw',right:'2vw',float:'right'}}></img></Link>
                    <img src={this.state.pre == 0 ? headimg : `${headimg2}`} alt="" style={{position:'absolute',width:'22vw',height:'22vw',top:'10vw',left:'39%',borderRadius:'11vw'}}/>
                    <div style={{width:'100%',height:'13vw',position:'absolute',top:'35vw',textAlign:'center',color:'#FFFFFF'}}>
                        <span name="username" style={{fontSize:'18px'}}>{this.state.username}</span> 
                        <span name="qianming" style={{fontSize:'15px',display:'block',marginTop:'2vw'}}>{this.state.text}</span>
                    </div>
                    <div style={{position:'absolute',bottom:'0',width:'100%',height:'18vw',top:'52vw',fillOpacity:'50',opacity:'0.5',backgroundColor:'#FFFFFF'}}>
                        <div style={{textAlign:'center',width:'25%',height:'18vw',float:'left',borderRightColor:'#AAAAAA',borderRightStyle:'solid',borderRightWidth:'1px'}}>
                            <span style={{margin:'0',fontSize:'8vw',height:'12vw',display:'block'}}>{this.state.topicNum}</span>
                            <span style={{margin:'0',fontSize:'4vw',display:'block',height:'6vw'}}>动态</span>
                        </div>
                        <div style={{textAlign:'center',width:'25%',height:'18vw',float:'left',borderRightColor:'#AAAAAA',borderRightStyle:'solid',borderRightWidth:'1px'}}>
                            <span style={{margin:'0',fontSize:'8vw',display:'block',height:'12vw'}}>{this.state.saveNum}</span>
                            <span style={{margin:'0',fontSize:'4vw',display:'block',height:'6vw'}}>收藏</span>
                        </div>
                        {/* <div style={{textAlign:'center',width:'25%',height:'18vw',float:'left',borderRightColor:'#AAAAAA',borderRightStyle:'solid',borderRightWidth:'1px'}}>
                            <span style={{margin:'0',fontSize:'8vw',display:'block',height:'12vw'}}>{this.state.planNum}</span>
                            <span style={{margin:'0',fontSize:'4vw',display:'block',height:'6vw'}}>计划</span>
                        </div> */}
                        <Link to={`/focuslist?uid=${uid}`}><div style={{textAlign:'center',width:'25%',height:'18vw',float:'left',borderRightColor:'#AAAAAA',borderRightStyle:'solid',borderRightWidth:'1px'}}>
                            <span style={{margin:'0',fontSize:'8vw',display:'block',height:'12vw'}}>{this.state.watch}</span>
                            <span style={{margin:'0',fontSize:'4vw',display:'block',height:'6vw'}}>关注</span>
                        </div>
                        </Link>
                        <Link to={`/fanslist?uid=${uid}`}>
                        <div style={{textAlign:'center',width:'25%',height:'18vw',float:'left'}}>
                            <span style={{margin:'0',fontSize:'8vw',display:'block',height:'12vw'}}>{this.state.fans}</span>
                            <span style={{margin:'0',fontSize:'4vw',display:'block',height:'6vw'}}>粉丝</span>
                        </div>
                        </Link>
                    </div>
                </div>
                <div style={{height:'2vw',background:'#dedada',opacity:'0.8'}}></div>
                <div style={{background:'#fff',padding:'5%',width:'100%'}}>
                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={yanxiao} alt="" style={{width:'12%',height:'90%',float:'left'}}/>
                        <span style={{width:'67%',paddingLeft:'4%',float:'left'}}>我的研校</span>
                        <Link to={`/myschool?uid=${uid}`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>
                    
                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={jihua} alt="" style={{width:'12%',height:'90%',float:'left'}}/>
                        <span style={{width:'67%',paddingLeft:'4%',float:'left'}}>我的计划</span>
                        <Link to={`/myPlan?uid=${uid}`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>

                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={shoucang} alt="" style={{width:'12%',height:'90%',float:'left'}}/>
                        <span style={{width:'67%',paddingLeft:'4%',float:'left'}}>我的收藏</span>
                        <Link to={`/mysave?uid=${uid}`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>

                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={wenjian} alt="" style={{width:'12%',height:'90%',float:'left'}}/>
                        <span style={{width:'67%',paddingLeft:'4%',float:'left'}}>我的笔记</span>
                        <Link to={`/note?uid=${uid}&typef=my`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>

                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={bangzhu} alt="" style={{width:'12%',height:'90%',float:'left'}}/>
                        <span style={{width:'67%',paddingLeft:'4%',float:'left'}}>帮助与反馈</span>
                        <Link to={`/help?uid=${uid}`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>
            
                </div>

            
    
                
            </div>
        )
    }
}