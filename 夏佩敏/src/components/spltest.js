import React, {Component} from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';

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
                
                <img src="http://xpm.xpmwqhzygy.top/captcha" alt="captcha" onClick={this.editCaptcha} />
              
            </div>
        )
    }
    editCaptcha = (e) => {
        console.log(e.target.src);
        e.target.src="http://xpm.xpmwqhzygy.top/captcha?="+Math.random();
    }

}
