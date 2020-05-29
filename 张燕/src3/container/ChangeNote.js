import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Popover, NavBar, Icon, Toast } from 'antd-mobile';
import Check from './Popover';

//新增背景颜色记录功能

var fg='';
var savecll='';
const Item = Popover.Item;
var timearr=[];
const myImg = src => <img src={require(`../imgs/${src}.png`)} className="am-icon am-icon-xs" alt="" />;

export default class ChangeNote extends Component{
    state = {
        visible: false,
        selected: '',
        title:'',
        text:'',
        uid:0,
        nid:'',
        notename:'',
        flag:0,
        cll:'#fff',
        storage:window.localStorage,
        imgsarr:[]
    };
    constructor(){
        super();
        var storage = this.state.storage;
        if(storage.getItem('noteback')!=null){
          console.log('xxxx');
            savecll=storage.getItem('noteback');
        }
    }
    componentDidMount(){
        var str = this.props.location.search;    
        var uid = str.split('&')[0].split('=')[1];
        var notename = str.split('&')[1].split('=')[1];
        fg = str.split('&')[2].split('=')[1];
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
                });
                timearr = res.data[0].time.split('-');
                var notetext = document.getElementById('notetext');
                notetext.innerHTML=this.state.text;
                if(res.data[0].nimgs!=null){
                  var imgsarr = res.data[0].nimgs.split(';');
                  this.setState({
                    imgsarr:imgsarr
                  });
                }                
                if(timearr[1].length==1){
                  timearr[1] = '0'+timearr[1];
                }
                if(res.data[0].audiosrc!=null){
                  this.setState({
                    audioSrc:res.data[0].audiosrc
                  });
                }
              
            });

    }

    
      onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
      };
      handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
      };

      getChildrenMsg = (result, inputValue) => {
        var storage = this.state.storage;
        this.setState({
            cll:inputValue[0]
        });
        savecll=inputValue[0];
        storage.setItem('noteback',savecll);
    }
    
    render(){
        var uid = this.state.uid;
        var text = this.state.text;
        var cll = this.state.cll;
        return (
            <div className='testbox' style={savecll!='' ? {background:savecll} : {background:cll}}>
                
                <NavBar
                style={{background:'transparent',color:'#000'}} 
                mode="light"
                ></NavBar>

                <div style={savecll!='' ? {background:savecll,width:'100%'} : {background:cll,width:'100%'}}>
                <div style={{height:'12vw',width:'90%',margin:'0 auto',borderBottom:'1px solid #66cccc',lineHeight:'12vw'}}>
                  <span style={{fontSize:'6vw',marginRight:'1vw'}}>{timearr[2]}</span>{timearr[0]}年{timearr[1]}月/{timearr[3]}
                </div>
                <div style={{width:'90%',paddingTop:'1%',margin:'0 auto'}}>

                    {
                      this.state.audioSrc==undefined
                      ?null
                      :<audio controls src={`http://xpm.xpmwqhzygy.top/getaudio/${this.state.audioSrc}`} className='audio_nt' style={{marginTop:'2vw'}}/>
                    }
                    
                    {/**
                    <textarea value={this.state.text} onChange={this.changeText} style={{width:'100%',padding:'2%',lineHeight:'10vw',border:'none',fontSize:'4.5vw',background:'red'}}>
                        
                    </textarea>
                     */}
                     <div contenteditable="true" autoFocus id='notetext' innerHTML={this.state.text} style={{width:'100%',padding:'2%',lineHeight:'8vw',border:'none',fontSize:'4.5vw',overflowY:'auto'}}>
                        
                     </div>
                    {
                      this.state.imgsarr.map((item,index)=>{
                        return (                                                    
                          <div>
                            <img src={`http://xpm.xpmwqhzygy.top/getntuimgs/${item}`} style={{width:'100%',height:window.innerHeight*0.7,marginBottom:'1%'}} />                                    
                          </div>
                        )
                      })
                    }
                </div>

                <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}>
            
            </div>
            <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                <p style={{height:'70%'}}>确认删除？</p>
                <div className='glin'>
                    <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'49%'}} onClick={this.quxiao}>取消</div>
                    <div onClick={this.sureit}>确认</div>
                </div>
            </div>  

            <NavBar
                style={{background:'transparent',color:'#000',width:'100%',position:'fixed',zIndex:'9999',top:0}} 
                rightContent={
                    <Popover mask
                      overlayClassName="fortest"
                      overlayStyle={{ color: 'currentColor' }}
                      visible={this.state.visible}
                      overlay={[
                        (<Item key="4" value="scan" icon={myImg('baocun')} data-seed="logId"><span onClick={this.saveNote}><div style={{marginTop:'4px'}}>保存</div></span></Item>),
                        (<Item key="5" value="special" icon={myImg('schu')} style={{ whiteSpace: 'nowrap' }}><span onClick={this.delnote}><div style={{marginTop:'5px'}}>删除</div></span></Item>),
                        (<Item key="6" value="button ct" icon={myImg('cll')}>
                          <span style={{ marginRight: 5 }}><div style={{marginTop:'28px'}}><Check parent={this}/></div></span>
                        </Item>),
                      ]}
                      align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-10, 0],
                      }}
                      onVisibleChange={this.handleVisibleChange}
                      onSelect={this.onSelect}
                    >
                      <div style={{
                        height: '100%',
                        padding: '0 15px',
                        marginRight: '-15px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      >
                        <Icon type="ellipsis" />
                      </div>
                    </Popover>
                  }
                leftContent={<Link to={`/note?uid=${uid}&typef=${fg}`}><img src={require('../imgs/zjt2.png')} /></Link>}
                mode="light"
                ><span style={{color:'#000',fontSize:'22px'}}>{this.state.notename}</span></NavBar>

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
        var ntexts = document.getElementById('notetext').innerHTML;
        this.setState({
          text:ntexts
        });
        console.log(ntexts);
        var nid = this.state.nid;
        const post = {
            text:ntexts
        }
        fetch(`http://xpm.xpmwqhzygy.top/note/${nid}`,{
                method:"PUT",
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:JSON.stringify(post)
            })
            .then(res =>res.json())
            .then(data =>{
                Toast.info('保存成功！');
            });
    }
    
    // changeText = (e) => {
    //     console.log(e.target.value);
    //     this.setState({
    //         text:e.target.value
    //     });
    // }
}