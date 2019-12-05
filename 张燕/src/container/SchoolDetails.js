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
    constructor(props){
        super(props);
        this.state={
            touchState: false,
            data:[],
            id:'',
            img:bj
        }
    }
   componentDidMount(){     
    var str=this.props.location.search;
    var arr=str.split('=');
    var arr1=arr[1];
    this.setState({
        id:arr1
    });
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
        return (
            <div className="testbox">
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                rightContent={<img onClick={this.changgesrc} src={this.state.touchState ? imgsrc2 : imgsrc1} />}
                leftContent={<Link to={'/appTab'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>{this.state.id}</span></NavBar>
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
                    <div style={{ textIndent:'2em',fontSize:'3vw',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
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
}
