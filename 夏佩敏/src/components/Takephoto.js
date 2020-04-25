import React, { Component } from 'react';
import {myFetch} from '../com_xpm/fetch/util';
import "./test.less";
var mediaStreamTrack; //拍照

export default class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShot: false,//是否点击弹框拍摄按钮
      showMod: false,
      img:'', //拍摄的照片
    }
  }
  componentDidMount() {
  }
  //点击页面拍照按钮
  readyVideo = (e) => {

    myFetch.post('/jjregistertttt',{
      username:this.state.username,
      pwd:this.state.pwd}
  ).then(res=>{
      console.log(res,'oooooo');        
  });
  myFetch.get('/user','11').then(res=>{
    console.log(res,'oooooo');        
});

    var that = this;
    that.setState({
      showMod: true,
      isShot: false,
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
      }
      // 使用旧方法打开摄像头
      else if (navigator.getMedia) {
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
    })
  }
   // 确认此次拍摄照片
   sureShot = () => {
    let that=this;
    var myCanvas = document.getElementById('myCanvas');
    var img = myCanvas.toDataURL("image/png");
    that.setState({
      img
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
    })
  }
  render() {
    let { isShot, showMod ,img} = this.state;
    return (
      <div className='video_page'>
        <button onClick={this.readyVideo}>拍照</button>
        {showMod 
        ?(<div className='video_model'>
            <div className='video_box'>
              <video id='myVideo' width='300' height='300'></video>
              <canvas id='myCanvas' width='600' height="600" 
                    style={{width:'300px',height:'300px'}}
              ></canvas>
            </div>
            <button onClick={this.shot}>{isShot?'重拍':'拍照'}</button>
            {isShot?(<button onClick={this.sureShot}>确认</button>):null}
            <button onClick={this.cancel}>取消</button>
          </div>)
        : null}
        {img ? <img src={img} />: null}
      </div>
    )
  }
}
