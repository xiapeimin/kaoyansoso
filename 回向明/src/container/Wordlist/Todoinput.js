import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            n1: '',
            n2: ''
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
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
                style={{width:'90%',height:'15vw',border:'none',left:'5%',position:'relative',
                border:'1px solid black',paddingLeft:'3%'}} 
                placeholder='回车添加单词，点击即可删除' />             
            </div>
        )
    }
}