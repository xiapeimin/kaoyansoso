import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Introduce from './Introduce';
import Important from './Important';
import { NavBar,WhiteSpace,WingBlank,Tabs,Flex} from 'antd-mobile';
import vedio0 from './images/vedio0.mp4';
import vedio1 from '../imgs/vedio1.mp4';
import vedio2 from '../imgs/vedio2.mp4';
import vedio3 from '../imgs/vedio3.mp4';

import good from './images/zan2.jpg';
import zan1 from './images/zan1.jpg';
import count from './images/count.jpg';

export default class Vplay extends Component {
    constructor(){
        super();
        this.state={
            flag:1,
            text:'',
            fflag:'',
            flag2:0,
            todo1:[], 
            todo2:[],
            id:0,
            goodnum:0
        }
    }
    good = () => {
        var god=document.getElementById('good');
        console.log(god.src);
        god.src=zan1;
        this.setState({
            goodnum:1
        })
    }
    changeColor = () => {
        this.setState({
            flag:1
        })
        if(this.state.id==1){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>老梁观世界在辽宁卫视每周一至周五18:00-18:30首播，这是一档全新的新闻评论，老梁观世界类节目。老梁为你解答是否该考研</div>]
            })
        }else if(this.state.id==2){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>考研在即，心态别崩！最后的5天应该做什么？张雪峰老师告诉你</div>]
            })
        }else if(this.state.id==3){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>上海交通大学这操作太秀了吧，看张雪峰考研视频，品百味人生段子</div>]
            })
        }else if(this.state.id==4){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>张雪峰：跨专业考研难不难？看人！成功的案例特别多！</div>]
            })
        }
    }
    changeColor2 = () => {
        this.setState({
            flag:2
        })
        if(this.state.id==1){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>很多人迷茫是考研还是就业，那么今天老梁来跟你分析一下考研还是就业为了找到更好的工作，所以考研；为了工作后有更快、更好的发展机遇，为了丰富自己浅薄的知识结构,所以考研.</div>]
            })
        }else if(this.state.id==2){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>已经到12月份了，你能不能考上，基本上心里面已经有个底了，这一年期间，你到底为考研这个事付出了多少？你到底在图书馆中一天能学习多少时间？你是不是那种感动自己的人？你还是真的去刻苦努力的人？自己心里面已经有数了。</div>]
            })
        }else if(this.state.id==3){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>最拿分的是专业课，专业课每年真题重复率特别高，而且每年重点考察的变化不会特别大。所以，现在一定要把近五年专业课好好看一看，历年真题好好看一看，对于每年必考的章节，必考的知识点，一定要烂熟于心，现在拿专业课的分是最容易的。</div>]
            })
        }else if(this.state.id==4){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>考研成为了咱们现在热烈讨论的话题，在很多二三本大学里，考研的培训机构广告随处可见，考研似乎成为了大学里的风向标，虽然并不是参加考研的同学都是热爱学习，很多同学考研只不过的是为了缓解就业的压力，但是张雪峰老师曾经还是多次强调，不逼自己一把就不知道自己会有多优秀，其实认认真真对待考研的人，把心态调整好了以后考上并不是难事，所以小编也建议大家，既然决定了就认真对待，不要当考研的炮灰，今天咱们一起来看看，跨考难度最大的5个专业，竞争还很大，把握不大谨慎报考！</div>]
            })
        }
    }
    changeColor3 = () => {
        this.setState({
            flag:3
        })
        if(this.state.id==1){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>梁宏达，1972年2月20日出生在黑龙江省绥化市兰西县，毕业于黑龙江大学新闻专业。，人称“老梁”，以观点独到、语言犀利著称。自幼学习京韵大鼓、评书、相声等多种曲艺形式，在节目中用其极富个性魅力的语言，点评生活。</div>]
            })
        }else if(this.state.id==2){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>张雪峰，1984年出生于齐齐哈尔，毕业于郑州大学。 研途考研VIP名师。2016年6月凭借《七分钟解读34所985高校》走红网络，2016年9月出版《你离考研成功，就差这本书》。2016年11月参加网络综艺《火星情报局》，被称为“国民男特工”。2017年8月参加网络综艺《演说家》。同年9月参加广东卫视《零点食神》。</div>]
            })
        }else if(this.state.id==3){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>张雪峰，1984年出生于齐齐哈尔，毕业于郑州大学。 研途考研VIP名师。2016年6月凭借《七分钟解读34所985高校》走红网络，2016年9月出版《你离考研成功，就差这本书》。2016年11月参加网络综艺《火星情报局》，被称为“国民男特工”。2017年8月参加网络综艺《演说家》。同年9月参加广东卫视《零点食神》。</div>]
            })
        }else if(this.state.id==4){
            this.setState({
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>张雪峰，1984年出生于齐齐哈尔，毕业于郑州大学。 研途考研VIP名师。2016年6月凭借《七分钟解读34所985高校》走红网络，2016年9月出版《你离考研成功，就差这本书》。2016年11月参加网络综艺《火星情报局》，被称为“国民男特工”。2017年8月参加网络综艺《演说家》。同年9月参加广东卫视《零点食神》。</div>]
            })
        }
    }
    componentDidMount(){
        var str = this.props.location.search;
        var uid = str.split('&')[0].split('=')[1];
        var fflag = str.split('&')[1].split('=')[1];
        var id = str.split('&')[2].split('=')[1];
        this.setState({
            id:id,
            uid:uid,
            fflag:fflag
        });
        if(fflag=='home'){
            this.setState({
                flag2:0
            })
        }else if(fflag == 'more'){
            this.setState({
                flag2:1
            })
        }else if(fflag == 'search'){
            this.setState({
                flag2:2
            })
        }

        if(id == 1){
            this.setState({
                todo1:[vedio0],
                todo2:['老梁观世界'],
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>老梁观世界在辽宁卫视每周一至周五18:00-18:30首播，这是一档全新的新闻评论 老梁观世界类节目。老梁为你解答是否该考研</div>]
            });
        }else if(id == 2){
            this.setState({
                todo1:[vedio1],
                todo2:['张雪峰课堂'],
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>考研在即，心态别崩！最后的5天应该做什么？张雪峰老师告诉你</div>]
            });
        }else if(id == 3){
            this.setState({
                todo1:[vedio2],
                todo2:['爆笑张雪峰'],
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>上海交通大学这操作太秀了吧，看张雪峰考研视频，品百味人生段子</div>]
            });
        }else if(id == 4){
            this.setState({
                todo1:[vedio3],
                todo2:['张雪峰讲讲跨专业'],
                text:[<div style={{fontSize:'4.5vw',textIndent:'2em',lineHeight:'35px'}}>张雪峰：跨专业考研难不难？看人！成功的案例特别多！</div>]
            });
        }

    }
   

    //跳转
    goout = () => {
        var uid = this.state.uid;
        if(this.state.flag2==0){
            window.location.hash = `/appTab?uid=${uid}&type=home`
        }else if(this.state.flag2==1){
            window.location.hash = `/video?uid=${uid}&flag=more`
        }else if(this.state.flag2==2){
            window.location.hash = `/search?uid=${uid}&type=home`
        }
    }
    render() {
        

        return (
            <div style={{background:'#fff',position:'absolute',top:'0',bottom:'0',width:'100%'}}>
                 <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>课程</span></NavBar>
                <div>{
                    this.state.todo1.map(
                        (item)=><video height='100%' width='100%' controls='controls' object-fit='container'>
                        <source src={item} type='video/mp4'/>
                        您的浏览器不支持Video
                </video>
                    )
    }
                </div>
                <WhiteSpace/>
                <WingBlank>
                <img id='good' src={good} style={{height:'5vw',width:'5vw'}} onClick={this.good}/><span style={{fontSize:'5vw',marginLeft:'1vw'}}>{this.state.goodnum}</span>
                <img src={count} style={{height:'4vw',width:'5vw',marginLeft:'5vw'}}/><span style={{fontSize:'5vw',marginLeft:'1vw'}}>10</span>
                </WingBlank>
                <WhiteSpace/>
                <div>
                    {
                        this.state.todo2.map(
                        (item)=><h2 style={{textIndent:'2em'}}>{item}</h2>
                        )
                    }
                </div> 
                   <div style={{width:'100%',background:'red'}}>
                        <div className='btn'style={{width:'100%'}}>
                            <div id='btn' style={{textAlign:'center',width:'33%',height:'8vw',lineHeight:'8vw',fontSize:'5vw',color:'black',float:'left'}} onClick={this.changeColor} className={this.state.flag == 1 ? 'vpaychange' : ''}>课程介绍</div>
                            <div id='btn1' style={{textAlign:'center',width:'33%',height:'8vw',lineHeight:'8vw',fontSize:'5vw',color:'black',float:'left'}} onClick={this.changeColor2} className={this.state.flag == 2 ? 'vpaychange' : ''}>课程要点</div>
                            <div id='btn2' style={{textAlign:'center',width:'34%',height:'8vw',lineHeight:'8vw',fontSize:'5vw',color:'black',float:'left'}} onClick={this.changeColor3} className={this.state.flag == 3 ? 'vpaychange' : ''}>讲师简介</div>
                        </div>
                    </div> 
                    <div className='clear'></div>
                    <div style={{padding:'5%'}}>{this.state.text}</div>
                
             </div>
        )
    }
}