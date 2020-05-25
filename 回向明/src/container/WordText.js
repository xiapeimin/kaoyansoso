import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Flex,NavBar, Icon } from 'antd-mobile';
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
export default class Words extends Component {
    constructor(){
        
        super();
        this.state = {
            a:0,
            b:0,
            c:1,
            z:'a',
            array:[],
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
                ['java','java语言',audio27],['javascript','javascript语言',audio28],['just','仅仅',audio29],
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
            nb:[],
            updata:0
        }

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
        if(window.location.href.indexOf("#reloaded")==-1){
            window.location.href=window.location.href+"#reloaded";
            window.location.reload();
            this.setState({
                updata:1
            })
        }    
    }

    
  render() {
    var array=this.state.array;
    var words=this.state.words;
    var a=this.state.a;
    var d=this.state.d;
    var e=this.state.e;
    var f=this.state.f;
    var nb=this.state.nb;
    var d=Math.floor(Math.random()*51);
    var e=Math.floor(Math.random()*51);
    var f=Math.floor(Math.random()*51);
    nb = [words[array[a]][1],words[d][1],words[e][1],words[f][1]];
    var str = this.props.location.search;
    var uid = str.split('=')[1];
    var ok=[];

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
 // 生成随机数的方法
 function generateRandom1(count){ 
      var rand1 = parseInt(Math.random()*count); 
     for(var i = 0 ; i < ok.length; i++){ 
          if(ok[i] == rand1){ 
               return false; 
           }            } 
     ok.push(rand1); 
} 

    

    
    return (
        <div className='testbox' key={Math.random()}>
    
                <NavBar
                         style={{background:'#66cccc',color:'#fff'}} 
                         leftContent={<Link to={`/words?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                         mode="light"
                         ><span style={{color:'#fff',fontSize:'22px'}}>单词测试</span></NavBar>
                
                         <Flex.Item style={{position:'relative',height:'150px',width:'100%',
                             fontSize:'20px',background:'#fff'}} >
                                 
                                 <Flex.Item style={{position:'relative',top:'50px',textAlign:'center',fontSize:'30px'}}
                                 >{words[array[a]][0]}</Flex.Item>
                                 </Flex.Item>
                             
                                 <Flex.Item style={{position:'relative',height:'60px',width:'90%',left:'5%',marginTop:'15px',
                             fontSize:'20px',background:'#cfcfcf'}} id='a1' onClick={this.judge1}>
                                 <Flex.Item style={{position:'relative',top:'20px',fontSize:'25px',textAlign:'center'}}  id='a'
                                 >{nb[ok[0]]}</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'60px',width:'90%',left:'5%',marginTop:'15px',
                             fontSize:'20px',background:'#cfcfcf'}} id='b1' onClick={this.judge2}>
                                 <Flex.Item style={{position:'relative',top:'20px',fontSize:'25px',textAlign:'center'}}  id='b'
                                 >{nb[ok[1]]}</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'60px',width:'90%',left:'5%',marginTop:'15px',
                             fontSize:'20px',background:'#cfcfcf'}} id='c1' onClick={this.judge3}>
                                 <Flex.Item style={{position:'relative',top:'20px',fontSize:'25px',textAlign:'center'}}  id='c'
                                 >{nb[ok[2]]}</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'60px',width:'90%',left:'5%',marginTop:'15px',
                             fontSize:'20px',background:'#cfcfcf'}} id='d1' onClick={this.judge4}>
                                 <Flex.Item style={{position:'relative',top:'20px',fontSize:'25px',textAlign:'center'}}  id='d'
                                 >{nb[ok[3]]}</Flex.Item>
                                 </Flex.Item>

                       
         
                                 <Flex.Item style={{position:'absolute',height:'60px',width:'30%',top:'550px',left:'35%',marginTop:'15px',
                             fontSize:'20px',background:'#cfcfcf',borderRadius:'15%',display:'none'}} id='no'>
                                 <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'25px'}} 
                                 >错误</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'absolute',height:'60px',width:'30%',top:'550px',left:'35%',marginTop:'15px',
                             fontSize:'20px',background:'#cfcfcf',borderRadius:'15%',display:'none'}} id='yes'>
                                 <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'25px'}}
                                 >正确</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'absolute',bottom:'100px',width:'100%'}}>
                                 <Flex.Item style={{position:'relative',height:'50px',width:'43%',marginLeft:'15px',
                             fontSize:'20px',background:'#66cccc',float:'left'}} >
                                 <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'18px',color:'white'}}
                                 >添加生词</Flex.Item>
                                 </Flex.Item>
         
                                
                                 <video width='100%' controls='controls' style={{position:'relative',height:'50px',width:'43%',marginLeft:'15px',
                             fontSize:'20px',float:'left'}}>
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
                                 
              </div> 
    );
  }



  next=()=>{
    var a = this.state.a;
    var d=this.state.d;
    var e=this.state.e;
    var f=this.state.f;
    this.setState({
        a:a+1,
        // d:Math.floor(Math.random()*51),
        // e:Math.floor(Math.random()*51),
        // f:Math.floor(Math.random()*51)
    })
    console.log(d,e,f)
    if(a==9){
        this.setState({
            a:9
        })
    }
}
  last=()=>{
      var a = this.state.a;
      this.setState({
        a:a-1,
        // d:Math.floor(Math.random()*51),
        // e:Math.floor(Math.random()*51),
        // f:Math.floor(Math.random()*51)
    })
    if(a==0){
        this.setState({
            a:0
        })
    }
} 
  judge1=()=>{
    var array=this.state.array;
    var words=this.state.words;
    var a=this.state.a;
    var c=this.state.c;
    console.log(words[array[a]][c])
    var z=document.getElementById("a").innerHTML
    console.log(z)
    if(words[array[a]][c]!=z){
        document.getElementById("a1").style.background='red'
        document.getElementById("no").style.display='block'
        setTimeout(function(){
            document.getElementById("a1").style.background='#cfcfcf'
            document.getElementById("no").style.display='none'
        },500);
    }else{
        document.getElementById("a1").style.background='green'
        document.getElementById("yes").style.display='block'
        setTimeout(function(){
            document.getElementById("a1").style.background='#cfcfcf'
            document.getElementById("yes").style.display='none'
        },500);

        setTimeout(()=>{
            if(a==9){
                this.setState({
                    a:9
                })
            }else{
            this.setState({
                a:a+1,
                // d:Math.floor(Math.random()*51),
                // e:Math.floor(Math.random()*51),
                // f:Math.floor(Math.random()*51)
            })
        }
        },500);
    }
  }

  judge2=()=>{
    var array=this.state.array;
    var words=this.state.words;
    var a=this.state.a;
    var c=this.state.c;
    console.log(words[array[a]][c])
    var z=document.getElementById("b").innerHTML
    console.log(z)
    if(words[array[a]][c]!=z){
        document.getElementById("b1").style.background='red'
        document.getElementById("no").style.display='block'
        setTimeout(function(){
            document.getElementById("b1").style.background='#cfcfcf'
            document.getElementById("no").style.display='none'
        },500);
    }else{
        document.getElementById("b1").style.background='green'
        document.getElementById("yes").style.display='block'
        setTimeout(function(){
            document.getElementById("b1").style.background='#cfcfcf'
            document.getElementById("yes").style.display='none'
        },500);

        setTimeout(()=>{
            if(a==9){
                this.setState({
                    a:9
                })
            }else{
            this.setState({
                a:a+1,
                // d:Math.floor(Math.random()*51),
                // e:Math.floor(Math.random()*51),
                // f:Math.floor(Math.random()*51)
            })
        }
        },500);
    }
  }

  judge3=()=>{
    var array=this.state.array;
    var words=this.state.words;
    var a=this.state.a;
    var c=this.state.c;
    console.log(words[array[a]][c])
    var z=document.getElementById("c").innerHTML;
    //console.log(document.getElementById("c"));
    console.log(z)
    if(words[array[a]][c]!=z){
        document.getElementById("c1").style.background='red'
        document.getElementById("no").style.display='block'
        setTimeout(function(){
            document.getElementById("c1").style.background='#cfcfcf'
            document.getElementById("no").style.display='none'
        },500);
    }else{
        document.getElementById("c1").style.background='green'
        document.getElementById("yes").style.display='block'
        setTimeout(function(){
            document.getElementById("c1").style.background='#cfcfcf'
            document.getElementById("yes").style.display='none'
        },500);

        setTimeout(()=>{
            if(a==9){
                this.setState({
                    a:9
                })
            }else{
            this.setState({
                a:a+1,
                // d:Math.floor(Math.random()*51),
                // e:Math.floor(Math.random()*51),
                // f:Math.floor(Math.random()*51)
            })
        }
        },500);
    }
  }

  judge4=()=>{
    var array=this.state.array;
    var words=this.state.words;
    var a=this.state.a;
    var c=this.state.c;
    console.log(words[array[a]][c])
    var z=document.getElementById("d").innerHTML
    console.log(z)
    if(words[array[a]][c]!=z){
        document.getElementById("d1").style.background='red'
        document.getElementById("no").style.display='block'
        setTimeout(function(){
            document.getElementById("d1").style.background='#cfcfcf'
            document.getElementById("no").style.display='none'
        },500);
    }else{
        document.getElementById("d1").style.background='green'
        document.getElementById("yes").style.display='block'
        setTimeout(function(){
            document.getElementById("d1").style.background='#cfcfcf'
            document.getElementById("yes").style.display='none'
        },500);

        setTimeout(()=>{
            if(a==9){
                this.setState({
                    a:9
                })
            }else{
            this.setState({
                a:a+1,
                // d:Math.floor(Math.random()*51),
                // e:Math.floor(Math.random()*51),
                // f:Math.floor(Math.random()*51)
            })
        }
        },500);
    }
  }
  
}