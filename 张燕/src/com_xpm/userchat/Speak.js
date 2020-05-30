import React, {Component} from 'react';
import {myFetch} from '../fetch/util';
import Recorder from 'js-audio-recorder';
import './userchat.css';
import { Toast } from 'antd-mobile';

let recorder = new Recorder({
    sampleBits: 16,                 
    sampleRate: 16000,          
    numChannels: 1       
});

let timer;
let flag=0;

export default class Searchaudio extends Component{
    constructor(props) {
        super(props);
        this.state={
            simg:1,
            audioSrc:''
        };
    }

    render() {
        return (
            <div>   
                <p className='spealtxt_ct'>按住说话</p>
                <div className='audioimg_ct' onTouchStart={this.startRecord} onTouchEnd={this.transRecord}>
                    <img src={this.state.simg?require('./imgs/speak1.png'):require('./imgs/speak2.png')} />
                </div>
                <div className='speaktool_ct'>
                    <span>对讲</span>
                </div>
            </div>
        );
    }
    startRecord = ()=> {   
        this.setState({
            simg:0
        });
        timer = setTimeout(()=>{
            recorder.start();
            flag=1;
            console.log('开始');
        },500)
    }
    transRecord = (e)=> {    
        clearTimeout(timer);
        this.setState({
            simg:1
        });
        if(flag){
            console.log('结束');
            let pcm = recorder.getWAVBlob();
            let audioobj = new Object();
            var time=Math.round(recorder.duration);
            audioobj.content=pcm;
            audioobj.time=time<1?'1':time;                  
            this.props.parent.getSpeakMsg(this,audioobj);            
            flag=0;
        }else{
            Toast.info('按键时间太短',2);
        }
    }



}