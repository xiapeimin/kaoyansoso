import React, { Component } from 'react';
import { NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
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
        var str = this.props.location.search;
        var uid = str.split('&')[0].split('=')[1];
        var flag = str.split('&')[1].split('=')[1]; //`/vplay?uid=${uid}&flag=more`
        return(
            
            <div  className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/appTab?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff',fontSize:'22px'}}>更多视频</span></NavBar>

                <div style={{width:'100%',background:'#fff',paddingTop:'10vw'}}>
                    {/*
                        this.state.data.map((item,index)=>(
                            <Link to={`/vplay?uid=${uid}&flag=more`}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio0} type='video/mp4' />
                                    <source src={vedio0} type='video/ogg' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>2020考研数学重点题型简要梳理...</div>
                            </div></Link>
                        ))*/
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={`/vplay?uid=${uid}&flag=more&id=1`}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio0} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>老梁观世界：3分钟告诉迷茫的你...</div>
                            </div></Link>
                        ))
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={`/vplay?uid=${uid}&flag=more&id=2`}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio1} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>教你怎样问才能难倒神嘴张雪峰老师...</div>
                            </div></Link>
                        ))
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={`/vplay?uid=${uid}&flag=more&id=3`}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio2} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>超长剪辑版:爆笑张雪峰老师视频...</div>
                            </div></Link>
                        ))
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={`/vplay?uid=${uid}&flag=more&id=4`}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio3} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>2018考研：张雪峰老师带你讲跨专...</div>
                            </div></Link>
                        ))
                    }
                </div>
                
            

            </div>
            
            
        )
    }
}