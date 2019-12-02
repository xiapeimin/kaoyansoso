import React from 'react';
import { TabBar } from 'antd-mobile';
import Apphome from './Apphome';
import Topic from './Topic';
import School from './School/School';
import My from './My';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag:0,
      selectedTab: 'blueTab'
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#ffffff"
          tintColor="#044a6b"
          barTintColor="#66cccc"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px'            
              }}
            ><img src={require('../imgs/home.png')} style={{width:'100%',height:'100%'}}/></div>
            }
            selectedIcon={<div style={{  //044a6b  #949494
              width: '22px',
              height: '22px'
              }}
            ><img src={require('../imgs/home0.png')} style={{width:'100%',height:'100%'}}/></div>
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
              <Apphome history={{push:(path)=>{window.location.hash=path;}}}/>
          </TabBar.Item>
          <TabBar.Item
            title="院校"
            key="school"
            icon={
              <div style={{
                width: '22px',
                height: '22px'
                }}
              ><img src={require('../imgs/school.png')} style={{width:'100%',height:'100%'}}/></div>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px'
                }}
              ><img src={require('../imgs/school0.png')} style={{width:'100%',height:'100%'}}/></div>
            }
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <School />
          </TabBar.Item>
          <TabBar.Item
            title="动态"
            key="public"
            icon={
              <div style={{
                width: '22px',
                height: '22px'
                }}
              ><img src={require('../imgs/dt.png')} style={{width:'100%',height:'100%'}}/></div>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px'
                }}
              ><img src={require('../imgs/dt0.png')} style={{width:'100%',height:'100%'}}/></div>
            }
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Topic />
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="my"
            icon={<div style={{
              width: '22px',
              height: '22px'
              }}
            ><img src={require('../imgs/my.png')} style={{width:'100%',height:'100%'}}/></div>}
            selectedIcon={<div style={{
              width: '22px',
              height: '22px'
              }}
            ><img src={require('../imgs/my0.png')} style={{width:'100%',height:'100%'}}/></div>}
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <My />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}