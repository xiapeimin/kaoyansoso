import React, { Component } from "react";
import * as _ from "lodash";
import {Link, Redirect} from 'react-router-dom';
import {NavBar} from 'antd-mobile';
import moment from 'moment'
import jifen from '../imgs/jifen.jpg'

var time = new Date(); // Tue Aug 28 2018 09:16:06 GMT+0800 (中国标准时间)；
var timestamp = Date.parse(time); // 1535419062000 （Date.parse() 默认不取毫秒，即后三位毫秒为0）
console.log(timestamp-126)
moment(time).valueOf(); // 1535419062126
var t=moment(timestamp).format().split('T')[0].split('-')[2]; 
class DateItem {
  /**
   *
   * @param  dayNum 日数, 如果和 new Date().getDate() 相等则是今天
   * @param  isSignIn=false 是否签到
   * @param  isShowSignIn=false 是否显示是否签到，大于今日和这个月的日期应该都不显示
   */
  constructor({ dayNum, isSignIn = false, isShowSignIn = false }) {
    Object.assign(this, {
      dayNum,
      isSignIn,
      isShowSignIn,
    });
  }
}
const l = console.log;
const weeks = ["日", "一", "二", "三", "四", "五", "六"];
var plans=[];
var titles=[];
var times=[];
class Test extends Component {
  constructor(){
    super();
    this.state={
      plan:[],
      title:[],
      uid:0,
      isSignIn:false,
      money:0,
      flag:0,
      nextday:Number(t)
    }
  }
  state = {};
  componentWillMount() {
    var str=window.location.hash;
    var uid=str.split('=')[1];
    this.initState();
  }
  componentDidMount(){
    var str=window.location.hash;
    var uid=str.split('=')[1];
    this.setState({
      uid:uid
    })
    console.log(uid)
    var time = new Date(); 
    var timestamp = Date.parse(time); 
    moment(time).valueOf();
    var t=moment(timestamp).format().split('T')[0]; 
    console.log(t);
    fetch(`http://zy.xpmwqhzygy.top/plan/${uid}`,{
      method: 'GET',        
      headers:{
          'Accept':'application/json,text/plain,*/*'
      }
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res.data)
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
    fetch(`http://wqh.xpmwqhzygy.top/querysign/${uid}`,{
            method: 'GET'
            })
            .then((res)=>res.json())
            .then((res)=>{
              // this.setState({
              //   money:5*res.data.length
              // })
                console.log(res.data,'查询成功');
                for(var a=0;a<res.data.length;a++){
                  var y = res.data[a].pridate.split('/')[0]
                  var m = res.data[a].pridate.split('/')[1]
                  if(this.state.year==y&&this.state.month==m){
                  this.setState(state => {
                    const hlist = state.hlist.slice();
                    l(hlist,'111')
                    hlist[res.data[a].i][res.data[a].j].isSignIn = true;
                    return {
                      hlist,
                    };
                  });
                }
                }
            });
  }
  componentWillUpdate(prevProps,prevState){
    var str=window.location.hash;
    var uid=str.split('=')[1];
    if(prevState.year!==this.state.year||prevState.month!==this.state.month){
      fetch(`http://wqh.xpmwqhzygy.top/querysign/${uid}`,{
        method: 'GET'
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.data,'查询成功');
            for(var a=0;a<res.data.length;a++){
              var y = res.data[a].pridate.split('/')[0]
              var m = res.data[a].pridate.split('/')[1]
              if(this.state.year==y&&this.state.month==m){
              this.setState(state => {
                const hlist = state.hlist.slice();
                l(hlist,'111')
                hlist[res.data[a].i][res.data[a].j].isSignIn = true;
                return {
                  hlist,
                };
              });
            }
            }
        });
    }
  }
  initState = ({ y, m } = {}) => {
    const date = new Date();
    const year = y || date.getFullYear(); // 本年
    const month = m || date.getMonth() + 1; // 本月

    l(`${year}年${month}月.`);

    let date2 = new Date(year, month, 0);
    let days = date2.getDate(); // 本月有多少天
    l(`本月有${days}天.`);

    date2.setDate(1);
    let day = date2.getDay(); // 本月第一天是星期几
    l(`本月第一天是星期${day}.`);

    let list = [];
    const nowadays = date.getDate(); // 本日
    const thisMonth = date.getMonth() + 1; // 本月

    let isShowSignIn = false;
    const date2GtDate = date2 > date;
    const isThisMonth = month === thisMonth; // 选择的日期的月份是否是本月

    for (let i = 0; i < days + day; i++) {
      const dayNum = i - day + 1;
      if (date2GtDate) {
        isShowSignIn = false;
      } else {
        if (isThisMonth && i >= day + nowadays) {
          isShowSignIn = false;
        } else {
          isShowSignIn = true;
        }
      }

      if (i < day) {
        list.push(new DateItem({ dayNum: 0, isShowSignIn }));
      } else {
        list.push(new DateItem({ dayNum, isShowSignIn }));
      }
    }
    let hlist = this.getHlist(list, isShowSignIn);
    this.setState({
      date,
      year,
      month,
      days,
      day,
      list,
      hlist,
      nowadays,
      thisMonth,
    });
  };

  // 把一维日期切成二维日期
  getHlist = (list, isShowSignIn) => {
    let hlist = _.chunk(list, 7); // 转化为二维数组
    let len = hlist.length;
    let to = 7 - hlist[len - 1].length;

    // 循环尾部补空格
    for (let i = 0; i < to; i++) {
      hlist[len - 1].push(new DateItem({ dayNum: 0, isShowSignIn }));
    }
    return hlist;
  };

  // 上月
  handlePrevMonth = () => {
    let prevMonth = this.state.month + -1;
    let prevYear = this.state.year;
    if (prevMonth < 1) {
      prevMonth = 12;
      prevYear -= 1;
    }
    this.initState({
      y: prevYear,
      m: prevMonth,
    });
  };

  // 下月
  handleNextMonth = () => {
    let nextMonth = this.state.month + 1;
    let nextYear = this.state.year;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear += 1;
    }
    this.initState({
      y: nextYear,
      m: nextMonth,
    });
  };

  // 点击每个日期
  handleDateItemClick = (dateItem, i, j) => () => {
    const { year, month, date, nowadays } = this.state;
    const { isShowSignIn, isSignIn, dayNum } = dateItem;
    if (dayNum === 0) return;
    const selectDate = new Date(`${year}-${month}-${dayNum}`);
    if (nowadays === dayNum) {
      l(selectDate.toLocaleDateString());
      var str = window.location.hash;
      var uid = str.split('&')[0].split('=')[1];
      var pridate = selectDate.toLocaleDateString();
      var sign = uid+'&'+pridate;
      this.setState({
        flag:1
      })
      const post ={
        uid:uid,
        pridate:pridate,
        i:i,
        j:j,
        sign:sign
       };
        console.log(dayNum,this.state.month,this.state.year,dateItem);
        fetch(`http://wqh.xpmwqhzygy.top/signin`,{
        // post提交
        method:"POST",
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        });
        fetch(`http://zy.xpmwqhzygy.top/moneys/${uid}`,{
          method: 'GET'
          })
          .then((res)=>res.json())
          .then((res)=>{
            if(res.data.length==0){
              const post3={
                uid:uid,
                money:5
              }
              fetch(`http://zy.xpmwqhzygy.top/money`,{
                // post提交
                method:"POST",
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                body:JSON.stringify(post3)//把提交的内容转字符串
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log(data);
                });
            }else{
              const mon=res.data[0].money;
              console.log(mon);
            const post3={
              money:mon+5
            }
            fetch(`http://zy.xpmwqhzygy.top/money/${uid}`,{
              // post提交
              method:"POST",
              headers:{'Content-Type': 'application/x-www-form-urlencoded'},
              body:JSON.stringify(post3)//把提交的内容转字符串
              })
              .then(res =>res.json())
              .then(data =>{
                  console.log(data);
              });
            }
          })

    } else if (selectDate < date) {
      l(selectDate.toLocaleDateString());
      var str = window.location.hash;
      var uid = str.split('&')[0].split('=')[1];
      var pridate = selectDate.toLocaleDateString();
      var sign = uid+'&'+pridate;
      const post2 ={
        uid:uid,
        pridate:pridate,
        i:i,
        j:j,
        sign:sign
       };
       console.log(dayNum,i,j,this.state.month);
        fetch(`http://wqh.xpmwqhzygy.top/signin`,{
        // post提交
        method:"POST",
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        body:JSON.stringify(post2)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        });
    }
    if(dayNum>nowadays){
      this.setState({
        nextday:dayNum
      })
    }
    if (!isShowSignIn || isSignIn)
      // 不能签到的日期和已签到的日期直接返回
      return;
    this.setState(state => {
      const hlist = state.hlist.slice();
      l(hlist,'111')
      hlist[i][j].isSignIn = true;
      return {
        hlist,
      };
    });
  };
  quxiao = () => {
    this.setState({
        flag:0
    });
}
    render() {
        const { year, month, nowadays, thisMonth } = this.state;
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        var day=this.state.nextday;
        let data={day:day,uid:uid}
        let path = {
            pathname: `/addplan`,
            query: data,
        }
        return (
            <div className='testbox'>
                <NavBar style={{background:'#66cccc',color:'#fff',position:'fixed',width:'100%',top:'0'}} 
                leftContent={<Link to={`/appTab?uid=${uid}&type=home`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                rightContent={<Link to={path}><span style={{fontSize:'30px',color:'gray'}}>+</span></Link>}
                ><span style={{color:'#fff',fontSize:'22px'}}>日历表</span></NavBar> 
                <>
          <div style={{width:'100%',height:'50px'}}>
          <span style={{textAlign:'center',fontSize:'23px',width:'80px',float:'left'}} onClick={this.handlePrevMonth}>&lt;</span>
          <h2 style={{width:'60%',float:'left',textAlign:"center",marginTop:'4px'}}>
              {year}年{month}月
          </h2>
         <span style={{textAlign:'center',fontSize:'23px',width:'50px',float:'left'}} onClick={this.handleNextMonth}>&gt;</span>
        </div>
        <table>
          
            <tr>
              {weeks.map(el => (
                <th style={{paddingLeft:"5vw"}} key={el}>{el}</th>
              ))}
            </tr>
            {this.state.hlist.map((el, i) => {
              return (
                <tr key={i}>
                  {el.map((dateItem, j) => {
                    const dayNum = dateItem.dayNum;
                    const isSignIn = dateItem.isSignIn;
                    const isShowSignIn = dateItem.isShowSignIn;
                    return (
                      <td
                        key={j}
                        style={{
                          fontWeight:
                            dayNum === nowadays && month === thisMonth && "bold",
                          textAlign: "center",
                          padding: "",
                          paddingTop:20,
                          width:"15%",

                          border: "0 solid",
                          color: dateItem.isSignIn
                            ? "red"
                            : "black",
                          opacity: dayNum === 0 ? 0 : 1,
                        }}
                        onClick={this.handleDateItemClick(dateItem, i, j)}
                      >
                        <div style={{}}>{dayNum}</div>
                        {!!isShowSignIn && (
                          <div
                            style={{
                              
                              fontSize: "12px",
                            }}
                          >
                            {!!isSignIn ? `已签到` : `未签到`}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          
        </table>
        <div className={this.state.flag == 1 ? 'showgolo golo' : 'golo'}></div>
        <div className={this.state.flag == 1 ? 'showgolo gologin' : 'gologin'}>
                    <img src={jifen} style={{width:"30%",height:'30%',marginTop:"10px"}}/>
                    <h1>+5</h1>
                    <div className='glin'>
                        <div style={{borderRight:'1px solid rgb(211, 211, 208)',width:'100%'}} onClick={this.quxiao}>确定</div>
                    </div>
                </div>
        <div style={{padding:10}}>
          <h1 style={{color:"#66cccc",fontSize:25,fontWeight:"bold",paddingTop:15}}>今日计划:</h1>
          {
            this.state.plan.map((item,index)=>(
              <div style={{width:'100%',padding:'3%'}}>
                <h2 style={{width:'90%',height:'15px'}}>{titles[index]}</h2>
                <p style={{width:'90%',height:'15px',marginLeft:'10px'}}>{item}</p>
              </div>  
            ))
          }
        </div>
      </>

            </div>

        )
    }
}
export default Test;