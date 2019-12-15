import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import imgsrc1 from '../imgs/yhsc.png';
import imgsrc2 from '../imgs/yhsc2.png';

var tname='';
export default class Test extends Component{
    constructor(){
        super();
        this.state={
            id:1,
            flag:1,
            touchState: false,
            uid:0,
            fflag:0
        }
    }
    componentDidMount(){  
        var str = this.props.location.search;
        var arr = str.split('&');
        var arr1 = arr[0];
        var arr2 = arr[1];
        var arr3 = arr[2];
        var id = arr1.split('=')[1];
        var flag = arr2.split('=')[1];
        var uid = arr3.split('=')[1];
        this.setState({
            id:id, //真题序号
            flag:flag,//题库类型
            uid:uid
        });
        if(str.indexOf('search')>=0){
            this.setState({
                fflag:0
            });
        }else if(str.indexOf('save'>=0)){
            this.setState({
                fflag:2
            });
        }else{
            this.setState({
                fflag:1
            });
        }

        console.log(id,flag);
        if(id==0 && flag==1){
            tname='2016考研英语（一）真题';
        }else if(id==1 && flag==1){
            tname='2016考研英语（二）真题';
        }else if(id==2 && flag==1){
            tname='2008考研英语（一）真题';
        }else if(id==3 && flag==1){
            tname='2008考研英语（二）真题';
        }else if(id==4 && flag==1){
            tname='2009考研英语（一）真题';
        }else if(id==5 && flag==1){
            tname='2009考研英语（二）真题';
        }else if(id==6 && flag==1){
            tname='2011考研英语（一）真题';
        }else if(id==7 && flag==1){
            tname='2018考研英语（一）真题';
        }else if(id==8 && flag==1){
            tname='2018考研英语（二）真题';
        }else if(id==9 && flag==1){
            tname='2017考研英语（一）真题';
        }else if(id==10 && flag==1){
            tname='2017考研英语（二）真题';
        }else if(id==0 && flag==2){
            tname='2018年考研政治真题';
        }else if(id==1 && flag==2){
            tname='2017年考研政治真题';
        }else if(id==2 && flag==2){
            tname='2016年考研政治真题';
        }else if(id==3 && flag==2){
            tname='2015年考研政治真题';
        }else if(id==4 && flag==2){
            tname='2014年考研政治真题';
        }else if(id==0 && flag==3){
            tname='2018考研数学（一）真题';
        }else if(id==1 && flag==3){
            tname='2017考研数学（一）真题';
        }else if(id==2 && flag==3){
            tname='2016考研数学（一）真题';
        }else if(id==3 && flag==3){
            tname='2015考研数学（一）真题';
        }else if(id==4 && flag==3){
            tname='2018考研数学（二）真题';
        }else if(id==5 && flag==3){
            tname='2017考研数学（二）真题';
        }else if(id==6 && flag==3){
            tname='2016考研数学（二）真题';
        }else if(id==7 && flag==3){
            tname='2015考研数学（二）真题';
        }else if(id==0 && flag==4){
            tname='2018年数据结构真题';
        }else if(id==1 && flag==4){
            tname='2018年操作系统真题';
        }else if(id==2 && flag==4){
            tname='2018年数据库真题';
        }else if(id==3 && flag==4){
            tname='2018年网络原理真题';
        }else if(id==4 && flag==4){
            tname='2017年数据结构真题';
        }else if(id==5 && flag==4){
            tname='2017年操作系统真题';
        }else if(id==6 && flag==4){
            tname='2017年数据库真题';
        }else if(id==7 && flag==4){
            tname='2017年网络原理真题';
        }else if(id==0 && flag==5){
            tname='2018考研法理学真题';
        }else if(id==1 && flag==5){
            tname='2017考研法理学真题';
        }else if(id==2 && flag==5){
            tname='2016考研法理学真题';
        }else if(id==3 && flag==5){
            tname='2015考研法理学真题';
        }else if(id==4 && flag==5){
            tname='2014考研法理学真题';
        }else if(id==5 && flag==5){
            tname='2013考研法理学真题';
        }else if(id==6 && flag==5){
            tname='2012考研法理学真题';
        }else if(id==0 && flag==6){
            tname='2018考研公共政策学真题';
        }else if(id==1 && flag==6){
            tname='2017考研公共政策学真题';
        }else if(id==2 && flag==6){
            tname='2016考研公共政策学真题';
        }else if(id==3 && flag==6){
            tname='2015考研公共政策学真题';
        }else if(id==4 && flag==6){
            tname='2014考研公共政策学真题';
        }else if(id==5 && flag==6){
            tname='2013考研公共政策学真题';
        }else if(id==6 && flag==6){
            tname='2012考研公共政策学真题';
        }
        
        var tid = uid+tname;
        console.log(tid);
        fetch(`http://xpm.xpmwqhzygy.top/tiku/${tid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data,'查询成功');
                if(res.data.length==0){
                    this.setState({
                        touchState:false
                    });
                }else if(res.data.length != 0){
                    this.setState({
                        touchState:true
                    });
                }
            });

    }
    goout = () => {
        var uid = this.state.uid;
        var flag = this.state.flag;
        if(this.state.fflag==1){
            window.location.hash=`/testList?uid=${uid}&test=${flag}`;
        }else if(this.state.fflag==0){
            window.location.hash=`/search?uid=${uid}&type=home`;
        }else if(this.state.fflag==2){
            window.location.hash=`/mysave?uid=${uid}`;
        }
    }
    
    render(){
        var flag = this.state.flag;
        var id = this.state.id;
        var uid = this.state.uid;
        return (
            <div>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                rightContent={<div><img onClick={this.changgesrc} src={this.state.touchState ? imgsrc2 : imgsrc1} /><img src={require('../imgs/xiazaitk.png')} style={{marginLeft:'3px'}} onClick={this.downLoad} /></div>}
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>历年真题</span></NavBar>

                <img src={require('../imgs/tikuxxx.png')} style={{width:'100%'}} />
                <img src={require('../imgs/tikuxxx2.png')} style={{width:'100%'}} />

            </div>       
        )
    }
    changgesrc = () => {
        console.log(this.state.touchState);
        var uid = this.state.uid;
        var flag = this.state.flag;
        var id = this.state.id;
        var sc = !this.state.touchState;
        var tid = this.state.uid + tname;
        console.log(this.state.touchState,sc);
        if(sc==true){
            console.log('收藏');
            var post = {
                tid:tid,
                uid:uid,
                name:tname,
                flag:flag,
                id:id
            };
            console.log(post);
            fetch(`http://xpm.xpmwqhzygy.top/tiku`,{
            // post提交
            method:"POST",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        });

        }else if(sc==false){
            console.log('取消收藏');
            fetch(`http://xpm.xpmwqhzygy.top/tiku/${tid}`,{
                method:"DELETE",
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
            });
        }

        this.setState({ touchState: !this.state.touchState });
    }
    downLoad = () => {
        console.log('下载');
    }
    
        
}