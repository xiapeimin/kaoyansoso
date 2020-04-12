import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import imgsrc1 from '../imgs/yhsc.png';
import imgsrc2 from '../imgs/yhsc2.png';
import engimg1 from '../imgs/engimg1.png';
import engimg2 from '../imgs/engimg2.png';
import engimg3 from '../imgs/engimg3.png';
import engimg4 from '../imgs/engimg4.png';
import engimg5 from '../imgs/engimg5.png';
import engimg6 from '../imgs/engimg6.png';
import engimg7 from '../imgs/engimg7.png';
import engimg8 from '../imgs/engimg8.png';
import engimg9 from '../imgs/engimg9.png';
import engimg10 from '../imgs/engimg10.png';
import engimg11 from '../imgs/engimg11.png';
import engimg12 from '../imgs/engimg12.png';
import engimg13 from '../imgs/engimg13.png';
import engimg14 from '../imgs/engimg14.png';
import engimg15 from '../imgs/engimg15.png'; 
import engimg16 from '../imgs/engimg16.png';
import engimg17 from '../imgs/engimg17.png';
import engimg18 from '../imgs/engimg18.png';
import engimg19 from '../imgs/engimg19.png';
import engimg20 from '../imgs/engimg20.png';
import engimg21 from '../imgs/engimg21.png';
import engimg22 from '../imgs/engimg22.png';

import zzimg1 from '../imgs/zzimg1.png';
import zzimg2 from '../imgs/zzimg2.png';
import zzimg3 from '../imgs/zzimg3.png';
import zzimg4 from '../imgs/zzimg4.png';
import zzimg5 from '../imgs/zzimg5.png';
import zzimg6 from '../imgs/zzimg6.png';
import zzimg7 from '../imgs/zzimg7.png';
import zzimg8 from '../imgs/zzimg8.png';
import zzimg9 from '../imgs/zzimg9.png';
import zzimg10 from '../imgs/zzimg10.png';

import mathimg1 from '../imgs/mathimg1.png';
import mathimg2 from '../imgs/mathimg2.png';
import mathimg3 from '../imgs/mathimg3.png';
import mathimg4 from '../imgs/mathimg4.png';
import mathimg5 from '../imgs/mathimg5.png';
import mathimg6 from '../imgs/mathimg6.png';
import mathimg7 from '../imgs/mathimg7.png';
import mathimg8 from '../imgs/mathimg8.png';
import mathimg9 from '../imgs/mathimg9.png';
import mathimg10 from '../imgs/mathimg10.png';
import mathimg11 from '../imgs/mathimg11.png';
import mathimg12 from '../imgs/mathimg12.png';
import mathimg13 from '../imgs/mathimg13.png';
import mathimg14 from '../imgs/mathimg14.png';
import mathimg15 from '../imgs/mathimg15.png';
import mathimg16 from '../imgs/mathimg16.png';

import rjimg1 from '../imgs/rjimg1.png';
import rjimg2 from '../imgs/rjimg2.png';
import rjimg3 from '../imgs/rjimg3.png';
import rjimg4 from '../imgs/rjimg4.png';
import rjimg5 from '../imgs/rjimg5.png';
import rjimg6 from '../imgs/rjimg6.png';
import rjimg7 from '../imgs/rjimg7.png';
import rjimg8 from '../imgs/rjimg8.png';
import rjimg9 from '../imgs/rjimg9.png';
import rjimg10 from '../imgs/rjimg10.png';
import rjimg11 from '../imgs/rjimg11.png';
import rjimg12 from '../imgs/rjimg12.png';
import rjimg13 from '../imgs/rjimg13.png';
import rjimg14 from '../imgs/rjimg14.png';
import rjimg15 from '../imgs/rjimg15.png';
import rjimg16 from '../imgs/rjimg16.png';

import flimg1 from '../imgs/flimg1.png';
import flimg2 from '../imgs/flimg2.png';
import flimg3 from '../imgs/flimg3.png';
import flimg4 from '../imgs/flimg4.png';
import flimg5 from '../imgs/flimg5.png';
import flimg6 from '../imgs/flimg6.png';
import flimg7 from '../imgs/flimg7.png';
import flimg8 from '../imgs/flimg8.png';
import flimg9 from '../imgs/flimg9.png';
import flimg10 from '../imgs/flimg10.png';
import flimg11 from '../imgs/flimg11.png';
import flimg12 from '../imgs/flimg12.png';
import flimg13 from '../imgs/flimg13.png';
import flimg14 from '../imgs/flimg14.png';

import ggimg1 from '../imgs/ggimg1.png';
import ggimg2 from '../imgs/ggimg2.png';
import ggimg3 from '../imgs/ggimg3.png';
import ggimg4 from '../imgs/ggimg4.png';
import ggimg5 from '../imgs/ggimg5.png';
import ggimg6 from '../imgs/ggimg6.png';
import ggimg7 from '../imgs/ggimg7.png';
import ggimg8 from '../imgs/ggimg8.png';
import ggimg9 from '../imgs/ggimg9.png';
import ggimg10 from '../imgs/ggimg10.png';
import ggimg11 from '../imgs/ggimg11.png';
import ggimg12 from '../imgs/ggimg12.png';
import ggimg13 from '../imgs/ggimg13.png';
import ggimg14 from '../imgs/ggimg14.png';


var tname='';
var testimg1;
var testimg2;
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
        }else if(str.indexOf('save')>=0){
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
            testimg1=engimg1;
            testimg2=engimg2;
        }else if(id==1 && flag==1){
            tname='2016考研英语（二）真题';
            testimg1=engimg3;
            testimg2=engimg4;
        }else if(id==2 && flag==1){
            tname='2008考研英语（一）真题';
            testimg1=engimg5;
            testimg2=engimg6;
        }else if(id==3 && flag==1){
            tname='2008考研英语（二）真题';
            testimg1=engimg7;
            testimg2=engimg8;
        }else if(id==4 && flag==1){
            tname='2009考研英语（一）真题';
            testimg1=engimg9;
            testimg2=engimg10;
        }else if(id==5 && flag==1){
            tname='2009考研英语（二）真题';
            testimg1=engimg11;
            testimg2=engimg12;
        }else if(id==6 && flag==1){
            tname='2011考研英语（一）真题';
            testimg1=engimg13;
            testimg2=engimg14;
        }else if(id==7 && flag==1){
            tname='2018考研英语（一）真题';  
            testimg1=engimg15;
            testimg2=engimg16;
        }else if(id==8 && flag==1){
            tname='2018考研英语（二）真题';  
            testimg1=engimg17;
            testimg2=engimg18;
            testimg1=engimg7;
            testimg2=engimg8;
        }else if(id==9 && flag==1){
            tname='2017考研英语（一）真题';
            testimg1=engimg19;
            testimg2=engimg20;
        }else if(id==10 && flag==1){
            tname='2017考研英语（二）真题';
            testimg1=engimg21;
            testimg2=engimg22;
        }else if(id==0 && flag==2){
            tname='2018年考研政治真题';
            testimg1=zzimg1;
            testimg2=zzimg2;
        }else if(id==1 && flag==2){
            tname='2017年考研政治真题';  //文档有水印
            testimg1=zzimg3;
            testimg2=zzimg4;
        }else if(id==2 && flag==2){
            tname='2016年考研政治真题';
            testimg1=zzimg5;
            testimg2=zzimg6;
        }else if(id==3 && flag==2){
            tname='2015年考研政治真题';
            testimg1=zzimg7;
            testimg2=zzimg8;
        }else if(id==4 && flag==2){
            tname='2014年考研政治真题';  
            testimg1=zzimg9;
            testimg2=zzimg10;
        }else if(id==0 && flag==3){
            tname='2018考研数学（一）真题'; 
            testimg1=mathimg1;
            testimg2=mathimg2; 
        }else if(id==1 && flag==3){
            tname='2017考研数学（一）真题';
            testimg1=mathimg3;
            testimg2=mathimg4;
        }else if(id==2 && flag==3){
            tname='2016考研数学（一）真题';
            testimg1=mathimg5;
            testimg2=mathimg6;
        }else if(id==3 && flag==3){
            tname='2015考研数学（一）真题'; 
            testimg1=mathimg7;  
            testimg2=mathimg8;
        }else if(id==4 && flag==3){
            tname='2018考研数学（二）真题'; 
            testimg1=mathimg9;  
            testimg2=mathimg10;  
        }else if(id==5 && flag==3){
            tname='2017考研数学（二）真题'; 
            testimg1=mathimg11;  //11,12
            testimg2=mathimg12;
        }else if(id==6 && flag==3){
            tname='2016考研数学（二）真题';  
            testimg1=mathimg13;
            testimg2=mathimg14;
        }else if(id==7 && flag==3){
            tname='2015考研数学（二）真题'; 
            testimg1=mathimg15;
            testimg2=mathimg16;
        }else if(id==0 && flag==4){
            tname='2018年数据结构真题';  
            testimg1=rjimg1;
            testimg2=rjimg2;
        }else if(id==1 && flag==4){
            tname='2018年操作系统真题';
            testimg1=rjimg3;
            testimg2=rjimg4;
        }else if(id==2 && flag==4){
            tname='2018年数据库真题';
            testimg1=rjimg5;
            testimg2=rjimg6;
        }else if(id==3 && flag==4){
            tname='2018年网络原理真题';
            testimg1=rjimg7;
            testimg2=rjimg8;
        }else if(id==4 && flag==4){
            tname='2017年数据结构真题';
            testimg1=rjimg9;
            testimg2=rjimg10;
        }else if(id==5 && flag==4){
            tname='2017年操作系统真题';
            testimg1=rjimg11;
            testimg2=rjimg12;
        }else if(id==6 && flag==4){
            tname='2017年数据库真题';
            testimg1=rjimg13;
            testimg2=rjimg14;  
        }else if(id==7 && flag==4){
            tname='2017年网络原理真题';
            testimg1=rjimg15;
            testimg2=rjimg16;
        }else if(id==0 && flag==5){
            tname='2018考研法理学真题';  
            testimg1=ggimg1;
            testimg2=ggimg2;
        }else if(id==1 && flag==5){
            tname='2017考研法理学真题'; 
            testimg1=ggimg3;
            testimg2=ggimg4;
        }else if(id==2 && flag==5){
            tname='2016考研法理学真题'; 
            testimg1=ggimg5;
            testimg2=ggimg6;
        }else if(id==3 && flag==5){
            tname='2015考研法理学真题';
            testimg1=ggimg7;
            testimg2=ggimg8;
        }else if(id==4 && flag==5){
            tname='2014考研法理学真题';  
            testimg1=ggimg9;
            testimg2=ggimg10;
        }else if(id==5 && flag==5){
            tname='2013考研法理学真题';
            testimg1=ggimg11;
            testimg2=ggimg12;
        }else if(id==6 && flag==5){
            tname='2012考研法理学真题';
            testimg1=ggimg13;
            testimg2=ggimg14;
        }else if(id==0 && flag==6){
            tname='2018考研公共政策学真题';
            testimg1=flimg1;
            testimg2=flimg2;
        }else if(id==1 && flag==6){
            tname='2017考研公共政策学真题';
            testimg1=flimg3;
            testimg2=flimg4;
        }else if(id==2 && flag==6){
            tname='2016考研公共政策学真题';  
            testimg1=flimg5;
            testimg2=flimg6;
        }else if(id==3 && flag==6){
            tname='2015考研公共政策学真题';
            testimg1=flimg7;
            testimg2=flimg8;
        }else if(id==4 && flag==6){
            tname='2014考研公共政策学真题';
            testimg1=flimg9;
            testimg2=flimg10;
        }else if(id==5 && flag==6){
            tname='2013考研公共政策学真题';
            testimg1=flimg11;
            testimg2=flimg12;
        }else if(id==6 && flag==6){
            tname='2012考研公共政策学真题';
            testimg1=flimg13;
            testimg2=flimg14;
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
        console.log(this.state.fflag);
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
                rightContent={<div><img onClick={this.changgesrc} src={this.state.touchState ? imgsrc2 : imgsrc1} /><a href={`http://xpm.xpmwqhzygy.top/tikudown/${tname}`}><img src={require('../imgs/xiazaitk.png')} style={{marginLeft:'3px'}} /></a></div>}
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>历年真题</span></NavBar>

                <img src={testimg1} style={{width:'100%'}} />
                <img src={testimg2} style={{width:'100%'}} />

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

        fetch(`http://xpm.xpmwqhzygy.top/tikudown/${tname}`,{
            method: 'GET'
            })
            // .then((res)=>res.json())
            // .then((res)=>{
            //     //console.log(res.data,'下载成功');
            
            // });
    }
    
        
}