import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class CreateNote extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            text:''
        }
    }
    
    render(){
        return (
            <div className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                rightContent={<span onClick={this.saveNote}>保存</span>}
                leftContent={<Link to={'/note'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>笔记</span></NavBar>

                <div style={{width:'95%',padding:'2.5%',background:'#fff'}}>
                    <input type='text' onChange={this.changeTitle} style={{width:'95%',paddingLeft:'5%',border:'1px solid #66cccc',height:'12vw'}} />
                    <textarea onChange={this.changeText} style={{width:'96%',marginTop:'2vw',height:'160vw',padding:'2%',border:'1px solid #66cccc'}}>
                        
                    </textarea>
                </div>


            </div>       
        )
    }
    saveNote = () => {

    }
    changeTitle = (e) => {
        console.log(e.target.value);
    }
    changeText = (e) => {
        console.log(e.target.value);
    }
}