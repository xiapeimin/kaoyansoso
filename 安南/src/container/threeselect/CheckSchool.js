import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar,  WhiteSpace } from 'antd-mobile';
import ListShop from '../School/ListShop';
import {Link} from 'react-router-dom';

const city = ['城市','北京','上海','天津','重庆','江苏','浙江','安徽','辽宁','江西','山东','河北','山西','内蒙古','河南','湖北','湖南','广东','广西','海南','四川','贵州','云南','西藏','福建','吉林','黑龙江','陕西','甘肃','青海','宁夏','新疆'];

export default class CheckSchool extends Component {
    render(){
        return(
            <div>
                {/* 导航栏 */}
                <NavBar
                style={{background:'#06a170',color:'#fff'}} 
                leftContent={<Link to={'/confirmSchool'}><img src={require('./zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>院校推荐</span></NavBar>

                {/* 下拉菜单 */}
                <form> 
                  <WhiteSpace/>
                  <select style={{width:'30%',height:'30px',marginLeft:'2%',color:'gray',border:'none'}}> 
                    {
                      city.map((item)=>(
                         <option>{item}</option>
                      ))
                    } 
                  </select> 
                  <select  style={{width:'30%',height:'30px',marginLeft:'2%',color:'gray',border:'none'}}>
                    <option>高校类型</option>
                    <option>985</option>
                    <option>211</option>
                    <option>普通本科</option>
                  </select>
                  <select  style={{width:'30%',height:'30px',marginLeft:'2%',color:'gray',border:'none'}}>
                    <option>分数范围</option>
                    <option>300-400</option>
                    <option>280-300</option>
                  </select>
                  </form> 

                  {/* 长列表 */}
                  <WhiteSpace/>
                   <ListShop/>
            </div>
        )
    }
}