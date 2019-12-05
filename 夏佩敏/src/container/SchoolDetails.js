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
            touchState: false,
            data:[],
            uid:0,
            pid:0,
            id:'',
            index:0,
            flag:0,
            img:bj
        }
    }
    componentDidMount(){
        var str = window.location.hash;

        if(str.indexOf('index')<0){
            var id = str.split('&')[0].split('=')[1];
            var uid = str.split('&')[1].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:0,
                id:id
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
                id:id
            })
        }
        
        
        
        fetch('http://zy.xpmwqhzygy.top/schoolDetail')
         .then((res)=>res.json())
        .then((res)=>{
            var data = JSON.parse(res);
            this.setState({
                data:data.all
            });  
            if(this.state.id=='北京大学'){
                this.setState({
                    img:bj
                })
               
            } 
            if(this.state.id=='清华大学'){
                this.setState({
                    img:img3
                })
            }
            if(this.state.id=='中国人民大学'){
                this.setState({
                    img:img1
                })
            }

        })
        
      }

    render() {
        console.log(this.state.id);
        return (
            <div className="testbox">
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                rightContent={<img onClick={this.changgesrc} src={this.state.touchState ? imgsrc2 : imgsrc1} />}
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>北京大学</span></NavBar>
                <img src={this.state.img} style={{width:'100%',height:'40vw'}}/>
                <WhiteSpace/>
                <div style={{background:'#fff',padding:'3%',width:'94%'}}>
                    
                <div>
                    <button style={{backgroundColor:'#e8b1b1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>985</button>
                    <button style={{backgroundColor:'#a7e4f1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>211</button>
                    <button style={{backgroundColor:'#b9a2eb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>综合类</button>
                    <button style={{backgroundColor:'#3bc0bb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>排名</button>
                </div>
                
                <div style={{width:'100%',textIndent:'2em'}}>
                    <h2>学院介绍</h2>
                    <p style={{textIndent:'2em',fontSize:'4vw'}}>
                    清华大学软件学院是2001年经国家教育部和国家计委联合发文批准成立的首批全国示范性软件学院之一，
                    隶属于清华大学信息科学与技术学院。以“教学立院、管理建院、学科兴院、科技强院”为办学理念，
                    遵循“练中学、练中闯、练中创”的实践教学思想，追求并践行精品教育。
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
        console.log('imglll');
        this.setState({ touchState: !this.state.touchState });
    }
    goout = () => {
        var uid = this.state.uid;
        var pid = this.state.pid;
        var index = this.state.index;
        if(this.state.flag != 1){
            window.location.hash = `/appTab?uid=${uid}&type=school`;
        }else{
            window.location.hash = `/otherSchool?id=${pid}&index=${index}&uid=${uid}`;
        }
    }
}
