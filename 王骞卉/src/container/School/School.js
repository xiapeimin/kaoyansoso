import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import { NavBar, Icon,Tabs, WhiteSpace,WingBlank} from 'antd-mobile';
import { white, gray, grey } from 'ansi-colors';
import './school.css';
import ListShop from './ListShop';
import {Link} from 'react-router-dom';
import Item from 'antd-mobile/lib/popover/Item';
import { thisExpression } from '@babel/types';
import school1 from '../../imgs/school2.jpg'

export default class School extends Component {
    constructor(){
      super();
      this.state={
        data:[{schoolname:'北京大学'},{schoolname:'清华大学'}],
        flag:1,
        id:1,
        schooldata:[{
          "img":"http://pic.baike.soso.com/ugc/baikepic2/0/ori-20190525162808-1665237614_jpg_1010_758_290613.jpg/800",
          "des":"北京大学",
          "row":"院校排名：1",
          "city":"北京",
          "one":"985",
          "two":"211"
      }]
      }
    }

    componentDidMount(){
      var uid = 0
      var str = window.location.hash;
      var add = [];
      if(str.indexOf('&')>=0){
          uid = str.split('&')[0].split('=')[1];
      }else{
          uid = str.split('=')[1];
      }
      fetch(`http://wqh.xpmwqhzygy.top/love/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
              if(res.data.length!==0){
                  this.setState({
                    data:res.data
                  }) 
                }
    })
     
    fetch('http://wqh.xpmwqhzygy.top/whole')
         .then((res)=>res.json())
         .then((res)=>{
              var c = JSON.parse(res);
              for(var i=0;i<this.state.data.length;i++){
                for(var j=0;j<c.whole.length;j++){
                  if(this.state.data[i].schoolname==c.whole[j].des){
                      add[i]=c.whole[j]
                  }
                }
              }
              this.setState({schooldata:add});
          });
        }

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
      var uid = 0
      var str = window.location.hash;
      if(str.indexOf('&')>=0){
          uid = str.split('&')[0].split('=')[1];
      }else{
          uid = str.split('=')[1];
      }
      console.log(this.state.data);
      /* 结束 */

        return (
            <div>
              <div style={{width:'100%',height:'150vh'}}>
                <div style={{width:'100%',backgroundColor:'lightgray',height:'8vh'}}>
                  <div style={{fontSize:'2.5vh',textAlign:'center',lineHeight:'8vh',width:'100%',float:'left',color:'white'}}  className={this.state.flag == 1 ? 'vpaychange' : ''}>关注院校</div>
                  {/* <div style={{fontSize:'2.5vh',textAlign:'center',lineHeight:'8vh',width:'50%',float:'left',color:'white'}} onClick={this.changeColor2} className={this.state.flag == 2 ? 'vpaychange' : ''}>目标院校</div> */}
                </div>
                <div><img style={{width:'100vw',height:'28vh'}} src={school1}/></div>
                
                    {
                      this.state.schooldata.map((Item)=>(
                      <Link to={`/schoolDetails?id=${Item.des||'四川大学'}&uid=${uid}`}><div  style={{ padding: '0 0' }}>
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
                      <div style={{height:'1vh'}}></div>
                      </Link>

                      ))
                    }
                 
              </div>
            </div>
        )
    }
}