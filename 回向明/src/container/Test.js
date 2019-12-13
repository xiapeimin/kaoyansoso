import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import imgsrc1 from '../imgs/yhsc.png';
import imgsrc2 from '../imgs/yhsc2.png';

export default class Test extends Component{
    constructor(){
        super();
        this.state={
            id:1,
            flag:1,
            touchState: false,
            uid:0
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
            id:id,
            flag:flag,
            uid:uid
        })
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
                leftContent={<Link to={`/testList?uid=${uid}&test=${flag}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>历年真题</span></NavBar>

                <img src={require('../imgs/tikuxxx.png')} style={{width:'100%'}} />
                <img src={require('../imgs/tikuxxx2.png')} style={{width:'100%'}} />

            </div>       
        )
    }
    changgesrc = () => {
        var pid = this.state.uid+this.state.id+this.state.flag;
        const post ={
            uid:this.state.uid,
            id:this.state.id,
            flag:this.state.flag,
            pid:this.state.uid+this.state.id+this.state.flag
        }
    if(!this.state.touchState){
        fetch(`https://xiangming.yflzy.cn/focus`,{
            // post提交
            method:"POST",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })
    }
    else{
        fetch(`https://xiangming.yflzy.cn/cancel/${pid}`,{
            // post提交
            method:"DELETE",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })
    }
        
        console.log('imglll');
        this.setState({ touchState: !this.state.touchState });

    }
    downLoad = () => {
        console.log('下载');
    }
    
        
}