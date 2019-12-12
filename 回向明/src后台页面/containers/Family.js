import React,{Component} from 'react';

var data = new Date();
var m = data.getMonth()+1;
var d = data.getDate();
var time=''+m+d;
console.log(time);
export default class AppNear extends Component{
    constructor(){
        super();
        this.state={
            newnum:0,
            sumnum:0,
            topicnum:0
        }
    }
    componentDidMount(){
        fetch(`http://xpm.xpmwqhzygy.top/newuser/${time}`,{
                    method: 'GET'
                    })
                    .then((res)=>res.json())
                    .then((res)=>{
                        console.log(res.data.length);
                        console.log(typeof(res.data));
                        this.setState({
                            newnum:res.data.length
                        });    
                        console.log('lllll');
                    });
                    console.log('kkkkk');
        fetch(`http://xpm.xpmwqhzygy.top/user`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data.length);
                console.log(typeof(res.data));
                this.setState({
                    sumnum:res.data.length
                });    
            });

            fetch(`http://zy.xpmwqhzygy.top/all`,{
                method: 'GET'
                })
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res.data.length);
                    console.log(typeof(res.data));
                    this.setState({
                        topicnum:res.data.length
                    });    
                });
            
                
    }
    
    render(){
        
        return (
            <div>
                <div className='fam_xpm'>
                    <div style={{marginRight:'4.5%',background:'rgb(238, 133, 119)'}}><p>新增用户数</p><p>{this.state.newnum}</p></div>
                    <div style={{marginRight:'4.5%',background:'rgb(64, 192, 5)'}}><p>总用户数量</p><p>{this.state.sumnum}</p></div>
                    <div style={{background:'rgb(88, 155, 231)'}}><p>用户动态数</p><p>{this.state.topicnum}</p></div>
                </div>
            </div>       
        )
    }
}