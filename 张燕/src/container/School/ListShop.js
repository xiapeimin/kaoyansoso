import { ListView } from 'antd-mobile';
import React from 'react';
import { ObjectUnsubscribedError } from 'rxjs';
import {Link} from 'react-router-dom';

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

export default class ListShop extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      schooldata:[{
        "img":"http://img03.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fimg01.sogoucdn.com%2Fapp%2Fa%2F100520093%2F22682a086365be9a-38bde84ba65aa1a3-ab565d913aa4f215d6629386dbb24582.jpg",
        "des":"四川大学",
        "row":"院校排名：11",
        "city":"四川",
        "one":"985",
        "two":"211"
    }],
      name:''
    };
  }

  componentDidMount() {
    var value = this.props.value;
    var values=this.props.values;

    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
    fetch('http://wqh.xpmwqhzygy.top/school')
    .then((res)=>res.json())
    .then((res)=>{
        var c = JSON.parse(res);
        this.setState({schooldata:c.all});
    });

    console.log(this.props.uid);
  }
  
  componentDidUpdate(prevProps,prevState){
    if(prevProps.value!==this.props.value||prevProps.values!==this.props.values){
      let value=this.props.value;
      let values=this.props.values;
      console.log(values);
      fetch('http://wqh.xpmwqhzygy.top/school')
    .then((res)=>res.json())
    .then((res)=>{
        var c = JSON.parse(res);
        this.setState({schooldata:c.all});
        if(value=='地区' && values=='asc'){
        this.setState({schooldata:c.all});     
        }
        if(value=='地区' && values=='desc'){
          this.setState({schooldata:c.all.reverse()});     
          }
        if(value=='北京' && values=='asc'){
          this.setState({schooldata:c.beijing})
        }
        if(value=='北京' && values=='desc'){
          this.setState({schooldata:c.beijing.reverse()})
        }
        if(value=='上海' && values=='asc'){
          this.setState({schooldata:c.shanghai})
        }
        if(value=='上海' && values=='desc'){
          this.setState({schooldata:c.shanghai.reverse()})
        }
        if(value=='天津' && values=='asc'){
          this.setState({schooldata:c.tianjin})
        }
        if(value=='天津' && values=='desc'){
          this.setState({schooldata:c.tianjin.reverse()})
        }
        if(value=='重庆' && values=='asc'){
          this.setState({schooldata:c.chongqing})
        }
        if(value=='重庆' && values=='desc'){
          this.setState({schooldata:c.chongqing.reverse()})
        }
        if(value=='江苏' && values=='asc'){
          this.setState({schooldata:c.jiangsu})
        }
        if(value=='江苏' && values=='desc'){
          this.setState({schooldata:c.jiangsu.reverse()})
        }
        if(value=='浙江' && values=='asc'){
          this.setState({schooldata:c.zhejiang})
        }
        if(value=='浙江' && values=='desc'){
          this.setState({schooldata:c.zhejiang.reverse()})
        }
        if(value=='安徽' && values=='asc'){
          this.setState({schooldata:c.anhui})
        }
        if(value=='安徽' && values=='desc'){
          this.setState({schooldata:c.anhui.reverse()})
        }
        if(value=='辽宁' && values=='asc'){
          this.setState({schooldata:c.liaoning})
        }
        if(value=='辽宁' && values=='desc'){
          this.setState({schooldata:c.liaoning.reverse()})
        }
        if(value=='江西' && values=='asc'){
          this.setState({schooldata:c.jiangxi})
        }
        if(value=='江西' && values=='desc'){
          this.setState({schooldata:c.jiangxi.reverse()})
        }
        if(value=='山东' && values=='asc'){
          this.setState({schooldata:c.shandong})
        }
        if(value=='山东' && values=='desc'){
          this.setState({schooldata:c.shandong.reverse()})
        }
        if(value=='河北' && values=='asc'){
          this.setState({schooldata:c.hebei})
        }
        if(value=='河北' && values=='desc'){
          this.setState({schooldata:c.hebei.reverse()})
        }
        if(value=='山西' && values=='asc'){
          this.setState({schooldata:c.shanxi1})
        }
        if(value=='山西' && values=='desc'){
          this.setState({schooldata:c.shanxi1.reverse()})
        }
        if(value=='内蒙古' && values=='asc'){
          this.setState({schooldata:c.neimenggu})
        }
        if(value=='内蒙古' && values=='desc'){
          this.setState({schooldata:c.neimenggu.reverse()})
        }
        if(value=='河南' && values=='asc'){
          this.setState({schooldata:c.henan})
        }
        if(value=='河南' && values=='desc'){
          this.setState({schooldata:c.henan.reverse()})
        }
        if(value=='湖北' && values=='asc'){
          this.setState({schooldata:c.hubei})
        }
        if(value=='湖北' && values=='desc'){
          this.setState({schooldata:c.hubei.reverse()})
        }
        if(value=='湖南' && values=='asc'){
          this.setState({schooldata:c.hunan})
        }
        if(value=='湖南' && values=='desc'){
          this.setState({schooldata:c.hunan.reverse()})
        }
        if(value=='广东' && values=='asc'){
          this.setState({schooldata:c.guangdong})
        }
        if(value=='广东' && values=='desc'){
          this.setState({schooldata:c.guangdong.reverse()})
        }
        if(value=='海南' && values=='asc'){
          this.setState({schooldata:c.hainan})
        }
        if(value=='海南' && values=='desc'){
          this.setState({schooldata:c.hainan.reverse()})
        }
        if(value=='四川' && values=='asc'){
          this.setState({schooldata:c.sichuan})
        }
        if(value=='四川' && values=='desc'){
          this.setState({schooldata:c.sichuan.reverse()})
        }
        if(value=='广东' && values=='asc'){
          this.setState({schooldata:c.guangdong})
        }
        if(value=='广东' && values=='desc'){
          this.setState({schooldata:c.guangdong.reverse()})
        }
        if(value=='广西' && values=='asc'){
          this.setState({schooldata:c.guangxi})
        }
        if(value=='广西' && values=='desc'){
          this.setState({schooldata:c.guangxi.reverse()})
        }
        if(value=='海南' && values=='asc'){
          this.setState({schooldata:c.hainan})
        }
        if(value=='海南' && values=='desc'){
          this.setState({schooldata:c.hainan.reverse()})
        }
        if(value=='四川' && values=='asc'){
          this.setState({schooldata:c.sichuan})
        }
        if(value=='四川' && values=='desc'){
          this.setState({schooldata:c.sichuan.reverse()})
        }
        if(value=='贵州' && values=='asc'){
          this.setState({schooldata:c.guizhou})
        }
        if(value=='贵州' && values=='desc'){
          this.setState({schooldata:c.guizhou.reverse()})
        }
        if(value=='云南' && values=='asc'){
          this.setState({schooldata:c.yunnan})
        }
        if(value=='云南' && values=='desc'){
          this.setState({schooldata:c.yunnan.reverse()})
        }
        if(value=='西藏' && values=='asc'){
          this.setState({schooldata:c.xizang})
        }
        if(value=='西藏' && values=='desc'){
          this.setState({schooldata:c.xizang.reverse()})
        }
        if(value=='福建' && values=='asc'){
          this.setState({schooldata:c.fujian})
        }
        if(value=='福建' && values=='desc'){
          this.setState({schooldata:c.fujian.reverse()})
        }
        if(value=='吉林' && values=='asc'){
          this.setState({schooldata:c.jilin})
        }
        if(value=='吉林' && values=='desc'){
          this.setState({schooldata:c.jilin.reverse()})
        }
        if(value=='黑龙江' && values=='asc'){
          this.setState({schooldata:c.heilongjiang})
        }
        if(value=='黑龙江' && values=='desc'){
          this.setState({schooldata:c.heilongjiang.reverse()})
        }
        if(value=='陕西' && values=='asc'){
          this.setState({schooldata:c.shanxi})
        }
        if(value=='陕西' && values=='desc'){
          this.setState({schooldata:c.shanxi.reverse()})
        }
        if(value=='甘肃' && values=='asc'){
          this.setState({schooldata:c.gansu})
        }
        if(value=='甘肃' && values=='desc'){
          this.setState({schooldata:c.gansu.reverse()})
        }
        if(value=='青海' && values=='asc'){
          this.setState({schooldata:c.qinghai})
        }
        if(value=='青海' && values=='desc'){
          this.setState({schooldata:c.qinghai.reverse()})
        }
        if(value=='宁夏' && values=='asc'){
          this.setState({schooldata:c.ningxia})
        }
        if(value=='宁夏' && values=='desc'){
          this.setState({schooldata:c.ningxia.reverse()})
        }
        if(value=='新疆' && values=='asc'){
          this.setState({schooldata:c.xinjiang})
        }
        if(value=='新疆' && values=='desc'){
          this.setState({schooldata:c.xinjiang.reverse()})
        }
    })
    }
  }

  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    var uid = this.props.uid; //携带参数跳转 区别用户
    console.log(this.props.value);
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = this.state.schooldata.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.state.schooldata.length - 1;
      }
      const obj = this.state.schooldata[index--];
      return (
        <Link to={`/schoolDetails?id=${obj.des}&uid=${uid}`}><div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          ></div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px',width:'80px' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1.5 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
             <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{obj.row}</span><div style={{color:'green',marginLeft:'10px',float:'left'}}>{obj.city}</div></div>
          <div><span style={{color:'blue'}}>{obj.two}</span><span style={{color:'purple',marginLeft:'10px'}}>{obj.one}</span></div>
            </div>
          </div>
        </div></Link>
      );
    };
    return (

      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>为您推荐</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
      
    );
  }
}