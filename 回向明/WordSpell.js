import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Flex,NavBar, Icon } from 'antd-mobile';
import jinbi from '../imgs/jifen.jpg';

import audio0 from './src/0.mp3';
import audio1 from './src/1.mp3';
import audio2 from './src/2.mp3';
import audio3 from './src/3.mp3';
import audio4 from './src/4.mp3';
import audio5 from './src/5.mp3';
import audio6 from './src/6.mp3';
import audio7 from './src/7.mp3';
import audio8 from './src/8.mp3';
import audio9 from './src/9.mp3';

import audio10 from './src/10.mp3';
import audio11 from './src/11.mp3';
import audio12 from './src/12.mp3';
import audio13 from './src/13.mp3';
import audio14 from './src/14.mp3';
import audio15 from './src/15.mp3';
import audio16 from './src/16.mp3';
import audio17 from './src/17.mp3';
import audio18 from './src/18.mp3';
import audio19 from './src/19.mp3';

import audio20 from './src/20.mp3';
import audio21 from './src/21.mp3';
import audio22 from './src/22.mp3';
import audio23 from './src/23.mp3';
import audio24 from './src/24.mp3';
import audio25 from './src/25.mp3';
import audio26 from './src/26.mp3';
import audio27 from './src/27.mp3';
import audio28 from './src/28.mp3';
import audio29 from './src/29.mp3';

import audio30 from './src/30.mp3';
import audio31 from './src/31.mp3';
import audio32 from './src/32.mp3';
import audio33 from './src/33.mp3';
import audio34 from './src/34.mp3';
import audio35 from './src/35.mp3';
import audio36 from './src/36.mp3';
import audio37 from './src/37.mp3';
import audio38 from './src/38.mp3';
import audio39 from './src/39.mp3';

import audio40 from './src/40.mp3';
import audio41 from './src/41.mp3';
import audio42 from './src/42.mp3';
import audio43 from './src/43.mp3';
import audio44 from './src/44.mp3';
import audio45 from './src/45.mp3';
import audio46 from './src/46.mp3';
import audio47 from './src/47.mp3';
import audio48 from './src/48.mp3';
import audio49 from './src/49.mp3';

import audio50 from './src/50.mp3';
import audio51 from './src/51.mp3';
import audio52 from './src/52.mp3';
import audio53 from './src/53.mp3';
import audio54 from './src/54.mp3';
import audio55 from './src/55.mp3';
import audio56 from './src/56.mp3';
import audio57 from './src/57.mp3';
import audio58 from './src/58.mp3';
import audio59 from './src/59.mp3';

import audio60 from './src/60.mp3';
import audio61 from './src/61.mp3';
import audio62 from './src/62.mp3';
import audio63 from './src/63.mp3';
import audio64 from './src/64.mp3';

var allarr=[];
var wordss=[];
for(var i=0;i<26;i++){
    allarr.push(String.fromCharCode(97+i));//输出a-z 26个小写字母
}
var wordarr2 = [];
var storagearr = [];


export default class WordSpell extends Component {
    constructor(){
        super();
        this.state = {
            a:0,
            b:0,
            c:1,
            z:'a',
            k:'100',
            d:Math.floor(Math.random()*51),
            e:Math.floor(Math.random()*51),
            f:Math.floor(Math.random()*51),
            array:[],
            wordss:[],
            arr:[],//字母
            correct:'none',
            err:'none',
            money:0,
            flag:0,
            words:[
                ['about','关于',audio0],['apple','苹果',audio1],['alone','孤独',audio2],
                ['ball','球',audio3],['back','返回',audio4],['behind','后面',audio5],
                ['control','控制',audio6],['call','打电话',audio7],['contain','包含',audio8],
                ['display','样式',audio9],['dog','狗',audio10],['declare','宣告',audio11],
                ['egg','鸡蛋',audio12],['easy','简单',audio13],['eye','眼睛',audio14],
                ['flag','旗帜',audio15],['floor','地板',audio16],['forget','忘记',audio17],
                ['green','绿色',audio18],['google','谷歌',audio19],['girl','女孩',audio20],
                ['hello','你好',audio21],['help','帮助',audio22],['hard','硬',audio23],
                ['ipad','平板',audio24],['item','项目',audio25],['iron','铁',audio26],
                ['java','java语言',audio27],['script','剧本',audio28],['just','仅仅',audio29],
                ['key','钥匙',audio30],['king','国王',audio63],['kink','种类',audio64],
                ['listen','听',audio31],['love','爱',audio32],['learn','学习',audio33],
                ['monkey','猴子',audio34],['member','成员',audio35],['mark','标记',audio36],
                ['need','需要',audio37],['number','数字',audio38],
                ['out','出去',audio39],['over','上面',audio40],
                ['person','人',audio41],['present','目前',audio42],
                ['queen','女王',audio43],['quiet','安静',audio44],
                ['reason','原因',audio45],['radio','录音机',audio46],
                ['start','开始',audio47],['say','说',audio48],
                ['toy','玩具',audio49],['title','标题',audio50],
                ['ufo','不明飞行物',audio51],['under','下面',audio52],
                ['version','版本',audio53],['view','视野',audio54],
                ['word','单词',audio55],['where','哪里',audio56],
                ['xshell','终端模拟软件',audio57],['x','x字母',audio58],
                ['yellow','黄色',audio59],['yes','好的',audio60],
                ['zoo','动物园',audio61],['zero','零',audio62]
            ],
            letter:[
                'a','b','c','d','e','f','g','h','i','j',
                'k','l','m','n','o','p','q','r','s','t'
            ],
            arr3:[],
            arr2:[],
            arr1:[],
            storage:window.localStorage,
            pick:false
        }
        
        //每次刷新页面，执行下列代码（从这到render()上面）
        var array=this.state.array
  // 循环N次生成随机数
  for(var i = 0 ; ; i++){ 
      // 只生成10个随机数
      if(array.length<10){ 
            generateRandom(51); 
      }else{ 
        break; 
    } 
 } 
 // 循环遍历随机数数组
 for(var i = 0 ; i < array.length; i++){ 
      console.log(array[i]); 
 } 
 // 生成随机数的方法
 function generateRandom(count){ 
      var rand = parseInt(Math.random()*count); 
     for(var i = 0 ; i < array.length; i++){ 
          if(array[i] == rand){ 
               return false; 
           }            } 
     array.push(rand); 
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
                for(var i=0;i<res.data.length;i++){
                        wordss[i]=res.data[i].word;
                }
                this.setState({
                    wordss:wordss
                })
        })
     fetch(`http://zy.xpmwqhzygy.top/moneys/${uid}`,{
                method: 'GET'
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.data.length==0){
                this.setState({
                    money:0
                })
            }else{
            this.setState({
                money:res.data[0].money
            })
        }
        })
}


  render() {
    var url=this.props.location.search;
    var uid=url.split('=')[1];      
    var ok=[];
    var array=this.state.array;
    var arr=this.state.arr;
    var a=this.state.a;
    var b=this.state.b;
    var c=this.state.c;
    var k=this.state.k;
    var correct=this.state.correct;
    var err=this.state.err;
    var arr3=this.state.arr3;
    var words=this.state.words;
    var splitArray = words[array[a]][b].split('');
    var l=words[array[a]][b].split('');
    var isadd;
  // 循环N次生成随机数
  for(var i = 0 ; ; i++){ 
      // 只生成10个随机数
      if(ok.length<4){ 
            generateRandom1(4);
      }else{ 
        break; 
    } 
 } 
 // 循环遍历随机数数组
 for(var i = 0 ; i < ok.length; i++){ 
      console.log(ok[i]); 
 } 
 var wordarr=[];
 for(var i=0;i<this.state.wordss.length;i++){
    wordarr[i]=this.state.wordss[i];
 }
 console.log(wordarr);
 for(var j=0;j<wordarr.length;j++){
   console.log(wordarr[j],words[array[a]][0]);
    if(words[array[a]][0]==wordarr[j]){
       isadd=true
       break;   
    }else{
        isadd=false
    }
}
console.log(isadd)
    // var splitArray
 // 生成随机数的方法
 function generateRandom1(count){ 
      var rand1 = parseInt(Math.random()*count); 
     for(var i = 0 ; i < ok.length; i++){ 
          if(ok[i] == rand1){ 
               return false; 
           }            } 
     ok.push(rand1); 
} 
        if(splitArray.length<=3){
            k='150'
        }
        else if(splitArray.length<=4){
            k='130'
        }
        else if(splitArray.length<=5){
            k='120'
        }
        else if(splitArray.length<=6){
            k='110'
        }
        else if(splitArray.length<=7){
            k='90'
        }
        else{
            k='30'
        }
        if(arr.toString().length == splitArray.toString().length){
            if(arr.toString()== splitArray.toString()){
                setTimeout(()=>{
                    if(a==9){
                        this.setState({
                            a:9,
                            correct:'block',
                        err:'none',
                        arr:[]
                        })
                    }else{
                    this.setState({
                        correct:'block',
                        err:'none',
                        a:a+1,
                        arr:[]
                    })
                }
                },0)
                setTimeout(()=>{
                    this.setState({
                        correct:'none',
                        err:'none',
                        arr:[],
                    })
                },1000);
                
            }else{
                setTimeout(()=>{
                    this.setState({
                        arr:[],
                        err:'block',
                        correct:'none'
                      })
                },0)
                setTimeout(()=>{
                    this.setState({
                        arr:[],
                        err:'none',
                        correct:'none'
                      })
                },1000)
            }
        }

        // console.log(splitArray.length,splitArray)
        // console.log(arr.toString())

    //     arr1 = words[array[a]][b].split('')
    // arr2 = arr1.concat(letter);

    //arr3 = arr2.sort(() => Math.random() - 0.5);
    arr3 = this.outputArr(allarr,splitArray);
     console.log(arr3);
    // console.log(splitArray.length,splitArray)
    return (
     <div className='testbox'>
      <NavBar style={{background:'#66cccc',color:'#fff',position:'fixed',width:'100%',top:'0'}} 
                leftContent={<Link to={`/words?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                rightContent={<div><img src={jinbi} style={{width:'25px',height:"25px",borderRadius:"50%"}}/><span style={{fontSize:'13px'}}>&nbsp;{this.state.money}</span></div>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>拼写测试</span></NavBar>
                        <div style={{position:'relative',height:'70px',width:'70%',left:k+'px',marginTop:'10px'}}>{
                        arr.map(
                            (item)=>
                            <Flex.Item style={{height:'20px',width:'20px',
                    marginLeft:'10px',float:'left'}} >
                        <Flex.Item style={{position:'relative',top:'60px',textAlign:'center',fontSize:'25px'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

                        <div style={{position:'relative',height:'30px',width:'250px',left:k+'px',marginTop:'10px'}}>{
                l.map(
                    ()=>        
                <Flex.Item style={{position:'relative',height:'20px',width:'20px',borderBottom:'2px solid black',
                    fontSize:'20px',marginLeft:'10px',float:'left'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        ></Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

                        <Flex.Item style={{position:'relative',height:'30px',width:'100px',border:'1px solid black',marginLeft:'100px',marginTop:'50px',
                    fontSize:'20px',background:'#cfcfcf',color:'white'}} >
                        <Flex.Item style={{position:'relative',textAlign:'center',top:'2px'}} onClick={this.right}
                        >查看答案</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'relative',height:'30px',width:'30px',border:'1px solid black',marginLeft:'250px',marginTop:'-30px',
                    fontSize:'20px',background:'#cfcfcf',borderRadius:'50%',color:'white'}} >
                        <Flex.Item style={{position:'relative',textAlign:'center',top:'2px'}} onClick={this.delete}
                        >X</Flex.Item>
                        </Flex.Item>
                
                <Flex.Item style={{position:'relative',height:'60px',width:'50%',left:'100px',marginTop:'30px',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center',fontSize:'25px'}}
                        >{words[array[a]][c]}</Flex.Item>
                        {console.log(words[array[a]][c],words[array[a]][1])}
                        </Flex.Item>
                    
                        <div style={{position:'relative',height:'30px',width:'95%',left:'2.5%',top:'50px'}}>{
                arr3.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'50px',width:'50px',border:'1px solid black',
                    fontSize:'20px',background:'#66cccc',marginLeft:'15px',marginTop:'20px',float:'left',color:'white',borderRadius:'15%'}} >
                        <Flex.Item style={{position:'relative',textAlign:'center',top:'10px',fontSize:'25px'}} onClick={()=>this.chose(item)} class='b'
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

<Flex.Item style={{position:'absolute',height:'60px',width:'50%',bottom:'155px',left:'25%',marginTop:'15px',
                    fontSize:'20px',background:'#cfcfcf',borderRadius:'15%',display:err}} >
                        <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'25px'}}
                        >错误！请重新输入</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'absolute',height:'60px',width:'50%',bottom:'155px',left:'25%',marginTop:'15px',
                    fontSize:'20px',background:'#cfcfcf',borderRadius:'15%',display:correct}} >
                        <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'25px'}}
                        >正确!</Flex.Item>
                        </Flex.Item>

                        <Flex.Item 
                        style={{position:'absolute',bottom:'100px',width:'100%'}}>
                                 <Flex.Item style={{position:'relative',height:'50px',width:'43%',marginLeft:'15px',
                             fontSize:'20px',background:'#66cccc',float:'left'}} >
                                 {isadd
                                 ?
                                 <Flex.Item
                                 onClick={()=>{
                                     this.setState({
                                         pick:false
                                     })
                                    var str = window.location.hash;
                                    var uid = str.split('&')[0].split('=')[1].split('#')[0];
                                    var word = words[array[a]][c-1];
                                    var wordc = words[array[a]][c];
                                    var wordf =uid+'&'+word;
                                    console.log(str.split('&')[0].split('=')[1].split('#')[0],words[array[a]][0],words[array[a]][1]);
                                    const post ={
                                      uid:uid,
                                      word:word,
                                      wordc:wordc,
                                      wordf:wordf
                                     };
                                     fetch(`http://wqh.xpmwqhzygy.top/wordcancel/${wordf}`,{
                                        method:"DELETE",
                                        headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                                    })
                                    .then(res =>res.json())
                                    .then(data =>{
                                        console.log(data);
                                    });
                              
                                 }
                                 }
                                  style={{position:'relative',top:'15px',textAlign:'center',fontSize:'18px',color:'white'}}
                                >已添加</Flex.Item>
                                 :
                                 <Flex.Item
                                 onClick={()=>{
                                    this.setState({
                                        pick:true
                                    })
                                    var str = window.location.hash;
                                    var uid = str.split('&')[0].split('=')[1].split('#')[0];
                                    var word = words[array[a]][c-1];
                                    var wordc = words[array[a]][c];
                                    var wordf =uid+'&'+word;
                                    console.log(str.split('&')[0].split('=')[1].split('#')[0],words[array[a]][0],words[array[a]][1]);
                                    const post ={
                                      uid:uid,
                                      word:word,
                                      wordc:wordc,
                                      wordf:wordf
                                     };
                                      fetch(`http://wqh.xpmwqhzygy.top/wordin`,{
                                      // post提交
                                      method:"POST",
                                      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                                      body:JSON.stringify(post)//把提交的内容转字符串
                                      })
                                      .then(res =>res.json())
                                      .then(data =>{
                                          console.log(data);
                                      });
                              
                                 }
                                 }
                                  style={{position:'relative',top:'15px',textAlign:'center',fontSize:'18px',color:'white'}}
                                 >{this.state.pick?'已添加':'添加生词'}</Flex.Item>
                                }
                                 </Flex.Item>
                                
         
                                
                                 <video width='100%' controls='controls' style={{position:'relative',height:'50px',width:'43%',marginLeft:'15px',
                             fontSize:'20px',float:'left'}}
                                >
                                    <source src={words[array[a]][2]} type='video/mp4' />
                                </video>
                                
                                 
                                 </Flex.Item>

                                 <Flex.Item style={{position:'absolute',bottom:'30px',width:'100%'}}>
                                 <Flex.Item style={{position:'relative',height:'50px',width:'43%',marginLeft:'15px',
                             fontSize:'20px',background:'#66cccc',float:'left'}} onClick={this.last}>
                                 <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'18px',color:'white'}}
                                 >上一题</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'50px',width:'43%',marginLeft:'15px',
                             fontSize:'20px',background:'#66cccc',float:'left'}} onClick={this.next}>
                                 <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'18px',color:'white'}}
                                 >下一题</Flex.Item>
                                 </Flex.Item>
                                 </Flex.Item>
                 <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}></div>
                 <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                 <p>签到领金币哦~~</p>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                        <div onClick={this.setoutLogin}><Link to={`/searchInfo?uid=${uid}`} style={{color:'gray'}}>去签到</Link></div>
                    </div>
                </div>

     </div> 
    );
  }
  right=()=>{
    var arr=this.state.arr
    var words=this.state.words;
    var a=this.state.a;
    var b=this.state.b;
    var array=this.state.array;

    this.setState({
      arr:words[array[a]][b].split('').concat(['!'])
    })
  }
  chose=(item)=>{

    console.log(item)

      var arr=this.state.arr
      if(arr.slice(-1) =='!'){
        this.setState({
            arr:[].concat(item)
          })
      }else{
        this.setState({
            arr:arr.concat(item),
          })
      }
  }

  /** 封装随机字母键盘 */
  //移除特定元素
  arrayRemove = (arr, value)=> {
    return arr.filter(function(ele){
        return ele != value;
    });
  }
  //打乱排序
  shuffle = (arr)=> {
    var length = arr.length,
      randomIndex,
      temp;
    while (length) {
      randomIndex = Math.floor(Math.random() * (length--));
      temp = arr[randomIndex];
      arr[randomIndex] = arr[length];
      arr[length] = temp
    }
    return arr;
  }
  //输出最终混合数组（单词字母+其他5个随机字母）
  
  outputArr = (arr1,arr2)=> {  
    var arr = arr1;
    var keyarr = arr2;
    var storage = this.state.storage;
    var words=this.state.words
    var b=this.state.b;
    var a=this.state.a;
    var array=this.state.array;
    var d=words[array[a]][b].length;
    storage.setItem('dancixpm',JSON.stringify(arr2));
    if(wordarr2==JSON.stringify(arr2)&&wordarr2.length!=0){
        return storagearr;   
    }else{
        wordarr2=storage.getItem('dancixpm');
        for(var i = 0; i<arr2.length; i++){
            arr = this.arrayRemove(arr,arr2[i]);
        }
        arr=arr.sort(()=>0.5-Math.random()).slice(0,15-d);
        for(var j=0;j<arr.length;j++){
            keyarr.push(arr[j]);
        }
        keyarr = this.shuffle(keyarr);
        storagearr = keyarr;
        return keyarr;
        }
    }
  /**end */

  delete=()=>{
    var arr=this.state.arr
    if(arr.slice(-1) =='!'){
        this.setState({
            arr:[]
          })
    }else{
        this.setState({
            arr:arr.slice(0,-1),
          })
    }
  }
  quxiao = () => {
    this.setState({
        flag:0
    });
}
  next=()=>{ 
      var money=this.state.money;
    if(money<20){
        this.setState({
            flag:1
        })
    }else{
    this.setState({
      arr:[],
    })
    var a = this.state.a;
    var d=this.state.d;
    var e=this.state.e;
    var f=this.state.f;
    this.setState({
        a:a+1,
        d:Math.floor(Math.random()*51),
        e:Math.floor(Math.random()*51),
        f:Math.floor(Math.random()*51)
    })
    console.log(d,e,f)
    if(a==9){
        this.setState({
            a:9
        })
    }
}
}
  last=()=>{
    this.setState({
        arr:[]
      })
      var a = this.state.a;
      this.setState({
        a:a-1,
        d:Math.floor(Math.random()*51),
        e:Math.floor(Math.random()*51),
        f:Math.floor(Math.random()*51)
    })
    if(a==0){
        this.setState({
            a:0
        })
    }
} 
 
  
}