import React, { Component } from 'react'
import xuexiao from '../imgs/xuexiao.jpg'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
export default class AppHome extends Component {
    constructor(){
        super();
        this.state = {
            uid:0,
            school:'未填写',
            profess:'未填写',
            data:[],
            img:[]
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
        return (
            <div style={{background:'#fff',width:'100%',position:'absolute',top:'0',bottom:'0'}}>
                <Link to={`/appTab?uid=${uid}&type=my`}>
                <NavBar
                    style={{backgroundColor:'#66CCCC',color:'white',height:'10vw',fontSize:'5vw'}}
                    icon={<Icon type="left" style={{ color:'white',fontSize:'5vw'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >我的研校</NavBar>
                </Link>
                <div style={{width:'90',paddingRight:'5%',paddingLeft:'5%',height:'15vw',background:'#fff',marginTop:'2vw',fontSize:'5vw',lineHeight:'15vw'}}>
                    <span>目标院校</span>
                    <span style={{float:'right',fontSize:'4vw'}} onClick={this.changeschool}>{this.state.school}</span>
                </div>
                <div style={{width:'90',paddingRight:'5%',paddingLeft:'5%',height:'15vw',background:'#fff',fontSize:'5vw',lineHeight:'15vw'}}>
                    <span>考研专业</span>
                    <span style={{float:'right',fontSize:'4vw'}} onClick={this.changespro}>{this.state.profess}</span>
                </div>
                <div style={{backgroundColor:'white'}}> 
                    {
                        this.state.img.map((item,index)=>(                       
                            <img className={this.state.school == item.des ? 'talk' : 'untalk'} src={item.img} style={{width:'90%',margin:'5%',marginTop:'0',paddingTop:'20px',height:'60vw'}}/>
                        ))
                    }
                    <p style={{width:'90%',marginLeft:'40%',fontSize:'4vw'}}>学校资讯</p>
                    <p style={{width:'82%',marginLeft:'5%',
                        marginBottom:'0',paddingBottom:'20px',
                        fontSize:'4vw',color:'#726e6e',borderStyle:'dotted',
                        borderColor: '#DDDDDD',
                        borderWidth:'1vw',
                        paddingLeft:'3%',
                        paddingRight:'3%',
                        marginRight:'5%',
                        borderRadius:'5vw'}}>
                    {
                        this.state.data.map((item,index)=>(                       
                            <p className={this.state.school == item.name ? 'talk' : 'untalk'} style={{fontSize:'4vw',color:'#726e6e'}}>{item.introduce}</p>
                        ))
                    }
                    </p>
                    <p style={{width:'90%',marginLeft:'40%',fontSize:'4vw'}}>专业信息</p>
                    <p style={{width:'82%',marginLeft:'5%',
                        marginBottom:'0',paddingBottom:'20px',
                        fontSize:'4vw',color:'#726e6e',borderStyle:'dotted',
                        borderColor: '#DDDDDD',
                        borderWidth:'1vw',
                        paddingLeft:'3%',
                        paddingRight:'3%',
                        marginRight:'5%',
                        borderRadius:'5vw'}}>
                    专业详细信息
                    </p>
                </div>
            </div>
        )
    }
    
}
