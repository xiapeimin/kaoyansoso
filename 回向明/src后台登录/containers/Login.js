import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            touchState: false,
            data:[],
            id:'',
            passwd:'',
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
            id:jsonObj[0],
            passwd:jsonObj[1]
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
                        <input type='text' value={this.state.id} onChange={this.getid} /> 
                    </div>
                    <div className='user_xpm'>
                        <div>密码：</div>
                        <input type='password' value={this.state.passwd} onChange={this.getpwd}/>                      
                    </div>

                    <div className='dl_xpm' onClick={this.goHome} style={{color:'#fff'}}>登录</div>
                </div>

                <div style={{display:this.state.flag==0 ? 'none' : 'block',position:'absolute',top:'40%',width:'50%',left:'25%',background:'#fff',height:'8vw',lineHeight:'8vw',textAlign:'center'}}>用户名或密码错误！</div>
            </div>       
        )
    }
    getid = (e) => {
        this.setState({
            id:e.target.value
        })
    }
    getpwd = (e) => {
        this.setState({
            passwd:e.target.value
        })
        
    }

    goHome = (e) => {
        var storage = this.state.storage;
        var json=storage.getItem("appsoso"); 
        var jsonObj=JSON.parse(json);
        if(this.state.id != '' && this.state.passwd != ''){
            console.log(this.state.id,this.state.passwd);
            fetch(`https://xiangming.yflzy.cn/admin`,{
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
                    if((data[i].phone == this.state.id || data[i].email == this.state.id) && data[i].passwd == this.state.passwd){
                        window.location.hash=`/home?id=${data[i].id}`;
                        console.log('用户id',data[i].id);
                        i = data.length;
                        console.log(i);
                    }else if(i == data.length-1 && ((data[i].phone != this.state.id || data[i].email != this.state.id) || data[i].passwd != this.state.passwd)){
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