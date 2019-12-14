import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';

import headimg from '../imgs/usrhead.png';

var headflag=0;
export default class AppHome extends Component {
    constructor(){
        super();
        this.state = {
            flag:0,
            uid:0,
            name:'',
            xuanyan:'未填写',
            school:'未填写',
            profession:'未填写',
            head:'',
            imgflag:0,
            headimg2:'',
            pre:0
        }
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid = str.split('=')[1];
        console.log(uid);
        this.setState({
            uid:uid
        });

        fetch(`http://xpm.xpmwqhzygy.top/headlist`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                var data = res.data;
                for(var i=0;i<data.length;i++){
                    if(uid==data[i].uid){
                        this.setState({
                            headimg2:`http://xpm.xpmwqhzygy.top/head/${uid}`,
                            pre:1
                        });
                        headflag=0;
                        i=data.length;
                    }else if(i==data.length-1 && uid != data[i].uid){
                        headflag=1;
                    }
                }
            });

            fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
                method: 'GET',        
                headers:{
                    'Accept':'application/json,text/plain,*/*'
                }
                })
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res.data[0])
                    this.setState({
                        name:res.data[0].username,
                        xuanyan:res.data[0].xyan,
                        school:res.data[0].school,
                        profession:res.data[0].profess
                    });  
                });
    }
    getfile = (e) => {
        var uid = this.state.uid;
        console.log(e.target);
        var r= new FileReader();
        var f=document.getElementById('Photo').files[0];

        console.log(f);
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        dataURL = windowURL.createObjectURL(f);

        r.readAsDataURL(f);

        r.onload=function (e) {
          document.getElementById('mPhoto').src=dataURL;
          console.log(dataURL);
          console.log(this.result);

          var formData = new FormData();
          formData.append('image', f);

          if(headflag == 1){
              console.log('第一次上传');
            fetch(`http://xpm.xpmwqhzygy.top/head/${uid}`,{
                // post提交
                method:"POST",
                //headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:formData  //把提交的内容转字符串
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
            });

          }else if(headflag == 0){
              console.log('修改头像');
            fetch(`http://xpm.xpmwqhzygy.top/changehead/${uid}`,{
                // post提交
                method:"PUT",
                //headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:formData  //把提交的内容转字符串
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
            });

          }


        }


      }
    render() {
        var uid = this.state.uid;
        var head = this.state.head;
        var headimg2 = this.state.headimg2;
        return (
            <div>
                <NavBar
                style={{background:'#fff',color:'#000'}}
                rightContent={<span onClick={this.putMessage}>保存</span>} 
                leftContent={<Link to={`/appTab?uid=${uid}&type=my`}><img src={require('../imgs/zjt2.png')} /></Link>}
                mode="light"
                ><span style={{fontSize:'22px'}}>设置</span></NavBar>

               
                <div style={{marginTop:'10px',marginBottom:'0',backgroundColor:'white',height:'80px',borderBottom:'2px solid #DDDDDD'}}>
                    <span style={{lineHeight:'80px',fontSize:'18px',marginLeft:'20px',marginBottom:'0'}}>头像</span>
                    <img src={this.state.pre == 0 ? headimg : `${headimg2}`} id='mPhoto' style={{float:'right',marginRight:'16px',width:'60px',height:'60px',marginTop:'10px',borderRadius:'30px'}} />
                    <input type='file' onChange={this.getfile} id='Photo' style={{opacity:'0',width:'60px',height:'60px',float:'right',marginRight:'-60px',marginTop:'10px',background:'red',borderRadius:'30px'}} />
                </div>
                <div style={{backgroundColor:'white',height:'50px',borderBottom:'2px solid #DDDDDD'}}>
                    <span style={{lineHeight:'50px',fontSize:'18px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>昵称</span>
                    <input type='text' value={this.state.name} onChange={this.changeName} style={{width:'79%',paddingLeft:'2%',fontSize:'18px',textAlign:'right',color:'#7b7c7c',border:'none'}} />
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}>
                    <span style={{lineHeight:'70px',marginLeft:'20px',fontSize:'18px',marginTop:'0',marginBottom:'0'}}>考研宣言</span>
                    <input type='text' value={this.state.xuanyan} onChange={this.changeXyan} style={{width:'70%',paddingLeft:'2%',fontSize:'18px',textAlign:'right',color:'#7b7c7c',border:'none'}} />
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}>
                    <span style={{lineHeight:'70px',marginLeft:'20px',fontSize:'18px',marginTop:'0',marginBottom:'0'}}>考研院校</span>
                    <input type='text' value={this.state.school} onChange={this.changeSch} style={{width:'70%',paddingLeft:'2%',fontSize:'18px',textAlign:'right',color:'#7b7c7c',border:'none'}} />
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}>
                    <span style={{lineHeight:'70px',marginLeft:'20px',fontSize:'18px',marginTop:'0',marginBottom:'0'}}>考研专业</span>
                    <input type='text' value={this.state.profession} onChange={this.changePro} style={{width:'70%',paddingLeft:'2%',fontSize:'18px',textAlign:'right',color:'#7b7c7c',border:'none'}} />
                </div>
                
                <div style={{backgroundColor:'white',marginTop:'10px',height:'70px',borderBottom:'2px solid #DDDDDD'}}>
                    <span style={{lineHeight:'70px',marginLeft:'20px',fontSize:'18px',marginTop:'0',marginBottom:'0'}}>修改密码</span>
                    <Link to={`/pwdchange?uid=${uid}`}><img src={require('../imgs/testright.png')} style={{float:'right',marginRight:'16px',marginTop:'20px'}} /></Link>
                </div>
                <div onClick={this.unlogin} style={{backgroundColor:'white',height:'50px',borderBottom:'2px solid #DDDDDD',borderTop:'2px solid #DDDDDD',marginTop:'50px'}}>
                    <p style={{lineHeight:'50px',textAlign:"center",margin:'0'}}>退出登录</p>
                </div>

                <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 2 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 3 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 4 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 5 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                    <p>确认退出？</p>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                        <div><Link to='/' style={{color:'#000'}}>退出</Link></div>
                    </div>
                </div>

                
            </div>
        )
    }
    putMessage = () => {
        var uid = this.state.uid;
        console.log(this.state.name,this.state.xuanyan,this.state.school,this.state.profession);
        const post = {
            name:this.state.name,
            xyan:this.state.xuanyan,
            school:this.state.school,
            profess:this.state.profession
        };
        fetch(`http://xpm.xpmwqhzygy.top/cname/${uid}`,{
            method:"PUT",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        });

    }

    changeName = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    changeXyan = (e) => {
        this.setState({
            xuanyan:e.target.value
        })
    }
    changeSch = (e) => {
        this.setState({
            school:e.target.value
        })
    }
    changePro = (e) => {
        this.setState({
            profession:e.target.value
        })
    }
    unlogin = () => {
        this.setState({
            flag:1
        })
    }
    quxiao = () => {
        this.setState({
            flag:0
        })
    }
    
}