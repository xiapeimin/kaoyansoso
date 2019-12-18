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
import back from '../imgs/back2.jpg';
import headimg from '../imgs/usrhead.png'
import delete1 from './images/delete.jpg';

var page = 0;
var headflag2=0;
var ttext=[];
var talks=[];
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
            del1:'',
            pre:0,
            headimg2:'',
            bjpre:0,
            bjnow:''
        }
    }

    componentDidMount(){
        var str = window.location.hash;
        var uid;
        if(str.indexOf('&')>=0){
            uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
            page=1;
            console.log(str,'topicmu',uid);
            console.log('pppppppppppppppppppp',this.state.page);
        }else{
            uid = str.split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
            page=0;
        }
        console.log(str,'topicmu',uid);

        fetch(`http://xpm.xpmwqhzygy.top/timglist`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                var tdata = res.data;
                for(var i=0;i<tdata.length;i++){
                    if(uid==tdata[i].uid){
                        this.setState({
                            bjnow:`http://xpm.xpmwqhzygy.top/topicimg/${uid}`,
                            bjpre:1
                        });
                        headflag2=0;
                        i=tdata.length;
                    }else if(i==tdata.length-1 && uid != tdata[i].uid){
                        headflag2 =1;
                        console.log(headflag2,'222222222222222');
                    }
                }
                if(tdata.length==0){
                    headflag2=1;
                }
            });

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
                  var tt = [];
                  this.setState({
                      all:res.data                     
                  });
                  for(var i=0;i<res.data.length;i++){
                      ttext[i]='';
                      tt[i]=res.data[i].talk;
                      console.log(tt[i]);
                      talks[i]=tt[i].split(this.state.username);
                      //talks[i][0]=this.state.username;
                      console.log(talks[i],typeof(talks[i]))
                  }
                  
              });

            });
            
            //...
              fetch(`http://xpm.xpmwqhzygy.top/headlist`,{
                  method:'GET'
              })
              .then((res)=>res.json())
              .then((res)=>{
                  var data=res.data;
                  for(var i=0;i<data.length;i++){
                      if(uid==data[i].uid){
                          this.setState({
                              headimg2:`http://xpm.xpmwqhzygy.top/head/${uid}`,
                              pre:1
                          });
                          i=data.length;
                      }else if(i==data.length-1&&uid!=data[i].uid){
                        this.setState({
                            pre:0
                        })
                      }
                  }
              });
              fetch(`http://xpm.xpmwqhzygy.top/headlist`,{
                method: 'GET'
                })
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res.data);
                    var data = res.data;
                    console.log(data);
                    for(var i=0;i<data.length;i++){                
                        var mid = document.getElementsByClassName('tx'+data[i].uid);
                        console.log(mid)
                        if(mid.length==0){
                            console.log(mid)
                        }else if(mid.length!=0){
                            for(var j=0;j<mid.length;j++){
                                mid[j].src = `http://xpm.xpmwqhzygy.top/head/${data[i].uid}`;
                            }
                           
                        }
                      
                        
                    }
                    
                });
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
        var username = this.state.username;
        var index=e.target.id.slice(3);
        var inp=document.getElementById('an'+index);
        var value=username+inp.value;

        ttext[index]+=value;

        var input=document.getElementById('als'+index);
        
        input.innerHTML+='<span style="color:blue">'+username+':'+'</span>'+'<span>'+inp.value+'</span>'+'<br/>';
        var div1=document.getElementById('al'+index);
        div1.className='untalk';
        const post ={
            talk:ttext[index]
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

      changefile = (e) => {
        var uid = this.state.uid;
        console.log(e.target);
        var r= new FileReader();
        var f=document.getElementById('getbj').files[0];

        console.log(f);
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        dataURL = windowURL.createObjectURL(f);

        r.readAsDataURL(f);

        r.onload=function (e) {
          document.getElementById('bjimg').src=dataURL;
          console.log(dataURL);
          console.log(this.result);

          var formData = new FormData();
          formData.append('file', f);

          if(headflag2 == 1){
              console.log('第一次上传');
            fetch(`http://xpm.xpmwqhzygy.top/topicimg/${uid}`,{
                // post提交
                method:"POST",
                //headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:formData  //把提交的内容转字符串
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
            });

          }else if(headflag2 == 0){
              console.log('换背景');
            fetch(`http://xpm.xpmwqhzygy.top/topicimg/${uid}`,{
                // post提交
                method:"PUT",
                //headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:formData  //把提交的内容转字符串
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
            });

          }


        }


      }
      delfocus = (e) => {  // onBlur={this.delfocus}
        var index=e.target.id.slice(2);
        var div1=document.getElementById('al'+index);
        div1.className='untalk';

      }
      delfocus2 = (e) => {
        var index=e.target.id.slice(2);
        var div1=document.getElementById('pl'+index);
        div1.className='untalk';

      }

    render() {
        var uid = this.state.uid;
        var headimg2=this.state.headimg2;
        var bjnow = this.state.bjnow;
        var rdata = this.state.data.reverse();
        console.log(talks,'ttttttttttt')
        return (
            <div>
                <NavBar style={{backgroundColor:'#66cccc',color:'white'}}
                  mode="dark"
               >动态</NavBar>
               <div>
                 <Tabs tabs={tabs}
                    initialPage={page}
                    style={{fontSize:'40vw'}}
                    >
                <div>
                    
                    
                    <div> 
                                {   this.state.all.map((item,index)=>( 
                                            <div className={index} style={{ width:'100%',padding:'4%',marginBottom:'1vh',backgroundColor:'#fff'}}>
                                                <div>
                                                <div style={{width:'20%',height:'60px',float:'left'}}>  
                                                    <img className={`tx${item.uid}`}  style={{ borderRadius:'30px',width:'60px',height:'60px'}} src={headimg} alt="" />                 
                                                </div>
                                                
                                                <div style={{width:'80%',float:'left',paddingTop:'18px'}}>
                                                    <span style={{fontSize:'18px',fontWeight:'bold'}}>{item.username}</span>
                                                    <div style={{height:'8px'}}></div>
                                                    <span style={{fontSize:'15px',color:'grey'}}>{item.time}</span>
                                                    <div style={{height:'5px'}}></div>
                                                    <span style={{fontSize:'16px'}}>{item.topic}</span>        
                                                </div>
                                                </div>

                                                <div style={{width:'100%',float:'left',textAlign:'right',paddingBottom:'2px'}}>         
                                                    <img  id={`all${index}`} src={item.good ? zan1 : good} style={{width:'4.5vh',height:'4.5vh',marginRight:'2vh'}} onClick={this.goodall}/>     
                                                    <img id={`a${index}`} src={talk} style={{width:'4vh',height:'4vh'}} onClick={this.alltalk}/>
                                                </div>    
                                                <div className='untalk' id={`al${index}`} style={{height:'30px',width:'100%',marginBottom:'2px',float:'left'}}>  
                                                    <input id={`an${index}`} onChange={this.changeValue} type='text' placeholder='评论' autofocus="autofocus" style={{width:'80%',paddingLeft:'3%',height:'30px',float:'left'}}/>
                                                    <button id={`ain${index}`} style={{width:'20%',color:'white',height:'30px',backgroundColor:'#66cccc',border:'none'}} onClick={this.allItem}>完成</button>
                                                </div>
                                               <div id={`als${index}`} style={{width:'100%',float:'left',fontSize:'17px',paddingTop:'10px',borderTop:'1px solid #ddd'}}>{talks.map((item2,index2)=>(
                                                   <div>{/**<span style={{color:'blue'}}>{item.username} : </span> */}<span> {item2[index2+1]}</span></div>
                                               ))}</div>
                                                
                                                <div style={{clear:'both'}}></div>
                                            </div>    
                                                            
                                        ))
                                }
                     </div>
                    
                </div>
                <div style={{background:'#fff',position:'relative',height:'83vh'}}>
            
                        <img src={this.state.bjpre == 0 ? back : `${bjnow}`} id='bjimg' style={{width:'100%',height:'220px'}} />
                        <input type='file' onChange={this.changefile} id='getbj'  style={{opacity:'0',position:'absolute',background:'red',top:'0',left:'0',width:'100%',height:'220px'}} />
                        <img src={this.state.pre==0?headimg:`${headimg2}`} style={{height:'100px',width:'100px',marginRight:'10px',float:'right',position:'relative',marginTop:'-50px',borderRadius:'50px'}} />
                        <p style={{float:'right'}}>{this.state.username}</p>
                        <Link to={`/publishTopic?uid=${uid}`}><div style={{width:'90%',marginLeft:'5%',height:'40px',lineHeight:'40px',float:'left',fontSize:'15px',borderBottom:'1px solid #ddd'}}><img src={require('../imgs/fabu.png')} style={{float:'left'}} /><p style={{float:'left',marginTop:'0px',marginLeft:'7px',color:'#adafaf'}}>去分享一下新鲜事吧...</p></div></Link>
              

                      <div> 
                      <div className={this.state.flag == 1 ? 'talk' : 'untalk'} style={{backgroundColor:'#fff',border:'1px solid grey',borderRadius:'5px',position:'absolute',width:'50%',left:'25%',top:'30%',height:'15vh'}}>
                            <p style={{textAlign:'center',lineHeight:'6vh',fontWeight:'bold'}}>确认删除？</p>
                            <div className='glin'>
                                <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%',fontWeight:'bold'}} onClick={this.quxiao}>取消</div>
                                <div onClick={this.del} style={{color:'red',fontWeight:'bold'}}>删除</div>
                            </div>
                        </div>

                        
                                {   rdata.map((item,index)=>( 
                                            <div className={`l${index}`} style={{ width:'100%',padding:'3%',background:'#fff',overflow:'hidden'}}>
                                                <div>
                                                <div style={{width:'20%',float:'left'}}>  
                                                <img style={{ borderRadius:'30px',width:'60px',height:'60px'}} src={this.state.pre==0?headimg:`${headimg2}`} alt="" />                 
                                                </div>
                                                
                                                <div style={{width:'80%',float:'left',paddingTop:'18px'}}>
                                                    <span style={{fontSize:'18px',fontWeight:'bold'}}>{this.state.username}</span>
                                                    <div style={{height:'8px'}}></div>
                                                    <span style={{fontSize:'15px',color:'grey'}}>{item.time}</span>
                                                    <div style={{height:'5px'}}></div>
                                                    <span style={{fontSize:'16px'}}>{item.topic}</span>
                                                    
                                                </div>
                                                </div>

                                                <div style={{width:'100%',float:'left',textAlign:'right',paddingTop:'3px',paddingBottom:'2px',borderBottom:'1px solid #ddd'}}>
                                                    <img  src={item.good ? zan1 : good} style={{width:'4.5vh',height:'4.5vh',marginRight:'1vh'}} id={`img${index}`} onClick={this.good}/>                                         
                                                    <img id={`p${index}`} src={talk} style={{width:'4vh',height:'4vh',marginRight:'1vh'}} onClick={this.unlogin}/>
                                                    <img id={`del${index}`} src={delete1} style={{width:'4vh',height:'4vh'}} onClick={this.delItem}/> 
                                               </div>    

                                               <div className='untalk' id={`pl${index}`} style={{height:'30px',width:'100%',marginBottom:'2px',float:'left'}}>  
                                                    <input id={`in${index}`} onChange={this.changeValue} type='text' placeholder='评论' autofocus="autofocus" style={{width:'80%',paddingLeft:'3%',height:'30px',float:'left'}}/>
                                                    <button id={`fin${index}`} style={{width:'20%',color:'white',height:'30px',backgroundColor:'#66cccc',border:'none'}} onClick={this.addItem}>完成</button>
                                                </div>
                                                
                                                <div id={`pls${index}`}>{item.talk}</div>
                                                
                                                <div style={{clear:'both'}}></div>
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