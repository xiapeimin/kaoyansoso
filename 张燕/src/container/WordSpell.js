import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Flex,NavBar, Icon } from 'antd-mobile';


var allarr=[];
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
            arr:[],//字母
            correct:'none',
            err:'none',
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
            letter:[
                'a','b','c','d','e','f','g','h','i','j',
                'k','l','m','n','o','p','q','r','s','t'
            ],
            arr3:[],
            arr2:[],
            arr1:[],
            storage:window.localStorage
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

        var words=this.state.words;
        var a=this.state.a;
        var b=this.state.b;
        var arr3=this.state.arr3;
        var arr2=this.state.arr2;
        var arr1=this.state.arr1;
        var letter=this.state.letter
       

        // var arr3=this.state.arr3
        // arr3=arr3.push(1)
}


  render() {
    var url=this.props.location.search;
    var uid=url.split('=')[1];
      
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
    var arr=this.state.arr;
    var arr1=this.state.arr1;
    var arr2=this.state.arr2;
    console.log(arr1)
    var a=this.state.a;
    var b=this.state.b;
    var c=this.state.c;
    var d=this.state.d;
    var e=this.state.e;
    var f=this.state.f;
    var k=this.state.k;
    var letter=this.state.letter;
    var correct=this.state.correct;
    var err=this.state.err;
    var arr3=this.state.arr3;
    // var nb=this.state.nb;
    // var nb=[words[array[a]][c],words[d][c],words[e][c],words[f][c]]
    var str = this.props.location.search;
    var uid = str.split('=')[1];

    var words=this.state.words;
        var a=this.state.a;
        var b=this.state.b;
        var splitArray = words[array[a]][b].split('');
        var l=words[array[a]][b].split('');
        // var splitArray = this.state.splitArray;
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

        console.log(splitArray.length,splitArray)
        console.log(arr.toString())

    //     arr1 = words[array[a]][b].split('')
    // arr2 = arr1.concat(letter);

    //arr3 = arr2.sort(() => Math.random() - 0.5);
    arr3 = this.outputArr(allarr,splitArray);
    console.log(arr3);
    console.log(splitArray.length,splitArray)

        

    return (
     <div className='testbox'>
       <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/words?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>拼写测试</span></NavBar>

                        <div style={{position:'relative',height:'30px',width:'70%',left:k+'px',marginTop:'10px'}}>{
                        arr.map(
                            (item)=>
                            <Flex.Item style={{position:'relative',height:'20px',width:'20px',
                    marginLeft:'10px',float:'left'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center',fontSize:'25px'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

                        <div style={{position:'relative',height:'30px',width:'250px',left:k+'px',marginTop:'5px'}}>{
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

<Flex.Item style={{position:'absolute',height:'50px',width:'50%',bottom:'100px',left:'25%',marginTop:'5px',
                    fontSize:'20px',background:'#cfcfcf',display:err}} >
                        <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'25px',top:'5px'}} 
                        >错误！重新输入</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'absolute',height:'60px',width:'50%',bottom:'150px',left:'25%',marginTop:'15px',
                    fontSize:'20px',background:'#cfcfcf',borderRadius:'15%',display:correct}} >
                        <Flex.Item style={{position:'relative',top:'15px',textAlign:'center',fontSize:'25px'}}
                        >正确!</Flex.Item>
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
    storage.setItem('dancixpm',JSON.stringify(arr2));
    if(wordarr2==JSON.stringify(arr2)&&wordarr2.length!=0){
        return storagearr;   
    }else{
        wordarr2=storage.getItem('dancixpm');
        for(var i = 0; i<arr2.length; i++){
            arr = this.arrayRemove(arr,arr2[i]);
        }
        arr=arr.sort(()=>0.5-Math.random()).slice(0,5);
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
  next=()=>{
    this.setState({
      arr:[]
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