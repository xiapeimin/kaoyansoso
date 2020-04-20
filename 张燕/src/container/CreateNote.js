import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import WordsCheck from '../container/WordsCheck';

//新增背景颜色记录功能

var fg='';
var cl='#fff';
var savecll='';
export default class CreateNote extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            text:'',
            uid:0,
            flag:0,
            cll:'#fff',
            storage:window.localStorage
        };
        var storage = this.state.storage;
        if(storage.getItem('noteback')!=null){
            savecll=storage.getItem('noteback');
        }
        
    }
    componentDidMount(){  // background:`url(${cnote}) no-repeat`,backgroundSize:'100% 100%'
        var str = this.props.location.search;
        var uid = str.split('&')[0].split('=')[1];
        fg = str.split('&')[1].split('=')[1]
        this.setState({
            uid:uid
        });
    }

    getChildrenMsg = (result, inputValue) => {
        var storage = this.state.storage;
        cl=inputValue[0];
        this.setState({
            cll:inputValue[0]
        });
        savecll=inputValue[0];
        storage.setItem('noteback',cl);
    }
    
    render(){
        var uid = this.state.uid;
        console.log(this.state.cll);
        var cll = this.state.cll;
        return (
            <div className='testbox' style={savecll!='' ? {background:savecll} : {background:cll}}>
                <NavBar
                style={{background:'#fff',color:'#000'}} 
                rightContent={<div><span onClick={this.saveNote}>保存</span><div style={{float:'right',marginLeft:'5px',marginTop:'2px'}}><WordsCheck parent={this} /></div></div>}
                leftContent={<Link to={`/note?uid=${uid}&typef=${fg}`}><img src={require('../imgs/zjt2.png')} /></Link>}
                mode="light"
                ><span style={{color:'#000',fontSize:'22px'}}>笔记</span></NavBar>

                <div style={{width:'90%',paddingTop:'4%',margin:'0 auto'}}>
                    <input type='text' onChange={this.changeTitle} placeholder='笔记名称' style={{width:'100%',border:'none',borderBottom:'2px solid #66cccc',height:'11vw',background:'none',fontSize:'20px'}} />
                    <textarea placeholder='请输入：' onChange={this.changeText} style={{width:'100%',lineHeight:'10vw',height:'160vw',marginTop:'-1vw',border:'none',fontSize:'20px',background:'none'}}>
                        
                    </textarea>
                </div>

                <div style={{display:this.state.flag==0 ? 'none' : 'block',position:'absolute',top:'40%',width:'50%',left:'25%',color:'#fff',borderRadius:'1vw',background:'#66cccc',height:'8vw',lineHeight:'8vw',textAlign:'center'}}>笔记本重名！请重新编辑...</div>
                
            </div>       
        )
    }
    saveNote = () => {
        if(this.state.title!=''){
            var data=[];
        var nid=this.state.uid + this.state.title;
        var uid = this.state.uid;
        fetch(`http://xpm.xpmwqhzygy.top/note/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
                data=res.data; 
                console.log(data);
                for(var i=0;i<data.length;i++){
                    if(this.state.title==data[i].notename){
                        i=data.length;
                        this.setState({
                            flag:1
                        });
                        var t=1;
                        var tid = setInterval(()=>{
                            t=t-1;
                            if(t<0){
                                this.setState({
                                    flag:0
                                })
                                clearInterval(tid);
                            }
                        },1000);
                        console.log('笔记重名');
                    }else if(i == data.length-1 && this.state.title!=data[i].notename){
                        const post ={
                            nid:nid,
                            uid:this.state.uid,
                            notename:this.state.title,
                            text:this.state.text
                        };
                        console.log('nnnnnnnn');
                        fetch(`http://xpm.xpmwqhzygy.top/note`,{
                            method:"POST",
                            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                            body:JSON.stringify(post)//把提交的内容转字符串
                        })
                        .then(res =>res.json())
                        .then(data =>{
                            console.log(data);
                        });
                    }
                }
                if(data.length==0){
                    const post ={
                        nid:nid,
                        uid:this.state.uid,
                        notename:this.state.title,
                        text:this.state.text
                    };
                    console.log('nnnnnnnn');
                    fetch(`http://xpm.xpmwqhzygy.top/note`,{
                        method:"POST",
                        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                        body:JSON.stringify(post)//把提交的内容转字符串
                    })
                    .then(res =>res.json())
                    .then(data =>{
                        console.log(data);
                    });
                }

            });
        }
        
    }
    changeTitle = (e) => {
        this.setState({
            title:e.target.value
        })
    }
    changeText = (e) => {
        this.setState({
            text:e.target.value
        })
    }
}