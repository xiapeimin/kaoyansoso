import React, {Component} from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';

export default class All extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            text:''
        }
    }
   
    componentDidMount(){       
        
        fetch(`http://xpm.xpmwqhzygy.top/json`,{
            method: 'GET'
            })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.data[0].username);
            this.setState({
                //text:res
            });          
        });
        //console.log(this.state.text);
        console.log('///////////////////');

    }
    

    render(){
        return (
            
            <div>
                <p>llllllllllllll</p>
                {
                    this.state.data.map((item)=>(                      
                        <div>{item}</div>
                    ))
                }
                
              
            </div>
        )
    }

}
