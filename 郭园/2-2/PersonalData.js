import React, { Component } from 'react'
import xuexiao from '../imgs/xuexiao.jpg'
import touxiang from '../imgs/头像.jpg'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
export default class PersonalData extends Component {
    constructor(){
        super();
        this.state = {
            uid:0,
            data:[],
            img:[]
        }
    }
    render() {
        var uid = this.state.uid;
        return (
            <div style={{background:'#fff',width:'100%',position:'absolute',top:'0',bottom:'0'}}>
                <Link to={`/appTab?uid=${uid}&type=my`}>
                <NavBar
                    style={{backgroundColor:'#66CCCC',color:'white',height:'10vw',fontSize:'5vw'}}
                    icon={<Icon type="left" style={{ color:'white',fontSize:'5vw'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >个人资料</NavBar>
                </Link>
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
                    <button 
                    style={{width:'40%',height:'10vw',
                    backgroundColor:'#0066FF',
                    marginLeft:'6%',
                    color:'#FFFFFF',
                    borderRadius:'4vw'}}>发送消息</button>
                    <button
                    style={{width:'40%',height:'10vw',
                    backgroundColor:'#FF5511',
                    marginLeft:'6%',
                    color:'#FFFFFF',
                    borderRadius:'4vw'}}>关注用户</button>
                </div>

            </div>
            
        )
    }
    
}