import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd-mobile';
import './layout.css';

/**涉及组件：登录Login,设置Myset,App.js引入 */
/**启动页 引导页图片需替换 */

export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:1,
            data: ['1', '2', '3'],
            storage:window.localStorage
        }
    }	
    componentDidMount(){
        var that = this;
        var storage = this.state.storage;
        //storage.removeItem('hidenav');
        setTimeout(function(){
            if(storage.getItem('hidenav')==null){
                that.setState({
                    flag:0
                });
            }else{
                if(storage.getItem('setisLogin')==null){
                    window.location.hash = '/login';
                }else{
                    window.location.hash = storage.getItem('setisLogin');
                }               
            }          
        },3000);      
    }

    render() {       
        return (           
            <div>
                <div className="startimg_xpm">
                    <Carousel
                    autoplay={false}
                    infinite
                    dotStyle={{marginBottom:'10vw'}}
                    dotActiveStyle={{marginBottom:'10vw'}}
                    >
                        {this.state.data.map(val => {
                            if(val==3){
                                return (
                                    <div key={val}>
                                        <img
                                        key={val}
                                        src={require(`./imgs/slider${val}.jpg`)}
                                        style={{width:'100%',height:window.innerHeight}}
                                        />
                                       <Link to='/login'><div onClick={this.hideNavigate}><button className="butt_xpm">开始体验</button></div></Link>
                                    </div>
                                )

                            }else{
                                return (
                                    <img
                                    key={val}
                                    src={require(`./imgs/slider${val}.jpg`)}
                                    style={{width:'100%',height:window.innerHeight}}
                                    />
                                )
                            }
                        
                        })}
                    </Carousel>                  
                </div>
                <img src={require('./imgs/start.jpg')} className="startimg_xpm" style={this.state.flag == 1 ? {display:'block'} : {display:'none'}} />
            </div>
        )
    }

    hideNavigate = () => {
        var storage = this.state.storage; 
        storage.setItem("hidenav",'true');
    }

       
}
