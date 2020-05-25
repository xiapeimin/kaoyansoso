import React, { Component } from 'react'
import {Tabs,NavBar, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';
import Todoinput from './Wordlist/Todoinput';
import Todoing from './Wordlist/Todoing';
import Todoinput1 from './Wordlist/Todoinput1';
import Todoing1 from './Wordlist/Todoing1'
import Item from 'antd-mobile/lib/popover/Item';

var words=[];
var words2=[];

export default class WordList extends Component {
   constructor(){
      super();
      this.state = {
        words:[],
        words2:[]
         
      }
  }

  componentDidMount(){
    var str=window.location.hash;
    var uid=str.split('=')[1];
    fetch(`http://wqh.xpmwqhzygy.top/wordcheck/${uid}`,{
                 method: 'GET'
        })
      .then((res)=>res.json())
      .then((res)=>{
          console.log(res.data)
                for(var i=0;i<res.data.length;i++){
                        words[i]=res.data[i].word;
                        words2[i]=res.data[i].wordc;
                }
                this.setState({
                    words:words,
                    words2:words2
                })
        })
    }

 
render() { 
    var str = this.props.location.search;
    var uid = str.split('=')[1];
 return (
         <div>
             <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/words?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>单词收藏</span></NavBar>
                <div style={{height:'3vh'}}></div>
                 {
                    this.state.words.map((e,i,arr)=>(
                        <li  style={{fontSize:'5vw',color:'black'}}>
                            <div style={{float:'left',marginLeft:'15vw',width:'25vw',marginTop:'1vh'}}>{arr[i]}</div>
                            <div style={{float:'left',marginLeft:'2vw',width:'20vw',marginTop:'1vh'}}>{this.state.words2[i]}</div>
                            <button style={{background:'#66cccc',color:'white',fontSize:'4vw',marginLeft:'15vw',marginTop:'1vh'}} 
                            onClick={()=>{
                                var wordf=uid+'&'+arr[i];
                                window.location.reload();
                                fetch(`http://wqh.xpmwqhzygy.top/wordcancel/${wordf}`,{
                                     method:"DELETE",
                                     headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                                })
                                .then(res =>res.json())
                                .then(data =>{
                                     console.log(data);
                                });
                            }}>删除</button>
                            <div style={{height:'1px',width:'100vw',backgroundColor:'lightgray',marginTop:'1vh'}}></div>
                        </li>
                    ))
                }

         </div>
        )
    }
}
