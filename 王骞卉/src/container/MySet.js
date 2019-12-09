import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';

export default class AppHome extends Component {
    constructor(){
        super();
        this.state = {
            flag:0,
            uid:0
        }
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid = str.split('=')[1];
        console.log(uid);
        this.setState({
            uid:uid
        });
    }
    render() {
        var uid = this.state.uid;
        return (
            <div>
                <Link to={`/appTab?uid=${uid}&type=my`}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{color:'black'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >设置</NavBar>
                </Link>
                <div style={{marginTop:'20px',marginBottom:'0',backgroundColor:'white',height:'50px',borderBottom:'2px solid #DDDDDD'}}>
                    <p style={{lineHeight:'50px',marginLeft:'20px',marginBottom:'0'}}>头像</p>
                </div>
                <div style={{backgroundColor:'white',height:'50px',borderBottom:'2px solid #DDDDDD'}}
                    onClick={this.necheng}>
                    <p style={{lineHeight:'50px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>昵称</p>
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}
                    onClick={this.kaoyanxuanyan}>
                    <p style={{lineHeight:'70px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>考研宣言</p>
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}
                    onClick={this.kaoyanyuanxiao}>
                    <p style={{lineHeight:'70px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>考研院校</p>
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}
                    onClick={this.kaoyanzhuanye}>
                    <p style={{lineHeight:'70px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>考研专业</p>
                </div>
                <div onClick={this.unlogin} style={{backgroundColor:'white',height:'50px',borderBottom:'2px solid #DDDDDD',borderTop:'2px solid #DDDDDD',marginTop:'20px'}}>
                    <p style={{lineHeight:'50px',textAlign:"center",margin:'0'}}>退出登录</p>
                </div>

                <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 2 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 3 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 4 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 5 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                    <p>确认退出？</p>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                        <div><Link to='/' style={{color:'#000'}}>退出</Link></div>
                    </div>
                </div>
                <div className={this.state.flag == 2 ? 'showgolo gologin' : 'gologin'}>
                    <input style={{marginTop:'30px',height:'25px'}} placeholder='昵称'></input>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                        <div onClick={this.quxiao}>确定</div>
                    </div>
                </div>
                <div className={this.state.flag == 3 ? 'showgolo gologin' : 'gologin'}>
                    <input style={{marginTop:'30px',height:'25px'}} placeholder='考研宣言'></input>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                        <div onClick={this.quxiao}>确定</div>
                    </div>
                </div>
                <div className={this.state.flag == 4 ? 'showgolo gologin' : 'gologin'}>
                    <input style={{marginTop:'30px',height:'25px'}} placeholder='考研院校'></input>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                        <div onClick={this.quxiao}>确定</div>
                    </div>
                </div>
                <div className={this.state.flag == 5 ? 'showgolo gologin' : 'gologin'}>
                    <input style={{marginTop:'30px',height:'25px'}} placeholder='考研专业'></input>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                        <div onClick={this.quxiao}>确定</div>
                    </div>
                </div>
            </div>
        )
    }
    unlogin = () => {
        this.setState({
            flag:1
        })
    }
    quxiao = () => {
        this.setState({
            flag:0
        })
    }
    necheng = () => {
        this.setState({
            flag:2
        })
    }
    kaoyanxuanyan = () => {
        this.setState({
            flag:3
        })
    }
    kaoyanyuanxiao = () => {
        this.setState({
            flag:4
        })
    }
    kaoyanzhuanye = () => {
        this.setState({
            flag:5
        })
    }
}