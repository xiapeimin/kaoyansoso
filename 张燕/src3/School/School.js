import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar, Icon,SearchBar, WhiteSpace,WingBlank} from 'antd-mobile';
import { white } from 'ansi-colors';
import './school.css';
import ListShop from './ListShop';

const city = ['地区','北京','上海','天津','重庆','江苏','浙江','安徽','辽宁','江西','山东','河北','山西','内蒙古','河南','湖北','湖南','广东','广西','海南','四川','贵州','云南','西藏','福建','吉林','黑龙江','陕西','甘肃','青海','宁夏','新疆'];

export default class School extends Component {
    // state = {
    //     value: '',
    //   };
    onChange = (key) => {
        console.log(key);
      }
    render() {
        return (
            <div>
               {/* 导航栏 */}
               <NavBar style={{backgroundColor:'#66cccc',color:'white'}}
                  mode="dark"
               >院校资讯</NavBar>

               {/* 搜索框 */}
               <SearchBar
                  placeholder="搜索高校"
                  onSubmit={value => console.log(value, 'onSubmit')}
                  onClear={value => console.log(value, 'onClear')}
                  onFocus={() => console.log('onFocus')}
                  onBlur={() => console.log('onBlur')}
                  onCancel={() => console.log('onCancel')}
                  showCancelButton
                  onChange={this.onChange}
                  />

                  <div style={{backgroundColor:'white',width:'100%',height:'600px'}}>      
                  
                  {/* 下拉菜单 */}
                  <form> 
                  <WhiteSpace/>
                  <select style={{width:'42.5%',height:'30px',marginLeft:'5%',color:'gray',border:'none'}}> 
                    {
                      city.map((item)=>(
                         <option>{item}</option>
                      ))
                    } 
                  </select> 
                  <select  style={{width:'42.5%',height:'30px',marginLeft:'5%',color:'gray',border:'none'}}>
                    <option>升序</option>
                    <option>降序</option>
                  </select>
                  </form> 

                  {/* 长列表 */}
                  <WhiteSpace/>
                   <ListShop/>
                  </div>
            </div>
        )
    }
}