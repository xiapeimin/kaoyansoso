import React, { Component } from 'react';
import {Flex} from 'antd-mobile';

export default class Todoing extends Component {
    render() {
        return (
            <div>    
                {
                this.props.todo.map(
                    (item,idx)=>
                    <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',background:'#fff',
                    fontSize:'20px'}} onClick={()=>{this.props.delTodo(idx)}}>
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        onClick={()=>{this.props.delTodo(idx)}}>{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }
                   </div>
        )
    }
}