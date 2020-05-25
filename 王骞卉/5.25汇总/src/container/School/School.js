import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar, Icon,Tabs, WhiteSpace,WingBlank} from 'antd-mobile';
import { white, gray, grey } from 'ansi-colors';
import './school.css';
import ListShop from './ListShop';
import {Link} from 'react-router-dom';
import Item from 'antd-mobile/lib/popover/Item';
import { thisExpression } from '@babel/types';
import school1 from '../../imgs/school2.jpg';
import Contrast from "../Contrast";

import createHashHistory from 'history/createHashHistory';
const hashHistory = createHashHistory();


var fflag=0;
var obj = new Object();
export default class School extends Component {
    constructor(){
      
      super();
      this.state={
        a:0,
        b:0,
        img:[],
        data:[],
        idd:'',
        flag:1,
        id:1,
        value: '',
        profess:'软件工程',
        text:'推荐关注',
        schooldata:[{
          "img":"http://pic.baike.soso.com/ugc/baikepic2/0/ori-20190525162808-1665237614_jpg_1010_758_290613.jpg/800",
          "des":"北京大学",
          "row":"院校排名：1",
          "city":"北京",
          "one":"985",
          "two":"211"
        },{
          "img":"http://pic.baike.soso.com/ugc/baikepic2/0/ori-20190525162808-1665237614_jpg_1010_758_290613.jpg/800",
          "des":"清华大学",
          "row":"院校排名：2",
          "city":"北京",
          "one":"985",
          "two":"211"
        },{
          "img":"http://pic.baike.soso.com/ugc/baikepic2/0/ori-20190525162808-1665237614_jpg_1010_758_290613.jpg/800",
          "des":"武汉大学",
          "row":"院校排名：3",
          "city":"武汉",
          "one":"985",
          "two":"211"
        },{
          "img":"http://pic.baike.soso.com/ugc/baikepic2/0/ori-20190525162808-1665237614_jpg_1010_758_290613.jpg/800",
          "des":"中南大学",
          "row":"院校排名：17",
          "city":"长沙",
          "one":"985",
          "two":"211"
        }]
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      
    }

    componentDidMount(){
      var myschool='';
      var uid = 0
      var str = window.location.hash;
      var add = [];
      if(str.indexOf('&')>=0){
          uid = str.split('&')[0].split('=')[1];
      }else{
          uid = str.split('=')[1];
      }
      fetch('http://zy.xpmwqhzygy.top/schoolDetail')
         .then((res)=>res.json())
         .then((res)=>{
            var ddata = JSON.parse(res);
            this.setState({
                img:ddata.img
            });  
        });

      fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
            method: 'GET',        
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                if(res.data.length!=0){
                  myschool=res.data[0].school;
                  if(res.data[0].school==''){
                    fflag=0;
                    this.setState({
                      idd:'中南大学'
                    });
                  }else if(res.data[0].school!=''){
                    fflag=1;
                    this.setState({
                      idd:res.data[0].school
                    });
                  }
                  // fflag=1; 
                }else if(res.data.length==0){
                  fflag=0;
                  return;
                }
                

      fetch(`http://xpm.xpmwqhzygy.top/ufocus/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                var sdata = res.data;
                if(sdata.length!=0){
                  this.setState({
                    data:res.data,
                    text:'关注院校'
                  });

                }else if(sdata.length==0){
                  this.setState({
                    data:[{name:'北京大学'},{name:'清华大学'},{name:'武汉大学'},{name:'中南大学'}],
                    text:'推荐关注'
                  });
                }
                fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
                  method: 'GET',        
                  headers:{
                      'Accept':'application/json,text/plain,*/*'
                  }
                  })
                  .then((res)=>res.json())
                  .then((res)=>{
                      console.log(res.data);
                      console.log(typeof(res.data));
                      this.setState({
                          school:res.data[0].school,
                          profess:res.data[0].profess
                      });  
                      if(this.state.school==''){
                          this.setState({
                              school:'未填写'
                          })
                      }
                      if(this.state.profess==''){
                          this.setState({
                              profess:'未填写'
                          })
                      }
                  });
                fetch('http://wqh.xpmwqhzygy.top/whole')
                .then((res)=>res.json())
                .then((res)=>{
              var c = JSON.parse(res);
              for(var i=0;i<this.state.data.length;i++){
                for(var j=0;j<c.whole.length;j++){
                  if(this.state.data[i].name==c.whole[j].des){
                      add[i]=c.whole[j]
                  }
                  if(myschool==c.whole[j].des){
                    obj=c.whole[j]
                  }
                }
              }
              this.setState({schooldata:add});
            });
          });
        });
        }
      handleChange (e) { // 选择
        this.setState({
          value: e.target.value
        })
      }
      handleSubmit () {
        if (this.state.value == '') {
          alert('未选择')
        } else {
          alert('你的选择是' + this.state.value);
          // 阻止默认行为，在提交之前需要验证的时候先拦截一下
        }
      }

      
    render() {
      /***跳转参数解析代码 */
      console.log(fflag,obj);
      var row;
      var uid = 0
      var str = window.location.hash;
      var a= this.state.a;
      var b= this.state.b;
      if(str.indexOf('&')>=0){
          uid = str.split('&')[0].split('=')[1];
      }else{
          uid = str.split('=')[1];
      }
      console.log(this.state.data);
      console.log(fflag,'lll')
      
      /* 结束 */
      let data = {a:a,b:b};
    let path = {
        pathname: '/contrast',
        query: data,
    }
        return (
          <div style={{width:'100%',background:'#fff'}}>
            <NavBar
              style={{background:'#66cccc',color:'#fff'}} 
              mode="light"> 
            <span style={{color:'#fff',fontSize:'22px'}} className={this.state.flag == 1 ? 'vpaychange' : ''}>院校对比</span>
            </NavBar>
            
            <div style={{backgroundColor:'#5599FF',color:'white',width:'100%',height:'35vw',paddingTop:'5vw'}}>
              <p style={{height:'5vw',fontSize:'4vw',width:'100%',paddingLeft:'35vw'}}>选择专业及院校</p>
              <p style={{height:'5vw',fontSize:'4vw',width:'100%',paddingLeft:'35vw'}}>一键对比看结果</p>
            </div>
            <div style={{
              width:'90vw',marginLeft:'5vw',
              marginTop:'-10vw',height:'30vw',
              backgroundColor:'white',fontSize:'4vw',
              borderRadius:'3vw',border:'2px solid #DDDDDD'}}>
              <p style={{fontSize:'4vw',marginTop:'3vw',marginLeft:'5vw'}}>目标专业</p>
              <p style={{fontSize:'4vw',marginLeft:'35vw'}}>{this.state.profess}</p>
            </div>
            <div style={{
              width:'90vw',marginLeft:'5vw',
              marginTop:'5vw',height:'30vw',
              backgroundColor:'white',fontSize:'4vw',
              borderRadius:'3vw',border:'2px solid #DDDDDD'}}>
              <p style={{fontSize:'4vw',marginTop:'3vw',marginLeft:'4vw'}}>目标院校</p>
              <div 
                style={{width:'25vw',height:'10vw',
                border:'2px solid #DDDDDD',marginLeft:'3vw',
                float:'left',paddingTop:'1vw',paddingLeft:'1vw'}}>
                <form onSubmit={this.handleSubmit}>
                  <select id='a' onChange={this.a} style={{width:'22vw'}}>
                    <option>北京大学</option>
                    <option>清华大学</option>
                    <option>复旦大学</option>
                    <option>浙江大学</option>
                    <option>中南大学</option>
                  </select>
                </form>
              </div>
              <div 
                style={{width:'25vw',height:'10vw',
                border:'2px solid #DDDDDD',marginLeft:'3vw',
                float:'left',paddingTop:'1vw',paddingLeft:'1vw'}}>
                <form onSubmit={this.handleSubmit}>
                    <select id='b' onChange={this.b} style={{width:'22vw'}}>
                        <option>北京大学</option>
                        <option>清华大学</option>
                        <option>复旦大学</option>
                        <option>浙江大学</option>
                        <option>中南大学</option>
                    </select>
                </form>
              </div>
            </div>
            <Link to={path}>
            <button 
              style={{
                backgroundColor:'#5599FF',
                color:'white',
                borderRadius:'2vw',
                border:'2px solid #DDDDDD',
                fontSize:'4vw',
                width:'90vw',
                height:'10vw',
                margin:'5vw'}}>开始对比</button>
            </Link>
            <div style={{position:'relative'}}>
              {
                this.state.img.map((item,index)=>(  
                  <div>                     
                    {/* <div className={this.state.idd == item.des ? 'talk' : 'untalk'} style={{marginTop:'3vh',paddingLeft:'4%'}}>                                   
                      <button style={{float:'left',backgroundColor:'#e8b1b1',marginLeft:'5px',borderRadius:'7px',padding:'3px',display:item.one==='' ? 'none' : 'block'}}>{item.one}</button>
                      <button style={{float:'left',backgroundColor:'#a7e4f1',marginLeft:'5px',borderRadius:'7px',padding:'3px',display:item.two==='' ? 'none' : 'block'}}>{item.two}</button>
                      <button style={{float:'left',backgroundColor:'#b9a2eb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>{item.logo}</button>
                    </div> */}
                  </div>
                ))
              }
              <div style={{clear:'both'}}></div>
              <div style={{position:'absolute',right:'5%',width:'100px',fontSize:'15px',height:'35px',lineHeight:'35px',textAlign:'center',borderRadius:'0 8px 0 8px',top:'0',background:'#3bc0bb',color:'#fff'}}>{fflag==0 ? '院校排名：17' : obj.row}</div>
            </div>
                
                <div>
                  <h2 style={{marginLeft:'5%'}}>| {this.state.text}</h2>
                    {
                      this.state.schooldata.map((Item)=>(
                      <Link to={`/schoolDetails?id=${Item.des||'四川大学'}&uid=${uid}&type=school`}><div  style={{ padding: '0 0' }}>
                      <div
                     style={{
                          lineHeight: '50px',
                          color: '#888',
                          fontSize: 18,
                          borderBottom: '1px solid #F6F6F6',
                      }}
                      ></div>
                      
                      <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',backgroundColor:'white',width:'100%'}}>
                        <img style={{ height: '64px', marginRight: '20px',width:'80px' ,marginLeft:'15px'}} src={Item.img} alt="" />
                        <div style={{ lineHeight: 1.5 }}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{Item.des}</div>
                        <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{Item.row}</span><div style={{color:'green',marginLeft:'10px',float:'left'}}>{Item.city}</div></div>
                        <div><span style={{color:'blue'}}>{Item.two}</span><span style={{color:'purple',marginLeft:'10px'}}>{Item.one}</span></div>
                       </div>
                      </div>
                      </div>
                      <div style={{height:'5px',background:'#ddd',opacity:'0.5'}}></div>
                      
                      </Link>

                      ))
                    }
                </div>
            </div>
        )
    }
    a=()=>{
      var a=this.state.a;
      var myselect=document.getElementById("a"); 
      var index=myselect.selectedIndex;
      var z=myselect.options[index].text; 
      console.log(z)
      if(z=='清华大学'){
        this.setState({
          a:1,
          
      })
      console.log(z)
      }else if(z=='复旦大学'){
        this.setState({
          a:2
      })
      console.log(z)
      }else if(z=='浙江大学'){
        this.setState({
          a:3
      })
      }else{
        this.setState({
          a:4
      })
      }
    }
    b=()=>{
      var b=this.state.b;
      var myselect=document.getElementById("b"); 
      var index=myselect.selectedIndex;
      var z=myselect.options[index].text; 
      if(z=='清华大学'){
        this.setState({
          b:1
      })
      }else if(z=='复旦大学'){
        this.setState({
          b:2
      })
      }else if(z=='浙江大学'){
        this.setState({
          b:3
      })
      }else{
        this.setState({
          b:4
      })
      }
    }
    
}
