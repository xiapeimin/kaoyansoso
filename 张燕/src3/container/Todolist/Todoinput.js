import React, { Component } from 'react';

export default class Todoinput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list:[]
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleGetItem = this.handleGetItem.bind(this);       
    }
    render(){      
        return (
            <div style={{
                paddingLeft:'5%',
                paddingRight:'5%',
                background:'#f4f0f0',
                paddingBottom:'20px'
            }}>
                <div style={{height:'50px',lineHeight:'50px',fontSize:'20px'}}>添加新任务</div>
                
                <input id="inputArea" className="test" value={this.state.inputValue} onChange={this.handleInput} onKeyDown={this.handleKeyDown} style={{
                  width:'70%',
                  height:'40px',
                  border:'1px solid #edc8c8',
                  borderRadius:'5px',
                  paddingLeft:'15px'
                }} autoFocus/> 

                <div onClick={this.handleGetItem} style={{float:'right',height:'40px',width:'20%',lineHeight:'40px',textAlign:'center',borderRadius:'5px',background:'#ebbda9'}}>保存</div>      
                   
            </div>
        )
    }
    
    handleInput(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleKeyDown(e) {
        if (e.keyCode === 13)
            this.handleGetItem();
    }
    handleGetItem() {    
        this.props.parent.getChildrenMsg(this, this.state.inputValue);
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '',
        }))
    }

}

   
  