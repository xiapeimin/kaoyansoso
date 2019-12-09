import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from 'antd-mobile';

export default class PublishTopic extends Component{  //左箭头返回有bug 要回到我的动态
    constructor(){
        super();
        this.state={
            flag:0,
            id:0,
            uid:0
        }
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid = str.split('=')[1];
        console.log(uid);
        this.setState({
            uid:uid
        });
    }
    
    render(){
        var uid = this.state.uid;
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
                    <div className='pub1'><img src={require('../imgs/usrhead.png')} /></div>
                    <div className='pub2'>学渣考研</div>
                </div>
                           
                <form style={{textAlign:'center'}}>
                    <textarea className='texta' cols="3" rows="3">分享新鲜事...</textarea>
                    <div className='butt' onClick={this.pubTopic} style={{margin:'0 auto'}}>发表</div>
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
    pubTopic = () => {
        this.setState({
            id:1
        })
    }
    quxiao = () => {
        this.setState({
            id:0
        })
    }
    
}