import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default class Video extends Component{
    render(){
        
        return(
            
            <div>
                <NavBar               
            mode="light"
            style={{backgroundColor:'#66cccc',color:'white'}}>
                <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                <span style={{backgroundColor:'#66cccc',color:'white'}}>更多视频</span>
            </NavBar>
            <div style={{width:'80%',height:'30vw',left:'10%',position:'relative',top:'5vw',backgroundColor:'color'
        }}>
                <video src={require('../images/1.ogg')} controls="controls" autoplay="true" loop="true" 
                style={{height:'50vw',width:'80vw'}}>
                    您的浏览器不支持video
                    </video>
                    <div style={{zIndex:'100',fontSize:'4vw',position:'absolute',top:'50vw',left:'8%',
                    backgroundColor:'lightgray',height:'10vw',width:'67vw'}}>
                        <p style={{top:'2vw',left:'5vw',position:'absolute'}}>2020考研数学重点题型简要梳理...</p></div>
                    </div>
            
                    <div style={{width:'80%',height:'30vw',left:'10%',position:'relative',top:'40vw',backgroundColor:'color'
        }}>
                <video src={require('../images/1.ogg')} controls="controls" autoplay="true" loop="true" 
                style={{height:'50vw',width:'80vw'}}>
                    您的浏览器不支持video
                    </video>
                    <div style={{zIndex:'100',fontSize:'4vw',position:'absolute',top:'50vw',left:'8%',
                    backgroundColor:'lightgray',height:'10vw',width:'67vw'}}>
                        <p style={{top:'2vw',left:'5vw',position:'absolute'}}>2020考研英语重点题型简要梳理...</p></div>
                    </div>

                    <div style={{width:'80%',height:'30vw',left:'10%',position:'relative',top:'75vw',backgroundColor:'color'
        }}>
                <video src={require('../images/1.ogg')} controls="controls" autoplay="true" loop="true" 
                style={{height:'50vw',width:'80vw'}}>
                    您的浏览器不支持video
                    </video>
                    <div style={{zIndex:'100',fontSize:'4vw',position:'absolute',top:'50vw',left:'8%',
                    backgroundColor:'lightgray',height:'10vw',width:'67vw'}}>
                        <p style={{top:'2vw',left:'5vw',position:'absolute'}}>2020考研阅读重点题型简要梳理...</p></div>
                    </div>

            </div>
            
            
        )
    }
}
