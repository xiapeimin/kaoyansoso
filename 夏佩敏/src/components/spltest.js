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
        
        fetch(`http://xpm.xpmwqhzygy.top/uid`,{
            method: 'GET'
            })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.data);
            console.log(typeof(res.data));
            this.setState({
                data:res.data
            });          
        });
        console.log(this.state.data);
        console.log('///////////////////');

    }
    

    render(){
        return (
            
            <div>
                <p>llllllllllllll</p>
                {
                   this.state.data.map((item,index)=>(                      
                        <div>{item.username}</div>
                    ))
                }
                
              
            </div>
        )
    }

}
