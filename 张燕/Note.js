import React, { Component } from 'react'
import { NavBar,Icon,WhiteSpace,WingBlank,List,InputItem} from 'antd-mobile';
import {Link} from 'react-router-dom'

export default class Note extends Component {
    addItem(e){
        var p=prompt('笔记'); 
        console.log(p);
         var add=document.getElementById('add');
         add.innerHTML+='<br/>'+"<div id='add1'>"+p
         +"<button id='del' style='width:10%;height:10vw;float:right;font-size:5vw;'>X</button></div>";
         var btn =document.getElementById('del');
         btn.onclick=function(){
            var add1=document.getElementById('add1');
            add1.innerHTML=''
         }
    }
    render() {
        return (
            <div>
                <NavBar               
                mode="light"
                icon={<Icon type="left" />}
                style={{backgroundColor:'#66cccc',color:'white',height:'6vw'}}>
                    <span style={{backgroundColor:'#66cccc',color:'white',fontSize:'4vw'}}>笔记本</span>
                </NavBar>
                <div id='add' style={{width:'100%',fontSize:'5vw'}}></div>
                <div style={{width:'100%',height:'10vw',position:'fixed',bottom:'0'}}>
                    <div style={{width:'45%',height:'100%',backgroundColor:'#66cccc',float:'left',fontSize:'4vw',textAlign:'center',lineHeight:'10vw'}}>我的笔记</div>
                    <div style={{width:'10%',height:'100%',borderRadius:'50%',border:'1px solid gray',fontSize:'5vw',float:'left',textAlign:'center',lineHeight:'9vw'}} onClick={this.addItem}>+</div>
                    <div style={{width:'45%',height:'100%',backgroundColor:'#66cccc',float:'left',fontSize:'4vw',textAlign:'center',lineHeight:'10vw'}}>学长笔记</div>
                </div>
               
            </div>
        )
    }
}
