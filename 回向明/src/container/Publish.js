import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import { List, TextareaItem } from 'antd-mobile';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {Link} from 'react-router-dom';

function showToast() {
  Toast.info('感谢您的反馈，我们将会改进……', 1);
}

export default class AppHome extends Component {
    
    render() {
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        return (
            <div>
                <Link to={`/help?uid=${uid}`}>
                <NavBar
                style={{backgroundColor:'#FF8888'}}
                    icon={<Icon type="left" style={{color:'white'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >我要反馈</NavBar>
                </Link>
                <List style={{width:'88%',margin:'5%',border:'2px solid #DDDDDD',height:'400px'}}>
                    <TextareaItem
                    style={{height:'367px',padding:'0'}}
                    placeholder={'我的反馈是……'}
                    rows={5}
                    count={100}
                    />
                </List>
                <WingBlank>
                    <WhiteSpace />
                        <Button onClick={showToast}
                            style={{width:'40%',marginLeft:'30%',backgroundColor:'#FF8888'}}
                            >提交</Button>
                    <WhiteSpace />
                 </WingBlank>
            </div>
        )
    }
}