import { ListView } from 'antd-mobile';
import React from 'react';
import { ObjectUnsubscribedError } from 'rxjs';
import {Link} from 'react-router-dom';

const NUM_ROWS = 11;
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
        this.setState({schooldata:c.all.reverse()});
    });

    console.log(this.props.uid);
  }
  
  componentDidUpdate(prevProps,prevState){
    if(prevProps.value!==this.props.value||prevProps.values!==this.props.values||prevProps.value3!==this.props.value3){
      let value=this.props.value;
      let values=this.props.values;
      let value3=this.props.value3;
      console.log(value3);
      fetch('http://wqh.xpmwqhzygy.top/school')
    .then((res)=>res.json())
    .then((res)=>{
        var c = JSON.parse(res);
        var add = [];
        this.setState({schooldata:c.all});
        if(value=='地区' && values=='asc'){
          if(value3=='three'){
             this.setState({schooldata:c.all}); 
          } 
          if(value3=='985'){
            var j = 0;
            for(var i=0;i<c.all.length;i++){
              if(c.all[i].one =='985'){
                add[j++]=c.all[i];
              }
         }
              this.setState({schooldata:add})
          }   
          if(value3=='211'){
            var j = 0;
            for(var i=0;i<c.all.length;i++){
              if(c.all[i].two =='211'){
                add[j++]=c.all[i];
              }
         }
              this.setState({schooldata:add})
          }   
          if(value3=='common'){
            var j = 0;
              for(var i=0;i<c.all.length;i++){
                   if(c.all[i].one!=='985'&&c.all[i].two!=='211'){
                     add[j++]=c.all[i];
                   }
              }
              this.setState({schooldata:add})
          }   
        }
        if(value=='地区' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.all.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.all.length;i++){
             if(c.all[i].one =='985'){
               add[j++]=c.all[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.all.length;i++){
             if(c.all[i].two =='211'){
               add[j++]=c.all[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.all.length;i++){
                  if(c.all[i].one!=='985'&&c.all[i].two!=='211'){
                    add[j++]=c.all[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
          }
        if(value=='北京' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.beijing}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.beijing.length;i++){
             if(c.beijing[i].one =='985'){
               add[j++]=c.beijing[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.beijing.length;i++){
             if(c.beijing[i].two =='211'){
               add[j++]=c.beijing[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.beijing.length;i++){
                  if(c.beijing[i].one!=='985'&&c.beijing[i].two!=='211'){
                    add[j++]=c.beijing[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='北京' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.beijing.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.beijing.length;i++){
             if(c.beijing[i].one =='985'){
               add[j++]=c.beijing[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.beijing.length;i++){
             if(c.beijing[i].two =='211'){
               add[j++]=c.beijing[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.beijing.length;i++){
                  if(c.beijing[i].one!=='985'&&c.beijing[i].two!=='211'){
                    add[j++]=c.beijing[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='上海' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.shanghai}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.shanghai.length;i++){
             if(c.shanghai[i].one =='985'){
               add[j++]=c.shanghai[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.shanghai.length;i++){
             if(c.shanghai[i].two =='211'){
               add[j++]=c.shanghai[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.shanghai.length;i++){
                  if(c.shanghai[i].one!=='985'&&c.shanghai[i].two!=='211'){
                    add[j++]=c.shanghai[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='上海' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.shanghai.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.shanghai.length;i++){
             if(c.shanghai[i].one =='985'){
               add[j++]=c.shanghai[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.shanghai.length;i++){
             if(c.shanghai[i].two =='211'){
               add[j++]=c.shanghai[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.shanghai.length;i++){
                  if(c.shanghai[i].one!=='985'&&c.shanghai[i].two!=='211'){
                    add[j++]=c.shanghai[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='天津' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.tianjin}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.tianjin.length;i++){
             if(c.tianjin[i].one =='985'){
               add[j++]=c.tianjin[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.tianjin.length;i++){
             if(c.tianjin[i].two =='211'){
               add[j++]=c.tianjin[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.tianjin.length;i++){
                  if(c.tianjin[i].one!=='985'&&c.tianjin[i].two!=='211'){
                    add[j++]=c.tianjin[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='天津' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.tianjin.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.tianjin.length;i++){
             if(c.tianjin[i].one =='985'){
               add[j++]=c.shanghai[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.shanghai.length;i++){
             if(c.shanghai[i].two =='211'){
               add[j++]=c.shanghai[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.shanghai.length;i++){
                  if(c.shanghai[i].one!=='985'&&c.shanghai[i].two!=='211'){
                    add[j++]=c.shanghai[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='重庆' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.chongqing}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.chongqing.length;i++){
             if(c.chongqing[i].one =='985'){
               add[j++]=c.chongqing[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.chongqing.length;i++){
             if(c.chongqing[i].two =='211'){
               add[j++]=c.chongqing[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.chongqing.length;i++){
                  if(c.chongqing[i].one!=='985'&&c.chongqing[i].two!=='211'){
                    add[j++]=c.chongqing[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='重庆' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.chongqing.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.chongqing.length;i++){
             if(c.chongqing[i].one =='985'){
               add[j++]=c.chongqing[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.chongqing.length;i++){
             if(c.chongqing[i].two =='211'){
               add[j++]=c.chongqing[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.chongqing.length;i++){
                  if(c.chongqing[i].one!=='985'&&c.chongqing[i].two!=='211'){
                    add[j++]=c.chongqing[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='江苏' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.jiangsu}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.jiangsu.length;i++){
             if(c.jiangsu[i].one =='985'){
               add[j++]=c.jiangsu[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.jiangsu.length;i++){
             if(c.jiangsu[i].two =='211'){
               add[j++]=c.jiangsu[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.jiangsu.length;i++){
                  if(c.jiangsu[i].one!=='985'&&c.jiangsu[i].two!=='211'){
                    add[j++]=c.jiangsu[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='江苏' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.jiangsu.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.jiangsu.length;i++){
             if(c.jiangsu[i].one =='985'){
               add[j++]=c.jiangsu[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.jiangsu.length;i++){
             if(c.jiangsu[i].two =='211'){
               add[j++]=c.jiangsu[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.jiangsu.length;i++){
                  if(c.jiangsu[i].one!=='985'&&c.jiangsu[i].two!=='211'){
                    add[j++]=c.jiangsu[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='浙江' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.zhejiang}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.zhejiang.length;i++){
             if(c.zhejiang[i].one =='985'){
               add[j++]=c.zhejiang[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.zhejiang.length;i++){
             if(c.zhejiang[i].two =='211'){
               add[j++]=c.zhejiang[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.zhejiang.length;i++){
                  if(c.zhejiang[i].one!=='985'&&c.zhejiang[i].two!=='211'){
                    add[j++]=c.zhejiang[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='浙江' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.zhejiang.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.zhejiang.length;i++){
             if(c.zhejiang[i].one =='985'){
               add[j++]=c.zhejiang[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.zhejiang.length;i++){
             if(c.zhejiang[i].two =='211'){
               add[j++]=c.zhejiang[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.zhejiang.length;i++){
                  if(c.zhejiang[i].one!=='985'&&c.zhejiang[i].two!=='211'){
                    add[j++]=c.zhejiang[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='安徽' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.anhui}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.anhui.length;i++){
             if(c.anhui[i].one =='985'){
               add[j++]=c.anhui[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.anhui.length;i++){
             if(c.anhui[i].two =='211'){
               add[j++]=c.anhui[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.anhui.length;i++){
                  if(c.anhui[i].one!=='985'&&c.anhui[i].two!=='211'){
                    add[j++]=c.anhui[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='安徽' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.anhui.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.anhui.length;i++){
             if(c.anhui[i].one =='985'){
               add[j++]=c.anhui[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.anhui.length;i++){
             if(c.anhui[i].two =='211'){
               add[j++]=c.anhui[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.anhui.length;i++){
                  if(c.anhui[i].one!=='985'&&c.anhui[i].two!=='211'){
                    add[j++]=c.anhui[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='辽宁' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.liaoning}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.liaoning.length;i++){
             if(c.liaoning[i].one =='985'){
               add[j++]=c.liaoning[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.liaoning.length;i++){
             if(c.liaoning[i].two =='211'){
               add[j++]=c.liaoning[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.liaoning.length;i++){
                  if(c.liaoning[i].one!=='985'&&c.liaoning[i].two!=='211'){
                    add[j++]=c.liaoning[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='辽宁' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.liaoning.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.liaoning.length;i++){
             if(c.liaoning[i].one =='985'){
               add[j++]=c.liaoning[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.liaoning.length;i++){
             if(c.liaoning[i].two =='211'){
               add[j++]=c.liaoning[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.liaoning.length;i++){
                  if(c.liaoning[i].one!=='985'&&c.liaoning[i].two!=='211'){
                    add[j++]=c.liaoning[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='江西' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.jiangxi}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.jiangxi.length;i++){
             if(c.jiangxi[i].one =='985'){
               add[j++]=c.jiangxi[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.jiangxi.length;i++){
             if(c.jiangxi[i].two =='211'){
               add[j++]=c.jiangxi[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.jiangxi.length;i++){
                  if(c.jiangxi[i].one!=='985'&&c.jiangxi[i].two!=='211'){
                    add[j++]=c.jiangxi[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='江西' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.jiangxi.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.jiangxi.length;i++){
             if(c.jiangxi[i].one =='985'){
               add[j++]=c.jiangxi[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.jiangxi.length;i++){
             if(c.jiangxi[i].two =='211'){
               add[j++]=c.jiangxi[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.jiangxi.length;i++){
                  if(c.jiangxi[i].one!=='985'&&c.jiangxi[i].two!=='211'){
                    add[j++]=c.jiangxi[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='山东' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.shandong}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.shandong.length;i++){
             if(c.shandong[i].one =='985'){
               add[j++]=c.shandong[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.shandong.length;i++){
             if(c.shandong[i].two =='211'){
               add[j++]=c.shandong[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.shandong.length;i++){
                  if(c.shandong[i].one!=='985'&&c.shandong[i].two!=='211'){
                    add[j++]=c.shandong[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='山东' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.shandong.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.shandong.length;i++){
             if(c.shandong[i].one =='985'){
               add[j++]=c.shandong[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.shandong.length;i++){
             if(c.shandong[i].two =='211'){
               add[j++]=c.shandong[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.shandong.length;i++){
                  if(c.shandong[i].one!=='985'&&c.shandong[i].two!=='211'){
                    add[j++]=c.shandong[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='河北' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.hebei}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.hebei.length;i++){
             if(c.hebei[i].one =='985'){
               add[j++]=c.hebei[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.hebei.length;i++){
             if(c.hebei[i].two =='211'){
               add[j++]=c.hebei[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.hebei.length;i++){
                  if(c.hebei[i].one!=='985'&&c.hebei[i].two!=='211'){
                    add[j++]=c.hebei[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='河北' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.hebei.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.hebei.length;i++){
             if(c.hebei[i].one =='985'){
               add[j++]=c.hebei[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.hebei.length;i++){
             if(c.hebei[i].two =='211'){
               add[j++]=c.hebei[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.hebei.length;i++){
                  if(c.hebei[i].one!=='985'&&c.hebei[i].two!=='211'){
                    add[j++]=c.hebei[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='山西' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.shanxi1}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.shanxi1.length;i++){
             if(c.shanxi1[i].one =='985'){
               add[j++]=c.shanxi1[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.shanxi1.length;i++){
             if(c.shanxi1[i].two =='211'){
               add[j++]=c.shanxi1[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.shanxi1.length;i++){
                  if(c.shanxi1[i].one!=='985'&&c.shanxi1[i].two!=='211'){
                    add[j++]=c.shanxi1[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='山西' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.shanxi1.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.shanxi1.length;i++){
             if(c.shanxi1[i].one =='985'){
               add[j++]=c.shanxi1[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.shanxi1.length;i++){
             if(c.shanxi1[i].two =='211'){
               add[j++]=c.shanxi1[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.shanxi1.length;i++){
                  if(c.shanxi1[i].one!=='985'&&c.shanxi1[i].two!=='211'){
                    add[j++]=c.shanxi1[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='内蒙古' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.neimenggu}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.neimenggu.length;i++){
             if(c.neimenggu[i].one =='985'){
               add[j++]=c.neimenggu[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.neimenggu.length;i++){
             if(c.neimenggu[i].two =='211'){
               add[j++]=c.neimenggu[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.neimenggu.length;i++){
                  if(c.neimenggu[i].one!=='985'&&c.neimenggu[i].two!=='211'){
                    add[j++]=c.neimenggu[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='内蒙古' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.neimenggu.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.neimenggu.length;i++){
             if(c.neimenggu[i].one =='985'){
               add[j++]=c.neimenggu[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.neimenggu.length;i++){
             if(c.neimenggu[i].two =='211'){
               add[j++]=c.neimenggu[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.neimenggu.length;i++){
                  if(c.neimenggu[i].one!=='985'&&c.neimenggu[i].two!=='211'){
                    add[j++]=c.neimenggu[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='河南' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.henan}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.henan.length;i++){
             if(c.all[i].one =='985'){
               add[j++]=c.henan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.henan.length;i++){
             if(c.henan[i].two =='211'){
               add[j++]=c.henan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.henan.length;i++){
                  if(c.henan[i].one!=='985'&&c.henan[i].two!=='211'){
                    add[j++]=c.henan[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='河南' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.henan.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.henan.length;i++){
             if(c.henan[i].one =='985'){
               add[j++]=c.henan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.henan.length;i++){
             if(c.henan[i].two =='211'){
               add[j++]=c.henan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.henan.length;i++){
                  if(c.henan[i].one!=='985'&&c.henan[i].two!=='211'){
                    add[j++]=c.henan[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='湖北' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.hubei}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.hubei.length;i++){
             if(c.hubei[i].one =='985'){
               add[j++]=c.hubei[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.hubei.length;i++){
             if(c.hubei[i].two =='211'){
               add[j++]=c.hubei[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.hubei.length;i++){
                  if(c.hubei[i].one!=='985'&&c.hubei[i].two!=='211'){
                    add[j++]=c.hubei[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='湖北' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.hubei.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.hubei.length;i++){
             if(c.hubei[i].one =='985'){
               add[j++]=c.hubei[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.hubei.length;i++){
             if(c.hubei[i].two =='211'){
               add[j++]=c.hubei[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.hubei.length;i++){
                  if(c.hubei[i].one!=='985'&&c.hubei[i].two!=='211'){
                    add[j++]=c.hubei[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='湖南' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.hunan}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.hunan.length;i++){
             if(c.hunan[i].one =='985'){
               add[j++]=c.hunan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.hunan.length;i++){
             if(c.hunan[i].two =='211'){
               add[j++]=c.hunan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.hunan.length;i++){
                  if(c.hunan[i].one!=='985'&&c.hunan[i].two!=='211'){
                    add[j++]=c.hunan[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='湖南' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.hunan.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.hunan.length;i++){
             if(c.hunan[i].one =='985'){
               add[j++]=c.hunan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.hunan.length;i++){
             if(c.hunan[i].two =='211'){
               add[j++]=c.hunan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.hunan.length;i++){
                  if(c.hunan[i].one!=='985'&&c.hunan[i].two!=='211'){
                    add[j++]=c.hunan[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='广东' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.guangdong}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.guangdong.length;i++){
             if(c.guangdong[i].one =='985'){
               add[j++]=c.guangdong[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.guangdong.length;i++){
             if(c.guangdong[i].two =='211'){
               add[j++]=c.guangdong[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.guangdong.length;i++){
                  if(c.guangdong[i].one!=='985'&&c.guangdong[i].two!=='211'){
                    add[j++]=c.guangdong[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='广东' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.guangdong.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.guangdong.length;i++){
             if(c.guangdong[i].one =='985'){
               add[j++]=c.guangdong[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.guangdong.length;i++){
             if(c.guangdong[i].two =='211'){
               add[j++]=c.guangdong[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.guangdong.length;i++){
                  if(c.guangdong[i].one!=='985'&&c.guangdong[i].two!=='211'){
                    add[j++]=c.guangdong[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='海南' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.hainan}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.hainan.length;i++){
             if(c.hainan[i].one =='985'){
               add[j++]=c.hainan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.hainan.length;i++){
             if(c.hainan[i].two =='211'){
               add[j++]=c.hainan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.hainan.length;i++){
                  if(c.hainan[i].one!=='985'&&c.hainan[i].two!=='211'){
                    add[j++]=c.hainan[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='海南' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.hainan.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.hainan.length;i++){
             if(c.hainan[i].one =='985'){
               add[j++]=c.hainan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.hainan.length;i++){
             if(c.hainan[i].two =='211'){
               add[j++]=c.hainan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.hainan.length;i++){
                  if(c.hainan[i].one!=='985'&&c.hainan[i].two!=='211'){
                    add[j++]=c.hainan[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='四川' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.sichuan}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.sichuan.length;i++){
             if(c.sichuan[i].one =='985'){
               add[j++]=c.sichuan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.sichuan.length;i++){
             if(c.sichuan[i].two =='211'){
               add[j++]=c.sichuan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.sichuan.length;i++){
                  if(c.sichuan[i].one!=='985'&&c.sichuan[i].two!=='211'){
                    add[j++]=c.sichuan[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='四川' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.sichuan.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.sichuan.length;i++){
             if(c.sichuan[i].one =='985'){
               add[j++]=c.sichuan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.sichuan.length;i++){
             if(c.sichuan[i].two =='211'){
               add[j++]=c.sichuan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.sichuan.length;i++){
                  if(c.sichuan[i].one!=='985'&&c.sichuan[i].two!=='211'){
                    add[j++]=c.sichuan[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='广西' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.guangxi}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.guangxi.length;i++){
             if(c.guangxi[i].one =='985'){
               add[j++]=c.guangxi[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.guangxi.length;i++){
             if(c.guangxi[i].two =='211'){
               add[j++]=c.guangxi[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.guangxi.length;i++){
                  if(c.guangxi[i].one!=='985'&&c.guangxi[i].two!=='211'){
                    add[j++]=c.guangxi[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='广西' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.guangxi.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.guangxi.length;i++){
             if(c.guangxi[i].one =='985'){
               add[j++]=c.guangxi[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.guangxi.length;i++){
             if(c.guangxi[i].two =='211'){
               add[j++]=c.guangxi[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.guangxi.length;i++){
                  if(c.guangxi[i].one!=='985'&&c.guangxi[i].two!=='211'){
                    add[j++]=c.guangxi[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='贵州' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.guizhou}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.guizhou.length;i++){
             if(c.guizhou[i].one =='985'){
               add[j++]=c.guizhou[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.guizhou.length;i++){
             if(c.guizhou[i].two =='211'){
               add[j++]=c.guizhou[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.guizhou.length;i++){
                  if(c.guizhou[i].one!=='985'&&c.guizhou[i].two!=='211'){
                    add[j++]=c.guizhou[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='贵州' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.guizhou.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.guizhou.length;i++){
             if(c.guizhou[i].one =='985'){
               add[j++]=c.guizhou[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.guizhou.length;i++){
             if(c.guizhou[i].two =='211'){
               add[j++]=c.guizhou[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.guizhou.length;i++){
                  if(c.guizhou[i].one!=='985'&&c.guizhou[i].two!=='211'){
                    add[j++]=c.guizhou[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='云南' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.yunnan}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.yunnan.length;i++){
             if(c.yunnan[i].one =='985'){
               add[j++]=c.yunnan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.yunnan.length;i++){
             if(c.yunnan[i].two =='211'){
               add[j++]=c.yunnan[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.yunnan.length;i++){
                  if(c.yunnan[i].one!=='985'&&c.yunnan[i].two!=='211'){
                    add[j++]=c.yunnan[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='云南' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.yunnan.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.yunnan.length;i++){
             if(c.yunnan[i].one =='985'){
               add[j++]=c.yunnan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.yunnan.length;i++){
             if(c.yunnan[i].two =='211'){
               add[j++]=c.yunnan[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.yunnan.length;i++){
                  if(c.yunnan[i].one!=='985'&&c.yunnan[i].two!=='211'){
                    add[j++]=c.yunnan[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='西藏' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.xizang}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.xizang.length;i++){
             if(c.xizang[i].one =='985'){
               add[j++]=c.xizang[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.xizang.length;i++){
             if(c.xizang[i].two =='211'){
               add[j++]=c.xizang[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.xizang.length;i++){
                  if(c.xizang[i].one!=='985'&&c.xizang[i].two!=='211'){
                    add[j++]=c.xizang[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='西藏' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.xizang.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.xizang.length;i++){
             if(c.xizang[i].one =='985'){
               add[j++]=c.xizang[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.xizang.length;i++){
             if(c.xizang[i].two =='211'){
               add[j++]=c.xizang[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.xizang.length;i++){
                  if(c.xizang[i].one!=='985'&&c.xizang[i].two!=='211'){
                    add[j++]=c.xizang[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='福建' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.fujian}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.fujian.length;i++){
             if(c.fujian[i].one =='985'){
               add[j++]=c.fujian[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.fujian.length;i++){
             if(c.fujian[i].two =='211'){
               add[j++]=c.fujian[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.fujian.length;i++){
                  if(c.fujian[i].one!=='985'&&c.fujian[i].two!=='211'){
                    add[j++]=c.fujian[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='福建' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.fujian.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.fujian.length;i++){
             if(c.fujian[i].one =='985'){
               add[j++]=c.fujian[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.fujian.length;i++){
             if(c.fujian[i].two =='211'){
               add[j++]=c.fujian[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.fujian.length;i++){
                  if(c.fujian[i].one!=='985'&&c.fujian[i].two!=='211'){
                    add[j++]=c.fujian[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='吉林' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.jilin}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.jilin.length;i++){
             if(c.jilin[i].one =='985'){
               add[j++]=c.jilin[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.jilin.length;i++){
             if(c.jilin[i].two =='211'){
               add[j++]=c.jilin[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.jilin.length;i++){
                  if(c.jilin[i].one!=='985'&&c.jilin[i].two!=='211'){
                    add[j++]=c.jilin[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='吉林' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.jilin.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.jilin.length;i++){
             if(c.jilin[i].one =='985'){
               add[j++]=c.jilin[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.jilin.length;i++){
             if(c.jilin[i].two =='211'){
               add[j++]=c.jilin[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.jilin.length;i++){
                  if(c.jilin[i].one!=='985'&&c.jilin[i].two!=='211'){
                    add[j++]=c.jilin[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='黑龙江' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.heilongjiang}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.heilongjiang.length;i++){
             if(c.heilongjiang[i].one =='985'){
               add[j++]=c.heilongjiang[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.heilongjiang.length;i++){
             if(c.heilongjiang[i].two =='211'){
               add[j++]=c.heilongjiang[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.heilongjiang.length;i++){
                  if(c.heilongjiang[i].one!=='985'&&c.heilongjiang[i].two!=='211'){
                    add[j++]=c.heilongjiang[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='黑龙江' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.heilongjiang.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.heilongjiang.length;i++){
             if(c.heilongjiang[i].one =='985'){
               add[j++]=c.heilongjiang[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.heilongjiang.length;i++){
             if(c.heilongjiang[i].two =='211'){
               add[j++]=c.heilongjiang[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.heilongjiang.length;i++){
                  if(c.heilongjiang[i].one!=='985'&&c.heilongjiang[i].two!=='211'){
                    add[j++]=c.heilongjiang[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='陕西' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.shanxi2}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.shanxi2.length;i++){
             if(c.shanxi2[i].one =='985'){
               add[j++]=c.shanxi2[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.shanxi2.length;i++){
             if(c.shanxi2[i].two =='211'){
               add[j++]=c.shanxi2[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.shanxi2.length;i++){
                  if(c.shanxi2[i].one!=='985'&&c.shanxi2[i].two!=='211'){
                    add[j++]=c.shanxi2[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='陕西' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.shanxi2.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.shanxi2.length;i++){
             if(c.shanxi2[i].one =='985'){
               add[j++]=c.shanxi2[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.shanxi2.length;i++){
             if(c.shanxi2[i].two =='211'){
               add[j++]=c.shanxi2[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.shanxi2.length;i++){
                  if(c.shanxi2[i].one!=='985'&&c.shanxi2[i].two!=='211'){
                    add[j++]=c.shanxi2[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='甘肃' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.gansu}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.gansu.length;i++){
             if(c.gansu[i].one =='985'){
               add[j++]=c.gansu[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.gansu.length;i++){
             if(c.gansu[i].two =='211'){
               add[j++]=c.gansu[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.gansu.length;i++){
                  if(c.gansu[i].one!=='985'&&c.gansu[i].two!=='211'){
                    add[j++]=c.gansu[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='甘肃' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.gansu.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.gansu.length;i++){
             if(c.gansu[i].one =='985'){
               add[j++]=c.gansu[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.gansu.length;i++){
             if(c.gansu[i].two =='211'){
               add[j++]=c.gansu[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.gansu.length;i++){
                  if(c.gansu[i].one!=='985'&&c.gansu[i].two!=='211'){
                    add[j++]=c.gansu[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='青海' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.qinghai}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.qinghai.length;i++){
             if(c.qinghai[i].one =='985'){
               add[j++]=c.qinghai[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.qinghai.length;i++){
             if(c.qinghai[i].two =='211'){
               add[j++]=c.qinghai[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.qinghai.length;i++){
                  if(c.qinghai[i].one!=='985'&&c.qinghai[i].two!=='211'){
                    add[j++]=c.qinghai[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='青海' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.qinghai.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.qinghai.length;i++){
             if(c.qinghai[i].one =='985'){
               add[j++]=c.qinghai[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.qinghai.length;i++){
             if(c.qinghai[i].two =='211'){
               add[j++]=c.qinghai[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.qinghai.length;i++){
                  if(c.qinghai[i].one!=='985'&&c.qinghai[i].two!=='211'){
                    add[j++]=c.qinghai[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='宁夏' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.ningxia}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.ningxia.length;i++){
             if(c.ningxia[i].one =='985'){
               add[j++]=c.ningxia[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.ningxia.length;i++){
             if(c.ningxia[i].two =='211'){
               add[j++]=c.ningxia[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.ningxia.length;i++){
                  if(c.ningxia[i].one!=='985'&&c.ningxia[i].two!=='211'){
                    add[j++]=c.ningxia[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='宁夏' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.ningxia.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.ningxia.length;i++){
             if(c.ningxia[i].one =='985'){
               add[j++]=c.ningxia[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.ningxia.length;i++){
             if(c.ningxia[i].two =='211'){
               add[j++]=c.ningxia[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.ningxia.length;i++){
                  if(c.ningxia[i].one!=='985'&&c.ningxia[i].two!=='211'){
                    add[j++]=c.ningxia[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
        }
        if(value=='新疆' && values=='asc'){
          if(value3=='three'){
            this.setState({schooldata:c.xinjiang}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.xinjiang.length;i++){
             if(c.xinjiang[i].one =='985'){
               add[j++]=c.xinjiang[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.xinjiang.length;i++){
             if(c.xinjiang[i].two =='211'){
               add[j++]=c.xinjiang[i];
             }
        }
             this.setState({schooldata:add})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.xinjiang.length;i++){
                  if(c.xinjiang[i].one!=='985'&&c.xinjiang[i].two!=='211'){
                    add[j++]=c.xinjiang[i];
                  }
             }
             this.setState({schooldata:add})
         }   
        }
        if(value=='新疆' && values=='desc'){
          if(value3=='three'){
            this.setState({schooldata:c.xinjiang.reverse()}); 
         } 
         if(value3=='985'){
           var j = 0;
           for(var i=0;i<c.xinjiang.length;i++){
             if(c.xinjiang[i].one =='985'){
               add[j++]=c.xinjiang[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='211'){
           var j = 0;
           for(var i=0;i<c.xinjiang.length;i++){
             if(c.xinjiang[i].two =='211'){
               add[j++]=c.xinjiang[i];
             }
        }
             this.setState({schooldata:add.reverse()})
         }   
         if(value3=='common'){
           var j = 0;
             for(var i=0;i<c.xinjiang.length;i++){
                  if(c.xinjiang[i].one!=='985'&&c.xinjiang[i].two!=='211'){
                    add[j++]=c.xinjiang[i];
                  }
             }
             this.setState({schooldata:add.reverse()})
         }   
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

  // render() {
  //   var uid = this.props.uid; //携带参数跳转 区别用户
  //   console.log(this.props.value);
  //   const separator = (sectionID, rowID) => (
  //     <div
  //       key={`${sectionID}-${rowID}`}
  //       style={{
  //         backgroundColor: '#F5F5F9',
  //         height: 8,
  //         borderTop: '1px solid #ECECED',
  //         borderBottom: '1px solid #ECECED',
  //       }}
  //     />
  //   );
  //   let index = this.state.schooldata.length - 1||1;
  //   const row = (rowData, sectionID, rowID) => {
  //     if (index < 0) {
  //       index = this.state.schooldata.length - 1;
  //     }
  //     const obj = this.state.schooldata[index--];
  //     return (
  //       <Link to={`/schoolDetails?id=${obj.des||'四川大学'}&uid=${uid}`}><div key={rowID} style={{ padding: '0 15px' }}>
  //         <div
  //           style={{
  //             lineHeight: '50px',
  //             color: '#888',
  //             fontSize: 18,
  //             borderBottom: '1px solid #F6F6F6',
  //           }}
  //         ></div>
  //         <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
  //           <img style={{ height: '64px', marginRight: '15px',width:'80px' }} src={obj.img} alt="" />
  //           <div style={{ lineHeight: 1.5 }}>
  //             <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
  //            <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{obj.row}</span><div style={{color:'green',marginLeft:'10px',float:'left'}}>{obj.city}</div></div>
  //         <div><span style={{color:'blue'}}>{obj.two}</span><span style={{color:'purple',marginLeft:'10px'}}>{obj.one}</span></div>
  //           </div>
  //         </div>
  //       </div></Link>
  //     );
  //   };
  //   return (

  //     <ListView
  //       ref={el => this.lv = el}
  //       dataSource={this.state.dataSource}
  //       renderHeader={() => <span>为您推荐</span>}
  //       renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
  //         {this.state.isLoading ? 'Loading...' : 'Loaded'}
  //       </div>)}
  //       renderRow={row}
  //       renderSeparator={separator}
  //       className="am-list"
  //       pageSize={4}
  //       useBodyScroll
  //       onScroll={() => { console.log('scroll'); }}
  //       scrollRenderAheadDistance={500}
  //       // onEndReached={this.onEndReached}
  //       // onEndReachedThreshold={10}
  //     />
      
  //   );
  // }
  render(){
    var uid = this.props.uid; //携带参数跳转 区别用户
    return(
      <div>
        {
          this.state.schooldata.map((Item)=>(
            <Link to={`/schoolDetails?id=${Item.des||'四川大学'}&uid=${uid}`}><div style={{ padding: '0 15px',backgroundColor:'white'}}>
           <div
             style={{
               lineHeight: '50px',
               color: '#888',
               fontSize: 18,
               borderBottom: '1px solid #F6F6F6',
             }}
           ></div>
           <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
             <img style={{ height: '64px', marginRight: '15px',width:'80px' }} src={Item.img} alt="" />
             <div style={{ lineHeight: 1.5 }}>
               <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{Item.des}</div>
              <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{Item.row}</span><div style={{color:'green',marginLeft:'10px',float:'left'}}>{Item.city}</div></div>
           <div><span style={{color:'blue'}}>{Item.two}</span><span style={{color:'purple',marginLeft:'10px'}}>{Item.one}</span></div>
             </div>
           </div>
         </div>
         <div style={{height:'1vh'}}></div>
         </Link>
          ))
        }
      </div>
    )
  }
}