import React, { Component } from 'react';
import { NavBar, TabBar } from 'antd-mobile';
import {Link} from 'react-router-dom';
import '../com_xpm/note/note.css';


var fg='my';
export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            notename:'',
            uid:0,
            flag:0,
            unshow:0
        };
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid;
        if(str.indexOf('home')<0){
            //uid = str.split('=')[1];
            uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:0
            });
            fg='my';
            
        }else{
            uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:1
            });
            fg='home';
        }
        
        fetch(`http://xpm.xpmwqhzygy.top/note/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    data:res.data
                });    
                // for(var t=0;t<this.state.data.length;t++){
                //     if(this.state.data[t].nimgs!=null){
                //         console.log('路径',this.state.data[t].nimgs);
                //     }
                // }
                console.log(this.state.data);
                if(this.state.data.length==0){
                    this.setState({
                        unshow:1
                    });
                }
            });

            
    }

    goout = (e) => {
        var uid = this.state.uid;
        if(this.state.flag == 0){
            window.location.hash = `/appTab?uid=${uid}&type=my`;
        }else{
            window.location.hash = `/appTab?uid=${uid}&type=home`;   
        }
    }
 
    render() {
        var uid = this.state.uid;
        var tdata = this.state.data.reverse();
        return (
            <div className='testbox' style={{background:'rgb(246, 250, 250)'}}>
                
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>轻笔记</span></NavBar>

               
                <div style={{width:'100%',paddingLeft:'5%',paddingRight:'5%',margin:'0 auto',background:'rgb(246, 250, 250)'}}>
                    <div style={{width:'100%',height:'12vw',marginBottom:'3vw',borderBottom:'1px solid #66cccc',alignItems: 'center', display: '-webkit-flex',fontSize:'5vw'}}>
                        <img src={require('../imgs/createnote.png')} style={{marginRight:'2vw',width:'10%'}}/>
                        <Link to={`/createNote?uid=${uid}&fg=${fg}`}><span style={{color:'#000'}}>新建笔记本</span></Link>
                    </div>

                    
                    <div style={{display:this.state.unshow==0 ? 'none' : 'block',width:'100%'}}>
                        <div className='notesbox_nt'>
                            <div style={{fontSize:'8vw',width:'100%'}}>{new Date().getDate()}</div>
                            <span>{new Date().getMonth()+1}月/{"周"+"日一二三四五六".charAt(new Date().getDay())}</span>
                        </div>                       
                        <div className='thebox_nt' style={{marginBottom:'3vw'}}>
                            <div className='tit_nt' style={{color:'#000',fontSize:'4vw'}}>欢迎使用一本笔记本</div>
                                <div className='ntdetail_nt' style={{color:'#616060'}}>在这本笔记本中，您可以方便的图文记录每日考研学习笔记，支持拍照上传笔记，随时随地手写笔记，笔记录音等等，笔记只有您本人能够查看，安全的云同步保护您的数据不会丢失。快去新建笔记本吧...</div>
                                {
                                    [1,2].map((item,index)=>(                                                    
                                    <img src={require(`../com_xpm/note/imgs/camera${index}.jpg`)} style={{width:'32%',height:'25vw',borderRadius:'2vw',marginRight:'1%',marginBottom:'1%'}} />                                    
                                    ))
                                }
                                            
                            </div>                                 
                    </div>

                    {/**
                    <div className='all_nt'>
                        <div className='zh_nt'>
                            <img src={require('../com_xpm/note/imgs/note.jpg')} className='zhimg_nt'/>
                            <p>综合笔记</p>
                        </div>
                        <div className='zh_nt'>
                            <img src={require('../com_xpm/note/imgs/note.jpg')} className='zhimg_nt'/>
                            <p>拍照笔记</p>
                        </div>
                        <div className='zh_nt'>
                            <img src={require('../com_xpm/note/imgs/note.jpg')} className='zhimg_nt'/>
                            <p>录音笔记</p>
                        </div>
                        <div className='zh_nt'>
                            <img src={require('../com_xpm/note/imgs/note.jpg')} className='zhimg_nt'/>
                            <p>涂鸦笔记</p>
                        </div>
                    </div>
                     */}
                    
                    <span style={{display:this.state.unshow==1 ? 'none' : 'block'}}>最近笔记</span>
                    
                    <div style={{width:'100%',marginTop:'3vw'}}>

                        {
                            tdata.map((item,index)=>{
                                var timearr = item.time.split('-');
                                var ntimgarr = [];
                                console.log(timearr);
                                if(timearr[1].length==1){
                                    timearr[1] = '0'+timearr[1];
                                }
                                if(item.nimgs!=null){
                                    ntimgarr=item.nimgs.split(';');
                                }
                                return (
                                    <div style={{width:'100%',clear:'both'}}>
                                    <div className='notesbox_nt'>
                                        <div style={{fontSize:'8vw',width:'100%'}}>{timearr[2]}</div>
                                        <span>{timearr[1]}月/{timearr[3]}</span>
                                    </div>
                                    <Link to={`/changeNote?uid=${uid}&nid=${item.notename}&fg=${fg}`}>
                                        <div className='thebox_nt' style={{marginBottom:'3vw'}}>
                                            <div className='tit_nt' style={{color:'#000'}}>{item.notename}</div>
                                            <div className='ntdetail_nt' style={{color:'#616060'}}>{item.text=='' ? '这个笔记还什么内容没有哦！' : item.text}</div>
                                            {
                                                ntimgarr.map((item,index)=>(                                                    
                                                    <img src={`http://xpm.xpmwqhzygy.top/getntuimgs/${item}`} style={{width:'32%',height:'25vw',borderRadius:'2vw',marginRight:'1%',marginBottom:'1%'}} />                                    
                                                ))
                                            }
                                            
                                        </div>
                                    </Link>
                                  
                                    </div>
                                )
                            })
                        }

                        <div style={{height:'2vw',clear:'both'}}></div>


                    </div>

                </div>

                <NavBar
                style={{background:'#66cccc',color:'#fff',position:'fixed',width:'100%',top:0,zIndex:'9999'}} 
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>轻笔记</span></NavBar>

               
            </div>
        )
    }


}
