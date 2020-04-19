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
            k:'110',
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
            arr1:[]
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
function a(){
    arr1 = words[array[a]][b].split('')
    arr2 = arr1.concat(letter);

    arr3 = arr2.sort(() => Math.random() - 0.5);
}
       

        // var arr3=this.state.arr3
        // arr3=arr3.push(1)

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
        
        // var splitArray = this.state.splitArray;
        if(arr.toString().length == splitArray.toString().length){
            if(arr.toString()== splitArray.toString()){
                setTimeout(()=>{
                    this.setState({
                        correct:'block',
                        err:'none'
                    })
                },0)
                setTimeout(()=>{
                    this.setState({
                        correct:'none',
                        err:'none',
                        a:a+1,
                        arr:[],
                    })
                },1500);
                
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
                },1500)
            }
        }

        console.log(splitArray.toString())
        console.log(arr.toString())

        arr1 = words[array[a]][b].split('')
    arr2 = arr1.concat(letter);

    arr3 = arr2.sort(() => Math.random() - 0.5);

        

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

                    {/* <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}} id='a'
                        >{this.state.arr}</Flex.Item>
                        </Flex.Item> */}
                        
                        <div style={{position:'relative',height:'30px',width:'250px',left:k+'px',top:'20px'}}>{
                splitArray.map(
                    ()=>        
                <Flex.Item style={{position:'relative',height:'20px',width:'20px',borderBottom:'2px solid black',
                    fontSize:'20px',marginLeft:'10px',float:'left'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        ></Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

                        
                        <div style={{position:'relative',height:'30px',width:'250px',left:k+'px',top:'-45px'}}>{
                        arr.map(
                            (item)=>
                            <Flex.Item style={{position:'relative',height:'20px',width:'20px',
                    fontSize:'20px',marginLeft:'10px',float:'left'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

                        <Flex.Item style={{position:'relative',height:'30px',width:'30px',border:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',textAlign:'center'}} onClick={this.delete}
                        >X</Flex.Item>
                        </Flex.Item>
                
                <Flex.Item style={{position:'relative',height:'60px',width:'50%',border:'1px solid black',left:'100px',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{words[array[a]][c]}</Flex.Item>
                        </Flex.Item>
                    
                        <div style={{position:'relative',height:'30px',width:'340px',left:'20px',top:'1s0px'}}>{
                arr3.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'40px',width:'40px',border:'1px solid black',
                    fontSize:'20px',background:'#fff',marginLeft:'20px',marginTop:'20px',float:'left',}} >
                        <Flex.Item style={{position:'relative',textAlign:'center',top:'5px'}} onClick={()=>this.chose(item)} class='b'
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

                        <Flex.Item style={{position:'absolute',height:'50px',width:'30%',border:'1px solid black',bottom:'150px',
                    fontSize:'20px',background:'#fff',left:'140px',display:correct}} >
                        <Flex.Item style={{position:'relative',top:'12px',textAlign:'center'}}
                        >正确</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'absolute',height:'70px',width:'30%',border:'1px solid black',bottom:'150px',
                    fontSize:'20px',background:'#fff',left:'140px',display:err}} >
                        <Flex.Item style={{position:'relative',top:'12px',textAlign:'center'}}
                        >错误，请重新输入</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'absolute',height:'80px',width:'50%',borderBottom:'1px solid black',bottom:'50px',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}} onClick={this.last} 
                        >上一个</Flex.Item>
                        </Flex.Item>

                        <Flex.Item style={{position:'absolute',height:'80px',width:'50%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff',bottom:'50px',left:'50%',borderLeft:'1px solid black'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}} onClick={this.next}
                        >下一个</Flex.Item>
                        </Flex.Item>

     </div> 
    );
  }

  chose=(item)=>{

    console.log(item)

      var arr=this.state.arr

      this.setState({
        arr:arr.concat(item),
      })

      var array=this.state.array;
      var words=this.state.words;
      var a=this.state.a;
      var b=this.state.b;

    //   var splitArray = words[array[a]][b].split('');
    //   if(arr.toString()== splitArray.toString()){
    //     console.log('正确')
    // }
      

  }

  delete=()=>{
    var arr=this.state.arr
    this.setState({
        arr:arr.slice(0,-1),
      })
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