import React, { Component } from 'react';
import {HashRouter as Router,Link,Route} from 'react-router-dom';
import OtherSchool from './OtherSchool'
import { NavBar,Icon,WhiteSpace,WingBlank,TabBar } from 'antd-mobile';
import Item from 'antd-mobile/lib/popover/Item';//

export default class ProCheck extends Component {
    constructor(props){
        super(props);
        this.state={
            id:0,
            index:0,
            uid:0,
            mytext:[]
        }
    }
    componentDidMount(){
        var str = this.props.location.search;
        var id = str.split('&')[0].split('=')[1]; //id为哪一类专业 大类
        var index = str.split('&')[1].split('=')[1]; //index为哪一类专业的具体专业
        var uid = str.split('&')[2].split('=')[1]; //用户id 用户跳转携带
        console.log(id,index,uid);
        console.log(str.split('&')[0]);

        this.setState({
            id:id,  //相当于arr1
            index:index, //arr2
            uid:uid
        });

        /** */
        var msg1=this.state.msg;
        fetch('http://zy.xpmwqhzygy.top/subject')
         .then((res)=>res.json())
        .then((res)=>{
            var data = JSON.parse(res);
            if(id==1){
                this.setState({mytext:data.哲学});
            }
            if(id==2){
                this.setState({mytext:data.经济学});
            }
            if(id==3){
                this.setState({mytext:data.法学});
            }
            if(id==4){
                this.setState({mytext:data.教育学});
            }
            if(id==5){
                this.setState({mytext:data.文学});
            }
            if(id==6){
                this.setState({mytext:data.历史学});
            }
            if(id==7){
                this.setState({mytext:data.理学});
            }
            if(id==8){
                this.setState({mytext:data.工学});
            }
            if(id==9){
                this.setState({mytext:data.农学});
            }
            if(id==10){
                this.setState({mytext:data.医学});
            }
            if(id==11){
                this.setState({mytext:data.军事学});
            }
            if(id==12){
                this.setState({mytext:data.管理学});
            }
            if(id==13){
                this.setState({mytext:data.艺术学});
            }
            
               
        })
        /** */
    }

    render() {
        var id = this.state.id;
        var index = this.state.index;  //用于判断专业详情
        var uid = this.state.uid;
        
        return (
            <div style={{background:'#76b9f8',position:'absolute',top:'0',bottom:'0'}}>
                
               <NavBar
                style={{background:'#21a3e0',color:'#fff'}} 
                leftContent={<Link to={`/professional?uid=${uid}&id=${id}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>专业详情</span></NavBar>
                <div style={{background:'#76b9f8'}}>
                <WhiteSpace size='lg'/>
                <WingBlank>
                
                <div style={{background:'#fff',padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
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
                <div style={{background:'#fff',padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
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
                <div style={{background:'#fff',padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
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
                <div style={{background:'#fff',padding:'3vw',width:'90%',margin:'0 auto',border:'1px solid #21a3e0',borderRadius:'10px',fontSize:'3vw',textIndent:'2em'}}>
                    <h2>招生院校推荐</h2>
                    {
                        this.state.mytext.map((item,index)=>(                       
                            <p className={this.state.id == index ? 'talk' : 'untalk'}>{item.suggestSchool}</p>
                        ))
                    }
                </div>

                </WingBlank>
                <WhiteSpace/>

                </div>
                        <Link to={`/otherSchool?id=${id}&index=${index}&uid=${uid}`}>
                            <button style={{position:'fixed',bottom:'0',border:'none',width:'100%',height:'10vw',backgroundColor:'#21a3e0',fontSize:'3vw',color:'#fff'}}>查看其他开设院校</button>
                        </Link>
               <div style={{height:'10vw'}}></div>
            </div>
        )
    }
}
