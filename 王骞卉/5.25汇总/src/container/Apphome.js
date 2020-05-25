import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Carousel,Accordion,List,SearchBar,Grid,PickerView,NoticeBar} from 'antd-mobile';
import vedio2 from '../imgs/vedio2.mp4';
import TextScroll from 'react-textscroll'

/**引入年份选择器 代替select选择年份 
 * 修改倒计时bug
 * 找资源改为日历表
*/
import Pickeryear from '../com_xpm/picker/Pickeryear';
import '../com_xpm/picker/picker.css';
import moment from 'moment'

var plans=[];
var titles=[];
var times=[];
const testyear = [
    {
      label: '2021',
      value: '2021',
    },
    {
      label: '2022',
      value: '2022',
    },
    {
      label: '2023',
      value: '2023',
    },
    {
      label: '2024',
      value: '2024',
    },
    {
      label: '2025',
      value: '2025',
    }
];

var u=0;
const gridArr = [
    '信息库','研题库','日历表','背单词','笔记本','研百科'
];
const griddata = gridArr.map((_val, i) => ({
    icon: require(`../imgs/grid${i}.png`),
    text:_val,
}));
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <Link to={`/remFire?uid=${u}&id=1`}><div className='pla'>
            <img src={require('../imgs/rd1.jpg')} className='pla1' /><i class="visible"></i>
            <div className='pla2'>
                <div className='title'>2019年ESI中国大学综合排名</div>
                <div className='timev'>
                    <img src={require('../imgs/time.png')} className='timeimg1'/>
                    <span className='spr1' style={{color:'rgb(170, 165, 165)'}}>刚刚</span>
                    <span className='spr2' style={{color:'rgb(170, 165, 165)'}}>668</span>
                    <img src={require('../imgs/view.png')} className='timeimg2' />              
                </div>
            </div>
        </div></Link>
        <Link to={`/remFire?uid=${u}&id=2`}><div className='pla'>
            <img src={require('../imgs/rd2.jpg')} className='pla1' /><i class="visible"></i>
            <div className='pla2'>
                <div className='title'>2021考研：心理学与教育学考研哪个更容易</div>
                <div className='timev'>
                    <img src={require('../imgs/time.png')} className='timeimg1'/>
                    <span className='spr1' style={{color:'rgb(170, 165, 165)'}}>1天前</span>
                    <span className='spr2' style={{color:'rgb(170, 165, 165)'}}>121</span>
                    <img src={require('../imgs/view.png')} className='timeimg2' />              
                </div>
            </div>
        </div></Link>
        <Link to={`/remFire?uid=${u}&id=3`}><div className='pla'>
            <img src={require('../imgs/rd3.jpg')} className='pla1' /><i class="visible"></i>
            <div className='pla2'>
                <div className='title'>考研热度持续升温，2021考研形势如何？</div>
                <div className='timev'>
                    <img src={require('../imgs/time.png')} className='timeimg1'/>
                    <span className='spr1' style={{color:'rgb(170, 165, 165)'}}>5天前</span>
                    <span className='spr2' style={{color:'rgb(170, 165, 165)'}}>167</span>
                    <img src={require('../imgs/view.png')} className='timeimg2' />              
                </div>
            </div>
        </div></Link>
        <Link to={`/remFire?uid=${u}&id=4`}><div className='pla'>
            <img src={require('../imgs/rd4.jpg')} className='pla1' /><i class="visible"></i>
            <div className='pla2'>
                <div className='title'>考前放松,改善情绪和睡眠，这些神器帮助你</div>
                <div className='timev'>
                    <img src={require('../imgs/time.png')} className='timeimg1'/>
                    <span className='spr1' style={{color:'rgb(170, 165, 165)'}}>2019-11-21</span>
                    <span className='spr2' style={{color:'rgb(170, 165, 165)'}}>109</span>
                    <img src={require('../imgs/view.png')} className='timeimg2' />              
                </div>
            </div>
        </div></Link>
        <Link to={`/remFire?uid=${u}&id=5`}><div className='pla'>
            <img src={require('../imgs/rd5.jpg')} className='pla1' /><i class="visible"></i>
            <div className='pla2'>
                <div className='title'>考研在即：历年考研政治真题去哪找？</div>
                <div className='timev'>
                    <img src={require('../imgs/time.png')} className='timeimg1'/>
                    <span className='spr1' style={{color:'rgb(170, 165, 165)'}}>2019-11-19</span>
                    <span className='spr2' style={{color:'rgb(170, 165, 165)'}}>229</span>
                    <img src={require('../imgs/view.png')} className='timeimg2' />              
                </div>
            </div>
        </div></Link>
    </div>
);
  
var data = new Date();
var data2 = new Date('2020-12-21');

var m = data.getMonth()+1;
var d = data.getDate();
var time=''+m+d;
var slog=['有一言可以终身行之者乎？子曰：其恕乎，己所不欲勿施于人','千里之行，始于足下','少年易学老难成，一寸光阴不可轻','海纳百川有容乃大；壁立千仞无欲则刚','玉不琢、不成器，人不学、不知义','业精于勤，荒于嬉；行成于思，毁于随','三更灯火五更鸡，正是男儿读书时，黑发不知勤学早，白首方悔读书迟','莫等闲，白了少年头，空悲切','一寸光阴一寸金，寸金难买寸光阴','纸上得来终觉浅，绝知此事要躬行'];

export default class Apphome extends Component{    
    constructor(props){
        super(props);
        this.state = {
            uid:0,
            text:'',
            value: '老梁观世界：3分钟告诉迷茫的你，考研到...', //视频说明文字有bug
            data: ['1', '2', '3'],
            imgHeight: 176,
            dkNum: 0,//后台数据 根据不同用户
            dkText:'',
            dKflag:0,
            days: parseInt((data2.getTime()-data.getTime()) / (24*60*60*1000))+1,
            picker:0, /**是否显示选择器 */
            picker_value:null, /**修改后的年份 */
            plan:[],
            title:[]
        }
        console.log(this.props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['1', '2', '3']
            });
        }, 100);
        var day=String(d/10);
        const s = day.replace(/\d+\.(\d*)/, '$1')
        var dkarr=[];
        var uid;
        var str = window.location.hash;
        if(str.indexOf('&')>=0){
            uid = str.split('&')[0].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
        }else{
            uid = str.split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid
            });
        }
        
        if(uid!='undefined'){
            console.log('ooooooo');
            fetch(`http://xpm.xpmwqhzygy.top/daka/${uid}`,{
            method: 'GET',
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                dkarr=res.data;
                this.setState({
                    dkNum:parseInt(res.data[0].num)
                });
                if(this.state.dkNum!=0 && dkarr[0].time==time){
                    var num = this.state.dkNum;
                    this.setState({
                        dkText:'累计打卡：'+num+'天',
                        dKflag:0
                    });
                }else{
                    this.setState({
                        dkText:'打卡',
                        dKflag:1
                    });
                }             
            });
        }
        
        if(uid != 'undefined'){
            fetch(`http://xpm.xpmwqhzygy.top/user/${uid}`,{
            method: 'GET',        
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                console.log(typeof(res.data)); 
                if(res.data[0].xyan == '未填写'){
                    this.setState({
                        text:slog[s]
                    })
                }else{
                    this.setState({
                        username:res.data[0].username,
                        text:res.data[0].xyan
                    }); 
                }
            });
            //每日计划
            var time = new Date(); 
            var timestamp = Date.parse(time); 
            console.log(timestamp-126)
            moment(time).valueOf();
            var t=moment(timestamp).format().split('T')[0]; 
            fetch(`http://zy.xpmwqhzygy.top/plan/${uid}`,{
                method: 'GET',        
                headers:{
                    'Accept':'application/json,text/plain,*/*'
                }
                })
                .then((res)=>res.json())
                .then((res)=>{
                   for(var i=0;i<res.data.length;i++){
                     if(res.data[i].time.split('T')[0]==t){
                      plans[i]=res.data[i].plan.split('&')[1];
                      titles[i]=res.data[i].plan.split('&')[0];
                      times[i]=res.data[i].time.split('T')[0];
                     }
                   }
                        this.setState({
                          plan:plans,
                          title:titles
                        })   
                })
        }
        
    }

    onc = (e) => {
        console.log(e.target);
        if(this.state.flag === 0){
            this.setState({
                value:'老梁观世界：3分钟告诉迷茫的你，考研到底',
                flag:1
            })
        }else{
            this.setState({
                value:'老梁观世界：3分钟告诉迷茫的你，考研到...',
                flag:0
            })
        }
    }
    // changeSec = (e) => {
    //     var year = e.target.value-1;
    //     var d = new Date(year+'-12-21');
    //     var days = parseInt((d.getTime()-data.getTime()) / (24*60*60*1000))+1;
    //     this.setState({
    //         days:days
    //     });
    // }
    /**年份选择 倒计时优化 */
    onChange = (value) => {
        this.setState({
            picker_value:value,
            picker:0
        });
        var year = value[0]-1;
        var d = new Date(year+'-12-21');
        var days = parseInt((d.getTime()-data.getTime()) / (24*60*60*1000))+1;
        this.setState({
            days:days
        });
    }

    pickerchange = () => {
        this.setState({
            picker:1
        });
    }
    /**end */
    
    changeText = () => {
        var uid = this.state.uid;
        var num;
        if(this.state.dKflag == 1){
            num = this.state.dkNum+1;  //累计打卡次传后台
            this.setState({
                dkText:'累计打卡：'+num+'天',
                dkNum:num
            });
            const post = {
                num:num,
                time:time
            }
            fetch(`http://xpm.xpmwqhzygy.top/daka/${uid}`,{
                method:"PUT",
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:JSON.stringify(post)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
            });
        }
        this.setState({
            dKflag:0
        });
        
        
    }

    render() {
        var uid = this.state.uid;
        u = this.state.uid;
        var word = this.state.text;
        var txt = word.split(',');
        return (
            <div>     
                          
                <Link to={`/search?uid=${uid}&type=home&his=yes`}><SearchBar placeholder="Search" maxLength={8} /></Link>
                <div style={{color:'#6cc',
                    marginBottom:'5vw',
                    backgroundColor:'white',
                    marginTop:'1vw',
                    fontSize:'20px'}}>
                    <TextScroll 
                    mode='horizontal'
                    text={txt} 
                    speed={4000}/>
                    
                </div>
                {/* <Carousel
                    autoplay
                    infinite
                    >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <Link to={`/carousel?id=${val}&uid=${uid}`}><img
                                src={require(`../imgs/lunbo${val}.jpg`)}
                                alt=""
                                style={{ width: '100%',verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}/></Link>
                            </a>
                        ))}
                </Carousel> */}

                <div className='daka'>
                    <div className='time'>
                        <span className='tes' onClick={this.pickerchange}>
                            {this.state.picker_value==null ? '2021' : this.state.picker_value}
                            {/**
                            <select className='tes' onClick={this.changeSec}>
                            <option value ="2021">2021</option>
                            <option value ="2022">2022</option>
                            <option value="2023">2023</option>
                            </select>
                             */}
                        </span> 届考研倒计时
                    </div>
                    <div className='dk'>           
                        <div className='dk1'><span>{this.state.days}</span> 天</div>
                        <div className='dk2' onClick={this.changeText}>&nbsp;&nbsp;{this.state.dkText}&nbsp;&nbsp; </div>
                    </div>
                </div>

                <Grid data={griddata} columnNum={3} onClick={this.onclickGrid}/>

                <div className='ved'>
                    <div className='ved1'>
                        <img src={require('../imgs/sp.png')} className='vimg1' /><i class="visible"></i>
                        <span> 免费课程</span>
                        <Link to={`/video?uid=${uid}&flag=more`}><span style={{float:'right',color:'#000'}}>更多 >></span></Link>
                    </div>
                    <video height='175px' controls='controls'>
                        <source src={vedio2} type='video/mp4' />
                        <source src={vedio2} type='video/ogg' />
                        您的浏览器不支持Video
                    </video>
                    <Link to={`/vplay?uid=${uid}&flag=home&id=3`}><div onClick={this.onc}>
                        <Accordion accordion openAnimation={{}} className="acc">
                            <Accordion.Panel header={this.state.value} className="pad">
                                <List className='accList'><List.Item>值不值</List.Item></List>
                            </Accordion.Panel>
                        </Accordion>
                    </div></Link>
                </div>
                {/* <div style={{padding:10,width:'100%'}}>
                        <div style={{width:'100%',height:'50px'}}>
                            <h1 style={{color:"#66cccc",fontSize:25,fontWeight:"bold",float:'left'}}>今日计划:</h1>
                            <span style={{float:"left",marginTop:"1%",fontSize:'20px',float:'right',marginRight:"30px",color:'red'}}>距截止还有3小时</span>
                        </div>
                        {
                            this.state.plan.map((item,index)=>(
                            <div style={{width:'100%',paddingLeft:'5%'}}>
                                <h2 style={{width:'90%',height:'15px'}}>{titles[index]}</h2>
                                <p style={{width:'90%',height:'15px',marginLeft:'10px'}}>{item}</p>
                            </div>  
                            ))
                        }
                </div> */}
                <div className='rem'>
                    <div className='ved1' style={{borderBottom: '1px solid rgb(185, 184, 184)'}}>
                        <img src={require('../imgs/tj.png')} className='vimg1' /><i class="visible"></i>
                        <span> 推荐热点</span>
                        <span style={{float:'right'}}>更多 >></span>
                    </div>
                    <PlaceHolder />
                </div>

                <div className='bom'>亲，我也是有底线的哦~</div>

                {/**引入 */}
                <div className='absu_xpm'  style={this.state.picker==1 ? {opacity:1} : {opacity:0,top:'-30%'}}>
                    <PickerView
                    data={testyear}
                    cascade={false}
                    value={this.state.picker_value}
                    onChange={this.onChange}       
                    />
                    <div style={{display:'none'}}><Pickeryear /></div>
                </div>
                {/**end */}
             
            </div>
        )
    }

    onclickGrid = (el,index) => {
        var uid = this.state.uid;
        if(index == 0){
            this.props.history.push(`/confirmSchool?uid=${uid}`);
        }else if(index == 1){
            this.props.history.push(`/questionBank?uid=${uid}`);
        }else if(index == 2){
            this.props.history.push(`/searchInfo?uid=${uid}`);
        }else if(index == 3){
            this.props.history.push(`/words?uid=${uid}`);
        }else if(index == 4){
            this.props.history.push(`/note?uid=${uid}&typef=home`);
        }else if(index == 5){
            this.props.history.push(`/tools?uid=${uid}`);
        }
        
    }
}