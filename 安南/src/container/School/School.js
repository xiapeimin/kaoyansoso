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

var fflag=0;
var obj = new Object();
export default class School extends Component {
    constructor(){
      super();
      this.state={
        img:[],
        data:[],
        idd:'',
        flag:1,
        id:1,
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
        console.log(uid);
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
                else if(res.data.length==0){
                  fflag=0;
                  return;
                }
              }
      //console.log(myschool,'mmmmmmmm')

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
                
            

      /*
      fetch(`http://wqh.xpmwqhzygy.top/love/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
              if(res.data.length!==0){
                  this.setState({
                    data:res.data,
                    text:'关注院校'
                  }) 
                }
    })*/
     
    

  // componentDidUpdate(prevProps,prevState){
  //     var uid = 0
  //     var str = window.location.hash;
  //     if(str.indexOf('&')>=0){
  //         uid = str.split('&')[0].split('=')[1];
  //     }else{
  //         uid = str.split('=')[1];
  //     }
  //   if(prevState.id!==this.state.id){
  //     if(this.state.id==1){
  //       fetch(`http://wqh.xpmwqhzygy.top/love/${uid}`,{
  //           method: 'GET'
  //           })
  //           .then((res)=>res.json())
  //           .then((res)=>{
  //             if(this.state.id==1){
  //                 this.setState({
  //                   data:res.data
  //                 }) 
  //               }
  //               else{
  //                 this.setState({
  //                   data:[]
  //                 })
  //               } 

  //   })
  //     }
  //     if(this.state.id==2){
  //       fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
  //           method: 'GET'
  //           })
  //           .then((res)=>res.json())
  //           .then((res)=>{
  //               this.setState({
  //                 data:res.data
  //               })
  //   })
  //     }
  //   }
  // }
    

  // changeColor = () => {
  //   this.setState({
  //       flag:1,
  //       id:1
  //   })
  //   var uid = 0
  //   var str = window.location.hash;
  //   var add = [];
  //     if(str.indexOf('&')>=0){
  //         uid = str.split('&')[0].split('=')[1];
  //     }else{
  //         uid = str.split('=')[1];
  //     }
  //     fetch(`http://wqh.xpmwqhzygy.top/love/${uid}`,{
  //           method: 'GET'
  //           })
  //           .then((res)=>res.json())
  //           .then((res)=>{         
  //               this.setState({
  //                 data:res.data
  //               })            
  //   })
     
  //   fetch('http://wqh.xpmwqhzygy.top/whole')
  //        .then((res)=>res.json())
  //        .then((res)=>{
  //             var c = JSON.parse(res);
  //             for(var i=0;i<this.state.data.length;i++){
  //               for(var j=0;j<c.whole.length;j++){
  //                 if(this.state.data[i].schoolname==c.whole[j].des){
  //                     add[i]=c.whole[j]
  //                 }
  //               }
  //             }
  //             this.setState({schooldata:add});
  //         });
  // }

  // changeColor2 = () => {
  //   this.setState({
  //       flag:2,
  //       id:2
  //   })
  //   var uid = 0;
  //   var str = window.location.hash;
  //   var add = [];
  //     if(str.indexOf('&')>=0){
  //         uid = str.split('&')[0].split('=')[1];
  //     }else{
  //         uid = str.split('=')[1];
  //     }
  //   fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
  //           method: 'GET'
  //           })
  //           .then((res)=>res.json())
  //           .then((res)=>{
  //               this.setState({
  //                 data:res.data
  //               })
  //   })

  //   fetch('http://wqh.xpmwqhzygy.top/whole')
  //        .then((res)=>res.json())
  //        .then((res)=>{
  //             var c = JSON.parse(res);
  //             for(var i=0;i<this.state.data.length;i++){
  //               for(var j=0;j<c.whole.length;j++){
  //                 if(this.state.data[i].school==c.whole[j].des){
  //                     add[i]=c.whole[j]
  //                 }
  //               }
  //             }
  //             this.setState({schooldata:add});
  //         });
  // }

    render() {
      /***跳转参数解析代码 */
      console.log(fflag,obj);
      var row;
      var uid = 0
      var str = window.location.hash;
      if(str.indexOf('&')>=0){
          uid = str.split('&')[0].split('=')[1];
      }else{
          uid = str.split('=')[1];
      }
      console.log(this.state.data);
      console.log(fflag,'lll')
      
      /* 结束 */

        return (
            <div style={{width:'100%',background:'#fff'}}>
              
                
                <NavBar
                style={{background:'#66cccc',color:'#fff',marginBottom:'5vw'}} 
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}} className={this.state.flag == 1 ? 'vpaychange' : ''}>院校资讯</span></NavBar>

                
                <h2 style={{marginLeft:'5%'}}>| {fflag==0 ? '中南大学' : obj.des}</h2>
                <div style={{position:'relative'}}>
                <div style={{width:'100%',textAlign:'center',marginBottom:'5vw'}}><img style={{width:'90%',height:'24vh',borderRadius:'10px'}} src={fflag==0 ? school1 : obj.img}/></div>
                {/* <div style={{marginLeft:'5%'}}>
                    <button style={{backgroundColor:'#e8b1b1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>985</button>
                    <button style={{backgroundColor:'#a7e4f1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>211</button>
                    <button style={{backgroundColor:'#b9a2eb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>综合类</button>
                </div> */}

{
                        this.state.img.map((item,index)=>(  
                            <div>                     
                               
                                <div className={this.state.idd == item.des ? 'talk' : 'untalk'} style={{marginTop:'3vh',paddingLeft:'4%'}}>                                   
                                    <button style={{float:'left',backgroundColor:'#e8b1b1',marginLeft:'5px',borderRadius:'7px',padding:'3px',display:item.one==='' ? 'none' : 'block'}}>{item.one}</button>
                                    <button style={{float:'left',backgroundColor:'#a7e4f1',marginLeft:'5px',borderRadius:'7px',padding:'3px',display:item.two==='' ? 'none' : 'block'}}>{item.two}</button>
                                    <button style={{float:'left',backgroundColor:'#b9a2eb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>{item.logo}</button>
                                </div>
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
}