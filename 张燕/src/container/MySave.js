import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
const tabs2 = [
    { title: '收藏题库' },
    { title: '关注院校'},
  ];
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
            <div>
                <Link to={`/appTab?uid=${uid}&type=my`}>
                <NavBar style={{backgroundColor:'#66CCCC',color:'white',borderBottom:'2px solid #DDDDDD'}}
                  
                    icon={<Icon type="left" style={{ color:'white'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >我的收藏</NavBar>
                </Link>
                <Tabs tabs={tabs2}
                initialPage={0}
                tabBarActiveTextColor={'#66cccc'}
                onChange={(tab, index) => { console.log('onChange', index, tab);}}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
                <div style={{backgroundColor: 'white',fontSize:'18px'}}>
                
                <ul style={{margin:'0',padding:'0'}}>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                        <p>2018年考研英语（一）真题</p>
                    </li>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                        <p>2018年考研数学（二）真题</p>
                    </li>
                </ul>
                <ul style={{margin:'0',padding:'0'}}>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                        <p>2018年考研政治真题</p>
                    </li>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                        <p>2018年考研软件工程真题</p>
                    </li>
                </ul>
                </div>
                <div style={{backgroundColor: 'white',fontSize:'18px'}}>
                
                <ul style={{margin:'0',padding:'0'}}>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                    <p>中南大学</p>
                    </li>
                </ul>
                <ul style={{margin:'0',padding:'0'}}>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                    <p>河北师范大学</p>
                    </li>
                </ul>
                </div>
                </Tabs>
            </div>
        )
    }
}