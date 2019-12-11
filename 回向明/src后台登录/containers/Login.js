import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            touchState: false,
            data:[],
            uid:'',
            pwd:'',
            linksrc:'',
            storage:window.localStorage,
            flag:0
        }	
        //设置本地存储键值对
      var storage = this.state.storage; 
      if(storage.getItem("appsoso") == null){
        var appsoso= [];
        var d=JSON.stringify(appsoso); 
        storage.setItem("appsoso",d);
      }
    }	
    touchStart() {
        this.setState({ touchState: !this.state.touchState });
    }
    
    componentDidMount(){
        var storage = this.state.storage;
        var json=storage.getItem("appsoso"); 
        var jsonObj=JSON.parse(json);
        console.log(jsonObj);
        this.setState({
            uid:jsonObj[0],
            pwd:jsonObj[1]
        });
    }
    render(){
        return (
            <div className='big_xpm'>
                <img src={require('../images/login.jpg')} className='login_xpm'/>
                <div className='htai_xpm'>后台登录</div>
                <div className='lobox_xpm'>
                    <div className='limg_xpm'><img src={require('../images/loginusr.png')} className='lgusr_xpm'/></div>
                    
                    <div className='user_xpm'>
                        <div>用户名：</div> 
                        <input type='text' value={this.state.uid} onChange={this.getuid} /> 
                    </div>
                    <div className='user_xpm'>
                        <div>密码：</div>
                        <input type='password' value={this.state.pwd} onChange={this.getpwd}/>                      
                    </div>

                    <div className='dl_xpm' onClick={this.goHome} style={{color:'#fff'}}>登录</div>
                </div>

                <div style={{display:this.state.flag==0 ? 'none' : 'block',position:'absolute',top:'40%',width:'50%',left:'25%',background:'#fff',height:'8vw',lineHeight:'8vw',textAlign:'center'}}>用户名或密码错误！</div>
            </div>       
        )
    }
    getuid = (e) => {
        this.setState({
            uid:e.target.value
        })
    }
    getpwd = (e) => {
        this.setState({
            pwd:e.target.value
        })
        
    }

    goHome = (e) => {
        var storage = this.state.storage;
        var json=storage.getItem("appsoso"); 
        var jsonObj=JSON.parse(json);
        if(this.state.uid != '' && this.state.pwd != ''){
            console.log(this.state.uid,this.state.pwd);
            fetch(`http://xpm.xpmwqhzygy.top/user`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    data:res.data
                });    
                
                var data=this.state.data;
                console.log(data,'llllllllllllll');
                for(var i=0;i < data.length;i++){
                    if((data[i].phone == this.state.uid || data[i].email == this.state.uid) && data[i].pwd == this.state.pwd){
                        window.location.hash=`/home?uid=${data[i].uid}`;
                        console.log('用户id',data[i].uid);
                        i = data.length;
                        console.log(i);
                    }else if(i == data.length-1 && ((data[i].phone != this.state.uid || data[i].email != this.state.uid) || data[i].pwd != this.state.pwd)){
                        console.log('用户名或密码错误');
                        this.setState({
                            flag:1
                        });
                        var t=1;
                        var tid = setInterval(()=>{
                            t=t-1;
                            if(t<0){
                                this.setState({
                                    flag:0
                                })
                                clearInterval(tid);
                            }
                        },1000);
                    }
                }
            });
            
            
        }
        
        console.log('///////////////////');
    }
}