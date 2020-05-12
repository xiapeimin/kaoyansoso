import React,{Component} from 'react';
import AudioAnalyser from "react-audio-analyser";
import {NavBar,Toast,Progress} from 'antd-mobile';
import {Link} from 'react-router-dom';
import WordsCheck from '../container/WordsCheck';
import Canvas from '../com_xpm/canvas/Canvas';
import Noteimg from '../com_xpm/note/Noteimg'; 
import {myFetch} from '../com_xpm/fetch/util';
import '../com_xpm/note/tkpic.less';
import '../com_xpm/note/note.css';


var fg='';
var cl='#fff';
var savecll='';
var mediaStreamTrack; //拍照
var delarr = [];
var timer; //录音进度条定时器
var rectimer; //录音计时
var audioBlob='';
export default class CreateNote extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            text:'',
            uid:0,
            flag:0,
            cll:'#fff',
            ischeck:false,
            storage:window.localStorage,
            isShot: false,//是否点击弹框拍摄按钮
            showMod: false,
            img:'', //拍摄的照片,
            iscavs:false,
            istk:1, //true 初始值1为综合笔记页面 为0拍照 为2涂鸦
            isvedio:true,
            imgarr:[],
            savearr:[],
            //iscanvas:false, //画板
            del:false, //判断是否图片删除
            allok:false,
            showrecord:false,//录音控件
            percent: 0, //录音进度条
            mtime:0,
            stime:0,
            status: '',
        };
        var storage = this.state.storage;
        if(storage.getItem('noteback')!=null){
            savecll=storage.getItem('noteback');
        }
        
    }
    componentDidMount(){  
        var str = this.props.location.search;
        var uid = str.split('&')[0].split('=')[1];
        fg = str.split('&')[1].split('=')[1]
        this.setState({
            uid:uid
        });
    }

    getChildrenMsg = (result, inputValue) => {
        var storage = this.state.storage;
        cl=inputValue[0];
        this.setState({
            cll:inputValue[0]
        });
        savecll=inputValue[0];
        storage.setItem('noteback',cl);
    }
    
    render(){
        var uid = this.state.uid;
        var cll = this.state.cll;
        let { isShot, showMod ,img, percent,status, audioSrc, audioType} = this.state;
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
        if(this.state.ischeck==1||this.state.ischeck==false){ //综合笔记
            if(this.state.istk!=2){
    
                return (
                    <div className='testbox' style={savecll!='' ? {background:savecll} : {background:cll}}>
                        <NavBar
                        style={{background:'#fff',color:'#000'}} 
                        rightContent={<div><span onClick={this.saveNote}>保存</span><div style={{float:'right',marginLeft:'5px',marginTop:'2px'}}><WordsCheck parent={this} /></div></div>}
                        leftContent={<Link to={`/note?uid=${uid}&typef=${fg}`}><img src={require('../imgs/zjt2.png')} /></Link>}
                        mode="light"
                        ><span style={{color:'#000',fontSize:'22px'}}>笔记</span></NavBar>
        
                        <div style={savecll!='' ? {background:savecll,width:'100%'} : {background:cll,width:'100%'}}>
                        <div style={{width:'90%',paddingTop:'4%',margin:'0 auto'}}>
                            <input type='text' onChange={this.changeTitle} placeholder={this.state.title=='' ? '笔记名称' : null} value={this.state.title!='' ? this.state.title : null} style={{width:'100%',border:'none',borderBottom:'2px solid #66cccc',height:'11vw',marginBottom:'3vw',background:'none',fontSize:'20px'}} />
                            <textarea placeholder={this.state.text=='' ? '开始记录你的学习笔记吧...' : null} value={this.state.text!='' ? this.state.text : null} onChange={this.changeText} style={{width:'100%',lineHeight:'6vw',height:'100vw',marginTop:'-1vw',border:'none',fontSize:'18px',background:'none'}}>
                                
                            </textarea>
        
                            <div id='tags' style={{marginBottom:'16vw'}}>
                                {
                                    this.state.audioSrc==undefined
                                    ?null
                                    :<audio controls src={this.state.audioSrc} className='audio_nt'/>
                                }
                                {
                                    this.state.imgarr.map((item,index)=>{
                                        var dflag = 0;
                                        if(delarr.length!=0){
                                            for(var y=0;y<delarr.length;y++){
                                                if(item==delarr[y]){
                                                    y=delarr.length;
                                                    return (
                                                        <div style={{display:'none'}}><Noteimg key={index} img={item} index={index} ondel={this.getdelimg} del={this.delimg}/></div>
                                                    );
                                                }else if(dflag==delarr.length-1&&y!=delarr.length){
                                                    return (
                                                        <Noteimg key={index} img={item} index={index} ondel={this.getdelimg} del={this.delimg}/>
                                                    )
                                                }
                                                dflag++;
                                            }
                                        }else{
                                            return (
                                                <Noteimg key={index} img={item} index={index} ondel={this.getdelimg} del={this.delimg}/>
                                            )
                                        }
                          
                                    })
                                }  
        
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
        
                        
                    
                        <div className={this.state.ischeck==false ? 'ck_nt' : 'nock_nt'} style={{display:'none'}}>
                        <NavBar
                        style={{background:'#fff',color:'#000',marginBottom:'20vw'}} 
                        leftContent={<Link to={`/note?uid=${uid}&typef=${fg}`}><img src={require('../imgs/zjt2.png')} /></Link>}
                        mode="light"
                        ><span style={{color:'#000',fontSize:'22px'}}>请选择</span></NavBar>
        
                            <div className='ch_nt' style={{marginBottom:'10vw'}} id='n1' onClick={this.check}>综合笔记</div>
                            <div className='ch_nt' style={{marginBottom:'10vw'}} id='n2' onClick={this.check}>拍照笔记</div>
                            <div className='ch_nt' style={{marginBottom:'10vw'}} id='n3' onClick={this.check}>涂鸦笔记</div>
                            <div className='ch_nt' style={{marginBottom:'10vw'}} id='n4' onClick={this.check}>录音笔记</div>
                        </div>

                        <div className={this.state.showrecord==true ? 'record_nt' : 'nock_nt'}><AudioAnalyser {...audioProps}></AudioAnalyser></div>
        
                        <div className={this.state.ischeck==false&&this.state.istk==1 ? 'zhtool_nt' : 'nock_nt'}>
                            <p onClick={this.readyVideo}>拍照</p>
                            <p onClick={this.drawpic}>涂鸦</p>
                            <p onClick={this.recording}>录音</p>
                            <p>语音转文字</p>
                            <p>其他</p>
                        </div>

                        <div className={this.state.showrecord==true ? 'record_nt' : 'nock_nt'}>
                            <div className="show-info">
                                <div className="progress"><Progress percent={percent} position="normal" /></div>
                                <div aria-hidden="true" className="redtime_nt">{this.state.mtime==0?'00':this.state.mtime}:{this.state.stime==0?'00':this.state.stime}</div>
                            </div>     
                            <p onClick={() => this.controlAudio("inactive")}>停止</p>                                           
                            {status !== "recording" && <p onClick={() => this.controlAudio("recording")}>开始</p>}
                            {status === "recording" && <p onClick={() => this.controlAudio("paused")}>暂停</p>}                            
                        </div>
                        
        
                        {/**导航栏固定 */}
                        <NavBar
                        style={this.state.istk!=1 ? {display:'none'} : {background:'#fff',color:'#000',position:'fixed',top:0,width:'100%',zIndex:9999}} 
                        rightContent={<div><span onClick={this.saveNote}>保存</span><div style={{float:'right',marginLeft:'5px',marginTop:'2px'}}><WordsCheck parent={this} /></div></div>}
                        leftContent={<Link to={`/note?uid=${uid}&typef=${fg}`}><img src={require('../imgs/zjt2.png')} /></Link>}
                        mode="light"
                        ><span style={{color:'#000',fontSize:'22px'}}>笔记</span></NavBar>
                        
                        {/**end */}


                        </div>
        
        
                    </div>       
                )
        
                }else if(this.state.istk==2){
                    return (
                        <div style={{width:'100%',position:'fixed',top:0,left:0,bottom:0}}>
                            <Canvas parent={this}/>
                        </div>
                    )
                }

        }else if(this.state.ischeck==2){ //拍照笔记
            return (
                <div>
                    {/**
                    <NavBar
                        style={{background:'#fff',color:'#000',position:'fixed',top:0,width:'100%',zIndex:9999}} 
                        leftContent={<Link to={`/note?uid=${uid}&typef=${fg}`}><img src={require('../imgs/zjt2.png')} /></Link>}
                        mode="light"
                        ><span style={{color:'#000',fontSize:'22px'}}>拍照</span></NavBar>
                        <div className='video_page' style={{width:'100%',position:'fixed',top:0,bottom:0}}>
                            {showMod2
                            ?(<div className='video_model'>
                                <div className='video_box'>
                                    <video id='myVideo' height={window.innerHeight} style={this.state.isvedio2 ? {width:'100%',objectFit:'cover',position:'absolute',top:0,bottom:0} : {display:'none'}}></video>
                                    <canvas style={this.state.iscavs2==true ? {display:'block',width:'100%',height:window.innerHeight,objectFit:'cover'} : {display:'none'}} id='myCanvas' width='600' height="600" >
                                    </canvas>
                                </div>
                                <button className='tkpic_nt' onClick={isShot ? this.tkback : this.shot}>{isShot?'重拍':'拍照'}</button>
                                {isShot?(<button className='qr_nt' onClick={this.sureShot}>确认</button>):null}
                                <button className='qx_nt' onClick={this.cancel}>取消</button>
                            </div>)
                            : null}
                        </div>
                     */}
                        
                </div>
            )
        }else if(this.state.ischeck==3){ //涂鸦笔记
            return (
                <div>涂鸦笔记</div>
            )
        }else if(this.state.ischeck==4){ //录音
            return (
                <div>录音笔记</div>
            )
        }
        
    }

    /**录音 */
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
    //音频Blob对象封装成FormData对象
    getAudioblob = (e,nid)=> {
        let formData = new FormData();
        formData.append('audiofile', e);//,'file.webm'
        console.log(formData);
        myFetch.audiopost(`/audionote/${nid}`,formData)
        .then(res=>{
            console.log(res,'语音存储');
        });
        console.log('录音blob存储');
    }
    /**涂鸦 */
    getCavsMsg = (result, value)=> {  //获取子组件canvas的值
        if(!value){
            this.setState({
                istk:1
            });
            console.log(this.state.savearr.length,'rr',this.state.imgarr.length);
        }else{
            console.log('eeeee');
            var savearr = this.state.savearr;
            var imgarr = this.state.imgarr;
            console.log(this.state.savearr.length,'rrhh',this.state.imgarr.length);       
            imgarr.push(value);
            savearr.push(value);
            this.setState({
                imgarr:imgarr,
                savearr:savearr,
                istk:1
            });         
            console.log(this.state.savearr.length,'rruu',this.state.imgarr.length);
        }
    }
    drawpic = ()=> {
        this.setState({
            //iscanvas:true,
            istk:2 //显示画板
        });
    }
    
    /**拍照 */
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
    //点击页面拍照按钮
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
    //弹框拍摄
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
        var imgarr = this.state.imgarr;
        var savearr = this.state.savearr;
        var myCanvas = document.getElementById('myCanvas');
        var img = myCanvas.toDataURL("image/png");
        savearr.push(img);
        imgarr.push(img);
        that.setState({
            imgarr:imgarr,
            savearr:savearr
        });
        that.cancel();
    }
    //取消
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
    /**end */

    check = (e)=>{
        var id = e.target.id;
        if(id=='n1'){
            console.log(id);
            this.setState({
                ischeck:1
            });
        }else if(id=='n2'){
            console.log(id);
            this.setState({
                ischeck:2
            });
        }else if(id=='n3'){
            console.log(id);
            this.setState({
                ischeck:3
            });
        }else if(id=='n4'){
            console.log(id);
            this.setState({
                ischeck:4
            });
        }
    }
    saveNote = () => {
        var week="周"+"日一二三四五六".charAt(new Date().getDay());
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var day = new Date().getDate();
        var time = year+'-'+month+'-'+day+'-'+week;
        
        if(this.state.title!=''){
            var data=[];
            var nid=this.state.uid + this.state.title;
            var uid = this.state.uid;
            var tf=false;
            var pf=false;
            fetch(`http://xpm.xpmwqhzygy.top/note/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                data=res.data; 
                console.log(data);
                for(var i=0;i<data.length;i++){
                    if(this.state.title==data[i].notename){
                        i=data.length;
                        Toast.info('笔记重名！请重新命名...', 2);
                    }else if(i == data.length-1 && this.state.title!=data[i].notename){
                        const post ={
                            nid:nid,
                            uid:this.state.uid,
                            notename:this.state.title,
                            text:this.state.text,
                            time:time
                        };
                     
                        fetch(`http://xpm.xpmwqhzygy.top/note`,{
                            method:"POST",
                            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                            body:JSON.stringify(post)//把提交的内容转字符串
                        })
                        .then(res =>res.json())
                        .then(data =>{
                            console.log(data.status)
                            if(data.status==0){
                                tf=true;
                            }

                            //存储图片
                            if(this.state.savearr.length>0){ 
                                var allp = this.state.savearr;
                                for(var o=0;o<allp.length;o++){
                                    myFetch.post(`/ntupload/${nid}`,{
                                        imgData:allp[o]
                                    }).then(res=>{
                                        if(res.status==0){
                                            pf=true;
                                        }      
                                    });
                                }
                            }

                            //存储录音笔记
                            if(audioBlob!=''){
                                this.getAudioblob(audioBlob,nid);
                                audioBlob='';
                            }
                            
                            Toast.info('保存成功！',2);
                        });
                        
                        
                        
                    }
                }
                if(data.length==0){
                    const post ={
                        nid:nid,
                        uid:this.state.uid,
                        notename:this.state.title,
                        text:this.state.text,
                        time:time
                    };
                    
                    fetch(`http://xpm.xpmwqhzygy.top/note`,{
                        method:"POST",
                        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                        body:JSON.stringify(post)//把提交的内容转字符串
                    })
                    .then(res =>res.json())
                    .then(data =>{
                        if(data.status==0){
                            tf=true;
                        }
                        if(this.state.savearr.length>0){ 
                            var allp = this.state.savearr;
                            for(var o=0;o<allp.length;o++){
                                myFetch.post(`/ntupload/${nid}`,{
                                    imgData:allp[o]
                                }).then(res=>{
                                    if(res.status==0){
                                        pf=true;
                                    }      
                                });
                            }
                            
                                
                        }

                        //存储录音笔记
                        if(audioBlob!=''){
                            this.getAudioblob(audioBlob,nid);
                        }
                        Toast.info('保存成功！',2);
                    });
                    
                    
                }

            });

            

        }else if(this.state.title==''){
            Toast.info('笔记命名不能为空哦', 2);
        }
        
        
    }
    changeTitle = (e) => {
        this.setState({
            title:e.target.value
        })
    }
    changeText = (e) => {
        this.setState({
            text:e.target.value
        })
    }
}