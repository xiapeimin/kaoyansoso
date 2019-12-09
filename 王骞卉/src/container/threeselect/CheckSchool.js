import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar,  WhiteSpace, SearchBar } from 'antd-mobile';
import ListShop2 from '../School/ListShop2';
import {Link} from 'react-router-dom';

const city = ['城市','北京','上海','天津','重庆','江苏','浙江','安徽','辽宁','江西','山东','河北','山西','内蒙古','河南','湖北','湖南','广东','广西','海南','四川','贵州','云南','西藏','福建','吉林','黑龙江','陕西','甘肃','青海','宁夏','新疆',''];

export default class CheckSchool extends Component {

  constructor(){
    super();
    this.state={
      value:'地区',
      values:'asc',
      value3:'three'
    }
  }

    render(){
      var str = this.props.location.search;
      var uid = str.split('=')[1];
      var value = this.state.value;
      var values = this.state.values;
      var value3 = this.state.value3;
        return(
            <div>
                {/* 导航栏 */}
                <NavBar
                style={{background:'#06a170',color:'#fff'}} 
                leftContent={<Link to={`/confirmSchool?uid=${uid}`}><img src={require('./zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>院校推荐</span></NavBar>

                {/* 搜索框 */}
               <Link to={`/search?uid=${uid}&type=school`}><SearchBar value={'河北师范大学'} placeholder="Search" cancelText={'搜索'} /></Link>
                {/* 下拉菜单 */}
                <form> 
                  <WhiteSpace/>
                  <select style={{width:'30%',height:'30px',marginLeft:'2%',color:'gray',border:'none'}} onChange={(e) => {this.setState({value:e.target.value})}}> 
                    {
                      city.map((item)=>(
                         <option value={item}>{item}</option>
                      ))
                    } 
                  </select> 
                  <select  style={{width:'30%',height:'30px',marginLeft:'2%',color:'gray',border:'none'}} onChange={(e) => {this.setState({value3:e.target.value3})}}>
                    <option value='three'>高校类型</option>
                    <option value='one'>985</option>
                    <option value='two'>211</option>
                    <option value='common'>普通本科</option>
                  </select>
                  <select  style={{width:'30%',height:'30px',marginLeft:'2%',color:'gray',border:'none'}} onChange={(e) => {this.setState({values:e.target.value})}}>
                    <option value='asc' >升序</option>
                    <option value='desc'>降序</option>
                  </select>
                  </form> 

                  {/* 长列表 */}
                  <WhiteSpace/>
                   <ListShop2 uid={`${uid}`} value={`${value}`} values={`${values}`} value3={`${value3}`}/>
            </div>
        )
    }
}