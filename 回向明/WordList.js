import React, { Component } from 'react'
import {Tabs,NavBar, Icon,Flex} from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Market extends Component {
    render() {
        const tabs = [
            { title: 'world list1' },
            { title: 'world list2' },
            { title: 'world list3' },
          ];
        return (
            <div>
               <NavBar               
                style={{backgroundColor:'#66cccc',color:'white'}}>
                   <Link to='./Words'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{backgroundColor:'#66cccc',color:'white'}} to='./Home1'>单词详情页</span>           
                </NavBar>
                <Tabs tabs={tabs} initialPage={0}>
                    <div>
        <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>abdomen&nbsp;&nbsp;n腹，下腹</Flex.Item>
                </Flex.Item>
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>abnormal&nbsp;&nbsp;adj反常的</Flex.Item>
                </Flex.Item>
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>absolute&nbsp;&nbsp;adj绝对的</Flex.Item>
                </Flex.Item>
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>absent&nbsp;&nbsp;adj缺席的</Flex.Item>
                </Flex.Item>
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>abstract&nbsp;&nbsp;adj抽象的</Flex.Item>
                </Flex.Item>
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>abrod&nbsp;&nbsp;adv在国外</Flex.Item>
                </Flex.Item>
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>about&nbsp;&nbsp;adv大约</Flex.Item>
                </Flex.Item>
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>able&nbsp;&nbsp;adj有才能的</Flex.Item>
                </Flex.Item>
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>abolish&nbsp;&nbsp;v废除</Flex.Item>
                </Flex.Item>
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderTop:'1px solid black',
                fontSize:'20px'}}>
                   <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}>aboard&nbsp;&nbsp;adv船上</Flex.Item>
                </Flex.Item>    
                </div>
                </Tabs>         
            </div>
        )
    }
}