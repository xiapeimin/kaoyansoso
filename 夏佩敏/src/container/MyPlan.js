import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link } from 'react-router-dom';
import Todolist from './Todolist/Todolist';

export default class MyPlan extends Component{
    constructor(){
        super();
        this.state = {
            //uid:0
        }
    }
    componentDidMount(){
        // var str = window.location.hash;
        // var uid = str.split('=')[1];
        // console.log(uid);
        // this.setState({
        //     uid:uid
        // });
    }
    render(){
        var str = window.location.hash;
        var uid = str.split('=')[1];
        console.log(uid);    
        return (
            <div style={{width:'100%',background:'#f4f0f0',position:'absolute',top:'0',bottom:'0'}}>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/appTab?uid=${uid}&type=my`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'21px'}}>我的计划</span></NavBar>
                <div style={{height:'10px'}}></div>
                <Todolist uid={`${uid}`} />
            </div>       
        )
    }
}