import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import headimg from './imgs/usrhead.png';
import {myFetch} from '../fetch/util';
import Speak from './Speak';
import './userchat.css';
import '../note/tkpic.less';
import '../note/note.css';


var mediaStreamTrack; //拍照

var smdata=[];
for(var i=1;i<132;i++){
    smdata.push(i);
}


export default class Contact extends Component{
    constructor(){
        super();
        this.state={
            uid:1,
            username:'',
            toolflag:0,
            text:'',
            text2:'',
            pre:0,
            pickimg:0,
            isShot: false,//是否点击弹框拍摄按钮
            showMod: false,
            img:'', //拍摄的照片,
            iscavs:false,
            istk:false,
            isvedio:true,
            allok:false,
            pickid:1
        };
        
    }
    
    componentDidMount(){
        var str = window.location.hash;
        var uid=str.split('=')[1].split('&')[0];
        var pickid=str.split('=')[2].split('&')[0];
        console.log(uid,pickid);

        this.setState({
            uid:uid,
            pickid:pickid
        });
        window.addEventListener('scroll', this.scrollHandler);
        myFetch.get(`/user/${pickid}`)
        .then(res=>{
            this.setState({
                username:res.data[0].username
            });
        })

        myFetch.get('/headlist')
        .then((res)=>{
            var data = res.data;
            var f1=0,f2=0;
            for(var i=0;i<data.length;i++){
                if(uid==data[i].uid){
                    f1=1;
                }else if(pickid==data[i].uid){
                    f2=1;
                }else if(i==data.length-1){
                    if(f1==0 && uid!=data[i].uid){
                        this.setState({
                            pre:1
                        });
                    }else if(f2==0 && pickid!=data[i].uid){
                        this.setState({
                            pickimg:1
                        });
                    }
                }
            }
        });


        myFetch.get(`/getchattxt/${uid}&${pickid}`)
        .then(res=>{ 
            if(res.data!='null'){
                var resdata = JSON.parse(res.data);           
                var chat = document.getElementById('chat');
                var mybox = document.getElementById('mybox');
                var myspeak = document.getElementById('myspeak');
                var uaudio = document.getElementById('uaudio');
                var audtime = document.getElementById('audtime');
                var rskbox = document.getElementById('rskbox');
                var paudtime = document.getElementById('paudtime');
                var puaudio = document.getElementById('puaudio');
                var txt = document.getElementById('txt');
                var rbox = document.getElementById('rbox');
                var rtxt = document.getElementById('rtxt');
                var rpicbox = document.getElementById('rpicbox');
                var mypics = document.getElementById('mypics');
                var ptrtxt = document.getElementById('ptrtxt');
                var uthepic = document.getElementById('uthepic');

                for(var i=0;i<resdata.length;i++){
                    if(resdata[i].flag==1){
                        var cf = 0;
                        var spt = this.getpositon(resdata[i].content,'&');
                        if(spt.length!=0&&resdata[i].content.indexOf('<div>')==-1){
                            cf = 1;
                            var aftres='';
                            var a = [],b = [];
                            for(var r=0;r<spt.length;r++){
                                if(r%2==0){
                                    a.push(spt[r]);
                                }else{
                                    b.push(spt[r]);
                                }
                            }
                            for(var j=0;j<a.length;j++){                           
                                var stxt='';
                                var tsrc = resdata[i].content.slice(a[j]+1,b[j]);
                                var tsml = require(`./smlimg/${tsrc}.gif`);
                                if(j==0&&a.length==1){
                                    stxt = resdata[i].content.slice(0,a[j])+"<img src="+tsml+" style='width:6vw;height:6vw' />"+resdata[i].content.slice(b[j]+1);
                                }else if(j==0){
                                    stxt = resdata[i].content.slice(0,a[j])+"<img src="+tsml+" style='width:6vw;height:6vw' />";                    
                                }else if(j==a.length-1){
                                    stxt = resdata[i].content.slice(b[j-1]+1,a[j])+"<img src="+tsml+" style='width:6vw;height:6vw' />"+resdata[i].content.slice(b[j]+1);                    
                                }else{
                                    stxt= resdata[i].content.slice(b[j-1]+1,a[j])+"<img src="+tsml+" style='width:6vw;height:6vw' />";
                                }
                                aftres+=stxt;
                            }                        
                        }
                        if(resdata[i].sid==uid){
                            txt.innerHTML= cf ? aftres : resdata[i].content;
                            chat.innerHTML+=mybox.innerHTML;            
                        }else if(resdata[i].sid==pickid){
                            rtxt.innerHTML=cf ? aftres : resdata[i].content;
                            chat.innerHTML+=rbox.innerHTML;        
                        }
                    }else if(resdata[i].flag==2){                    
                        if(resdata[i].sid==uid){
                            uaudio.src=`http://xpm.xpmwqhzygy.top/uchattalk/${resdata[i].content[1]}`;
                            audtime.innerHTML=resdata[i].content[0];                            
                            chat.innerHTML+=myspeak.innerHTML;            
                        }else if(resdata[i].sid==pickid){
                            puaudio.src=`http://xpm.xpmwqhzygy.top/uchattalk/${resdata[i].content[1]}`;
                            paudtime.innerHTML=resdata[i].content[0];
                            chat.innerHTML+=rskbox.innerHTML;      
                        }
                    }else if(resdata[i].flag==3){  
                        var theimg = "<img src="+`http://xpm.xpmwqhzygy.top/getchatimg/${resdata[i].content[0]}`+" style='width:35vw;height:35vw;borderRadius:3vw;display:block;' />";
                        if(resdata[i].sid==uid){                  
                            uthepic.innerHTML=theimg;
                            chat.innerHTML+=mypics.innerHTML;            
                        }else if(resdata[i].sid==pickid){         
                            ptrtxt.innerHTML=theimg;
                            chat.innerHTML+=rpicbox.innerHTML;      
                        }                                        
                    }
                    
                    this.chatscroll();
                }    
            }
                            
        })
        
    }

    
    render(){
        var uid = this.state.uid; 
        let { isShot, showMod,pickid } = this.state;
        console.log(`http://xpm.xpmwqhzygy.top/head/${pickid}`);
        return (
            <div className='outbox_ct' onClick={this.istool}>
                
                <div id='chat' className='chatbox_ct' style={{paddingBottom:'25vw'}}>
                    <div id='rbox' style={{display:'none'}}>
                        <div className='cbox_ct'>
                            <img src={this.state.pickimg==1?headimg:`http://xpm.xpmwqhzygy.top/head/${pickid}`} className='ptxt_ct' /> 
                            <div id='rtxt' className='rtxt_ct'></div>
                            <div style={{clear:'both'}}></div>                    
                        </div>
                    </div>
                    <div id='rskbox' style={{display:'none'}}>
                        <div className='cbox_ct'>
                            <img src={this.state.pickimg==1?headimg:`http://xpm.xpmwqhzygy.top/head/${pickid}`} className='ptxt_ct' /> 
                            <div id='pickrtxt' className='pidrtxt_ct' style={{maxWidth:'22vw',overflow:'hidden'}}>
                                <p id='paudtime'>2''</p>
                                <img src={require('./imgs/audio1.png')} />
                                <audio id='puaudio' controls src={''} className='picuseraudio_ct' style={{marginRight:0}}/> 
                            </div>
                            <div style={{clear:'both'}}></div>                    
                        </div>
                    </div>
                    <div id='rpicbox' style={{display:'none'}}>
                        <div className='cbox_ct'>
                            <img src={this.state.pickimg==1?headimg:`http://xpm.xpmwqhzygy.top/head/${pickid}`} className='ptxt_ct' /> 
                            <div id='ptrtxt' className='ptrtxt_ct'>
                                <img id='mpid1' src={''} style={{width:'35vw',height:'35vw',borderRadius:'3vw',display:'block'}} />                                   
                            </div>
                            <div style={{clear:'both'}}></div>                    
                        </div>
                    </div>
                
                    <div id='mybox' style={{display:'none'}}>
                        <div className='mybox_ct'>
                            <img src={this.state.pre==1?headimg:`http://xpm.xpmwqhzygy.top/head/${uid}`} className='uhead_ct' /> 
                            <div id='txt' className='sutxtbox_ct'></div>
                            <div style={{clear:'both'}}></div>                    
                        </div>
                    </div>

                    <div id='myspeak' style={{display:'none'}}>
                        <div className='mybox_ct'>
                            <img src={this.state.pre==1?headimg:`http://xpm.xpmwqhzygy.top/head/${uid}`} className='uhead_ct' /> 
                            <div className='utxtbox_ct' style={{overflow:'hidden'}}>
                                <p id='audtime'></p>
                                <img src={require('./imgs/audio2.png')} />
                                <audio id='uaudio' controls src={''} className='useraudio_ct'/>                                
                            </div>
                            <div style={{clear:'both'}}></div>                    
                        </div>
                    </div>

                    <div id='mypics' style={{display:'none'}}>
                        <div className='mybox_ct'>
                            <img src={this.state.pre==1?headimg:`http://xpm.xpmwqhzygy.top/head/${uid}`} className='uhead_ct' /> 
                            <div className='utxtbox2_ct' id='uthepic'>
                                <img id='mpid2' src={''} style={{width:'35vw',height:'35vw',borderRadius:'3vw',display:'block'}} />
                            </div>
                            <div style={{clear:'both'}}></div>                    
                        </div>
                    </div>
                </div>


                <NavBar
                className='nav_ct'
                leftContent={<Link to={`/personaldetail?uid=${this.state.uid}&pickid=${this.state.pickid}`}><img src={require('./imgs/gback.png')} /></Link>}
                mode="light"
                ><span className='uname_ct'>{this.state.username}</span></NavBar>

                <div className='inptxt_ct' onClick={this.istool} style={{bottom:this.state.toolflag?'58vw':'8vw'}}>
                    <div className='input_ct' contenteditable="true" autoFocus id='utext' innerHTML={this.state.text}></div>              
                    <div className='send_ct' onClick={this.sendmsg}>发送</div>
                </div>
                <div className='tool_ct' style={{bottom:this.state.toolflag?'50vw':0}}>
                    <div onClick={this.showtool}><img id='tool1' src={require('./imgs/audio.png')} className='toolimg_ct' /></div>
                    <div onClick={this.showtool} style={{overflow:'hidden'}}>
                        <img src={require('./imgs/picture.png')}  className='toolimg_ct picph_ct' id='tool2'/>
                        <input type='file' onChange={this.getfile} id='uphoto' className='picfile_ct'/>
                    </div> 
                    <div onClick={this.showtool}><img onClick={this.readyVideo} src={require('./imgs/tkphoto.png')}  className='toolimg_ct' id='tool3'/></div>
                    <div onClick={this.showtool}><img src={require('./imgs/draw2.png')} className='toolimg_ct' id='tool4'/></div>
                    <div onClick={this.showtool}><img src={require('./imgs/smile.png')} className='toolimg_ct' id='tool5'/></div>
                    <div onClick={this.showtool}><img src={require('./imgs/file.png')} className='toolimg_ct' id='tool6'/></div>
                </div>
                <div style={{display:this.state.toolflag?'block':'none'}} onClick={this.stopclick} className='detail_ct'>
                    <div style={{display:this.state.toolflag==1?'block':'none'}} className='speak_ct'>
                        <Speak parent={this} />
                    </div>
                    <div id="fsmbox" style={{display:this.state.toolflag==5?'block':'none'}} className='fsmime_ct'>
                        {
                            smdata.map((item,index)=>(
                                <img id={`tsm${item}`} onClick={this.gettsmid} src={require(`./smlimg/${item}.gif`)} style={{width:'8vw',height:'8vw'}} />
                            ))
                        }                          
                    </div>
                </div>

                <div className='video_page' style={!this.state.istk ? {display:'none'} :{width:'100%',position:'fixed',top:0,bottom:0}}>
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
            </div>       
        )
    }
    //表情包
    gettsmid = (e)=> {
        var utxtid = document.getElementById('utext');
        var sid = document.getElementById(e.target.id);
        var tsid = 'd'+e.target.id;
        var smtag = "<img id="+tsid+ " src="+sid.src+" style='width:6vw;height:6vw' />";
        utxtid.innerHTML+=smtag;
    }

    /**拍照*/
    tkback = (e) => {
        e.stopPropagation();
        this.setState({
            isShot:false,
            iscavs:false,
            isvedio:true
        });
    }
    //点击页面拍照按钮
    readyVideo = (e) => {
        e.stopPropagation();
        var that = this;
        that.setState({
            istk:true,
            showMod: true,
            isShot: false,
            allok:true,
            toolflag:0
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
    //弹框拍摄
    shot = (e) => {
        e.stopPropagation();
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
    sureShot = (e) => {
        e.stopPropagation();
        let that=this;
        var chat = document.getElementById('chat');
        var mybox = document.getElementById('mypics');
        var uthepic = document.getElementById('uthepic'); 
        var myCanvas = document.getElementById('myCanvas');
        var img = myCanvas.toDataURL("image/png");
        var theimg = "<img src="+img+" style='width:35vw;height:35vw;borderRadius:3vw;display:block;' />";
        uthepic.innerHTML=theimg;
        chat.innerHTML+=mybox.innerHTML;  
        chat.style.paddingBottom='25vw'; 
        this.setState({
            toolflag:0
        });
        this.chatscroll();
        that.cancel(e);
        //console.log(img);
        myFetch.get(`/chattext/${this.state.uid}&${this.state.pickid}`)
        .then(res=>{
            if(res.msg=='1'){
                myFetch.put(`/chatphoto/${this.state.uid}&${this.state.pickid}`,{
                    imgData:img
                })
            }else if(res.msg=='2'){
                myFetch.post(`/chatphoto/${this.state.uid}&${this.state.pickid}`,{
                    imgData:img
                })
            }
        });
    }
    //取消
    cancel = (e) => {
        //关闭摄像头
        e.stopPropagation();
        var myVideo = document.getElementById('myVideo');
        if (myVideo) { mediaStreamTrack && mediaStreamTrack.stop(); }
        this.setState({
            isShot: false,
            showMod: false,
            iscavs:false,
            istk:false,
            isvedio:true
        });
    }
    /**end */

    /**图片 multiple*/  
    getfile = (e) => {
        // var myhead=this.state.myhead;
        // var uidall=this.state.uid+'&'+this.state.pickid;
        var chat = document.getElementById('chat');
        var r= new FileReader();
        var arrfile = document.getElementById('uphoto').files;
        this.setState({
            toolflag:0
        });

        if(arrfile.length!=0){         
            var mybox = document.getElementById('mypics');
            var uthepic = document.getElementById('uthepic'); 
            var formData = new FormData();
            var allpic='';
            for(var i=0;i<arrfile.length;i++){
                var f=arrfile[i];
                var r= new FileReader();
                var windowURL = window.URL || window.webkitURL;
                var dataURL;
                dataURL = windowURL.createObjectURL(f);
                r.readAsDataURL(f);
                r.onload = () => {                    
                    formData.append('chatimg', f); 
                };
                var theimg = "<img src="+dataURL+" style='width:35vw;height:35vw;borderRadius:3vw;display:block;' />";
                allpic+=theimg;    
            }
            myFetch.get(`/chattext/${this.state.uid}&${this.state.pickid}`)
            .then(res=>{
                if(res.msg=='1'){
                    myFetch.chatput(`/picchat/${this.state.uid}&${this.state.pickid}`,formData)
                }else if(res.msg=='2'){
                    myFetch.chatpost(`/picchat/${this.state.uid}&${this.state.pickid}`,formData)
                }
            });
            uthepic.innerHTML=allpic;
            chat.innerHTML+=mybox.innerHTML;  
        }
        chat.style.paddingBottom='25vw'; 
        this.chatscroll();
        
    }
    //转base64
    getBase64Img(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
        var dataURL = canvas.toDataURL("image/" + ext);
        return dataURL;
    }

    /**语音聊天*/
    //播放
    stopclick = (e)=> {
        e.stopPropagation(); //阻止点击事件冒泡
    }
    getSpeakMsg = (result, obj) => {
        var chat = document.getElementById('chat');
        var mybox = document.getElementById('myspeak');
        var uaudio = document.getElementById('uaudio');   
        var audtime = document.getElementById('audtime');
        uaudio.src = window.URL.createObjectURL(obj.content);
        audtime.innerHTML=obj.time+"''";
        chat.innerHTML+=mybox.innerHTML;   
        this.chatscroll();
        //提交服务器
        let formdata = new FormData();
        formdata.append('chataudio', obj.content);

        myFetch.get(`/chattext/${this.state.uid}&${this.state.pickid}`)
        .then(res=>{
            if(res.msg=='1'){
                console.log('111111')
                myFetch.audioput(`/uchattalk/${this.state.uid}&${this.state.pickid}&${obj.time}`,formdata)
                // .then(res=>{
                //     console.log('对讲返回',res); 
                // });
            }else if(res.msg=='2'){
                myFetch.audiopost(`/uchattalk/${this.state.uid}&${this.state.pickid}&${obj.time}`,formdata)
                // .then(res=>{
                //     console.log('对讲返回',res); 
                // });
            }
        })
    }
    
    //聊天工具
    istool = (e)=> {
        e.stopPropagation(); //阻止点击事件冒泡
        var chat = document.getElementById('chat');
        chat.style.paddingBottom='25vw';
        this.setState({
            toolflag:0
        });  
    }
    showtool = (e)=> {
        e.stopPropagation(); //阻止点击事件冒泡
        var chat = document.getElementById('chat');
      
        var toolid = e.target.id;   
        if(toolid=='tool1'){
            this.setState({
                toolflag:1
            });
            chat.style.paddingBottom='75vw';
        }else if(toolid=='tool5'){
            this.setState({
                toolflag:5
            });
            console.log('tttttttt5',this.state.toolflag);
            chat.style.paddingBottom='75vw';
        }else if(toolid=='tool2' || toolid=='tool3' || toolid=='tool4' || toolid=='tool6'){
            this.setState({
                toolflag:0
            });
            chat.style.paddingBottom='25vw';
        }
        this.chatscroll();
    }
    chatscroll = ()=> {
        var chat = document.getElementById('chat');
        document.documentElement.scrollTop = chat.scrollHeight;
    }
    
    //字符定位
    getpositon = (text,str)=> {
        var positions1 = new Array();
        var pos1 = text.indexOf(str);
        while(pos1 > -1){
            positions1.push(pos1);
	        pos1 = text.indexOf(str,pos1 + 1);
        }
        return positions1;        
    }
    sendmsg = () => {
        var uid = this.state.uid;
        var pickid = this.state.pickid;
        var utxtid = document.getElementById('utext');
        var utexts = utxtid.innerHTML;
        this.setState({
          text:utexts
        });
        if(utexts!=''){   
            var text = utexts;
            var sendtext='';
            var txt = document.getElementById('txt');
            var simgs = utxtid.children;

            var lpos = this.getpositon(text,'<img');
            var rpos = this.getpositon(text,'>');

            for(var i=0;i<simgs.length;i++){
                var num = simgs[i].id.slice(4);
                var stxt='';
                if(i==0&&simgs.length==1){
                    stxt = text.slice(0,lpos[i])+'&'+num+'&'+text.slice(rpos[i]+1);
                }else if(i==0){
                    stxt = text.slice(0,lpos[i])+'&'+num+'&';                    
                }else if(i==simgs.length-1){
                    stxt = text.slice(rpos[i-1]+1,lpos[i])+'&'+num+'&'+text.slice(rpos[i]+1);                    
                }else{
                    stxt= text.slice(rpos[i-1]+1,lpos[i])+'&'+num+'&';
                }
                sendtext+=stxt;
            }
            if(simgs.length==0){
                sendtext = text;
            }

            txt.innerHTML = text;
            this.setState({
                text2:text
            });
            var chat = document.getElementById('chat');
            var mybox = document.getElementById('mybox');
            
            chat.innerHTML+=mybox.innerHTML;   
            this.chatscroll();
            this.setState({
                text:''
            });
            utxtid.innerHTML='';

            //存储到数据库
            var postbody = {
                uid:uid,
                pickid:pickid,
                content:sendtext
            };
           
            myFetch.get(`/chattext/${uid}&${pickid}`)
            .then(res=>{
                console.log(res,'gg');
                if(res.msg=='1'){
                    console.log('111111')
                    myFetch.put('/chattext',postbody)
                    .then(res=>{
                        console.log(res,'聊天');
                    });
                }else if(res.msg=='2'){
                    console.log('222222');
                    myFetch.post('/chattext',postbody)
                    .then(res=>{
                        console.log(res,'聊天');
                    });
                }
            })
            
        }
        

    }
}