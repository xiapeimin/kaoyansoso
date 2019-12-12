import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import {Link} from 'react-router-dom'

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:['英语笔记','数学笔记','专业课笔记'],
            notename:'',
            uid:0,
            flag:0
        };
    }
    componentDidMount(){
        var str = window.location.hash;
        if(str.indexOf('typef')<0){
            var uid = str.split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:0
            });
        }else{
            var uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                flag:1
            });
        }
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
        return (
            <div className='testbox'>
                
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>笔记本</span></NavBar>

                <div style={{width:'95%',padding:'2.5%',background:'#fff'}}>
                    <div style={{width:'100%',height:'12vw',borderBottom:'2px solid #66cccc',alignItems: 'center', display: '-webkit-flex',fontSize:'5vw'}}>
                        <img src={require('../imgs/createnote.png')} style={{marginRight:'2vw',width:'10%'}}/>
                        <Link to={`/createNote?uid=${uid}`}><span style={{color:'#000'}}>新建笔记本</span></Link>
                    </div>

                    <div style={{width:'95%',padding:'2.5%'}}>

                        {
                            this.state.data.map((item,index)=>(
                                <Link to={`/createNote?uid=${uid}`}><div style={{float:'left',height:'40vw',width:'50%',alignItems: 'center', display: '-webkit-flex'}}>
                                    <div style={{alignItems: 'center',display:'-webkit-flex',margin:'0 auto',width:'65%',paddingLeft:'5%',height:'80%',background:'#66cccc',borderRadius:'2vw',fontSize:'5vw',color:'#fff'}}>{item}</div>
                                </div></Link>
                            ))
                        }

                    </div>

                </div>

                {/*this.getData()*/}
               
            </div>
        )
    }

    getData = () => {
        console.log(this.state.data);
        var name = this.props.name;
        console.log(name);
        var data=this.state.data;
        data[data.length] = name;
        console.log(name);
        if(data != this.state.data && name != undefined && name!=''){
            this.setState({
                data:data
            });
        }
        console.log(this.state.data);
    }
}
