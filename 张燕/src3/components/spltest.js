import React, {Component} from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';

import Test from '../container/WordsCheck';
import Popover from '../container/Popover';
import Share from '../container/Share';

export default class All extends Component{
    constructor(props){
        super(props);
        this.state = {
            //data: [],
            text:'',
            imgsrc:''
        }
    }
   
    componentDidMount(){       
        
        fetch(`http://xpm.xpmwqhzygy.top/captcha`,{
            method: 'GET'
            })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            console.log(typeof(res));
            this.setState({
                imgsrc:res
            });          
        });
        //console.log(this.state.data);
        console.log('///////////////////');

    }
    

    render(){
        return (
            
            <div>
                <p>llllllllllllll</p>
             
                <Share />
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                
                <img src="http://xpm.xpmwqhzygy.top/captcha" alt="captcha" onClick={this.editCaptcha} />
              
            </div>
        )
    }
    editCaptcha = (e) => {
        console.log(e.target.src);
        e.target.src="http://xpm.xpmwqhzygy.top/captcha?="+Math.random();
    }

}
