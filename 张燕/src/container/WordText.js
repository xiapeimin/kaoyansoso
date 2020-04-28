import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Flex,NavBar, Icon } from 'antd-mobile';

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
                ['about','关于'],['apple','苹果'],['alone','孤独'],
                ['ball','球'],['back','返回'],['behind','后面'],
                ['control','控制'],['call','打电话'],['contain','包含'],
                ['display','样式'],['dog','狗'],['declare','宣告'],
                ['egg','鸡蛋'],['easy','简单'],['eye','眼睛'],
                ['flag','旗帜'],['floor','地板'],['forget','忘记'],
                ['green','绿色'],['google','谷歌'],['girl','女孩'],
                ['hello','你好'],['help','帮助'],['hard','硬'],
                ['ipad','平板'],['item','项目'],['iron','铁'],
                ['java','java语言'],['javascript','javascript语言'],['just','仅仅'],
                ['key','钥匙'],['king','国王'],['key','钥匙'],
                ['listen','听'],['love','爱'],['learn','学习'],
                ['monkey','猴子'],['member','成员'],['mark','标记'],
                ['need','需要'],['number','数字'],
                ['out','出去'],['over','上面'],
                ['person','人'],['present','目前'],
                ['queen','女王'],['quiet','安静'],
                ['reason','原因'],['radio','录音机'],
                ['start','开始'],['say','说'],
                ['toy','玩具'],['title','标题'],
                ['ufo','不明飞行物'],['under','下面'],
                ['version','版本'],['view','视野'],
                ['word','单词'],['where','哪里'],
                ['xshell','终端模拟软件'],['x','x字母'],
                ['yellow','黄色'],['yes','好的'],
                ['zoo','动物园'],['zero','零']
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
                                 <Flex.Item style={{position:'relative',top:'20px',left:'10px',fontSize:'25px'}}  id='a'
                                 >{nb[ok[0]]}</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'60px',width:'90%',left:'5%',marginTop:'15px',
                             fontSize:'20px',background:'#cfcfcf'}} id='b1' onClick={this.judge2}>
                                 <Flex.Item style={{position:'relative',top:'20px',left:'10px',fontSize:'25px'}}  id='b'
                                 >{nb[ok[1]]}</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'60px',width:'90%',left:'5%',marginTop:'15px',
                             fontSize:'20px',background:'#cfcfcf'}} id='c1' onClick={this.judge3}>
                                 <Flex.Item style={{position:'relative',top:'20px',left:'10px',fontSize:'25px'}}  id='c'
                                 >{nb[ok[2]]}</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'60px',width:'90%',left:'5%',marginTop:'15px',
                             fontSize:'20px',background:'#cfcfcf'}} id='d1' onClick={this.judge4}>
                                 <Flex.Item style={{position:'relative',top:'20px',left:'10px',fontSize:'25px'}}  id='d'
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
         
                                 <Flex.Item style={{position:'absolute',bottom:'30px',width:'100%'}}>
                                 <Flex.Item style={{position:'relative',height:'50px',width:'20%',marginLeft:'15px',
                             fontSize:'20px',background:'#66cccc',float:'left',borderRadius:'15%'}} >
                                 <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'18px',color:'white'}}
                                 >添加生词</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'50px',width:'20%',marginLeft:'15px',
                             fontSize:'20px',background:'#66cccc',float:'left',borderRadius:'15%'}} >
                                 <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'18px',color:'white'}}
                                 >朗读</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'50px',width:'20%',marginLeft:'15px',
                             fontSize:'20px',background:'#66cccc',float:'left',borderRadius:'15%'}} onClick={this.last}>
                                 <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'18px',color:'white'}}
                                 >上一题</Flex.Item>
                                 </Flex.Item>
         
                                 <Flex.Item style={{position:'relative',height:'50px',width:'20%',marginLeft:'15px',
                             fontSize:'20px',background:'#66cccc',float:'left',borderRadius:'15%'}} onClick={this.next}>
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