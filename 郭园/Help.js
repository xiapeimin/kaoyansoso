import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import { Accordion, List } from 'antd-mobile';
import helph from '../imgs/helph.png'
import help from '../imgs/help.png'
import {Link} from 'react-router-dom';

export default class AppHome extends Component {
    constructor(){
        super();
        this.state = {
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
            <div className='testbox'>
                 <Link to={`/appTab?uid=${uid}&type=my`}>
                <NavBar
                style={{backgroundColor:'#DDDDDD'}}
                    mode="light"
                    icon={<Icon type="left" style={{color:'black'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >帮助与反馈</NavBar>
                </Link>
                <div style={{backgroundColor:'white',height:'50px'
                    ,border:'2px solid #DDDDDD',width:'100%'
                    ,marginTop:'2px'}}>
                    <img  src={helph} alt="" style={{width:'40px',height:'40px',float:'left',paddingTop:'5px'}}></img>
                    <h2 style={{lineHeight:'50px',margin:'0'}}>常见问题</h2>
                </div>
                <div>
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel 
                        header="如何修改目标研校/专业?"
                        style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“我的”</p>
                        <p style={{paddingLeft:'20px'}}>2.点击“我的研校”</p>
                        <p style={{paddingLeft:'20px',marginBottom:'0'
                                    ,paddingBottom:'20px'}}>3.点击更改“我的研校”，“我的专业”</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel 
                        header="如何删除发表的动态" style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“动态”</p>
                        <p style={{paddingLeft:'20px'}}>2.点击“我的动态”</p>
                        <p style={{paddingLeft:'20px',marginBottom:'0'
                                    ,paddingBottom:'20px'}}>3.点击“删除”图标</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel 
                        header="如何找回密码"
                        style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“设置”</p>
                        <p style={{paddingLeft:'20px'}}>2.点击“退出登录”</p>
                        <p style={{paddingLeft:'20px'}}>3.点击“忘记密码”</p>
                        <p style={{paddingLeft:'20px',marginBottom:'0'
                                    ,paddingBottom:'20px'}}>4.通过邮箱找回密码</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel header="如何收藏历年真题" style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“研题库”</p>
                        <p style={{paddingLeft:'20px'}}>2.点击“真题科目”</p>
                        <p style={{paddingLeft:'20px'}}>3.点击“真题”</p>
                        <p style={{paddingLeft:'20px',marginBottom:'0'
                                    ,paddingBottom:'20px'}}>4.右上角收藏</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel header="如何发表动态" style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“动态”</p>
                        <p style={{paddingLeft:'20px'}}>2.点击“我的动态”</p>
                        <p style={{paddingLeft:'20px'}}>3.点击“输入框”</p>
                        <p style={{paddingLeft:'20px',marginBottom:'0'
                                    ,paddingBottom:'20px'}}>4.发表动态</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel header="如何匹配适合自己的高校" style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“首页”</p>
                        <p style={{paddingLeft:'20px'}}>2.点击“定高校”</p>
                        <p style={{paddingLeft:'20px'}}>3.点击“院校推荐”</p>
                        <p style={{paddingLeft:'20px',marginBottom:'0'
                                    ,paddingBottom:'20px'}}>4.根据具体条件选择合适高校</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel header="如何修改用户基本信息" style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“我的”</p>
                        <p style={{paddingLeft:'20px'}}>2.点击右上角设置图标</p>
                        <p style={{paddingLeft:'20px',marginBottom:'0'
                                    ,paddingBottom:'20px'}}>3.修改用户基本信息</p>
                    </Accordion.Panel>
                    </Accordion>
                </div>
                <Link to={`/publish?uid=${uid}`}>
                    <div style={{position:'absolute',bottom:'0',width:'100%',lineHeight:'12vw',height:'12vw',backgroundColor:'#FF8888',color:'white',fontSize:'5vw',textAlign:'center'}}>发表反馈</div>
                </Link>
            </div>
        )
    }
}