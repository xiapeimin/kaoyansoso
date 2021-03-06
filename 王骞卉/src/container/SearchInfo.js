import React, { Component } from "react";
import * as _ from "lodash";
import {Link} from 'react-router-dom';
import {NavBar,SearchBar} from 'antd-mobile';

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
class Test extends Component {
  state = {};
  componentWillMount() {
    this.initState();
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
      l("签到");
    } else if (selectDate < date) {
      l("补签");
    }

    if (!isShowSignIn || isSignIn)
      // 不能签到的日期和已签到的日期直接返回
      return;

    this.setState(state => {
      const hlist = state.hlist.slice();
      hlist[i][j].isSignIn = true;
      return {
        hlist,
      };
    });
  };
    render() {
        const { year, month, nowadays, thisMonth } = this.state;
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        return (
            <div className='testbox'>
                 <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/appTab?uid=${uid}&type=home`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>日历表</span></NavBar> 
                <>
        <h2 style={{paddingLeft:'35%',backgroundColor:'gray'}}>
          {year}年,{month}月
        </h2>
        <div>
          <button style={{height:'30px',width:'80px'}} onClick={this.handlePrevMonth}>上月</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button  style={{height:'30px',width:'80px'}}onClick={this.handleNextMonth}>下月</button>
        </div>
        <table>
          <tbody>
            <tr>
              {weeks.map(el => (
                <th style={{paddingLeft:22}} key={el}>{el}</th>
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
                          color:
                            dayNum === nowadays && month === thisMonth && "red",
                          textAlign: "center",
                          padding: 9,
                          margin:2,

                          border: "0 solid",
                          backgroundColor: dateItem.isSignIn
                            ? "gray"
                            : "transparent",
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
          </tbody>
        </table>
      </>
                
                {/* <Link to={`/search?uid=${uid}&type=resourse&his=yes`}><SearchBar value={'这里啥都有~'} placeholder="Search" cancelText={'搜索'} /></Link> */}

                {/**
                <Link to={`/sear/?uid=${uid}&type=mus`}>
                <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'10vw'}}>                             
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/music.jpg')}/>
                    
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        音视频
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex> 
                    </Flex.Item>
                    </Link> */}
            
                    {/* <Link to={`/sear/?uid=${uid}&type=text`}>
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'15vw'}}>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/music.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        考研文本资料
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Flex.Item>
                    </Link>
                     
                    <Link to={`/sear/?uid=${uid}&type=share`}>
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'20vw'}}>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/jingyan.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        经验分享
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>  
                    </Flex.Item>
                    </Link>

                    <Link to={`/sear/?uid=${uid}&type=laoliang`}>
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'25vw'}}>             
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/laoliang.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        老梁考研汇
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Flex.Item>
                    </Link>

                    <Link to={`/sear/?uid=${uid}&type=xuefeng`}>
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'30vw'}}>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/xuefeng.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        雪峰讲考研
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>  
                    </Flex.Item>
                    </Link> */}

            </div>

        )
    }
}
export default Test;