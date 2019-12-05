import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import OtherSchool from './OtherSchool';
// import subject from '../zhuanye/zhuanye.json'
import { NavBar,Icon,WhiteSpace,WingBlank } from 'antd-mobile';
import Item from 'antd-mobile/lib/popover/Item';


export default class ProCheck extends Component {
    constructor(props){ //构造函数
        super(props);
        this.state = {
        mytext :[],
        id:'',
        index:'',
        }
     }         
     componentWillMount(){
         var str=this.props.match.url;
         var arr=str.split('/');
        var arr1=arr[2];
        var arr2=arr[4];
         this.setState({
             id:arr1,
             index:arr2
         })
         var msg1=this.state.msg;
        fetch('http://zy.xpmwqhzygy.top/subject')
         .then((res)=>res.json())
        .then((res)=>{
            var data = JSON.parse(res);
            if(arr1==1){
                this.setState({mytext:data.哲学});
            }
            if(arr1==2){
                this.setState({mytext:data.经济学});
            }
            if(arr1==3){
                this.setState({mytext:data.法学});
            }
            if(arr1==4){
                this.setState({mytext:data.教育学});
            }
            if(arr1==5){
                this.setState({mytext:data.文学});
            }
            if(arr1==6){
                this.setState({mytext:data.历史学});
            }
            if(arr1==7){
                this.setState({mytext:data.理学});
            }
            if(arr1==8){
                this.setState({mytext:data.工学});
            }
            if(arr1==9){
                this.setState({mytext:data.农学});
            }
            if(arr1==10){
                this.setState({mytext:data.医学});
            }
            if(arr1==11){
                this.setState({mytext:data.军事学});
            }
            if(arr1==12){
                this.setState({mytext:data.管理学});
            }
            if(arr1==13){
                this.setState({mytext:data.艺术学});
            }
            
               
        })
     }
    render() {
        return (
            <div>
               <NavBar
                style={{background:'#21a3e0',color:'#fff'}} 
                leftContent={<Link to={'/professional/'+this.state.id}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>专业详情</span></NavBar>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
                    <h2>专业简介</h2>
                    {
                        this.state.mytext.map((item,index)=>(                       
                            <p className={this.state.index == index ? 'talk' : 'untalk'}>{item.introduce}</p>
                        ))
                    }
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
                    <h2>培养目标</h2>
                    {
                        this.state.mytext.map((item,index)=>(                       
                            <p className={this.state.id == index ? 'talk' : 'untalk'}>{item.target}</p>
                        ))
                    }
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
                    <h2>就业方向</h2>
                    {
                        this.state.mytext.map((item,index)=>(                       
                            <p className={this.state.id == index ? 'talk' : 'untalk'}>{item.direction}</p>
                        ))
                    }
                </div>
                </WingBlank>
                <WhiteSpace size='lg'/>
                <WingBlank>
                <div style={{padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
                    <h2>招生院校推荐</h2>
                    {
                        this.state.mytext.map((item,index)=>(                       
                            <p className={this.state.id == index ? 'talk' : 'untalk'}>{item.suggestSchool}</p>
                        ))
                    }
                </div>
                </WingBlank>
                <WhiteSpace/>
                        <Link to='/otherSchool'>
                            <button style={{border:'none',bottom:'0',width:'100%',height:'10vw',backgroundColor:'#21a3e0',fontSize:'3vw',color:'#fff'}}>查看其他开设院校</button>
                        </Link>
                     
            </div>
        )
    }
}
