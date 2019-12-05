import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import Note from './Note';

export default class CreateNote extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            text:'',
            name:''
        }
    }
    
    render(){
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        return (
            <div className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                rightContent={<span onClick={this.saveNote}>保存</span>}
                leftContent={<Link to={`/note?uid=${uid}&typef=home`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>笔记</span></NavBar>

                <div style={{width:'95%',padding:'2.5%',background:'#fff'}}>
                    <input type='text' onChange={this.changeTitle} placeholder='笔记名称' style={{width:'95%',paddingLeft:'5%',border:'1px solid #66cccc',height:'12vw'}} />
                    <textarea placeholder='请输入：' onChange={this.changeText} style={{width:'96%',marginTop:'2vw',height:'160vw',padding:'2%',border:'1px solid #66cccc'}}>
                        
                    </textarea>
                </div>

                {/**<div style={{display:'none'}}><Note name={this.state.name} /></div> */}
            </div>       
        )
    }
    saveNote = () => {
        var name=this.state.title;
        this.setState({
            name:name
        })
    }
    changeTitle = (e) => {
        this.setState({
            title:e.target.value
        })
    }
    changeText = (e) => {
        this.setState({
            text:e.target.value
        })
    }
}