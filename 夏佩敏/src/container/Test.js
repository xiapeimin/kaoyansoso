import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import imgsrc1 from '../imgs/yhsc.png';
import imgsrc2 from '../imgs/yhsc2.png';
import img2008yingyu from '../imgs/2008yingyu1.png'
import img2015zhengzhi from '../imgs/2008zhengzhi.png'
import img2018shuxue from '../imgs/2018shuxue.png'
import img2016ruanjian from '../imgs/2016ruanjian.png'
import imgfali from '../imgs/fali.png'
import imggongzheng from '../imgs/gongzheng.png'

export default class Test extends Component{
    constructor(){
        super();
        this.state={
            id:1,
            flag:1,
            todo1:[],
            touchState: false
        }
    }
    componentDidMount(){  //跳转方法不好 用search 或者 context传值
        var str = this.props.location.search;
        var arr = str.split('&');
        var arr1 = arr[0];
        var arr2 = arr[1];
        var id = arr1.split('=')[1];
        var flag = arr2.split('=')[1];
        this.setState({
            id:id,
            flag:flag,
        })
        if(flag == 1){
            this.setState({
                todo1:[img2008yingyu]
            });
        }
        else if(flag == 2){
            this.setState({
                todo1:[img2015zhengzhi]
            })
        }
        else if(flag == 3){
            this.setState({
                todo1:[img2018shuxue]
            })
        }
        else if(flag == 4){
            this.setState({
                todo1:[img2016ruanjian]
            })
        }
        else if(flag == 5){
            this.setState({
                todo1:[imgfali]
            })
        }
        else if(flag == 6){
            this.setState({
                todo1:[imggongzheng]
            })
        }
    }
    
    render(){
        var flag = this.state.flag;
        var id = this.state.id;
        return (
            <div>
                <NavBar
                style={{background:'#b17ccc',color:'#fff'}} 
                rightContent={<img onClick={this.changgesrc} src={this.state.touchState ? imgsrc2 : imgsrc1} />}
                leftContent={<Link to={`/testList/${flag}`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>历年真题</span></NavBar>

               <div>{
                    this.state.todo1.map(
                        (item)=><img src={item} height='700px' width='100%' controls='controls' object-fit='container'/>                                       
                    )
               }
                </div>

            </div>       
        )
    }
    changgesrc = () => {
        console.log('imglll');
        this.setState({ touchState: !this.state.touchState });
    }
    
        
}