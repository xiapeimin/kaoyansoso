import { ListView } from 'antd-mobile';
import React from 'react';
import { ObjectUnsubscribedError } from 'rxjs';
import {Link} from 'react-router-dom';

const data = [
  {
    img: 'http://img02.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fi03piccdn.sogoucdn.com%2F026b21f5325fb38e',
    des: '中国人民大学',
    row: '院校排名：3',
    city:'北京',
    one:'985',
    two:'211',
  },
  {
    img: 'https://img04.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fimg02.sogoucdn.com%2Fapp%2Fa%2F100520093%2F09225a8782ea208e-1c9460610f8d006d-0660006206c0d0cf901f32d79e806a03.jpg',
    des: '清华大学',
    row: '院校排名：2',
    city:'北京',
    one:'985',
    two:'211',
  },
  {
    img: 'https://pic.baike.soso.com/ugc/baikepic2/0/ori-20190525162808-1665237614_jpg_1010_758_290613.jpg/800',
    des: '北京大学',
    row: '院校排名：1',
    city:'北京',
    one:'985',
    two:'211',
  },
];
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
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
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
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <Link to={'/schoolDetails'}><div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.title}</div>
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