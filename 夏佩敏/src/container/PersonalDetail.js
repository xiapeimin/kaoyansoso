import React, { Component } from 'react'
import xuexiao from './images/tou1.jpg'
import touxiang from './images/tou1.jpg'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
export default class PersonalDetail extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            img:[],
            touchState:false,
            uid:0,
            pickid:0
        }
    }
    componentDidMount(){
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        var pickid=str.split('=')[2];
        console.log(pickid,uid);
        this.setState({
            uid:uid,
            pickid:pickid
        })
    }
    focus = () =>{
        this.setState({
            touchState:!this.state.touchState
        })
    }
    render() {
        var uid=this.state.uid;
        var pickid=this.state.pickid;
        return (
            <div style={{background:'#fff',width:'100%',position:'absolute',top:'0',bottom:'0'}}>
                {/* <Link to={`/appTab?uid=${uid}&type=topic`}> */}
                <NavBar
                    style={{backgroundColor:'#66CCCC',color:'white',height:'10vw',fontSize:'5vw'}}
                    icon={<Icon type="left" style={{ color:'white',fontSize:'5vw'}}/>}
                    onLeftClick={() => window.location.hash = `/appTab?uid=${uid}&type=school`}
                >个人资料</NavBar>
                {/* </Link> */}
                <img src={touxiang} alt="" 
                    style={{
                        width:'22vw',height:'22vw',
                        top:'10vw',left:'39%',
                        borderRadius:'11vw',marginTop:'10vw',
                        marginLeft:'40%'}}/>
                <div style={{
                    backgroundColor:'white',height:'20vw',borderBottom:'1vw solid #DDDDDD'}}>
                    <span style={{lineHeight:'20vw',fontSize:'5vw',marginLeft:'5vw',marginTop:'0',marginBottom:'0'}}>昵称：</span>
                    <input type='text' value={this.state.name} style={{width:'79%',paddingLeft:'2%',fontSize:'5vw',textAlign:'right',color:'#7b7c7c',border:'none'}} />
                </div>
                <div style={{backgroundColor:'white',height:'20vw',borderBottom:'1vw solid #DDDDDD'}}>
                    <span style={{lineHeight:'20vw',marginLeft:'5vw',fontSize:'5vw',marginTop:'0',marginBottom:'0'}}>考研宣言：</span>
                    <input type='text' value={this.state.xuanyan} style={{width:'70%',paddingLeft:'2%',fontSize:'5vw',textAlign:'right',color:'#7b7c7c',border:'none'}} />
                </div>
                <p style={{
                    lineHeight:'20vw',marginLeft:'5vw',
                    fontSize:'5vw',marginTop:'0',
                    marginBottom:'0',
                    width:'100%',
                    height:'20vw',
                    }}>他/她的动态</p>
                <div style={{
                    width:'88%',
                    border:'1vw solid #DDDDDD',
                    fontSize:'4vw',
                    marginLeft:'5vw',
                    marginRight:'5vw',
                    height:'15vw'
                }}>动态</div>
                <div style={{width:'100%',height:'15vw',marginTop:'30vw',fontSize:'6vw',color:'#FFFFFF'}}>
                    <Link to={`/talkto?pickid=${pickid}&uid=${uid}`}><button 
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

            </div>
            
        )
    }
    
}