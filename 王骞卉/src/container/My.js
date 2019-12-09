import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import touxiang from '../imgs/头像.jpg'
import yanxiao from '../imgs/研校.png'
import jihua from '../imgs/计划.png'
import shoucang from '../imgs/收藏.png'
import wenjian from '../imgs/文件.png'
import shezhi from '../imgs/设置.png'
import bangzhu from '../imgs/帮助.png'
import jiantou from '../imgs/箭头.png'
import beijing from '../imgs/yh.jpg'
export default class My extends Component {
    constructor(){
        super();
        this.state={
            username:' ',
            text:'考研宣言：说点什么吧...',
            uid:0
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
        }else{
            var uid = str.split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
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
                    username:res.data[0].username
                });  
            });
        }
        
    }
    render() {
        var uid = this.state.uid;
        return (
            <div className='testbox'>
                <div style={{width:'100%',height:'70vw'}}>
                    <img src={beijing} style={{width:'100%',height:'70vw',position:'absolute',top:'0'}} />
                    <Link to={`/myset?uid=${uid}`}><img src={shezhi} alt="" style={{position:'absolute',width:'10vw',height:'10vw',top:'3vw',right:'2vw',float:'right'}}></img></Link>
                    <img src={touxiang} alt="" style={{position:'absolute',width:'25vw',height:'25vw',top:'10vw',left:'38%',borderRadius:'12vw'}}/>
                    <div style={{width:'100%',height:'13vw',position:'absolute',top:'38vw',textAlign:'center',color:'#FFFFFF'}}>
                        <span name="username" style={{fontSize:'18px'}}>{this.state.username}</span> 
                        <span name="qianming" style={{fontSize:'15px',display:'block',marginTop:'2vw'}}>{this.state.text}</span>
                    </div>
                    <div style={{position:'absolute',bottom:'0',width:'100%',height:'18vw',top:'52vw',fillOpacity:'50',opacity:'0.5',backgroundColor:'#FFFFFF'}}>
                        <div style={{textAlign:'center',width:'33%',height:'18vw',float:'left',borderRightColor:'#AAAAAA',borderRightStyle:'solid',borderRightWidth:'1px'}}>
                            <span style={{margin:'0',fontSize:'8vw',height:'12vw',display:'block'}}>1</span>
                            <span style={{margin:'0',fontSize:'4vw',display:'block',height:'6vw'}}>动态</span>
                        </div>
                        <div style={{textAlign:'center',width:'33%',height:'18vw',float:'left',borderRightColor:'#AAAAAA',borderRightStyle:'solid',borderRightWidth:'1px'}}>
                            <span style={{margin:'0',fontSize:'8vw',display:'block',height:'12vw'}}>0</span>
                            <span style={{margin:'0',fontSize:'4vw',display:'block',height:'6vw'}}>收藏</span>
                        </div>
                        <div style={{textAlign:'center',width:'33%',height:'18vw',float:'left'}}>
                            <span style={{margin:'0',fontSize:'8vw',display:'block',height:'12vw'}}>3</span>
                            <span style={{margin:'0',fontSize:'4vw',display:'block',height:'6vw'}}>计划</span>
                        </div>
                    </div>
                </div>
                <div style={{height:'2vw',background:'#dedada',opacity:'0.8'}}></div>
                <div style={{background:'#fff',padding:'5%',width:'100%'}}>
                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={yanxiao} alt="" style={{width:'15%',height:'100%',float:'left'}}/>
                        <span style={{width:'70%',float:'left'}}>我的研校</span>
                        <Link to={`/myschool?uid=${uid}`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>
                    
                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={jihua} alt="" style={{width:'15%',height:'100%',float:'left'}}/>
                        <span style={{width:'70%',float:'left'}}>我的计划</span>
                        <Link to={`/myPlan?uid=${uid}`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>

                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={shoucang} alt="" style={{width:'15%',height:'100%',float:'left'}}/>
                        <span style={{width:'70%',float:'left'}}>我的收藏</span>
                        <Link to={`/mysave?uid=${uid}`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>

                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={wenjian} alt="" style={{width:'15%',height:'100%',float:'left'}}/>
                        <span style={{width:'70%',float:'left'}}>我的笔记</span>
                        <Link to={`/note?uid=${uid}`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>

                    <div style={{width:'100%',height:'16vw',fontSize:'6vw',lineHeight:'16vw',marginBottom:'1vw'}}>
                        <img src={bangzhu} alt="" style={{width:'15%',height:'100%',float:'left'}}/>
                        <span style={{width:'70%',float:'left'}}>帮助与反馈</span>
                        <Link to={`/help?uid=${uid}`}><img src={jiantou} alt="" style={{width:'15%',height:'100%',float:'right'}}/></Link>
                    </div>
            
                </div>
        
                
            </div>
        )
    }
}