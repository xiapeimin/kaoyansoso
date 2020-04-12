import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Carousel,Accordion,List,SearchBar,Grid} from 'antd-mobile';
import vedio2 from '../imgs/vedio2.mp4';

var u=0;
const gridArr = [
    '信息库','研题库','找资源','背单词','笔记本','研百科'
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
var data2 = new Date('2019-12-21');

var m = data.getMonth()+1;
var d = data.getDate();
var time=''+m+d;

export default class Apphome extends Component{    
    constructor(props){
        super(props);
        this.state = {
            uid:0,
            value: '老梁观世界：3分钟告诉迷茫的你，考研到...', //视频说明文字有bug
            data: ['1', '2', '3'],
            imgHeight: 176,
            dkNum: 0,//后台数据 根据不同用户
            dkText:'',
            dKflag:0,
            days: parseInt((data2.getTime()-data.getTime()) / (24*60*60*1000))+1
        }
        console.log(this.props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['1', '2', '3']
            });
        }, 100);
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
    changeSec = (e) => {
        var year = e.target.value-1;
        var d = new Date(year+'-12-21');
        var days = parseInt((d.getTime()-data.getTime()) / (24*60*60*1000))+1;
        this.setState({
            days:days
        })
    }
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
        return (
            <div>     
                          
                <Link to={`/search?uid=${uid}&type=home&his=yes`}><SearchBar placeholder="Search" maxLength={8} /></Link>

                <Carousel
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
                </Carousel>

                <div className='daka'>
                    <div className='time'>
                        <span><select className='tes' onClick={this.changeSec}>
                            <option value ="2020">2020</option>
                            <option value ="2021">2021</option>
                            <option value="2022">2022</option>
                        </select></span> 届考研倒计时
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

                <div className='rem'>
                    <div className='ved1' style={{borderBottom: '1px solid rgb(185, 184, 184)'}}>
                        <img src={require('../imgs/tj.png')} className='vimg1' /><i class="visible"></i>
                        <span> 推荐热点</span>
                        <span style={{float:'right'}}>更多 >></span>
                    </div>
                    <PlaceHolder />
                </div>

                <div className='bom'>亲，我也是有底线的哦~</div>
             
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