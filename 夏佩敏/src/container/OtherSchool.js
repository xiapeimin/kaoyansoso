import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar,  WhiteSpace } from 'antd-mobile';
import ListShop2 from './School/ListShop2';
import {Link} from 'react-router-dom';

const city = ['城市','北京','上海','天津','重庆','江苏','浙江','安徽','辽宁','江西','山东','河北','山西','内蒙古','河南','湖北','湖南','广东','广西','海南','四川','贵州','云南','西藏','福建','吉林','黑龙江','陕西','甘肃','青海','宁夏','新疆'];

export default class CheckSchool extends Component {
  constructor(){
    super();
    this.state={
      value:'地区',
      values:'asc'
    }
  }

  onChange = (key) => {
    console.log(key);
  }
    render(){
      var value=this.state.value;
      var values=this.state.values;

        var str = this.props.location.search;
        var id = str.split('&')[0].split('=')[1]; //id为哪一类专业 大类
        var index = str.split('&')[1].split('=')[1]; //index为哪一类专业的具体专业
        var uid = str.split('&')[2].split('=')[1]; //用户id 用户跳转携带

        return(
            <div>
                {/* 导航栏 */}
                <NavBar
                style={{background:'#21a3e0',color:'#fff'}} 
                leftContent={<Link to={`/proCheck?id=${id}&index=${index}&uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>其他开设院校</span></NavBar>

                <div style={{backgroundColor:'white',width:'100%',height:'600px'}}>      
                  
                  {/* 下拉菜单 */}
                  <form> 
                  <WhiteSpace/>
                  <select style={{width:'42.5%',height:'30px',marginLeft:'5%',color:'gray',border:'1px solid #ddd'}} onChange={(e) => {this.setState({value:e.target.value})}}> 
                    {
                      city.map((item)=>(
                         <option value={item}>{item}</option>
                      ))
                    } 
                  </select> 
                  <select  style={{width:'42.5%',height:'30px',marginLeft:'5%',color:'gray',border:'1px solid #ddd'}} onChange={(e) => {this.setState({values:e.target.value})}}>
                    <option value='asc' >升序</option>
                    <option value='desc'>降序</option>
                  </select>
                  </form> 

                  {/* 长列表 */}
                  <WhiteSpace/>
                  <ListShop2 value={`${value}`} values={`${values}`} uid={`${uid}`} id={`${id}`} index={`${index}`} />
                  </div>
            </div>
        )
    }
}