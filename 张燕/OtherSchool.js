import React, { Component } from 'react';
import { NavBar,Icon,WhiteSpace,WingBlank,Tabs} from 'antd-mobile';
import bjC from './images/bjCollege.jpg';
import qhC from './images/qhC.jpg'

export default class q extends Component {
    render() {
        return (
            <div>
                 <NavBar               
                mode="light"
                icon={<Icon type="left" />}
                style={{backgroundColor:'#66cccc',color:'white'}}>
                    <span style={{backgroundColor:'#66cccc',color:'white'}}>xxx专业开设院校</span>
                </NavBar>
                <div style={{width:'100%',height:'6vw'}}>
                <form style={{float:"left",width:'50%',height:'6vw'}}>
                    <select style={{width:'100%',height:'6vw',borderRadius:'7px',fontSize:'4vw'}}>
                        <option value="未选择">地区</option>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="tianjin">天津</option>
                        <option value="guangzhou">广州</option>
                    </select>
                </form>
                <form style={{float:'left',width:'50%',height:'6vw'}}>
                    <select style={{width:'100%',height:'6vw',borderRadius:'7px',fontSize:'4vw'}}>
                        <option value="未选择">分数线</option>
                        <option value="apple">200-300</option>
                        <option value="banana">300-400</option>
                        <option value="pear">200以下</option>
                        <option value="orange">400以上</option>
                    </select>
                </form>
            </div>
                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',width:'100%'}}>
                                <img style={{ height: '20vw',width:'40%' }} src={bjC} alt="" />
                                <WingBlank>
                                <div style={{ lineHeight:'6vw'}}>
                                <div><h2 style={{fontSize:'3vw'}}>北京大学</h2></div>
                                <div style={{fontSize:'2vw'}}>分数线：xxx</div>
                                <WhiteSpace/>
                                <div style={{width:'3vw',height:'2vw',backgroundColor:'#e8b1b1',textAlign:'center',lineHeight:'2vw',fontSize:'1.5vw'}}>
                                    985
                                </div>                  
                                </div>
                                </WingBlank>
                </div>    
                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',width:'100%'}}>
                                <img style={{ height: '20vw',width:'40%' }} src={qhC} alt="" />
                                <WingBlank>
                                <div style={{ lineHeight:'6vw'}}>
                                <div><h2 style={{fontSize:'3vw'}}>清华大学</h2></div>
                                <div style={{fontSize:'2vw'}}>分数线：xxx</div>
                                <WhiteSpace/>
                                <div style={{width:'3vw',height:'2vw',backgroundColor:'#e8b1b1',textAlign:'center',lineHeight:'2vw',fontSize:'1.5vw'}}>
                                    985
                                </div>                  
                                </div>
                                </WingBlank>
                </div>    
            </div>
        )
    }
}
