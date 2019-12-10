import React, { Component } from 'react';
import TopicList from './TopicList';
import ShowList from './ShowList.js';
import MyTopic from './MyTopic.js'
import { NavBar, Tabs, Badge, WhiteSpace, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom';
import tou1 from './images/tou1.jpg';
import tou2 from './images/tou2.jpg';
import tou3 from './images/tou3.jpg';
import good from './images/zan2.jpg';
import talk from './images/talk.jpg';
import zan1 from './images/zan1.jpg';
import back from './images/back.jpg';
import delete1 from './images/delete.jpg';

var page = 0;
const tabs = [
    { title: <Badge>热门动态</Badge> },
    { title: <Badge>我的动态</Badge> },
  ];
export default class HostTopic extends Component {   //评论弹框bug 用组件对话框 点击删除后有弹框 确认删除 点赞图片不对齐
    constructor(){
        super();
        this.state = {
            flag:0,
            uid:0
        }
    }

    componentDidMount(){
        var str = window.location.hash;
        if(str.indexOf('&')>=0){
            var uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
            page=1;
            console.log(str,'topicmu',uid);
            console.log('pppppppppppppppppppp',this.state.page);
        }else{
            var uid = str.split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
            page=0;
        }
        console.log(str,'topicmu',uid);
        
    }


    delete4(){
        alert('是否要删除')
        console.log('p')
        var del=document.getElementById('del4');
        console.log(del);
        del.innerHTML='';
    }
    good3(){
        var god=document.getElementById('good3');
        console.log(god.src);
        god.src=zan1
    }
    render() {
        var uid = this.state.uid;
        return (
            <div>
                <NavBar style={{backgroundColor:'#66cccc',color:'white'}}
                  mode="dark"
               >动态</NavBar>
               <div style={{backgroundColor:'white'}}>
                 <Tabs tabs={tabs}
                    initialPage={page}
                    style={{fontSize:'40vw'}}
                    >
                <div>
                    <WhiteSpace/> 
                    <WingBlank>
                    <span style={{fontSize:'4.5vw'}}>| 热门推荐</span>
                    </WingBlank>
                    <WhiteSpace/>
                    <TopicList/>
                    <WhiteSpace/> 
                    <WingBlank>
                    <span style={{fontSize:'4.5vw'}}>| 分享驿站</span>
                    </WingBlank>
                    <WhiteSpace/>
                    <ShowList/>
                </div>
                <div>
                        <img src={back} style={{width:'100%'}}></img>
                        <img src={tou3} style={{height:'100px',width:'100px',marginRight:'10px',float:'right',position:'relative',marginTop:'-30px',borderRadius:'50px'}}></img>
                        <p style={{float:'right',marginTop:'75px',marginRight:'-90px'}}>学渣奋起之路</p>
                        <Link to={`/publishTopic?uid=${uid}`}><div style={{float:'left',marginLeft:'5%',marginTop:'5%',width:'10vw',height:'10vw',borderRadius:'5vw',backgroundColor:' #66cccc',fontSize:'5vw',textAlign:'center',lineHeight:'10vw',color:'#fff'}}>+</div></Link>
                      
                      <div style={{marginTop:'18vw'}}> <MyTopic/></div>
                </div>
                
                </Tabs> 
                </div>
            </div> 
               
        )
}
}