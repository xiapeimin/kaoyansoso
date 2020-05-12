import React, { Component } from 'react'
import touxiang from '../imgs/head.png'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
import headimg from '../imgs/usrhead.png';
import Item from 'antd-mobile/lib/popover/Item';
export default class FansList extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            text:'',
            headimg:[],
            user:'',
        }
    }
    
    componentDidMount(){
        var str = window.location.hash;
        var uid = str.split('&')[0].split('=')[1];
        if(uid != 'undefined'){
            fetch(`http://wqh.xpmwqhzygy.top/love2/${uid}`,{
                method: 'GET'
              })
              .then((res)=>res.json())
              .then((res)=>{
                  console.log(res.data);
                  var data = res.data;
                  var headimgs=[];
                  this.setState({
                      user:res.data[0].uid
                  })
                  for(var i=0;i<data.length;i++){
                    headimgs[i]=`http://xpm.xpmwqhzygy.top/head/${data[i].uid}`;
                    fetch(`http://xpm.xpmwqhzygy.top/user/${data[i].uid}`,{
                        method: 'GET',        
                        headers:{
                            'Accept':'application/json,text/plain,*/*'
                        }
                        })
                        .then((res)=>res.json())
                        .then((res)=>{
                            this.setState({
                                username:this.state.username+'&'+res.data[0].username,
                                text:this.state.text+'&'+res.data[0].xyan,
                                headimg:headimgs
                            });  
                       });
                  }
              });


        }
    }
    render() {
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#66CCCC',color:'white',height:'10vw',fontSize:'5vw'}}
                    icon={<Icon type="left" style={{ color:'white',fontSize:'5vw'}}/>}
                    onLeftClick={() => window.location.hash = `/appTab?uid=${uid}&type=my`}
                >粉丝列表</NavBar>

        {this.state.username.slice(1).split('&').map((item,index)=>(
            <div>
                <div style={{width:'100vw',height:'15vh'}}>
                    <img src={this.state.pre == 0 ? headimg : `${this.state.headimg[index]}`} alt="" 
                    style={{
                        width:'22vw',height:'12vh',
                        borderRadius:'11vw',marginLeft:'6vw',marginTop:'1.5vh',float:'left'}}/>
                    <div style={{float:'left',marginLeft:'10vw',marginTop:'5vh'}}>
                        {console.log(this.state.headimg)}
                        <div>{this.state.username.split('&')[index+1]}</div>
                        <div>{this.state.text.split('&')[index+1]}</div>
                    </div>
                </div>
                <div style={{height:'1px',backgroundColor:'lightgray',width:'100vw'}}></div>
                </div>           
        ))
        }
            </div>
        )
    }
    
}
