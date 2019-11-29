import React, { Component } from 'react';
import { NavBar, Tabs, Badge,NoticeBar,Icon,WhiteSpace } from 'antd-mobile';
import tou1 from './images/tou1.jpg';
import tou2 from './images/tou2.jpg';
import tou3 from './images/tou3.jpg';
import good from './images/zan2.jpg';
import talk from './images/talk.jpg';
import zan1 from './images/zan1.jpg';
import back from './images/back.jpg';
import delete1 from './images/delete.jpg'

const tabs = [
    { title: <Badge>热门动态</Badge> },
    { title: <Badge>我的动态</Badge> },
  ];
export default class HostTopic extends Component {
    write1(){
        var pl=prompt('评论：');
        var p=document.getElementById('ping');
        if(pl!==null){
            p.innerHTML+='<br/>'+pl;
        }
       p.innerHTML=p.innerHTML;
    }
    write3(){
        var pl1=prompt('评论：');
        var pp=document.getElementById('ping3');
        if(pl1!==null){
            pp.innerHTML+='<br/>'+pl1;
        }
       pp.innerHTML=pp.innerHTML;
    }
    write2(){
        var pl1=prompt('评论：');
        var pp=document.getElementById('ping2');
        if(pl1!==null){
            pp.innerHTML+='<br/>'+pl1;
        }
       pp.innerHTML=pp.innerHTML;
    }
    write4(){
        var pl1=prompt('评论：');
        var pp=document.getElementById('ping4');
        if(pl1!==null){
            pp.innerHTML+='<br/>'+pl1;
        }
       pp.innerHTML=pp.innerHTML;
    }
    write5(){
        var pl1=prompt('评论：');
        var pp=document.getElementById('ping5');
        if(pl1!==null){
            pp.innerHTML+='<br/>'+pl1;
        }
       pp.innerHTML=pp.innerHTML;
    }
    write6(){
        var pl1=prompt('评论：');
        var pp=document.getElementById('ping6');
        if(pl1!==null){
            pp.innerHTML+='<br/>'+pl1;
        }
       pp.innerHTML=pp.innerHTML;
    }
    write7(){
        var pl1=prompt('评论：');
        var pp=document.getElementById('ping7');
        if(pl1!==null){
            pp.innerHTML+='<br/>'+pl1;
        }
       pp.innerHTML=pp.innerHTML;
    }
    process(){
        console.log('process');
        var p=prompt('发表动态：')
        var pp=document.getElementById('dongtai');
        if(p!==null){
           pp.innerHTML+='<br/>'+"<div style='line-height:20px'><img style='width:30%;margin-right:10px;height:25vw;border-radius:50%;float:left' src='"+tou3+"'/>"
           +"<p style='font-size:10px;width:70%'>学渣考研</p>"
           +"<p>"+p+"</p>"
           +"<p>1分钟前</p>"
           +'</div>'
        }
       pp.innerHTML=pp.innerHTML;
    }
    delete1(){
        console.log('p')
        var del=document.getElementById('del1');
        console.log(del);
        del.innerHTML='';
    }
    delete2(){
        console.log('p')
        var del=document.getElementById('del2');
        console.log(del);
        del.innerHTML='';
    }
    delete3(){
        console.log('p')
        var del=document.getElementById('del3');
        console.log(del);
        del.innerHTML='';
    }
    delete4(){
        console.log('p')
        var del=document.getElementById('del4');
        console.log(del);
        del.innerHTML='';
    }
    delete5(){
        console.log('p')
        var del=document.getElementById('del5');
        console.log(del);
        del.innerHTML='';
    }
    good(){
        var god=document.getElementById('good');
        console.log(god.src);
        god.src=zan1
    }
    good1(){
        var god=document.getElementById('good1');
        console.log(god.src);
        god.src=zan1
    }
    good2(){
        var god=document.getElementById('good2');
        console.log(god.src);
        god.src=zan1
    }
    good3(){
        var god=document.getElementById('good3');
        console.log(god.src);
        god.src=zan1
    }
    good4(){
        var god=document.getElementById('good4');
        console.log(god.src);
        god.src=zan1
    }
    render() {
        return (
            <div>
                 <NavBar
                 style={{backgroundColor:' #66cccc',color:'white',height:'5vw'}}
                ><span style={{fontSize:'4vw'}}>动态</span></NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    style={{fontSize:'40vw'}}
                    >
                    <div>
                        <span style={{color:'gray'}}> | </span>
                        <span style={{fontSize:'5vw'}}>热门推荐</span>
                        <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',width:'100%' }}>
                            <img style={{ height: '10vw', marginRight: '15px',borderRadius:'50%' }} src={tou1} alt="" />
                            <div style={{ lineHeight: 2,width:'100%'}}>
                            <div style={{ marginTop: '4vw', fontWeight: 'bold',fontSize:'3vw' }}>考研帮</div>
                            <div style={{fontSize:'3vw',marginLeft:'-50px'}}>2021考研：考研之路</div>
                            <div style={{width:'100%'}}>
                            <span style={{fontSize:'3vw',color:'#66cccc',marginLeft:'-50px'}}>#2020年考研&nbsp;&nbsp;&nbsp;&nbsp; </span>
                            <span style={{fontSize:'3vw'}}>&nbsp;&nbsp;2019-10-27 </span>
                            <span style={{fontSize:'3vw',float:'right',marginRight:'4vw'}}>104</span>
                                <img src={talk} style={{height:'5vw',width:'5vw',float:'right'}} onClick={this.write1}/>         
                            </div>
                            </div>
                        </div>   
                        <div id='ping'></div>
                        <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',width:'100%' }}>
                            <img style={{ height: '10vw', marginRight: '15px',borderRadius:'50%' }} src={tou2} alt="" />
                            <div style={{ lineHeight: 2,width:'100%'}}>
                            <div style={{ marginTop: '4vw', fontWeight: 'bold',fontSize:'3vw' }}>考研帮</div>
                            <div style={{fontSize:'3vw',marginLeft:'-50px'}}>2021考研：考研之路</div>
                            <div style={{width:'100%'}}>
                            <span style={{fontSize:'3vw',color:'#66cccc',marginLeft:'-50px'}}>#2020年考研&nbsp;&nbsp;&nbsp;&nbsp; </span>
                            <span style={{fontSize:'3vw'}}>&nbsp;&nbsp;2019-10-27 </span>
                            <span style={{fontSize:'3vw',float:'right',marginRight:'4vw'}}>104</span>
                                <img src={talk} style={{height:'5vw',width:'5vw',float:'right'}} onClick={this.write2}/>         
                            </div>
                            </div>
                        </div> 
                        <div id='ping2'></div> 
                        <span style={{color:'gray',fontSize:'25px'}}> | </span>
                        <span style={{fontSize:'5vw'}}>分享驿站</span>
                        <div id='del1' style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',width:'100%',height:'100%'}}>
                            <img style={{ marginRight: '15px',width:'30%',height:'80%',borderRadius:'50%'}} src={tou3} alt="" />
                            <div style={{ lineHeight: 1 ,width:'70%'}}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold',width:'100%',height:'35%',fontSize:'3vw'}}>学渣考研</div>
                            <div style={{width:'100%',height:'35%',fontSize:'3vw'}}>热爱学习，无法自拔，不胖十斤，誓不罢休</div>
                            <div style={{width:'100%',height:'30%'}}>
                            <span style={{fontSize:'1.5vw'}}>两天前</span>
                            <img src={delete1} style={{height:'3vw',width:'3vw',float:'right',marginRight:'10px',marginTop:'5px'}} onClick={this.delete1}/>
                            <img src={talk} style={{height:'3vw',width:'3vw',float:'right',marginRight:'20px',marginTop:'6px'}} onClick={this.write3}/>
                            <img id='good' src={good} style={{height:'4vw',width:'4vw',float:'right',marginRight:'20px'}} onClick={this.good}/>
                            </div>
                            </div>
                        </div> 
                        <div id='ping3'></div>
                        <div id='del2' style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',width:'100%',height:'100%'}}>
                            <img style={{marginRight: '15px',width:'30%',height:'80%',borderRadius:'50%' }} src={tou1} alt="" />
                            <div style={{ lineHeight: 1 ,width:'70%'}}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold',width:'100%',height:'35%',fontSize:'3vw'}}>学渣考研</div>
                            <div style={{width:'100%',height:'35%',fontSize:'3vw'}}>热爱学习，无法自拔，不胖十斤，誓不罢休</div>
                            <div style={{width:'100%',height:'30%'}}>
                            <span style={{fontSize:'1.5vw'}}>两天前</span>
                            <img src={delete1} style={{height:'3vw',width:'3vw',float:'right',marginRight:'10px',marginTop:'5px'}} onClick={this.delete2}/>
                            <img src={talk} style={{height:'3vw',width:'3',float:'right',marginRight:'20px',marginTop:'6px'}} onClick={this.write4}/>
                            <img id='good1' src={good} style={{height:'4vw',width:'4vw',float:'right',marginRight:'20px'}} onClick={this.good1}/>
                            </div>
                            </div>
                        </div> 
                        <div id='ping4'></div>
                        <div id='del3' style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',width:'100%',height:'100%'}}>
                            <img style={{ marginRight: '15px',width:'30%',height:'80%',borderRadius:'50%' }} src={tou2} alt="" />
                            <div style={{ lineHeight: 1 ,width:'70%'}}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold',width:'100%',height:'35%',fontSize:'3vw'}}>学渣考研</div>
                            <div style={{width:'100%',height:'35%',fontSize:'3vw'}}>热爱学习，无法自拔，不胖十斤，誓不罢休</div>
                            <div style={{width:'100%',height:'30%'}}>
                            <span style={{fontSize:'1.5vw'}}>两天前</span>
                            <img src={delete1} style={{height:'3vw',width:'3vw',float:'right',marginRight:'10px',marginTop:'5px'}} onClick={this.delete3}/>
                            <img src={talk} style={{height:'3vw',width:'3vw',float:'right',marginRight:'20px',marginTop:'6px'}} onClick={this.write5}/>
                            <img id='good2' src={good} style={{height:'4vw',width:'4vw',float:'right',marginRight:'20px'}} onClick={this.good2}/>
                            </div>
                            </div>
                        </div> 
                        <div id='ping5'></div>
                    </div>                   
                    <div>
                        <img src={back} style={{width:'100%'}}></img>
                        <img src={tou3} style={{height:'100px',width:'100px',marginRight:'10px',float:'right',position:'relative',marginTop:'-30px',borderRadius:'50px'}}></img>
                        <p style={{float:'right',marginTop:'75px',marginRight:'-90px'}}>学渣奋起之路</p>
                        <div id='del4' style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',width:'100%',height:'100%'}}>
                            <img style={{marginRight: '15px',width:'30%',height:'80%',borderRadius:'50%' }} src={tou3} alt="" />
                            <div style={{ lineHeight: 1 ,width:'70%'}}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold',width:'100%',height:'35%',fontSize:'3vw'}}>学渣考研</div>
                            <div style={{width:'100%',height:'35%',fontSize:'3vw'}}>热爱学习，无法自拔，不胖十斤，誓不罢休</div>
                            <div style={{width:'100%',height:'30%'}}>
                            <span style={{fontSize:'1.5vw'}}>两天前</span>
                            <img src={delete1} style={{height:'3vw',width:'3vw',float:'right',marginRight:'10px',marginTop:'5px'}} onClick={this.delete4}/>
                            <img src={talk} style={{height:'3vw',width:'3vw',float:'right',marginRight:'20px',marginTop:'6px'}} onClick={this.write6}/>
                            <img id='good3' src={good} style={{height:'4vw',width:'4vw',float:'right',marginRight:'20px'}} onClick={this.good3}/>
                            </div>
                            </div>
                        </div> 
                        <div id='ping6'></div>
                        <div id='del5' style={{ display: '-webkit-box', display: 'flex', padding: '15px 0',width:'100%',height:'100%'}}>
                            <img style={{marginRight: '15px',width:'30%',height:'80%',borderRadius:'50%' }} src={tou3} alt="" />
                            <div style={{ lineHeight: 1 ,width:'70%'}}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold',width:'100%',height:'35%',fontSize:'3vw'}}>学渣考研</div>
                            <div style={{width:'100%',height:'35%',fontSize:'3vw'}}>热爱学习，无法自拔，不胖十斤，誓不罢休</div>
                            <div style={{width:'100%',height:'30%'}}>
                            <span style={{fontSize:'1.5vw'}}>两天前</span>
                            <img src={delete1} style={{height:'3vw',width:'3vw',float:'right',marginRight:'10px',marginTop:'5px'}} onClick={this.delete5}/>
                            <img src={talk} style={{height:'3vw',width:'3vw',float:'right',marginRight:'20px',marginTop:'6px'}} onClick={this.write7}/>
                            <img id='good4' src={good} style={{height:'4vw',width:'4vw',float:'right',marginRight:'20px'}} onClick={this.good4}/>
                            </div>
                            </div>
                        </div> 
                        <div id='ping7'></div>
                        <div id='dongtai'></div>
                        <button style={{width:'100%',height:'10vw',backgroundColor:' #66cccc',fontSize:'4vw'}} onClick={this.process}>发表动态</button>

                    </div>
                </Tabs>
            </div>

        )
    }
}