import React, { Component } from 'react';
import { NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import {Carousel,Accordion,List,SearchBar,Grid} from 'antd-mobile';
import vedio0 from '../imgs/vedio0.mp4';
import vedio1 from '../imgs/vedio1.mp4';
import vedio2 from '../imgs/vedio2.mp4';
import vedio3 from '../imgs/vedio3.mp4';

export default class Video extends Component{
    constructor(){
        super();
        this.state={
            data:[1], //data里面放视频路径 name为视频标题  后台获取
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
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>老梁观世界：3分钟告诉迷茫的你，考研...</div>
                            </div></Link>
                        ))
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={'/vplay1'}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio1} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>怎样问才能难倒神嘴张雪峰老师 第一期</div>
                            </div></Link>
                        ))
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={'/vplay2'}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio2} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>爆笑张雪峰老师视频,超长剪辑版,让你一次看个够</div>
                            </div></Link>
                        ))
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={'/vplay3'}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio3} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>「张雪峰视频」2018考研 老师带你讲跨专业</div>
                            </div></Link>
                        ))
                    }
                </div>
                
            

            </div>
            
            
        )
    }
}