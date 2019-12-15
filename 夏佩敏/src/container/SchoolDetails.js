import React, { Component } from 'react'
import { NavBar,Icon,WhiteSpace,Tabs} from 'antd-mobile';
import qinghua from './images/qinghua.jpg';
import {Link} from 'react-router-dom';
import imgsrc1 from '../imgs/yhsc.png';
import imgsrc2 from '../imgs/yhsc2.png';

import bj from './images/bjCollege.jpg';
import img1 from './images/bj3.jpg';
import img2 from './images/bj5.jpg';
import img3 from './images/qinghua.jpg';

const tabs = [
    { title: '招生简章'},
    { title:'招生专业'},
    { title:'报录比'},
    {title:'分数线'},
    {title:'复试信息'}
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
            school:[]
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
                img:data.img
            });  
        })

        fetch(`http://wqh.xpmwqhzygy.top/love/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    school:res.data
                });
                for(var i = 0;i<res.data.length;i++){
                    if(id==res.data[i].schoolname){
                        this.setState({
                            touchState:true
                        })
                    }
                }

            })
    }

    render() {
        console.log(this.state.school);
        return (
            <div className="testbox">
                <NavBar
                style={{background:this.state.narcolor,color:'#fff'}} 
                rightContent={<img onClick={this.changgesrc} src={this.state.touchState ? imgsrc2 : imgsrc1} />}
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>{this.state.id}</span></NavBar>
               {
                        this.state.img.map((item,index)=>(                       
                            <img className={this.state.id == item.des ? 'talk' : 'untalk'} src={item.img} style={{width:'100%',height:'40vw'}}/>
                        ))
                    }
                <WhiteSpace/>
                <div style={{background:'#fff',padding:'3%',width:'94%'}}>
                    
                <div>
                    <button style={{backgroundColor:'#e8b1b1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>985</button>
                    <button style={{backgroundColor:'#a7e4f1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>211</button>
                    <button style={{backgroundColor:'#b9a2eb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>综合类</button>
                    <button style={{backgroundColor:'#3bc0bb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>排名</button>
                </div>
                
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
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ textIndent:'2em',fontSize:'3vw',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff'}}>
                    信息产业是21世纪的朝阳产业，也是21世纪我国国民经济的支柱产业。信息产业需要计算机科学与技术、信息系统与信息管理、数学基础与理论等各方面的专业人才和复合人才。中国人民大学信息学院正是培养信息领域高素质专业人才的基地。
                    </div>
                    <div style={{ fontSize:'3vw',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
                        软件工程<br/>
                        环境学院<br/>
                        艺术学院<br/>
                        法学院<br/>
                    </div>
                    <div style={{fontSize:'3vw', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
                        10：1
                    </div>
                    <div style={{fontSize:'3vw', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
                        400
                    </div>
                    <div style={{fontSize:'3vw', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
                        复试时间
                    </div>
                    </Tabs>
                    </div>
            </div>
        )
    }
    changgesrc = () => {
        var pid = this.state.uid+this.state.id;
        const post ={
            uid:this.state.uid,
            schoolname:this.state.id,
            pid:this.state.uid+this.state.id
        }
    if(!this.state.touchState){
        fetch(`http://wqh.xpmwqhzygy.top/focus`,{
            // post提交
            method:"POST",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })
    }
    else{
        fetch(`http://wqh.xpmwqhzygy.top/cancel/${pid}`,{
            // post提交
            method:"DELETE",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })
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