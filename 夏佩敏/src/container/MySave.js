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
            uid:1,
            data:[]
        }
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid = str.split('=')[1];
        console.log(uid);
        this.setState({
            uid:uid
        });

        fetch(`http://xpm.xpmwqhzygy.top/testsave/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                this.setState({
                    data:res.data
                });
            });
    }
    render() {
        var uid = this.state.uid;
        return (
            <div style={{width:'100%',position:'absolute',top:'0',bottom:'0',background:'#fff'}}>
                <Link to={`/appTab?uid=${uid}&type=my`}>
                <NavBar style={{backgroundColor:'#66CCCC',color:'white',borderBottom:'2px solid #DDDDDD'}}
                  
                    icon={<Icon type="left" style={{ color:'white'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >我的收藏</NavBar>
                </Link>
                
                <div style={{background:'#fff'}}>
                {
                    this.state.data.map((item,index)=>(
                        <div className='testmore'>
                            <span>{item.name}</span>
                            <Link to={`/test/?index=${item.id}&flag=${item.flag}&uid=${uid}&save=yes`}><img src={require('../imgs/testright.png')}/></Link>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}