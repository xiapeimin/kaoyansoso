import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Popover, NavBar, Icon } from 'antd-mobile';
import Check from './Popover';

//新增背景颜色记录功能

var fg='';
var savecll='';
const Item = Popover.Item;
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
        storage:window.localStorage
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
                })
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
                style={{background:'#fff',color:'#000'}} 
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

                <div style={{width:'90%',paddingTop:'4%',margin:'0 auto'}}>
                    
                    <textarea value={this.state.text} onChange={this.changeText} style={{width:'100%',paddingTop:'2%',lineHeight:'10vw',height:'160vw',border:'none',fontSize:'20px',background:'none'}}>
                        
                    </textarea>
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