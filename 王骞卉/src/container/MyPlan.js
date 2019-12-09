import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link } from 'react-router-dom';
import Todolist from './Todolist/Todolist';

export default class MyPlan extends Component{
    constructor(){
        super();
        this.state = {
            uid:0
        }
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid = str.split('=')[1];
        console.log(uid);
        this.setState({
            uid:uid
        });
    }
    render(){
        var uid = this.state.uid;
        return (
            <div>
                <NavBar
                style={{background:'#67cd9e',color:'#fff'}} 
                leftContent={<Link to={`/appTab?uid=${uid}&type=my`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'21px'}}>我的计划</span></NavBar>
                <div style={{height:'10px'}}></div>
                <Todolist />
            </div>       
        )
    }
}