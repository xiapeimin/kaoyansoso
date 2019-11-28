import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import SearchInfo from './SearchInfo'
import Word from './Words'
import WordList from './WordList'
import Video from './Video'
import Resource from './Resource'
import Tools from './Tools'

export default class AppHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
          hidden: false,
          fullScreen: false,
        };
    }
    render() {
        return (
            <div>
                <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            title="找资料"
                            key="Home"
                            icon={<div style={{
                            width: '22px',
                            height: '22px',
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            }}
                            />
                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                            }}
                            data-seed="logId"
                        >
                        <SearchInfo/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                 }}
                            />
                            }
                            title="背单词"
                            key="linggan"
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                            }}
                            data-seed="logId1"
                        >
                            <Word/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                 }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                 }}
                            />
                            }
                            title="单词详情页"
                            key="shop"
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                            }}
                        >
                            <WordList/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                            width: '22px',
                            height: '22px',
                             }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                            width: '22px',
                            height: '22px',
                            }}
                            />
                            }
                            title="更多视频页"
                            key="my"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                            }}
                        >
                            <Video/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                            width: '22px',
                            height: '22px',
                             }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                            width: '22px',
                            height: '22px',
                            }}
                            />
                            }
                            title="资源详情页"
                            key="my"
                            selected={this.state.selectedTab === 'blackTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'blackTab',
                            });
                            }}
                        >
                            <Resource/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                            width: '22px',
                            height: '22px',
                             }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                            width: '22px',
                            height: '22px',
                            }}
                            />
                            }
                            title="研百科"
                            key="my"
                            selected={this.state.selectedTab === 'whiteTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'whiteTab',
                            });
                            }}
                        >
                            <Tools/>
                        </TabBar.Item>
                        </TabBar>
                </div>
            </div>
        )
    }
}
