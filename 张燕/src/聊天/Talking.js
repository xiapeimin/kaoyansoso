import React, { Component } from 'react'
import {NavBar, Progress} from 'antd-mobile'
import {Link} from 'react-router-dom'
import AudioAnalyser from "react-audio-analyser";
import Chat from 'chat-react'
import jianpan from '../imgs/jianpan.jpg'
import yuyin from '../imgs/yuyin.jpg'
import xiangce from '../imgs/xiangce.jpg'
import zhaoxiang from '../imgs/zhaoxiang.jpg'
import gback from '../imgs/gback.png'

var heorshe=[];
var mytalk=[];
var mediaStreamTrack; 
var delarr = [];
var timer; //录音进度条定时器
var rectimer; //录音计时
var audioBlob='';
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
            inputValue: '',
            messages: [],
            timestamp: new Date().getTime(),
            istk:1,
            showMod: false,
            isShot: false,
            allok:false,
            ischeck:false,
            img:'', //拍摄的照片,
            iscavs:false,
            isvedio:true,
            imgarr:[],
            savearr:[],
            //iscanvas:false, //画板
            del:false, //判断是否图片删除
            showrecord:false,//录音控件
            percent: 0, //录音进度条
            mtime:0,
            stime:0,
            status: '',
        }
    }
    //表情包
      setInputfoucs = () => {
        this.chat.refs.input.inputFocus();  //set input foucus
      }
    //   setScrollTop = () => {
    //     this.chat.refs.message.setScrollTop(1200);  //set scrollTop position
    //   }
      sendMessage = (v) => {
        const {value}=v;
        var myhead=this.state.myhead;
        const post={
            uidall:this.state.uid+'&'+this.state.pickid,
            uid:this.state.uid,
            mytalk:value
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
    componentDidMount(){
        var str = window.location.hash;
        var uid=str.split('=')[1].split('&')[0];
        var pickid=str.split('=')[2].split('&')[0];
       console.log(uid,pickid);
        var itid=[];
        var myid=[];
        this.setState({
            uid:uid,
            pickid:pickid,
            headimg:`http://xpm.xpmwqhzygy.top/head/${pickid}`,
            myhead:`http://xpm.xpmwqhzygy.top/head/${uid}`
        })
         fetch(`http://zy.xpmwqhzygy.top/talking`,{
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
    jianpan=()=>{
        var jp=document.getElementsByClassName('my-chat-box')[0];
        var selback=document.getElementsByClassName('selback')[0];
        jp.style={
            display:'block'
        }
    }
    //照相
    getdelimg = (e)=> {
        var savearr = this.state.savearr;
        var imgsrc = document.getElementById(e).src;
        var index = e.slice(4);
        console.log(e);
        // var pnode = document.getElementById(`tag${index}`);
        var tags = document.getElementById('tags');
        delarr.push(imgsrc);
        for(var i=0;i<savearr.length;i++){
            if(savearr[i]==imgsrc){
                savearr.splice(i,1);
                break;
            }
        }
        this.setState({
            savearr:savearr
        });
        // for(var j=0;j<tags.childNodes.length;j++){
        //     tags.removeChild(tags.childNodes[i]);
        // }
        //tags.innerHTML='';
        
        console.log(index,this.state.savearr.length,'dee',tags.childNodes.length);
    }
    delimg = (e) => {
        console.log(e,'oooo');
        var thetag = document.getElementById(e);
        thetag.parentNode.removeChild(thetag); 
        //console.log('dee',thetag.parentNode.childNodes.length);
        // var savearr = this.state.savearr;
        // this.state({
        //     imgarr: savearr
        // });
    }
    tkback = () => {
        this.setState({
            isShot:false,
            iscavs:false,
            isvedio:true
        });
    }
    readyVideo = (e) => {
        var that = this;
        that.setState({
            istk:0,
            showMod: true,
            isShot: false,
            allok:true
        }, () => {
            var myVideo = document.getElementById('myVideo');
            var myCanvas = document.getElementById('myCanvas');
            let videoObj = {
                'audio': false,
                'video': true,
                video: {
                    // width: { min: 1024, ideal: 4000, max: 2048 },
                    // height: { min: 768, ideal: 1200, max: 1536 }
                }
            }            
            navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMeddia || navigator.msGetUserMedia;
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {                
                navigator.mediaDevices.getUserMedia(videoObj).then(function (stream) {                    
                    mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[0];
                    myVideo.srcObject = stream;
                    myVideo.play();
                }).catch(function (err) {
                    console.log(err);
                })
            }else if (navigator.getMedia) { // 使用旧方法打开摄像头
                navigator.getMedia(videoObj, function (stream) {
                mediaStreamTrack = stream.getTracks()[0];
                myVideo.srcObject = stream;
                myVideo.play();               
                }, function (err) {
                    console.log(err);
                });
            }
        })
    }
    shot = () => {
        var myVideo = document.getElementById('myVideo');
        var myCanvas = document.getElementById('myCanvas').getContext('2d');
        myCanvas.drawImage(myVideo, 0, 0, 600, 600);
        this.setState({
            isShot: true,
            iscavs:true,
            isvedio:false
        });
    }
    // 确认此次拍摄照片
    sureShot = () => {
        let that=this;
        var myhead=this.state.myhead;
        var imgarr = this.state.imgarr;
        var savearr = this.state.savearr;
        var myCanvas = document.getElementById('myCanvas');
        var img = myCanvas.toDataURL("image/png");
        savearr.push(img);
        imgarr.push(img);
        console.log(img);
        var selback=document.getElementsByClassName('selback')[0];
        // selback.style={
        //     display:'none'
        // }
        var talk=document.getElementsByClassName('talking')[0];
        var inp=document.getElementById('inp')
        var tell= "<div style='width:100%;float:left'>"
        +"<div style='width:20%;height:60px;float:right'>"
            +'<img src='+myhead+' style="width:60px;height:60px;border-radius:50%"/>'
         +"</div>"
        +"<div style='max-width:65%;float:right;margin-left:12%;padding-right:10px;background-color:#cceeff;padding-left:10px;padding-top:15px;border-radius:20%;margin-right:3%;margin-bottom:20px'>"
            +"<img style='width:100px;height:100px' src="+img+">"+"</img>"
        +"</div>"
       +"</div>"
        talk.innerHTML+=tell 
        const post={
            uidall:this.state.uid+'&'+this.state.pickid,
            uid:this.state.uid,
            mytalk:img
        }
        // fetch(`http://zy.xpmwqhzygy.top/talk`,{
        //     method:'POST',
        //     headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        //     body:JSON.stringify(post)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        // });
        that.setState({
            imgarr:imgarr,
            savearr:savearr
        });
        that.cancel();
    }
    cancel = () => {
        //关闭摄像头
        var myVideo = document.getElementById('myVideo');
        if (myVideo) { mediaStreamTrack && mediaStreamTrack.stop(); }
        this.setState({
            isShot: false,
            showMod: false,
            iscavs:false,
            istk:true,
            isvedio:true
        })
    }
    //相册
    getfile = (e) => {
        var myhead=this.state.myhead;
        var uidall=this.state.uid+'&'+this.state.pickid;
        var r= new FileReader();
        var f=document.getElementById('Photo').files[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        dataURL = windowURL.createObjectURL(f);
        r.readAsDataURL(f);
        r.onload=function(e){
            var formData=new FormData();
            formData.append('image',f);
            fetch(`http://zy.xpmwqhzygy.top/talkimg/${uidall}`,{
                method:'POST',
                // headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:formData
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
        var talk=document.getElementsByClassName('talking')[0];
        var tell= "<div style='width:100%;float:left'>"
        +"<div style='width:20%;height:60px;float:right'>"
            +'<img src='+myhead+' style="width:60px;height:60px;border-radius:50%"/>'
         +"</div>"
        +"<div style='max-width:65%;float:right;margin-left:12%;padding-right:10px;background-color:#cceeff;padding-left:10px;padding-top:15px;border-radius:20%;margin-right:3%;margin-bottom:20px'>"
            +"<img style='width:100px;height:100px' src="+dataURL+">"+"</img>"
        +"</div>"
       +"</div>"
        talk.innerHTML+=tell 
      }
    render() {
        let { isShot, showMod ,img,percent,status, audioSrc, audioType} = this.state;
        const audioProps = {
            audioType,
            // audioOptions: {sampleRate: 30000}, // 设置输出音频采样率
            status,
            audioSrc,
            timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
            startCallback: (e) => {
                console.log("succ start", e)
            },
            pauseCallback: (e) => {
                console.log("succ pause", e)
            },
            stopCallback: (e) => {
                this.setState({
                    audioSrc: window.URL.createObjectURL(e)
                })
                console.log("succ stop", window.URL.createObjectURL(e));
                audioBlob=e;
            },
            onRecordCallback: (e) => {
                console.log("recording", e)
            },
            errorCallback: (err) => {
                console.log("error", err)
            }
        }
        const userInfo = {
            avatar: "http://img.binlive.cn/6.png",
            userId: "59e454ea53107d66ceb0a598",
            name: 'ricky'
          };
        var uid=this.state.uid;
        var headimg=this.state.headimg;
        var myhead=this.state.myhead;
        return (   
            <div className='talk'>
                <NavBar style={{background:'#66cccc',color:'#fff',position:'fixed',width:'100%',top:'0'}} 
                leftContent={<Link to={`/say?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                 mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff',fontSize:'22px'}}>{this.state.username}</span></NavBar>
                <div style={{padding:'5%',width:'100%',marginTop:'50px',float:'left'}}>
                    <div style={{width:'20%',height:'60px',float:'left'}}>
                        <img src={headimg} style={{width:'60px',heght:'60px',borderRadius:'50%'}}/>
                    </div>
                    <div style={{float:'left',maxWidth:'65%',paddingTop:'15px',paddingLeft:'10px',paddingRight:'10px',borderRadius:'20%',backgroundColor:'#cef',marginBottom:'20px'}}>
                        <p>你好</p>
                    </div>
                </div>
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
                            <div className='htl' style={{float:'right',maxWidth:'65%',paddingRight:'10px',paddingLeft:'10px',paddingTop:'15px',backgroundColor:'#cef',borderRadius:'20%',marginBottom:"20px",marginRight:'3%'}}>
                                <p>{mytalk[index]}</p>
                            </div>      
                        </div>
                        </div>
                        ))
                    }
                     <div style={{width:'100%',float:'left',display:this.state.audioSrc==undefined?'none':'block'}}>
                            <div style={{width:'20%',height:'60px',float:'right'}}>
                                <img src={myhead} style={{width:'60px',heght:'60px',borderRadius:'50%'}}/>
                            </div>
                            <div className='htl' style={{float:'right',maxWidth:"65%",marginBottom:"20px",marginTop:'5px',marginRight:'9%'}}>
                                <audio controls src={this.state.audioSrc} className='audio_nt'/>
                            </div>      
                        </div>
                </div>
                <div className='video_page' style={this.state.istk!=0 ? {display:'none'} :{width:'100%',position:'fixed',top:0,bottom:0}}>
                            {showMod 
                            ?(<div className='video_model'>
                                <div className='video_box'>
                                    <video id='myVideo' height={window.innerHeight} style={this.state.isvedio ? {width:'100%',objectFit:'cover',position:'absolute',top:0,bottom:0} : {display:'none'}}></video>
                                    <canvas style={this.state.iscavs==true ? {display:'block',width:'100%',height:window.innerHeight,objectFit:'cover'} : {display:'none'}} id='myCanvas' width='600' height="600" >
                                    </canvas>
                                </div>
                                <button className='tkpic_nt' onClick={isShot ? this.tkback : this.shot}>{isShot?'重拍':''}</button>
                                {isShot?(<button className='qr_nt' onClick={this.sureShot}></button>):null}
                                <button style={this.state.allok ? {display:'block'} : {display:'none'}} className='qx_nt' onClick={this.cancel}></button>
                                <button style={this.state.allok ? {display:'block'} : {display:'none'}} className='shift_nt' onClick={this.cancel}></button>
                            </div>)
                            : null}
                        </div>
                        <div className={this.state.showrecord==true ? 'record' : 'nock_nt'} ><AudioAnalyser {...audioProps}></AudioAnalyser></div>
                            <div className='selback' style={{width:'100%',float:'left',backgroundColor:"#f7f7f7",position:'fixed',bottom:'0'}}>
                                <img onClick={this.jianpan} src={jianpan} style={{width:'50px',height:'50px',marginRight:'6%',marginLeft:'9%'}}/>
                                <img onClick={this.recording} src={yuyin} style={{width:'50px',height:'50px',marginTop:"5px",marginRight:'6%'}}/>
                                <img src={xiangce} id='mPhoto' style={{width:'50px',height:'50px',marginRight:'6%'}} />
                                <input type='file' onChange={this.getfile} id='Photo' style={{opacity:'0',width:'50px',height:'50px',marginLeft:'-12%',background:'red',borderRadius:'30px'}} />
                                <img onClick={this.readyVideo} src={zhaoxiang} style={{width:'50px',height:'50px',marginRight:'6%'}}/>
                                <img src={gback} style={{width:'25px',height:'25px'}}/>
                            </div>
                            <div className={this.state.showrecord==true ? 'record_nt' : 'nock_nt'}>
                                <div className="show-info" style={{width:'100px'}}>
                                    <div className="progress"><Progress style={{width:'100px'}} percent={percent} position="normal" /></div>
                                    <div style={{width:'100px'}} aria-hidden="true" className="redtime_nt">{this.state.mtime==0?'00':this.state.mtime}:{this.state.stime==0?'00':this.state.stime}</div>
                                </div>     
                                    <span style={{fontSize:'20px'}} onClick={() => this.controlAudio("inactive")}>停止</span>                                           
                                    {status !== "recording" && <span style={{fontSize:'20px'}} onClick={() => this.controlAudio("recording")}>开始</span>}
                                    {status === "recording" && <span style={{fontSize:'20px'}} onClick={() => this.controlAudio("paused")}>暂停</span>}                            
                        </div>
                    <Chat
                    style={{display:"none"}}
                        ref={el => this.chat = el}
                        className="my-chat-box"
                        dataSource={this.state.messages}
                        userInfo={userInfo}
                        value={this.state.inputValue}
                        sendMessage={this.sendMessage}
                        timestamp={this.state.timestamp}
                        placeholder="请输入"
                        messageListStyle={{width: '100%',height:'0px'}}
                        />
                </div>       
        )
    }
    //语音发送
    recording = ()=> {
        this.setState({
            showrecord:true
        });
    }
    controlAudio(status) {
        this.setState({
            status
        });
        if(status=='inactive'){
            this.setState({
                showrecord:false,
                percent:0,
                mtime:0,
                stime:0
            });
            clearInterval(timer);
            clearInterval(rectimer);
        }else if(status=='recording'){
            timer=setInterval(() => {
                this.add();
            }, 100);
            rectimer=setInterval(() => {
                var m = Number(this.state.mtime);
                var s = Number(this.state.stime);
                console.log(m,s,'lll');
                s=s+1;
                s=s+'';
                console.log(m,s,'ppp');
                if(s.length==1){
                    s='0'+s;
                    this.setState({
                        stime:s
                    });
                }else if(s.length==2){
                    if(Number(s)<60){
                        this.setState({
                            stime:s
                        });        
                    }else{
                        m=m+1;
                        m=m+'';
                        this.setState({
                            stime:0
                        });
                        if(m.length==1){
                            m='0'+m;
                            this.setState({
                                mtime:m
                            });
                        }else if(m.length==2){
                            this.setState({
                                mtime:m
                            });
                        }
                    }
                }
            }, 1000);
        }else if(status=='paused'){
            clearInterval(timer);
            clearInterval(rectimer);
        }
    }

    changeScheme(e) {
        this.setState({
            audioType: e.target.value
        });
    }
    add = () => {
        let p = this.state.percent + 0.1;
        if (this.state.percent >= 100) {
          p = 0;
        }
        this.setState({ percent: p });
    }
}
