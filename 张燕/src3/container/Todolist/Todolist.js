import React, { Component, Fragment } from 'react';
import Todoinput from './Todoinput';
import Todoup from './Todoup';
import Tododown from './Tododown';

var usertd='';
export default class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        sizeing:0,
        sizefns:0,
        list: [],
        fnslist:[],
        storage:window.localStorage
      }
      this.handleTranfDown = this.handleTranfDown.bind(this); 
      this.handleTranfUp = this.handleTranfUp.bind(this);
      this.delItemUp = this.delItemUp.bind(this);
      this.delItemDown = this.delItemDown.bind(this);
      //设置本地存储键值对
      var uid = this.props.uid;
      usertd='todouser'+uid;  
      
      var storage = this.state.storage; 
      if(storage.getItem(usertd) == null){
        var todo= [];
        var d=JSON.stringify(todo); 
        storage.setItem(usertd,d);
      }

    }

    render() {
      console.log(usertd);
      return (
        <div style={{background:'#f4f0f0',paddingBottom:'20px'}}>
          {        
            this.getLocalStorage() //初始化 读取本地存储
          }
          <div>
            <Todoinput parent={this}/>
            <div style={{height:'10px',background:'#f5f5f9'}}></div> 
            <div style={{height:'15px'}}></div>
            <div style={{float:'left',marginBottom:'2vw',marginTop:'2vw',borderRadius:'5px',marginLeft:'5%',background:'#e8b1b1',height:'35px',lineHeight:'35px'}}>&nbsp;&nbsp;未完成任务&nbsp;&nbsp;</div>
            <div style={{float:'right',marginBottom:'2vw',marginTop:'2vw',marginRight:'6%',width:'30px',textAlign:'center',height:'30px',border:'1px solid #d7dddd',lineHeight:'30px',borderRadius:'15px',background:'#f9f8f8'}}>{this.state.sizeing}</div>
            <div className='clear'></div>
            
          </div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <Todoup key={index} item={item} index={index} tranfItem={this.handleTranfDown} del={this.delItemUp}/>
                )
              })
            }
          </ul>
          <div style={{float:'left',marginBottom:'2vw',marginTop:'2vw',borderRadius:'5px',marginLeft:'5%',background:'#eddbc2',height:'35px',lineHeight:'35px'}}>&nbsp;&nbsp;已完成任务&nbsp;&nbsp;</div>
          <div style={{float:'right',marginBottom:'2vw',marginTop:'2vw',marginRight:'6%',width:'30px',textAlign:'center',height:'30px',border:'1px solid #d7dddd',lineHeight:'30px',borderRadius:'15px',background:'#f9f8f8'}}>{this.state.sizefns}</div>
          <div className='clear'></div>
          
          <ul>           
            {
              this.state.fnslist.map((item, index) => {
                return (
                  <Tododown key={index} item={item} index={index} tranfItem={this.handleTranfUp} del={this.delItemDown}/>
                )
              })
            }
          </ul>
          
        </div>
      )
    }
      
    //上面切换到下面
    handleTranfDown(index) {
      var sizeing = this.state.sizeing - 1;
      var sizefns = this.state.sizefns + 1;
      var list = [...this.state.list];
      var f = list[index];
      var fnslist = [...this.state.fnslist];
      fnslist.push(f);
      list.splice(index, 1);       
      this.setState({
        list: list,
        fnslist:fnslist,
        sizeing: sizeing,
        sizefns:sizefns
      });
        
      var storage = this.state.storage;
      var json=storage.getItem(usertd); 
      var jsonObj=JSON.parse(json);
      jsonObj[index].done = true;
      var fnobj = new Object();
      fnobj = jsonObj[index];
      jsonObj.splice(index,1);
      jsonObj.push(fnobj);
       
      var d=JSON.stringify(jsonObj);   
      storage.setItem(usertd,d);         
    }
    //下面切换到上面
    handleTranfUp(index){
      var sizeing = this.state.sizeing + 1;
      var sizefns = this.state.sizefns - 1;
      var fnslist = [...this.state.fnslist];
      console.log(index,fnslist[index]);
      var l = fnslist[index];
      var list = [...this.state.list];
      list.push(l);
      fnslist.splice(index, 1);       
      this.setState({
        list: list,
        fnslist:fnslist,
        sizeing: sizeing,
        sizefns: sizefns
      });

      var storage = this.state.storage;
      var json=storage.getItem(usertd); 
      var jsonObj=JSON.parse(json);

      jsonObj[index+this.state.list.length].done = false;
      var lobj = new Object();
      lobj = jsonObj[index+this.state.list.length];
      jsonObj.splice(index+this.state.list.length,1);
      jsonObj.splice(this.state.list.length, 0, lobj);
       
      var d=JSON.stringify(jsonObj); 
      storage.setItem(usertd,d);          
    }
    //"现在进行"列表 删除功能
    delItemUp(index){
      var sizeing = this.state.sizeing - 1;       
      var list = [...this.state.list];
      list.splice(index, 1);       
      this.setState({
        list: list,
        sizeing: sizeing
      });

      var storage = this.state.storage;
      var json=storage.getItem(usertd); 
      var jsonObj=JSON.parse(json);  
      jsonObj.splice(index,1);

      var d=JSON.stringify(jsonObj);   
      storage.setItem(usertd,d);         
    }
    //"已经完成"列表 删除功能
    delItemDown(index){
      var sizefns = this.state.sizefns - 1;
      var fnslist = [...this.state.fnslist];
      fnslist.splice(index, 1);       
      this.setState({
        fnslist:fnslist,
        sizefns:sizefns
      });

      var storage = this.state.storage;
      var json=storage.getItem(usertd); 
      var jsonObj=JSON.parse(json);
      jsonObj.splice(index+this.state.list.length,1);
       
      var d=JSON.stringify(jsonObj); 
      storage.setItem(usertd,d);  
    }

    //父组件向子组件取值
    getChildrenMsg = (result, inputValue) => {
      var storage = this.state.storage;
      var json=storage.getItem(usertd); 
      var jsonObj=JSON.parse(json);
      var list = [...this.state.list]; 
      var fnslist = [...this.state.fnslist];
      var l = 0;
      var f = 0;
      
      for(var i = 0;i < jsonObj.length;i++){
        if(jsonObj[i].done == false){
          list[i] = jsonObj[i].titie;
          l++;
        }else{
          fnslist[i-list.length] = jsonObj[i].titie;
          f++;
        }
      }
        
      var sizeing = l + 1;
      list.unshift(inputValue);
      this.setState({
        list: list,
        sizeing: sizeing,
        fnslist: fnslist,
        sizefns:f
      });

      let obj = new Object();
      obj.titie = inputValue;
      obj.done = false;
      jsonObj.unshift(obj); 
      var d=JSON.stringify(jsonObj);//将JSON对象转换成为字符串
      storage.setItem(usertd,d);  
    }

    //本地存储 
    getLocalStorage(){
      var storage = this.state.storage;       
      var list = this.state.list;
      var fnslist = this.state.fnslist;
      var json=storage.getItem(usertd);      
      var jsonObj=JSON.parse(json);
      var l = 0;
      var f = 0;      
      for(var i = 0;i < jsonObj.length;i++){
        if(jsonObj[i].done == false){
          list[i] = jsonObj[i].titie;
          l++;
        }else{
          fnslist[i-list.length] = jsonObj[i].titie;
          f++;
        }
      }   
      this.state.sizeing=l;
      this.state.sizefns=f;     
    }
  
    
}
