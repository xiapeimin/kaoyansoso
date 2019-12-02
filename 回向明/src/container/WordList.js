import React, { Component } from 'react'
import {Tabs,NavBar, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';
import Todoinput from './Wordlist/Todoinput';
import Todoing from './Wordlist/Todoing';
import Todoinput1 from './Wordlist/Todoinput1';
import Todoing1 from './Wordlist/Todoing1'

export default class Market extends Component {
   constructor(){
      super();
      this.state = {
          todo: ['about adv 关于',
          'abdomen n 腹，下腹',
          'abnormal adj 反常的',
          'absolute adj 绝对的',
          'absent adj 缺席的',
          'abstract adj 抽象的',
          'abrod adv 在国外',
          'about adv 大约',
          'able adj 有才能的',
          'abolish v 废除',
          'aboard adv 船上',
          'accessory n 同谋，从犯',
          'appeal vi 呼吁',
          'abolish vt. 废除',
          'ability n.能力；能耐，本领',
          'abuse vt.滥用；虐待 n.滥用',
          'accept vt.vi.接受；同意',
          'accord vt.使一致；给予',
          'accustom vt.使习惯',
          'acquire vt.取得；获得；学到',
          'addition n.加，加法；附加物',
          'adopt vt.收养；采用；采取',
          'advice n.劝告；忠告；意见',
          'affair n.事情，事件；事务',
          'airtight adj  密封的',
          'albuminn n 蛋白质',
          'alignment n.队列',
          'alton adj 次高音',
          'amatorya adj 恋爱的',
          'ambitn n 界限，范围，周围',
         ],
         todo1:[
            'black 黑色',
            'ball 球',
            'banana 香蕉',
            'build 建造',
            'albuminn n 蛋白质',
          'alignment n.队列',
          'alton adj 次高音',
          'amatorya adj 恋爱的',
          'ambitn n 界限，范围，周围',
          'fake	n.假货，膺品 a.假的',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
         'falsehood	n. 谎言,虚假',
         'famed	a. 著名的',
         'famous adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'fake	n.假货，膺品 a.假的',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
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
    render() {   //input 宽度超出
        const tabs = [
            { title: <p style={{fontSize:'5vw'}}>收藏单词</p> },
            { title: <p style={{fontSize:'5vw'}}>默写单词</p> },
          ];
        return (
            <div className='testbox'>
               <NavBar               
                style={{backgroundColor:'#66cccc',color:'white'}}>
                   <Link to='/Words'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{backgroundColor:'#66cccc',color:'white'}}>我的单词</span>           
                </NavBar>
                <div style={{height:'5vw'}}></div>
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
