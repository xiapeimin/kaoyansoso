import React, { Component } from 'react';
import {SearchBar, NavBar, Icon ,Flex} from 'antd-mobile';

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
            </div>
            
        )
    }
}