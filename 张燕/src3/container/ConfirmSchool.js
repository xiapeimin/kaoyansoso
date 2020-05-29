import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar } from 'antd-mobile';
import {Link} from 'react-router-dom';
import img1 from '../imgs/1.jpg';

export default class ConfirmSchool extends Component {

    render(){
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        return(
            <div style={{width:'100%',position:'absolute',top:'0',bottom:'0'}}>
                <div style={{width:'100%',height:'100%',position:'absolute',top:'0',bottom:'0',background:`url(${img1}) no-repeat`,backgroundSize:'100% 100%'}}>{/**<img src={require('../imgs/1.jpg')} style={{width:'100%',height:'100%'}} /> */}</div>
                <div style={{width:'100%',height:'100%',position:'absolute',top:'0',bottom:'0',background:'#dbdedd',opacity:'0.25'}}></div>
                {/* 导航栏 */}
                <div style={{width:'100%',position:'absolute',top:'0'}}><NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/appTab?uid=${uid}&type=home`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>定高校</span></NavBar></div>

                <Link to={`/checkSchool?uid=${uid}`}><div style={{width:'50%',height:'25vw',background:'#30ef8a',position:'absolute',left:'25%',top:'60vw',borderRadius:'2vw',textAlign:'center',lineHeight:'25vw',fontSize:'8vw',color:'#fff'}}>院校推荐</div></Link>
                <Link to={`/checkPro?uid=${uid}`}><div style={{width:'50%',height:'25vw',background:'#3fc5f1',position:'absolute',left:'25%',top:'95vw',borderRadius:'2vw',textAlign:'center',lineHeight:'25vw',fontSize:'8vw',color:'#fff'}}>专业推荐</div></Link>

               
            </div>
        )
    }
}