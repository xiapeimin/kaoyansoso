import React, { Component } from 'react';
import { NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import vedio0 from '../imgs/vedio0.mp4';

export default class Video extends Component{
    constructor(){
        super();
        this.state={
            data:[1,2,3], //data里面放视频路径 name为视频标题  后台获取
            name:[]
        }
    }
    render(){
        
        return(
            
            <div  className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={'/appTab'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff',fontSize:'22px'}}>更多视频</span></NavBar>

                <div style={{width:'100%',background:'#fff',paddingTop:'10vw'}}>
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={'/vplay'}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio0} type='video/mp4' />
                                    <source src={vedio0} type='video/ogg' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>2020考研数学重点题型简要梳理...</div>
                            </div></Link>
                        ))
                    }
                </div>
                
            

            </div>
            
            
        )
    }
}