import { ListView } from 'antd-mobile';
import React from 'react';
import { ObjectUnsubscribedError } from 'rxjs';
import {Link} from 'react-router-dom';
import tou1 from './images/tou1.jpg';
import tou2 from './images/tou2.jpg';
import tou3 from './images/tou3.jpg';
import good from './images/zan2.jpg';
import talk from './images/talk.jpg';
import zan1 from './images/zan1.jpg';
import back from './images/back.jpg';
import delete1 from './images/delete.jpg';
const data = [
  {
    img:tou1 ,
    des: '学霸考研',
    row: '2021考研',
    city:' 考研之路',
    one:'#2020年考研 2019-10-27',
    two:talk,
    id:'1'
  },
  {
    img:tou2 ,
    des: '学霸考研',
    row: '2021考研',
    city:' 考研之路',
    one:'#2020年考研 2019-10-27',
    two:talk,
    id:'2'
  },
];
const NUM_ROWS = 2;
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
      flag:0,
      text:''
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
  unlogin = (id) => {
    console.log(this.state.flag);
    this.setState({
        flag:id
    })
    console.log(this.state.flag);
}
addItem=(id)=>{
  console.log(id);
    var add=document.getElementById(id);
    var arr=document.getElementsByClassName(id);
    console.log(arr);
    console.log(arr[0].innerHTML);
    console.log(arr[0].className,id);
    arr[0].innerHTML +='<br/>'+ add.value;
    this.setState({
      flag:0,
  })
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
       <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.title}</div>
          <div style={{ display: '-webkit-box', display: 'flex',width:'100%',height:'15vh'}}>
            <div style={{width:'18%',marginRight:'20px',marginTop:'2vh'}}><img style={{ height: '64px',width:'70px',borderRadius:'50%' }} src={obj.img} alt="" /></div>
            <div style={{ lineHeight: 1.5,width:'80%' ,marginTop:'2vh'}}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold',width:'100%',float:'left' }}>{obj.des}</div>
              <div style={{width:'100%',float:'left' }}><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{obj.row}</span><div style={{color:'black',marginLeft:'10px',float:'left'}}>{obj.city}</div></div>
                <div style={{width:'100%',float:'left' }}>
                    <span style={{color:'green'}}>{obj.one}</span> 
                    <img src={obj.two} style={{height:'25px',width:'25px',float:"right"}} onClick={()=>this.unlogin(obj.id)}/>
                </div>
            </div>
          </div>
          <div className={obj.id}> </div>
          <div className={this.state.flag == obj.id ? 'talk' : 'untalk'} style={{height:'30px',width:'100%'}}>  
          <input id={obj.id}  type='text' placeholder='评论' style={{width:'70%',height:'30px',marginLeft:'5%'}}/>
               <button style={{width:'20%',color:'white',marginTop:'-3px',height:'32px',backgroundColor:'#66cccc',border:'none'}} onClick={()=>this.addItem(obj.id)}>完成</button>
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
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