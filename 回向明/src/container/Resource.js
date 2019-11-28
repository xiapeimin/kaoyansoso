import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {NavBar, Icon } from 'antd-mobile';

export default class SearchInfo extends Component {
    render() {
        return (
            <div>
                <NavBar               
                style={{backgroundColor:'#66cccc',color:'white'}}>
                   <Link to='./searchinfo'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{backgroundColor:'#66cccc',color:'white'}}>资源详情页</span>           
                </NavBar>
            </div>
        )
    }
}