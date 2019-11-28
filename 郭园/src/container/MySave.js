import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
const tabs2 = [
    { title: '题库收藏' },
    { title: '院校关注'},
  ];
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <Link to='/my'>
                <NavBar style={{backgroundColor:'#66CCCC',color:'white',borderBottom:'2px solid #DDDDDD'}}
                  
                    icon={<Icon type="left" style={{ color:'white'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >我的收藏</NavBar>
                </Link>
                <Tabs tabs={tabs2}
                initialPage={0}
                tabBarBackgroundColor={'#66cccc'}
                tabBarActiveTextColor={'white'}
                onChange={(tab, index) => { console.log('onChange', index, tab);}}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
                <div style={{backgroundColor: 'white',fontSize:'18px'}}>
                
                <ul style={{margin:'0',padding:'0'}}>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                        <p>我的收藏1</p>
                    </li>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                        <p>我的收藏1</p>
                    </li>
                </ul>
                <p style={{fontSize:'15px',padding:'10px',margin:'0',paddingTop:'10px'}}>（点击院校关注切换为下一内容）</p>
                <ul style={{margin:'0',padding:'0'}}>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                        <p>河北师范大学</p>
                    </li>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                        <p>河北科技大学</p>
                    </li>
                </ul>
                </div>
                <div style={{backgroundColor: 'white',fontSize:'18px'}}>
                
                <ul style={{margin:'0',padding:'0'}}>
                    <li style={{listStyle:'none',height:'70px',border:'4px solid #DDDDDD',paddingLeft:'20px',marginTop:'10px'}}>
                    <p>我关注的院校</p>
                    </li>
                </ul>
                </div>
                </Tabs>
            </div>
        )
    }
}