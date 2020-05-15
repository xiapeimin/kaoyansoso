import React, { Component } from 'react'
import touxiang from '../imgs/头像.jpg'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
import headimg from '../imgs/usrhead.png';
import beijing from '../imgs/beibei.jpg';
export default class PersonalDetail extends Component {
    constructor(){
        super();
        this.state = {
            username:'一个名字',
            text:'考研宣言：说点什么吧...',
            headimg2:'',
            pre:0,
            school:'未填写',
            profess:'未填写',
            data:[],
            img:[],
            touchState:false
        }
    }
    focus = () =>{
        var str = this.props.location.search;
        var uid = str.split('&')[0].split('=')[1];
        var pickid = str.split('&')[1].split('=')[1];
        var uidpickid = uid+'&'+pickid;
        var touch = !this.state.touchState;
        const post ={
            uid:uid,
            pickid:pickid,
            uidpickid:uidpickid
        };
        if(touch==true){
            console.log('关注');
            fetch(`http://wqh.xpmwqhzygy.top/focus`,{
            // post提交
            method:"POST",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        });
        }else if(touch==false){
            console.log('取消关注');
            fetch(`http://wqh.xpmwqhzygy.top/cancel/${uidpickid}`,{
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
    componentDidMount(){
        var str = window.location.hash;
        var uid = str.split('&')[0].split('=')[1];
        var pickid = str.split('&')[1].split('=')[1];
        var uidpickid = uid+'&'+pickid;
        this.setState({
            uid:uid
        });
        if(uid != 'undefined'){
            fetch(`http://xpm.xpmwqhzygy.top/user/${pickid}`,{
            method: 'GET',        
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    username:res.data[0].username,
                    text:res.data[0].xyan
                });  
                if(this.state.text == ''){
                    this.setState({
                        text:'考研宣言：说点什么吧...'
                    })
                }
            });
        }

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
                            headimg2:`http://xpm.xpmwqhzygy.top/head/${pickid}`,
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

        fetch(`http://xpm.xpmwqhzygy.top/user/${pickid}`,{
            method: 'GET',        
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    school:res.data[0].school,
                    profess:res.data[0].profess
                });  
                if(this.state.school==''){
                    this.setState({
                        school:'未填写'
                    })
                }
                if(this.state.profess==''){
                    this.setState({
                        profess:'未填写'
                    })
                }
            });

            fetch(`http://wqh.xpmwqhzygy.top/love/${uidpickid}`,{
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
    componentDidUpdate(pr){

    }
    render() {
        var str = this.props.location.search;
        var headimg2 = this.state.headimg2;
        var uid = str.split('=')[1];
        var pickid = str.split('&')[1].split('=')[1];
        return (
            <div className='talk'>
            <NavBar style={{background:'#66cccc',color:'#fff',position:'fixed',width:'100%',top:'0'}} 
            leftContent={<Link to={`/appTab?uid=${uid}&type=my`}><img src={require('../imgs/zjt.png')} /></Link>}
             mode="light"
            onLeftClick={() => console.log('onLeftClick')}
            ><span style={{color:'#fff',fontSize:'22px'}}>我的研校</span></NavBar>
             <div style={{width:'100%',height:'60vw'}}>
                    <img src={beijing} style={{width:'100%',height:'60vw',top:'0'}} />
                    <img src={this.state.pre == 0 ? headimg : `${headimg2}`} alt="" 
                    style={{
                        width:'22vw',height:'22vw',
                        top:'20vw',left:'39%',
                        borderRadius:'11vw',
                        position:'absolute'}}/>
                </div>
                <div style={{
                    backgroundColor:'white',height:'20vw',
                    borderBottom:'1vw solid #DDDDDD'}}>
                    <span 
                    style={{
                        lineHeight:'20vw',fontSize:'5vw',
                        marginLeft:'5vw',marginTop:'0',
                        marginBottom:'0',float:'left',
                        width:'70vw'}}>昵称：</span>
                    <p style={{fontSize:'4vw',lineHeight:'20vw'}}>{this.state.username}</p>
                </div>
                <div style={{backgroundColor:'white',height:'20vw',borderBottom:'1vw solid #DDDDDD'}}>
                    <span 
                    style={{
                        lineHeight:'20vw',marginLeft:'5vw',
                        fontSize:'5vw',marginTop:'0',
                        marginBottom:'0',float:'left',
                        width:'45vw'}}>考研宣言：</span>
                    <p style={{fontSize:'4vw',lineHeight:'20vw',float:'right',marginRight:'13vw'}}>{this.state.text}</p>
                </div>
                <p style={{
                    lineHeight:'20vw',marginLeft:'5vw',
                    fontSize:'5vw',
                    height:'15vw',
                    }}>他/她的目标</p>
                <div style={{
                    width:'88%',
                    border:'1vw solid #DDDDDD',
                    fontSize:'4vw',
                    marginLeft:'5vw',
                    marginRight:'5vw',
                    height:'35vw'
                }}>
                    <div style={{
                        width:'90',paddingRight:'5%',
                        paddingLeft:'5%',height:'15vw',
                        background:'#fff',marginTop:'2vw',
                        fontSize:'5vw',lineHeight:'15vw'}}>
                    <span>目标院校</span>
                    <span style={{float:'right',fontSize:'4vw'}} 
                    onClick={this.changeschool}>{this.state.school}</span>
                </div>
                <div style={{
                        width:'90',paddingRight:'5%',
                        paddingLeft:'5%',height:'15vw',
                        background:'#fff',fontSize:'5vw',
                        lineHeight:'15vw'}}>
                    <span>考研专业</span>
                    <span style={{float:'right',fontSize:'4vw'}} 
                    onClick={this.changespro}>{this.state.profess}</span>
                </div>
                </div>
                <div style={{width:'100%',height:'12vw',marginTop:'12vw',fontSize:'6vw',color:'#FFFFFF'}}>
                <Link to={`/talkto?uid=${uid}&pickid=${pickid}`}><button 
                    style={{width:'40%',height:'15vw',
                    borderColor:'#66CCCC',
                    backgroundColor:'white',
                    borderWidth:'1vw',
                    marginLeft:'6%',
                    color:'#66CCCC',
                    borderRadius:'2vw'}}>发送消息</button></Link>
                    {this.state.touchState==false?<button onClick={this.focus}
                    style={{width:'40%',height:'15vw',
                    backgroundColor:'#66CCCC',
                    marginLeft:'6%',
                    color:'#FFFFFF',
                    borderRadius:'2vw'}}>关注用户</button>:
                    <button onClick={this.focus}
                    style={{width:'40%',height:'15vw',
                    backgroundColor:'#66CCCC',
                    marginLeft:'6%',
                    color:'#FFFFFF',
                    borderRadius:'2vw'}}>已关注</button>
                    }
                </div>
                <div style={{height:'10vh'}}></div>
            </div>
            
        )
    }
    
}