import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import {Link} from 'react-router-dom';

import note1 from '../imgs/note1.jpg';
import note2 from '../imgs/note3.jpg';

var fg='my';
export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            notename:'',
            uid:0,
            flag:0,
            unshow:0
        };
    }
    componentDidMount(){
        var str = window.location.hash;
        var uid;
        if(str.indexOf('home')<0){
            //uid = str.split('=')[1];
            uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:0
            });
            fg='my';
            
        }else{
            uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:1
            });
            fg='home';
        }
        
        fetch(`http://xpm.xpmwqhzygy.top/note/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    data:res.data
                });    

                console.log(this.state.data);
                if(this.state.data.length==0){
                    this.setState({
                        unshow:1
                    });
                }
            });

            
    }

    goout = (e) => {
        var uid = this.state.uid;
        if(this.state.flag == 0){
            window.location.hash = `/appTab?uid=${uid}&type=my`;
        }else{
            window.location.hash = `/appTab?uid=${uid}&type=home`;   
        }
    }
 
    render() {
        var uid = this.state.uid;
        var tdata = this.state.data.reverse();
        return (
            <div className='testbox' style={{background:'#fff'}}>
                
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>笔记本</span></NavBar>

                <div style={{width:'95%',padding:'2.5%',background:'#fff'}}>
                    <div style={{width:'100%',height:'12vw',borderBottom:'2px solid #66cccc',alignItems: 'center', display: '-webkit-flex',fontSize:'5vw'}}>
                        <img src={require('../imgs/createnote.png')} style={{marginRight:'2vw',width:'10%'}}/>
                        <Link to={`/createNote?uid=${uid}&fg=${fg}`}><span style={{color:'#000'}}>新建笔记本</span></Link>
                    </div>

                    <img style={{display:this.state.unshow==0 ? 'none' : 'block',width:'100%'}} src={require('../imgs/kong.jpg')} />

                    <div style={{width:'95%',padding:'2.5%'}}>

                        {
                            tdata.map((item,index)=>(
                                <Link to={`/changeNote?uid=${uid}&nid=${item.notename}&fg=${fg}`}><div style={{float:'left',height:'40vw',width:'50%',alignItems: 'center', display: '-webkit-flex'}}>
                                    <div style={{alignItems: 'center',display:'-webkit-flex',margin:'0 auto',width:'65%',paddingLeft:'15%',height:'80%',background:'#66cccc',borderRadius:'2vw',fontSize:'4vw',color:'#000',background:`url(${note1}) no-repeat`,backgroundSize:'100% 100%'}}>{item.notename}</div>
                                </div></Link>
                            ))
                        }

                    </div>

                </div>

                
               
            </div>
        )
    }


}
