import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import touxiang from '../imgs/头像.jpg'
const data = [{
    url: touxiang,
    id: '2121',
  }];
export default class AppHome extends Component {
    constructor(){
        super();
        this.state = {
            flag:0,
            InputValue : "",
            files: data,
            multiple: false,
        }
    }
    handleGetInputValue = (event) => {
        this.setState({
            InputValue : event.target.value,
        })
    }; 
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 0,
        });
    }
    render() {
        const { files } = this.state;
        return (
            <div>
                <Link to='/appTab'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{color:'black'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >设置</NavBar>
                </Link>
                 <div style={{marginTop:'20px',marginBottom:'0',backgroundColor:'white',height:'50px',width:'100%'
                ,borderBottom:'2px solid #DDDDDD'}}>
                    <p style={{lineHeight:'50px',marginLeft:'20px',marginBottom:'0',width:'50%'}}>头像</p>
                </div>
                <WingBlank style={{backgroundColor:'white',borderBottom:'2px solid #DDDDDD',margin:'0'}}>
                    <ImagePicker
                        files={files}
                        style={{width:'200px',height:'100px',margin:'0'}}
                        onChange={this.onChange}
                        // selectable={false}
                        // onImageClick={(index, fs) => console.log(index, fs)}
                    />
                </WingBlank>
                <div  style={{backgroundColor:'white',height:'50px',borderBottom:'2px solid #DDDDDD'}}
                    onClick={this.necheng}>
                    <p id='div1' style={{float:'right',lineHeight:'50px',margin:'0',paddingRight:'10px',
                        fontSize:'15px',color:'#AAAAAA'}}>
                    </p>
                    <p style={{lineHeight:'50px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>昵称</p>
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}
                    onClick={this.kaoyanxuanyan}>
                    <p id='div2' style={{float:'right',lineHeight:'70px',margin:'0',paddingRight:'10px',
                    fontSize:'15px',color:'#AAAAAA'}}></p>
                    <p style={{lineHeight:'70px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>考研宣言</p>
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}
                    onClick={this.kaoyanyuanxiao}>
                    <p id='div3' style={{float:'right',lineHeight:'70px',margin:'0',paddingRight:'10px'
                    ,fontSize:'15px',color:'#AAAAAA'}}></p>
                    <p style={{lineHeight:'70px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>考研院校</p>
                </div>
                <div style={{backgroundColor:'white',height:'70px',borderBottom:'2px solid #DDDDDD'}}
                    onClick={this.kaoyanzhuanye}>
                    <p id='div4' style={{float:'right',lineHeight:'70px',margin:'0',paddingRight:'10px' 
                    ,fontSize:'15px',color:'#AAAAAA'}}></p>
                    <p style={{lineHeight:'70px',marginLeft:'20px',marginTop:'0',marginBottom:'0'}}>考研专业</p>
                </div>
                <div onClick={this.unlogin} style={{backgroundColor:'white',height:'50px'
                ,borderBottom:'2px solid #DDDDDD',borderTop:'2px solid #DDDDDD',marginTop:'20px'}}>
                    <p style={{lineHeight:'50px',textAlign:"center",margin:'0'}}>退出登录</p>
                </div>

                <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 2 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 3 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 4 ? 'showgolo golo' : 'golo'}></div>
                <div className={this.state.flag == 5 ? 'showgolo golo' : 'golo'}></div>
                {/* <div className={this.state.flag == 6 ? 'showgolo golo' : 'golo'}></div> */}

                <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                    <p>确认退出？</p>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} 
                        onClick={this.quxiao}>取消</div>
                        <div><Link to='/' style={{color:'#000'}}>退出</Link></div>
                    </div>
                </div>
                <div className={this.state.flag == 2 ? 'showgolo gologin' : 'gologin'}>
                    <input id={this.state.flag} style={{marginTop:'30px',height:'25px'}} 
                         placeholder='昵称' id='username'
                   ></input>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} 
                        onClick={this.quxiao}>取消</div>
                        <div onClick={this.ncqueding}>确定</div>
                    </div>
                </div>
                <div className={this.state.flag == 3 ? 'showgolo gologin' : 'gologin'}>
                    <input style={{marginTop:'30px',height:'25px'}} placeholder='考研宣言' id='xy'
                    ></input>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} 
                        onClick={this.quxiao}>取消</div>
                        <div onClick={this.xyqueding}>确定</div>
                    </div>
                </div>
                <div className={this.state.flag == 4 ? 'showgolo gologin' : 'gologin'}>
                    <input style={{marginTop:'30px',height:'25px'}} placeholder='考研院校' id='school'
                    ></input>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} 
                        onClick={this.quxiao}>取消</div>
                        <div onClick={this.yxqueding}>确定</div>
                    </div>
                </div>
                <div className={this.state.flag == 5 ? 'showgolo gologin' : 'gologin'}>
                    <input style={{marginTop:'30px',height:'25px'}} placeholder='考研专业' id='subject'
                   ></input>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} 
                        onClick={this.quxiao}>取消</div>
                        <div onClick={this.zyqueding}>确定</div>
                    </div>
                </div>
                {/* <div className={this.state.flag == 6 ? 'showgolo gologin' : 'gologin'}>
                    <input id='picture' style={{marginTop:'30px',height:'25px',marginLeft:'40px'}} 
                         placeholder='头像' type="file"  accept="image/*"
                  ></input>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} 
                        onClick={this.quxiao}>取消</div>
                        <div onClick={this.txqueding}>确定</div>
                    </div>
                </div> */}
            </div>
        )
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
    necheng = () => {
        this.setState({
            flag:2
        })
    }
    ncqueding = () =>{
        var usr=document.getElementById('username');
        console.log(usr.value);
        var div1=document.getElementById('div1');
        div1.innerHTML=usr.value;
        this.setState({
            flag:0
        })
    }
    kaoyanxuanyan = () => {
        this.setState({
            flag:3
        })
    }
    xyqueding = () =>{
        var usr=document.getElementById('xy');
        console.log(usr.value);
        var div1=document.getElementById('div2');
        div1.innerHTML=usr.value;
        this.setState({
            flag:0
        })
    }
    kaoyanyuanxiao = () => {
        this.setState({
            flag:4
        })
    }
    yxqueding = () =>{
        var usr=document.getElementById('school');
        console.log(usr.value);
        var div1=document.getElementById('div3');
        div1.innerHTML=usr.value;
        this.setState({
            flag:0
        })
    }
    kaoyanzhuanye = () => {
        this.setState({
            flag:5
        })
    }
    zyqueding = () =>{
        var usr=document.getElementById('subject');
        console.log(usr.value);
        var div1=document.getElementById('div4');
        div1.innerHTML=usr.value;
        this.setState({
            flag:0
        })
    }
    // touxiang = () => {
    //     this.setState({
    //         flag:6
    //     })
    // }
    // txqueding = () =>{
    //     var pic=document.getElementById('picture');
    //     var picdata=pic.value;
    //     let formData = new FormData();
    //     for(var i in picdata){
    //            var picture= formData.append(i,picdata[i])
    //     }      
    //     console.log(picture);
    //     var tx=document.getElementById('tx');
    //     tx.innerHTML='<img src={pic.value}/>'
    //     // const {InputValue} = this.state;
    //     // this.e = InputValue;
    //     // console.log(this.e);
    //     this.setState({
    //         flag:0
    //     })
    // }
}