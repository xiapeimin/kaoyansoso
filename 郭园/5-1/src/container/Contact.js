import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';

import headimg from '../imgs/usrhead.png';

import back from '../imgs/black.jpg';

var a = '';
export default class Contact extends Component{
    constructor(){
        super();
        this.state={
            uid:1,
            flag:0,
            flag2:0,
            text:'',
            text2:'',
            pre:0,
            headimg2:''
        }

    }
    componentDidMount(){
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        this.setState({
            uid:uid
        });
        fetch(`http://xpm.xpmwqhzygy.top/headlist`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                var data = res.data;
                for(var i=0;i<data.length;i++){
                    if(uid==data[i].uid){
                        this.setState({
                            headimg2:`http://xpm.xpmwqhzygy.top/head/${uid}`,
                            pre:1
                        });
                        i=data.length;
                    }else if(i==data.length-1 && uid != data[i].uid){
                        this.setState({
                            pre:0
                        })
                    }
                }
            });
    }
    
    render(){
        var uid = this.state.uid;
        var headimg2 = this.state.headimg2;

        return (
            <div style={{width:'100%',position:'absolute',top:'0',bottom:'0',background:'#fff'}}>
                <NavBar
                style={{background:'#FF8888',color:'#fff'}} 
                leftContent={<Link to={`/help?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'21px'}}>hi~ 我是史上最萌机器人SoSo</span></NavBar>

                {/* <div style={{height:'15vw',background:'#69cdea',marginBottom:'1vw'}}>
                    <Link to={`/help?uid=${uid}`}><img src={require('../imgs/zjt.png')} style={{width:'8%',marginTop:'14px',marginLeft:'8px'}} /></Link>
                    <div style={{float:'right',width:'70%',height:'40px',color:'#fff',background:'#69cdea',marginTop:'12px',marginRight:'10%',borderRadius:'25px',opacity:'0.8',textAlign:'center',lineHeight:'40px',fontSize:'5vw'}}>hi~ 我是史上最萌机器人SoSo</div>
                </div> */}

                <div style={{marginTop:'200px',display:this.state.flag==1 ? 'none' : 'block'}}>
                    <div style={{float:'left',width:'20%',height:'200px'}}>
                        
                    </div>
                    <div style={{float:'left',width:'60%',textAlign:'center',height:'200px'}}>
                    <img src={require('../imgs/robote.gif')} style={{width:'60vw',height:'60vw',marginTop:'-10vw'}} />
                    </div>
                    <div style={{float:'right',width:'20%',height:'200px'}}></div>
                </div>

                <div id='chat' style={{paddingLeft:'8px',paddingRight:'8px',marginBottom:'20vw'}}>

                <div style={{display:this.state.flag2==1 ? 'block' : 'none',marginLeft:'0px',marginRight:'0px',height:'80px',position:'relative'}}>
                    <img src={require('../imgs/rt.png')} style={{float:'left',width:'60px',height:'60px'}} /> 
                    <div style={{padding:'10px',background:'#93b6f0',float:'left',marginLeft:'10px',position:'absolute',left:'60px',top:'30px'}}>我们一起聊天吧~ 有什么问题都可以问我哦！</div>
                    <div style={{clear:'both'}}></div>                    
                </div>

                <div id='rbox' style={{display:'none'}}>
                <div style={{display:this.state.flag2==1 ? 'block' : 'none',marginLeft:'0px',marginRight:'0px',height:'80px',position:'relative'}}>
                    <img src={require('../imgs/rt.png')} style={{float:'left',borderRadius:'30px',width:'60px',height:'60px'}} /> 
                    <div id='rtxt' style={{padding:'10px',background:'#93b6f0',float:'left',marginLeft:'10px',position:'absolute',left:'60px',top:'30px'}}>我们一起聊天吧~ 有什么问题都可以问我哦！</div>
                    <div style={{clear:'both'}}></div>                    
                </div>
                </div>
                
                <div id='mybox' style={{display:'none'}}>
                <div style={{textAlign:'right',marginLeft:'0px',marginRight:'0px',height:'80px',position:'relative'}}>
                    <img src={this.state.pre == 0 ? headimg : `${headimg2}`} style={{float:'right',borderRadius:'30px',width:'60px',height:'60px'}} /> 
                    <div id='txt' style={{padding:'10px',background:'#f4ecb5',float:'right',textAlign:'right',marginRight:'10px',position:'absolute',right:'60px',top:'30px'}}>{this.state.text}</div>
                    <div style={{clear:'both'}}></div>                    
                </div>
                </div>

                </div>

                

                <div style={{position:'fixed',bottom:'0',width:'100%',height:'12vw',background:'#ebeae6'}}>
                    <img src={require('../imgs/speak.png')} style={{marginTop:'9px',marginLeft:'10px'}} />
                    <div style={{float:'right',background:'#FF8888',width:'12vw',height:'10vw',marginTop:'1vw',borderRadius:'5px',textAlign:'center',marginRight:'10px',lineHeight:'10vw'}} onClick={this.sendmsg}>发送</div>
                    <div style={{float:'right',width:'73%',marginRight:'1%'}}><input type='text' placeholder='我们一起聊天吧~' value={this.state.text} onChange={this.getword} style={{width:'94%',borderRadius:'20px',height:'10vw',border:'none',marginTop:'1vw',paddingLeft:'6%'}} onClick={this.start} /></div>
                    
                </div>
            </div>       
        )
    }
    getword = (e) => {
        this.setState({
            text:e.target.value
        });
        a=e.target.value;
    }
    start = () => {
        this.setState({
            flag:1,
            flag2:1
        });
    }
    sendmsg = () => {
        console.log(this.state.text);
        var text = this.state.text;
        var txt = document.getElementById('txt');
        var rtxt = document.getElementById('rtxt');
        var rbox = document.getElementById('rbox');
        txt.innerHTML = text;
        this.setState({
            text2:text
        });
        var chat = document.getElementById('chat');
        var mybox = document.getElementById('mybox');
        var my = '<div style="textAlign:right;height:80px;position:relative;background:yellow">'+'<img src="../imgs/usrhead.png" style="float:right;width:60px;height:60px;marginRight:8px" />'+'<div style="padding:10px;background:#93b6f0;float:right;marginRight:10px;position:absolute;right:70px;top:30px">'+'我的'+'</div>'+'</div>'+'<div style="clear:both"></div>'+'</div>'
        chat.innerHTML+=mybox.innerHTML;
        console.log(chat.innerHTML);
        this.setState({
            text:''
        });

        var t = 0;
        var tid = setInterval(()=>{
            t--;
            if(t<0){
                if(text.indexOf('你好')>=0){
                    rtxt.innerHTML='在呢！亲';
                    chat.innerHTML+=rbox.innerHTML;
                }else if(text.indexOf('你是谁')>=0 || text.indexOf('你叫什么')>=0){
                    rtxt.innerHTML='我是史上最萌机器人SoSo呦 ~';
                    chat.innerHTML+=rbox.innerHTML;
                }else if(text.indexOf('干什么')>=0){
                    rtxt.innerHTML='我可以回答你的任何问题哦';
                    chat.innerHTML+=rbox.innerHTML;
                }else if(text.indexOf('修改密码')>=0){
                    rtxt.innerHTML='进入设置页即可修改密码哦';
                    chat.innerHTML+=rbox.innerHTML;
                }else if(text.indexOf('发动态')>=0){
                    rtxt.innerHTML='去我的动态页就可以发动态哦';
                    chat.innerHTML+=rbox.innerHTML;
                }else{
                    rtxt.innerHTML='亲 看不懂 问点其他的吧...';
                    chat.innerHTML+=rbox.innerHTML;
                }
                clearInterval(tid);
            }
        },300);
        
    }
}