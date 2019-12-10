import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class CreateNote extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            text:'',
            uid:0,
            flag:0
        }
    }
    componentDidMount(){
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        this.setState({
            uid:uid
        });
    }
    
    render(){
        var uid = this.state.uid;
        
        return (
            <div className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                rightContent={<span onClick={this.saveNote}>保存</span>}
                leftContent={<Link to={`/note?uid=${uid}&typef=home`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>笔记</span></NavBar>

                <div style={{width:'95%',padding:'2.5%',background:'#fff'}}>
                    <input type='text' onChange={this.changeTitle} placeholder='笔记名称' style={{width:'97%',paddingLeft:'3%',border:'1px solid #66cccc',height:'12vw',fontSize:'20px'}} />
                    <textarea placeholder='请输入：' onChange={this.changeText} style={{width:'96%',marginTop:'2vw',height:'160vw',padding:'2%',border:'1px solid #66cccc',fontSize:'20px'}}>
                        
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