import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import headimg from './imgs/usrhead.png';

/**封装机器人聊天功能：在App.js引入使用 */
/**未解决bug：图灵机器人需实名实证(用自己服务器可忽略)；语言功能 */
/**
 * 测试关键字：你好，你会什么，修改密码，专业信息，高校，北京...
 * 已优化：功能封装；引入图灵机器人，请求服务；页面排版，聊天页面滑动条问题，div英文换行：wordBreak:'break-all'；多行文本信息；对话框高度自适应
 */

var a = '';
var scroll=0;
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
    scrollHandler = this.handleScroll.bind(this);
    componentDidMount(){
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        this.setState({
            uid:uid
        });
        window.addEventListener('scroll', this.scrollHandler);
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
    handleScroll(event) {
        console.log('ggggdddd');
        var chat = document.getElementById('chat');
        //chat.style.bottom='none';
    }
    
    render(){
        var uid = this.state.uid;
        var headimg2 = this.state.headimg2;

        return (
            <div style={{width:'100%',position:'absolute',top:'0',bottom:'0',background:'#fff'}}>

                <div style={{marginTop:'200px',display:this.state.flag==1 ? 'none' : 'block'}}>
                    <div style={{float:'left',width:'20%',height:'200px'}}>
                   
                    </div>
                    <div style={{float:'left',width:'60%',textAlign:'center',height:'200px'}}>
                    <img src={require('./imgs/robote.gif')} style={{width:'60vw',height:'60vw',marginTop:'-10vw'}} />
                    </div>
                    <div style={{float:'right',width:'20%',height:'200px'}}></div>
                </div>

                <div id='chat' style={{paddingLeft:'8px',paddingRight:'8px',paddingBottom:'20vw',background:'#fff',paddingTop:'12vw',position:'none',bottom:0}}>

                <div style={{display:this.state.flag2==1 ? 'block' : 'none',marginLeft:'0px',marginRight:'0px',marginBottom:'10px',position:'relative'}}>
                    <img src={require('./imgs/rt.png')} style={{float:'left',width:'60px',height:'60px'}} /> 
                    <div style={{maxWidth:'60%',wordBreak:'break-all',padding:'10px',background:'#93b6f0',float:'left',marginLeft:'10px',position:'relative',marginTop:'30px'}}>主人~ 我是你的专属机器人soso呦！<br/>回复数字 我会全力为您解答哦...<br/>1.有关考研资料网站汇总<br/>2.考研微信公众号有哪些？<br/>3.考研视频课程<br/>其他问题你也可以直接问，soso持续更新中...</div>
                    <div style={{clear:'both'}}></div>                    
                </div>

                <div id='rbox' style={{display:'none'}}>
                <div style={{display:this.state.flag2==1 ? 'block' : 'none',marginLeft:'0px',marginRight:'0px',position:'relative'}}>
                    <img src={require('./imgs/rt.png')} style={{float:'left',borderRadius:'30px',width:'60px',height:'60px'}} /> 
                    <div id='rtxt' style={{maxWidth:'60%',wordBreak:'break-all',padding:'10px',background:'#93b6f0',float:'left',marginLeft:'10px',position:'relative',marginTop:'30px'}}>我们一起聊天吧~ 有什么问题都可以问我哦！</div>
                    <div style={{clear:'both'}}></div>                    
                </div>
                </div>
                
                <div id='mybox' style={{display:'none'}}>
                <div style={{textAlign:'right',marginLeft:'0px',marginRight:'0px',position:'relative'}}>
                    <img src={this.state.pre == 0 ? headimg : `${headimg2}`} style={{float:'right',borderRadius:'30px',width:'60px',height:'60px'}} /> 
                    <div id='txt' style={{maxWidth:'60%',wordBreak:'break-all',padding:'10px',background:'#f4ecb5',float:'right',textAlign:'left',marginRight:'10px',position:'relative',marginTop:'30px'}}>{this.state.text}</div>
                    <div style={{clear:'both'}}></div>                    
                </div>
                </div>

                </div>

                <NavBar
                style={{background:'#FF8888',color:'#fff',width:'100%',height:'12vw',position:'fixed',top:0,left:0}} 
                leftContent={<Link to={`/help?uid=${uid}`}><img src={require('./imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'20px'}}>hi~ 我是史上最萌机器人SoSo</span></NavBar>

                <div style={{position:'fixed',bottom:'0',width:'100%',height:'12vw',background:'#ebeae6'}}>
                    <img src={require('./imgs/speak.png')} style={{marginTop:'9px',marginLeft:'10px'}} />
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
        if(this.state.text!=''){
            //console.log(this.state.text);
            
        var text = this.state.text;
        var txt = document.getElementById('txt');
        var rtxt = document.getElementById('rtxt');
        var rbox = document.getElementById('rbox');
        var answer = '';
        txt.innerHTML = text;
        this.setState({
            text2:text
        });
        var chat = document.getElementById('chat');
        var mybox = document.getElementById('mybox');
        var my = '<div style="textAlign:right;height:80px;position:relative;background:yellow">'+'<img src="../imgs/usrhead.png" style="float:right;width:60px;height:60px;marginRight:8px" />'+'<div style="padding:10px;background:#93b6f0;float:right;marginRight:10px;position:absolute;right:70px;top:30px">'+'我的'+'</div>'+'</div>'+'<div style="clear:both"></div>'+'</div>'
        chat.innerHTML+=mybox.innerHTML;
        // if (chat.clientHeight>window.innerHeight){
        //     chat.style.position='relative';
        //     scroll+=80;
        //     chat.style.bottom=scroll+'px';         
        // }
        document.documentElement.scrollTop = chat.scrollHeight;
        //console.log(document.documentElement.scrollTop,chat.scrollHeight);
        this.setState({
            text:''
        });
        //请求后台数据库
        const post ={
            rid: Number(text) || 0,
            text:text
        };
        fetch(`http://xpm.xpmwqhzygy.top/robot`,{
            // post提交
            method:"POST",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            answer=data.data[0].answer;
        });

        var t = 0;
        var tid = setInterval(()=>{
            t--;
            if(t<0){
                rtxt.innerHTML=answer || '亲 看不懂 问点其他的吧...';
                chat.innerHTML+=rbox.innerHTML;
                document.documentElement.scrollTop = chat.scrollHeight;               
                clearInterval(tid);
            }
        },300);
        }

    }
}