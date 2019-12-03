import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {NavBar, Icon } from 'antd-mobile';
import {url} from 'url';

export default class Resource extends Component {
    constructor(){
        super();
        this.state={
            type:''
        }
    }

    componentDidMount(){
        var str = this.props.location.search; //使用url解析参数
        var type = str.split('=')[1];
        console.log(type);
        this.setState({
            type:type
        })
    }

    render() {
        return (
            <div className='testbox'>
                <NavBar               
                style={{backgroundColor:'#05a479',color:'white'}}>
                   <Link to='/searchinfo'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{color:'white'}}>资源详情</span>           
                </NavBar>
            </div>
        )
    }
}