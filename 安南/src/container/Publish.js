import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import { List, TextareaItem } from 'antd-mobile';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class AppHome extends Component {
    constructor(){
        super();
        this.state={
            texts:'',
            flag:0,
        }
    }
    render() {
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        return (
            <div style={{background:'#fff',position:'absolute',top:'0',bottom:'0',width:'100%'}}>
                <Link to={`/help?uid=${uid}`}>
                <NavBar
                style={{backgroundColor:'#FF8888',marginBottom:'3vw'}}
                    icon={<Icon type="left" style={{color:'white'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >我要反馈</NavBar>
                </Link>
                <textarea
                    id='help'
                    style={{height:'400px',margin:'4%',padding:'3%',width:'86%',background:'none',border:'1px solid #ddd'}}
                    placeholder={'我的反馈是……'}
                    onChange={this.inpText}
                    />
                <WingBlank>
                    <WhiteSpace />
                        <Button onClick={this.onSubmit}
                            style={{color:'#fff',width:'40%',marginLeft:'30%',backgroundColor:'#FF8888'}}
                            >提交</Button>
                    <WhiteSpace />
                 </WingBlank>
            </div>
        )
    }
    inpText = (e) => {
        this.setState({
            texts:e.target.value
        });
        console.log(this.state.texts)
    }
    onSubmit = (e) => {
        if(this.state.texts!=''){
            console.log(this.state.texts);
            Toast.info('感谢您的反馈，我们将会改进……', 1);
        document.getElementById('help').value=""
        console.log('提交用户数据开始。。。。。')
        const post ={
            texts:this.state.texts
        };
        console.log(post)
        fetch(`http://gy.xpmwqhzygy.top/publish`,{
            // post提交
            method:"POST",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        });
        this.setState({
            flag:1
        });
        }
    }
}