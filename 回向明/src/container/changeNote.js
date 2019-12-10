import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class ChangeNote extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            text:'',
            uid:0,
            nid:'',
            notename:'',
            flag:0
        }
    }
    componentDidMount(){
        var str = this.props.location.search;    
        var uid = str.split('&')[0].split('=')[1];
        var notename = str.split('&')[1].split('=')[1];
        var nid = uid+notename;
        this.setState({
            uid:uid,
            notename:notename,
            nid:nid
        });  
          
        fetch(`http://xpm.xpmwqhzygy.top/detailnote/${nid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data));
                this.setState({
                    text:res.data[0].text
                })
            });

    }
    
    render(){
        var uid = this.state.uid;
        var text = this.state.text;
        return (
            <div className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                rightContent={<div><span onClick={this.delnote} style={{color:'red',marginRight:'7px'}}>删除</span><span onClick={this.saveNote}>保存</span></div>}
                leftContent={<Link to={`/note?uid=${uid}&typef=home`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>{this.state.notename}</span></NavBar>

                <div style={{width:'95%',padding:'2.5%',background:'#fff'}}>
                    
                    <textarea value={this.state.text} onChange={this.changeText} style={{width:'96%',marginTop:'2vw',height:'160vw',padding:'2%',border:'none',fontSize:'20px'}}>
                        
                    </textarea>
                </div>

                <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}>
            
            </div>
            <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                <p>确认删除？</p>
                <div className='glin'>
                    <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                    <div onClick={this.sureit}>确认</div>
                </div>
            </div>  


            </div>       
        )
    }
    quxiao = () => {
        this.setState({
            flag:0
        })
    }
    sureit = () => {
        var nid = this.state.nid;
        var uid = this.state.uid;
        fetch(`http://xpm.xpmwqhzygy.top/note/${nid}`,{
                method:"DELETE",
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                this.setState({
                    flag:0
                });
                window.location.hash=`/note?uid=${uid}&typef=home`;
            });
        
        
    }
    delnote = () => {
        this.setState({
            flag:1
        });
    }
    saveNote = () => {
        console.log(this.state.text);
        var nid = this.state.nid;
        const post = {
            text:this.state.text
        }
        fetch(`http://xpm.xpmwqhzygy.top/note/${nid}`,{
                method:"PUT",
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:JSON.stringify(post)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
            });
    }
    
    changeText = (e) => {
        console.log(e.target.value);
        this.setState({
            text:e.target.value
        });
    }
}