import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import { Accordion, List } from 'antd-mobile';
import helph from '../images/helph.png'
import help from '../images/help.png'
import {Link} from 'react-router-dom';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                 <Link to='/my'>
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
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“我的”</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel 
                        header="如何找回密码"
                        style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“我的”</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel header="如何收藏历年真题" style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“我的”</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel header="如何发表动态" style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“我的”</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel header="如何匹配适合自己的高校" style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“我的”</p>
                    </Accordion.Panel>
                    <img  src={help} alt="" style={{width:'15%',height:'40px',float:'left',marginTop:'4px',marginLeft:'2px'}}></img>
                    <Accordion.Panel header="如何修改用户基本信息" style={{border:'2px solid #DDDDDD'}}>
                        <p style={{paddingLeft:'20px',margin:'0'}}>1.进入“我的”</p>
                    </Accordion.Panel>
                    </Accordion>
                </div>
                <Link to='/publish'>
                <div style={{width:'100%',height:'50px',backgroundColor:'#66CCCC',color:'white',fontSize:'17px'}}>
                    <p style={{textAlign:'center',lineHeight:'50px'}}>发表反馈</p>
                </div>
                </Link>
            </div>
        )
    }
}