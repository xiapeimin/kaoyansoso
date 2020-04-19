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
            d:Math.floor(Math.random()*51),
            e:Math.floor(Math.random()*51),
            f:Math.floor(Math.random()*51),
            array:[],
            words:[
                ['about','关于'],['apple','苹果'],
                ['ball','球'],['back','返回'],
                ['control','控制'],['call','打电话'],
                ['display','样式'],['dog','狗'],
                ['egg','鸡蛋'],['easy','简单'],
                ['flag','旗帜'],['floor','地板'],
                ['green','绿色'],['google','谷歌'],
                ['hello','你好'],['help','帮助'],
                ['ipad','平板'],['item','项目'],
                ['java','java语言'],['javascript','javascript语言'],
                ['key','钥匙'],['king','国王'],
                ['listen','听'],['love','爱'],
                ['monkey','猴子'],['member','成员'],
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
                ['zoo','动物园']['zero','零']
            ],
            
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
    
  render() {
    var ok=[]
    
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
console.log(ok)
    var array=this.state.array;
    var words=this.state.words;
    var a=this.state.a;
    var b=this.state.b;
    var c=this.state.c;
    var d=this.state.d;
    var e=this.state.e;
    var f=this.state.f;
    var nb=this.state.nb;
    var nb=[words[array[a]][c],words[d][c],words[e][c],words[f][c]]
    var str = this.props.location.search;
    var uid = str.split('=')[1];

    
    return (
     <div className='testbox'>
       <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/words`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>背单词</span></NavBar>

                <Flex.Item style={{position:'relative',height:'20vw',lineHeight:'20vw',width:'100%',
                    }}>
                        <Flex.Item style={{position:'absolute',width:'100%',fontSize:'5vw',
                        textAlign:'center',color:'black'
                    }}>
                       单词测试    
                    </Flex.Item>
                    </Flex.Item>
                
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{words[array[a]][b]}</Flex.Item>
                        </Flex.Item>
                    
                        <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} id='a1'>
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}} onClick={this.judge1} id='a'
                        >{nb[ok[0]]}</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} id='b1'>
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}} onClick={this.judge2} id='b'
                        >{nb[ok[1]]}</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} id='c1'>
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}} onClick={this.judge3} id='c'
                        >{nb[ok[2]]}</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} id='d1'>
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}} onClick={this.judge4} id='d'
                        >{nb[ok[3]]}</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'relative',height:'80px',width:'50%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}} onClick={this.last}
                        >上一个</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'relative',height:'80px',width:'50%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff',top:'-81px',left:'50%',borderLeft:'1px solid black'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}} onClick={this.next}
                        >下一个</Flex.Item>
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
  last=()=>{
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

        setTimeout(function(){
            document.getElementById("a1").style.background='white'
        },500);
    }else{
        document.getElementById("a1").style.background='green'

        setTimeout(function(){
            document.getElementById("a1").style.background='white'
        },500);

        setTimeout(()=>{
            this.setState({
                a:a+1,
                d:Math.floor(Math.random()*51),
                e:Math.floor(Math.random()*51),
                f:Math.floor(Math.random()*51)
            })
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

        setTimeout(function(){
            document.getElementById("b1").style.background='white'
        },500);
    }else{
        document.getElementById("b1").style.background='green'
        
        setTimeout(function(){
            document.getElementById("b1").style.background='white'
        },500);

        setTimeout(()=>{
            this.setState({
                a:a+1,
                d:Math.floor(Math.random()*51),
                e:Math.floor(Math.random()*51),
                f:Math.floor(Math.random()*51)
            })
        },500);
    }
  }

  judge3=()=>{
    var array=this.state.array;
    var words=this.state.words;
    var a=this.state.a;
    var c=this.state.c;
    console.log(words[array[a]][c])
    var z=document.getElementById("c").innerHTML
    console.log(z)
    if(words[array[a]][c]!=z){
        document.getElementById("c1").style.background='red'

        setTimeout(function(){
            document.getElementById("c1").style.background='white'
        },500);
    }else{
        document.getElementById("c1").style.background='green'
        
        setTimeout(function(){
            document.getElementById("c1").style.background='white'
        },500);

        setTimeout(()=>{
            this.setState({
                a:a+1,
                d:Math.floor(Math.random()*51),
                e:Math.floor(Math.random()*51),
                f:Math.floor(Math.random()*51)
            })
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

        setTimeout(function(){
            document.getElementById("d1").style.background='white'
        },500);
    }else{
        document.getElementById("d1").style.background='green'
        
        setTimeout(function(){
            document.getElementById("d1").style.background='white'
        },500);

        setTimeout(()=>{
            this.setState({
                a:a+1,
                d:Math.floor(Math.random()*51),
                e:Math.floor(Math.random()*51),
                f:Math.floor(Math.random()*51)
            })
        },500);
    }
  }
  
}