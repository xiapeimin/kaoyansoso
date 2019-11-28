import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar, WingBlank,Flex,Carousel,Icon,SearchBar} from 'antd-mobile';
export default class TIKu extends Component {
    render() {
        return (
            <div>
                 <NavBar   
                style={{backgroundColor:'#9c692d',color:'black',height:'15vw'}}                             
                    ><Link to='/yantiku'><div style={{height:'5vw',width:'5vw',marginLeft:'-32vw'}}>
                        <img  style={{height:'5vw',width:'5vw'}} src={require('../images/jiantou.png')}/></div></Link>
                        <span style={{color:'black',fontSize:'8vw',height:'10vw'}}>政治真题</span></NavBar>
            </div>
        )
    }
}
