import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar} from 'antd-mobile';


export default class TestList extends Component {
    constructor(){
        super();
        this.state={
            id:1,
            name:'题库',
            data:[],
            uid:0
        }
    }
    componentDidMount(){
        var str = this.props.location.search;
        var uid = str.split('&')[0].split('=')[1]; 
        var id = str.split('&')[1].split('=')[1];
        this.setState({
            uid:uid
        })
        if(id == 1){
            this.setState({
                id:1,
                name:'英语真题',
                data:['2016考研英语（一）真题','2016考研英语（二）真题','2008考研英语（一）真题','2008考研英语（二）真题','2009考研英语（一）真题','2009考研英语（二）真题','2011考研英语（一）真题','2018考研英语（一）真题','2018考研英语（二）真题','2017考研英语（一）真题','2017考研英语（二）真题']
            });
        }else if(id == 2){
            this.setState({
                id:2,
                name:'政治真题',
                data:['2018年考研政治真题','2017年考研政治真题','2016年考研政治真题','2015年考研政治真题','2014年考研政治真题']
            });
        }else if(id == 3){
            this.setState({
                id:3,
                name:'数学真题',
                data:['2018考研数学（一）真题','2017考研数学（一）真题','2016考研数学（一）真题','2015考研数学（一）真题','2018考研数学（二）真题','2017考研数学（二）真题','2016考研数学（二）真题','2015考研数学（二）真题']
            });
        }else if(id == 4){
            this.setState({
                id:4,
                name:'软件工程真题',
                data:['2018年数据结构真题','2018年操作系统真题','2018年数据库真题','2018年网络原理真题','2017年数据结构真题','2017年操作系统真题','2017年数据库真题','2017年网络原理真题']
            });
        }else if(id == 5){
            this.setState({
                id:5,
                name:'法理学真题',
                data:['2018考研法理学真题','2017考研法理学真题','2016考研法理学真题','2015考研法理学真题','2014考研法理学真题','2013考研法理学真题','2012考研法理学真题']
            });
        }else if(id == 6){
            this.setState({
                id:6,
                name:'公共政策学真题',
                data:['2018考研公共政策学真题','2017考研公共政策学真题','2016考研公共政策学真题','2015考研公共政策学真题','2014考研公共政策学真题','2013考研公共政策学真题','2012考研公共政策学真题']
            });
        }
    }
    render() {
        var flag = this.state.id;
        var uid = this.state.uid;
        return (
            <div className='testbox'>
                 <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/questionBank?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff',fontSize:'22px'}}>{this.state.name}</span></NavBar>

                {
                    this.state.data.map((item,index)=>(
                        <div className='testmore'>
                            <span>{item}</span>
                            <Link to={`/test/?index=${index}&flag=${flag}&uid=${uid}`}><img src={require('../imgs/testright.png')}/></Link>
                        </div>
                    ))
                }
          

            </div>
        )
    }
}
