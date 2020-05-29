import React, { Component } from 'react'

export default class Todoinput1 extends Component {
    constructor(){
        super();
        this.state = {
            n1: '',
            n2: ''
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo1(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>              
                <input name="n1" onChange={this.handleChange} 
                value={this.state.n1} onKeyDown={(e)=>this.handleInput(e)} type="text"
                style={{width:'100%',height:'15vw',marginTop:'3%',border:'none',borderBottom:'1px solid black',paddingLeft:'3%'}} placeholder='回车添加单词，点击即可删除'/>             
            </div>
        )
    }
}