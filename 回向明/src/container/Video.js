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

            <video src={require('../images/1.ogg')} controls="controls" autoplay="true" loop="true" 
            style={{width:'100%',height:'50vw',position:'relative',top:'5vw'}}>
			您的浏览器不支持video
		</video>
        <video src={require('../images/1.ogg')} controls="controls" autoplay="true" loop="true" 
            style={{width:'100%',height:'50vw',position:'relative',top:'15vw'}}>
			您的浏览器不支持video
		</video>
        <video src={require('../images/1.ogg')} controls="controls" autoplay="true" loop="true" 
            style={{width:'100%',height:'50vw',position:'relative',top:'25vw'}}>
			您的浏览器不支持video
		</video>
            </div>
            
            
        )
    }
}
