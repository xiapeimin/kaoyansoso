import React, { Component } from 'react';
import { NavBar, Icon} from 'antd-mobile';

export default class My extends Component {
    render() {
        return (
            <div>
                 <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px',color:'#000' }} />,
                    ]}
                    >我的</NavBar>
                    <h1 style={{color:'#fcd'}}>Welcome to my app</h1>
            </div>
        )
    }
}
