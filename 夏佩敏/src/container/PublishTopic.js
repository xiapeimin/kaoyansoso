import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from 'antd-mobile';
import headimg from '../imgs/usrhead.png'
export default class PublishTopic extends Component{  //左箭头返回有bug 要回到我的动态
    constructor(){
        super();
        this.state={
            flag:0,
            id:0,
            uid:0,
            data:'',
            good:false,
            talk:'',
            delete1:false,
            topic:'',
            username:'用户名',
            pre:0,
            headimg2:''
        }
    }
    componentDidMount(){
        var str = window.location.hash;
        if(str.indexOf('&')>=0){
            var uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
        }else{
            var uid = str.split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
        }
        console.log(str,'topicmu',uid);
        fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
            method: 'GET',        
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(res.data[0]);
                console.log(typeof(res.data));
                this.setState({
                    username:res.data[0].username
                });  
            });
            fetch(`http://xpm.xpmwqhzygy.top/headlist`,{
                method:'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                var data=res.data;
                for(var i=0;i<data.length;i++){
                    if(uid==data[i].uid){
                        this.setState({
                            headimg2:`http://xpm.xpmwqhzygy.top/head/${uid}`,
                            pre:1
                        });
                        i=data.length;
                    }else if(i==data.length-1&&uid!=data[i].uid){
                      this.setState({
                          pre:0
                      })
                    }
                }
            });
        var str = window.location.hash;
        var uid = str.split('=')[1];
        console.log(uid);
        this.setState({
            uid:uid
        });
    }
    
    render(){
        var uid = this.state.uid;
        var headimg2=this.state.headimg2;
        return (
            <div className='publicTpc' style={{position:'absolute',top:'0',bottom:'0',background:'#fff'}}>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/appTab?uid=${uid}&type=topic`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff',fontSize:'22px'}}>发表动态</span></NavBar>
                <div style={{height:'10px',background:'#d7dddd',opacity:'0.7'}}></div>
              
                <div className='pubhead'>
                    <div className='pub1'><img src={this.state.pre==0?headimg:`${headimg2}`} style={{width:'58px',height:'60px',borderRadius:'29px'}}/></div>
                    <div className='pub2'>{this.state.username}</div>
                </div>
                           
                <form style={{textAlign:'center',marginTop:'15px'}}>
                    <textarea className='texta' cols="3" rows="3" placeholder='分享新鲜事...' onChange={this.changeValue}></textarea>
                    <div className='butt' onClick={this.pubTopic} style={{margin:'0 auto',fontSize:'18px',color:'#fff'}}>发 表</div>
                </form>

                <div className={this.state.id == 1 ? 'showgolo golo' : 'golo'}>
            
            </div>
            <div className={this.state.id == 1 ? 'showgolo gologin' : 'gologin'}>
                <p>发表成功！</p>
                <div className='glin'>
                    <div style={{width:'100%'}} onClick={this.quxiao}>确定</div>
                </div>
            </div>

            </div>

                
        )
    }
    pubTopic = (index) => {  
        var uid=this.state.uid;
        var d=new Date();
        var y=d.getFullYear();
        var m = d.getMonth()+1;
        var day=d.getDate();
        var time=''+y+'-'+m+'-'+day;
        const post={
            pri:this.state.uid+this.state.data,
            uid:this.state.uid,
           topic:this.state.data,
           time:time,
           good:this.state.good,
           talk:this.state.talk,
           delete1:this.state.delete1,
           username:this.state.username
        }
        console.log(post.data)
        fetch(`http://zy.xpmwqhzygy.top/topic`,{
            method:'POST',
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        this.setState({
            id:1,
        })
    }
    quxiao = () => {
        this.setState({
            id:0
        });
    }
    changeValue=(e)=>{
        console.log(e.target.value);
        var value=e.target.value;
        
        this.setState({
            data:value,
        })
    }
    
}