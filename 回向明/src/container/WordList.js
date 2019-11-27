import React, { Component } from 'react'
import {Tabs,NavBar, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import Todoinput1 from './Todoinput1';
import Todoing1 from './Todoing1'

export default class Market extends Component {
   constructor(){
      super();
      this.state = {
          todo: ['about',
          'abdomen n 腹，下腹',
          'abnormal adj 反常的',
          'absolute adj 绝对的',
          'absent adj 缺席的',
          'abstract adj 抽象的',
          'abrod adv 在国外',
          'about adv 大约',
          'able adj 有才能的',
          'abolish v 废除',
          'aboard adv 船上'
         ],
         todo1:[
            'black 黑色',
            'ball 球',
            'banana 香蕉',
            'build 建造'
         ]
      }
  }
  addItem = (msg)=>{
      this.setState({
          todo: [...this.state.todo,msg]
      })  
  }
  addItem1 = (msg)=>{
   this.setState({
       todo1: [...this.state.todo1,msg]
   })  
}
  delitem = (a)=>{
   var todo= [...this.state.todo];
   todo.splice(a,1);
   this.setState(
       {todo:todo}
   )
}
  delitem1 = (a)=>{
   var todo1= [...this.state.todo1];
   todo1.splice(a,1);
   this.setState(
       {todo1:todo1}
   )
}
//存储到本地
componentDidMount(){
   var todo = JSON.parse(localStorage.getItem('todo'));
   var todo1 = JSON.parse(localStorage.getItem('todo1'));
   if(todo){
       this.setState({
           todo: [...todo]
       });
   }
   if(todo1){
      this.setState({
          todo1: [...todo1]
      });
  }
}
componentDidUpdate(){
   localStorage.setItem("todo",JSON.stringify(this.state.todo));
   localStorage.setItem("todo1",JSON.stringify(this.state.todo1));
}
    render() {
        const tabs = [
            { title: <p style={{position:'absolute',fontSize:'5vw',top:'0vw'}}>world list a</p> },
            { title: <p style={{position:'absolute',fontSize:'5vw',top:'0vw'}}>world list b</p> },
          ];
        return (
            <div>
               <NavBar               
                style={{backgroundColor:'#66cccc',color:'white'}}>
                   <Link to='./Words'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{backgroundColor:'#66cccc',color:'white'}} to='./Home1'>单词详情页</span>           
                </NavBar>
                
                <Tabs tabs={tabs} initialPage={0}>
                <div>
                    <Todoinput addTodo={this.addItem}/>
                    <Todoing todo={this.state.todo} delTodo={this.delitem}/>
                </div>
                
                <div>
                    <Todoinput1 addTodo1={this.addItem1}/>
                    <Todoing1 todo1={this.state.todo1} delTodo1={this.delitem1}/>
                </div>
                </Tabs>      
            </div>
        )
    }
}