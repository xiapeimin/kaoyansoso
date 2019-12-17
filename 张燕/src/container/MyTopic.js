// import { ListView } from 'antd-mobile';
// import React from 'react';
// import {Link} from 'react-router-dom';
// import tou1 from './images/tou1.jpg';
// import tou2 from './images/tou2.jpg';
// import tou3 from './images/tou3.jpg';
// import good from './images/zan2.jpg';
// import talk from './images/talk.jpg';
// import zan1 from './images/zan1.jpg';
// import delete1 from './images/delete.jpg';

// export default class MyTopic extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       flag:0,
//       flag1:0,
//       touchState:false,
//       uid:0,
//       data:[]
//     };
//   }

//   componentDidMount() {
//     var str = window.location.hash;
//     if(str.indexOf('&')>=0){
//         var uid = str.split('&')[0].split('=')[1];
//         console.log(uid);
//         this.setState({
//             uid:uid
//         });
//         console.log(str,'topicmu',uid);
//         console.log('pppppppppppppppppppp',this.state.page);
//     }else{
//         var uid = str.split('=')[1];
//         console.log(uid);
//         this.setState({
//             uid:uid
//         });
//     }
//     fetch(`http://zy.xpmwqhzygy.top/topic/${uid}`,{
//       method: 'GET'
//     })
//     .then((res)=>res.json())
//     .then((res)=>{
//         console.log(res.data);
//         console.log(typeof(res.data));
//         this.setState({
//             data:res.data
//         });
//     })
//     console.log(str,'topicmu',uid);
//   }
// delItem=(index)=>{
//   alert('是否确定删除');
//   console.log(index);
//   var idx=document.getElementsByClassName(index);
//   console.log(idx[1]);
//   idx[1].innerHTML=''
// }
// good=(index)=>{
//   this.setState({
//     touchState:true
//   })
// }
// unlogin=(id)=>{
//   this.setState({
//     flag:id
//   })
// }
// addItem=()=>{

// }
//   render() {
//     console.log(this.state.data);
//       return (
//                   this.state.data.map((item,index)=>( 
//                     <div className={index} style={{ width:'100%',height:'15vh'}}>
//                         <div style={{width:'20%',float:'left'}}>  
//                           <img style={{ height: '10vh',width:'10vh',borderRadius:'50%',float:'left',marginRight:'2vh'}} src={tou1} alt="" />                 
//                         </div>
//                         <div style={{width:'80%',lineHeight:1.5,float:'left'}}>
//                         <div style={{width:'60%',float:'left'}}>
//                             <span style={{float:'left'}}>{this.props.username}</span><br/>
//                             <span style={{float:'left'}}>{item.topic}</span><br/>
//                             <span style={{float:'left'}}>{item.time}</span>
//                         </div>
//                         <div style={{width:'40%',float:'left',marginTop:'30px'}}>
//                               <img  src={this.state. touchState?zan1:good} style={{width:'4.5vh',height:'4.5vh',marginRight:'2vh'}} onClick={(id)=>this.good(id)}/>     
//                               <img src={talk} style={{width:'4vh',height:'4vh',marginRight:'2vh'}} onClick={()=>this.unlogin()}/>
//                               <img src={delete1} style={{width:'4vh',height:'4vh'}} onClick={()=>this.delItem(index)}/> 
//                        </div>    
//                         </div>
//                         <div id={index}> </div>
//                         <div className={this.state.flag !=0 ? 'talk' : 'untalk'} style={{height:'30px',width:'100%',marginTop:"10px"}}>  
//                             <input type='text' placeholder='评论' style={{width:'70%',height:'30px',float:'left'}}/>
//                             <button style={{width:'20%',color:'white',marginTop:'-3px',height:'32px',backgroundColor:'#66cccc',border:'none'}} onClick={()=>this.addItem()}>完成</button>
//                         </div>
//                     </div>                    
//                 ))
//       );
//   }
// }