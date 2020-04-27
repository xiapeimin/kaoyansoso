import React, { Component } from 'react'
import xuexiao from '../imgs/xuexiao.jpg'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
import ReactHighcharts from'react-highcharts';

export default class AppHome extends Component {
    constructor(){
        super();
        this.state = {
            uid:0,
            school:'未填写',
            profess:'未填写',
            data:[],
            img:[],
            major:[]
        }
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid = str.split('=')[1];
        console.log(uid);
        this.setState({
            uid:uid
        });

        fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
            method: 'GET',        
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    school:res.data[0].school,
                    profess:res.data[0].profess
                });  
                if(this.state.school==''){
                    this.setState({
                        school:'未填写'
                    })
                }
                if(this.state.profess==''){
                    this.setState({
                        profess:'未填写'
                    })
                }
            });

            fetch('http://zy.xpmwqhzygy.top/schoolDetail')
            .then((res)=>res.json())
            .then((res)=>{
               var data = JSON.parse(res);
               this.setState({
                   data:data.all,
                   img:data.img
               });  
           })
    }
    
    render() {
        var uid = this.state.uid;
        var config = {
            title: {
                text: '历年分数折线图'
            },
            subtitle: {
                text: '数据来源：教育网'
            },
            yAxis: {
                title: {
                    text: '分数'
                }
            },
            credits:{
                enabled:false
            },
            xAxis:{
                categories:['2015','2016','2017','2018','2019']
            },
            series: [{
                name: '分数',
                data: [230, 167, 187, 210, 196]
            }],
            };
        return (
            <div className='talk'>
            <NavBar style={{background:'#66cccc',color:'#fff',position:'fixed',width:'100%',top:'0'}} 
            leftContent={<Link to={`/appTab?uid=${uid}&type=my`}><img src={require('../imgs/zjt.png')} /></Link>}
             mode="light"
            onLeftClick={() => console.log('onLeftClick')}
            ><span style={{color:'#fff',fontSize:'22px'}}>我的研校</span></NavBar>
            <div style={{width:'90%',padding:'5%',height:'15vw',background:'#fff',marginTop:'50px',fontSize:'5vw',lineHeight:'15vw'}}>
                    <span>目标院校</span>
                    <span style={{float:'right',fontSize:'4vw'}} onClick={this.changeschool}>{this.state.school}</span>
            </div>
            <div style={{width:'90%',padding:'5%',height:'15vw',background:'#fff',fontSize:'5vw',lineHeight:'15vw'}}>
                    <span>考研专业</span>
                    <span style={{float:'right',fontSize:'4vw'}} onClick={this.changespro}>{this.state.profess}</span>
                </div>
                    {
                        this.state.img.map((item,index)=>(                       
                            <img className={this.state.school == item.des ? 'talk' : 'untalk'} src={item.img} style={{width:'90%',margin:'5%',marginTop:'0',paddingTop:'20px',height:'60vw'}}/>
                        ))
                    }
                     
                     <div style={{width:'90%',marginLeft:'5%',height:'50vw',marginTop:'10vw',fontSize:'7vw'}}>
                        <ReactHighcharts config={config} style={{fontSize:'7vw'}}/>
                    </div>
                    <div style={{width:'100%',marginTop:'50vw'}}>
                    <p style={{width:'90%',marginLeft:'5%',
                        marginBottom:'0',paddingBottom:'20px',
                        fontSize:'4vw',color:'#726e6e',borderStyle:'dotted',
                        borderColor: '#DDDDDD',
                        borderWidth:'1vw',
                        paddingLeft:'3%',
                        paddingRight:'2%',
                        marginRight:'5%',
                        borderRadius:'5vw'}}>
                    {
                        this.state.data.map((item,index)=>(                       
                            <p className={this.state.school == item.name ? 'talk' : 'untalk'} style={{fontSize:'4vw',color:'#726e6e'}}>{item.introduce}</p>
                        ))
                    }
                    </p>
                    </div> 
            </div> 
        )
    }
    
}
