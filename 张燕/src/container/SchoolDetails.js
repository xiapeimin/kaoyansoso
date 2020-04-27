import React, { Component } from 'react'
import { NavBar,Icon,WhiteSpace,Tabs} from 'antd-mobile';
import qinghua from './images/qinghua.jpg';
import {Link} from 'react-router-dom';
import imgsrc1 from '../imgs/yhsc.png';
import imgsrc2 from '../imgs/yhsc2.png';

import school1 from '../imgs/school2.jpg';

import bj from './images/bjCollege.jpg';
import img1 from './images/bj3.jpg';
import img2 from './images/bj5.jpg';
import img3 from './images/qinghua.jpg';


const tabs = [
    { title: <span style={{fontSize:'5vw'}}>招生简章</span>},
    { title:<span style={{fontSize:'5vw'}}>招生专业</span>},
    {title:<span style={{fontSize:'5vw'}}>复试信息</span>}
  ];
export default class SchoolDetails extends Component {
    constructor(){
        super();
        this.state={
            narcolor:'#21a3e0',
            touchState: false,
            data:[],
            uid:0,
            pid:0,
            id:'',
            index:0,
            flag:0,
            img:[],
            school:[],
            jz:[]
        }
    }
    componentDidMount(){
        var str = this.props.location.search;
        console.log(str,'ssssssssssssss');
        if(str.indexOf('search')>=0){
            var id = str.split('&')[0].split('=')[1];
            var uid = str.split('&')[1].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:3,
                id:id,  //id为学校名称
                narcolor:'#66cccc'
            });
        }else if(str.indexOf('type')>=0){
            var id = str.split('&')[0].split('=')[1];
            var uid = str.split('&')[1].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:2,
                id:id,  //id为学校名称
                narcolor:'#66cccc'
            });
        }else if(str.indexOf('index')<0){
            var id = str.split('&')[0].split('=')[1];
            var uid = str.split('&')[1].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:0,
                id:id,  //id为学校名称
                narcolor:'#06a170'
            });
            console.log(str,'topicmu',uid);
            console.log('pppppppppppppppppppp',this.state.page);
        }else{
            var id = str.split('&')[0].split('=')[1];
            var uid = str.split('&')[1].split('=')[1];
            var pid = str.split('&')[2].split('=')[1];
            var index = str.split('&')[3].split('=')[1];
            console.log(id,uid,index);
            this.setState({
                pid:pid,
                uid:uid,
                index:index,
                flag:1,
                id:id,  //id为学校名称
                narcolor:'#21a3e0'
            })
        }
        
        
        //通过id判断是哪个高校 检索高校详细信息
        fetch('http://zy.xpmwqhzygy.top/schoolDetail')
         .then((res)=>res.json())
         .then((res)=>{
            var data = JSON.parse(res);
            this.setState({
                data:data.all,
                img:data.img,
                jz:data.jz
            });  
        })

        var sid = uid+id;
        console.log(sid);
        fetch(`http://xpm.xpmwqhzygy.top/saveschool/${sid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data,'查询成功');
                if(res.data.length==0){
                    this.setState({
                        touchState:false
                    });
                }else if(res.data.length != 0){
                    this.setState({
                        touchState:true
                    });
                }
            });
    }

    error=(index)=>{
        var a1 = document.getElementById(index);
        a1.src=school1;
        console.log(a1.src)
      }

    render() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        //console.log(this.state.school);
        return (
            <div className="testbox">
                <NavBar
                style={{background:this.state.narcolor,color:'#fff',position:'fixed',top:'0',zIndex:9999,width:'100%'}} 
                rightContent={<img onClick={this.changgesrc} src={this.state.touchState ? imgsrc2 : imgsrc1} />}
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>{this.state.id}</span></NavBar>
                {
                        this.state.img.map((item,index)=>(  
                            <div style={{marginTop:'50px'}}>                     
                                <img className={this.state.id == item.des ? 'talk' : 'untalk'} src={item.img} style={{width:'100%',height:'50vw'}} onError={()=>this.error(index)} id={index}/>
                                <div className={this.state.id == item.des ? 'talk' : 'untalk'} style={{marginTop:'3vh',paddingLeft:'3%'}}>
                                    
                                    
                                    <button style={{float:'left',backgroundColor:'#e8b1b1',marginLeft:'5px',borderRadius:'7px',padding:'3px',display:item.one==='' ? 'none' : 'block'}}>{item.one}</button>
                                    <button style={{float:'left',backgroundColor:'#a7e4f1',marginLeft:'5px',borderRadius:'7px',padding:'3px',display:item.two==='' ? 'none' : 'block'}}>{item.two}</button>
                                    <button style={{float:'left',backgroundColor:'#b9a2eb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>{item.logo}</button>
                                    <button style={{float:'left',backgroundColor:'#3bc0bb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>{item.row}</button>
                                </div>
                            </div>
                            ))
                    }

                <WhiteSpace/>
               
                <div style={{background:'#fff',padding:'3%',width:'94%',marginTop:'15px'}}>
                    
               {/**
                <div>
                    <button style={{backgroundColor:'#e8b1b1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>985</button>
                    <button style={{backgroundColor:'#a7e4f1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>211</button>
                    <button style={{backgroundColor:'#b9a2eb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>综合类</button>
                    <button style={{backgroundColor:'#3bc0bb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>排名</button>
                </div>
             */}
               
                
                <div style={{width:'100%',textIndent:'2em'}}>
                    <h2>学校介绍</h2>
                    <p>{
                        this.state.data.map((item,index)=>(                       
                            <p className={this.state.id == item.name ? 'talk' : 'untalk'}>{item.introduce}</p>
                        ))
                    }
                    </p>
                </div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    >
                    <div style={{ textIndent:'2em',display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
                    <p>{
                        this.state.jz.map((item,index)=>(                       
                            <p className={this.state.id == item.name ? 'talk' : 'untalk'} style={{fontSize:'4vw'}}>{item.jianzhang}</p>
                        ))
                    }
                    </p>
                    </div>
                    <div style={{ textIndent:'2em',fontSize:'3vw',display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
                    {
                        this.state.data.map((item,index)=>(                       
                            <p className={this.state.id == item.name ? 'talk' : 'untalk'} style={{fontSize:'4vw'}}>{item.zssub}</p>
                        ))
                    }
                    
                    </div>
                    <div style={{ textIndent:'2em',fontSize:'3vw',display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
                    {
                        this.state.data.map((item,index)=>(                       
                            <p className={this.state.id == item.name ? 'talk' : 'untalk'} style={{fontSize:'4vw'}}>{item.testmsg}</p>
                        ))
                    }
                    
                    </div>
                    </Tabs>
                    </div>
            </div>
        )
    }
    changgesrc = () => {
        var sc = !this.state.touchState;
        var sid = this.state.uid+this.state.id;
        const post ={
            uid:this.state.uid,
            name:this.state.id,
            sid:sid
        };
        if(sc==true){
            console.log('关注');
            fetch(`http://xpm.xpmwqhzygy.top/saveschool`,{
            // post提交
            method:"POST",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        });
        }else if(sc==false){
            console.log('取消关注');
            fetch(`http://xpm.xpmwqhzygy.top/saveschool/${sid}`,{
                method:"DELETE",
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
            });
        }
        
        console.log('imglll');
        this.setState({ touchState: !this.state.touchState });

    }
    goout = () => {
        var uid = this.state.uid;
        var pid = this.state.pid;
        var index = this.state.index;
        if(this.state.flag == 0){
            window.location.hash = `/checkSchool?uid=${uid}`;
        }else  if(this.state.flag == 1){
            window.location.hash = `/otherSchool?id=${pid}&index=${index}&uid=${uid}`;
        }else if(this.state.flag == 2){
            window.location.hash = `/appTab?uid=${uid}&type=school`;
        }else if(this.state.flag == 3){
            window.location.hash = `/search?uid=${uid}&type=home`;
        }
    }
}