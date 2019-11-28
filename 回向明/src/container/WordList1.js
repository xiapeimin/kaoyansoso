import React, { Component } from 'react'
import {NavBar, Icon,Flex } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Market extends Component {
   constructor(){
      super();
      this.state = {
          todo: ['amplificationn. 扩大；加强',
          'amputationn. 切断,切断手术',
          'anchorn.锚 vi.抛锚，停泊',
          'anesthesia n. 麻醉',
          'animatevt. 使有活力',
          'banana n 香蕉',
          'baby	n.一家中年龄最小的人',
          'bacchanalian	adj. 饮酒狂欢的；行为放纵的',
          'back	adv.回(原处)；向后',
          'backing	n. 衬背,后援,支持者',
          'backup	n. 备份，后备，后援',
          'backwoods	n. 未开垦地,边远地区的人',
          'bacteria	n.细菌',
          'baffle	vt.使挫折 n.迷惑',
          'bake	vt.烤，烘，焙；烧硬',
          'ball	n.球',
          'cab	n. 计程车,出租汽车,出租单马车',
          'cablegram	n. 海底电报',
          'cadaver	n. 尸体',
          'cafe	n.咖啡馆；小餐厅',
          'cake n 蛋糕',
          'calk	vt. 填...以防漏,使不漏水,装尖铁,',
          'calmly	adv. 平静地；沉着地；无风浪地；镇静地',
          'calves	calf的复数',
          'cameraman 摄影师',
          'camping	n. 野营',
          'Canadian	n.加拿大人',
          'cancel	vt.取消，撤消；删去',
          'cancer	n.癌，癌症，肿瘤',
          'candidature	n. 候选人的，资格',
         ]
      }
  }
    render() {
        return (
            <div>
                 <NavBar               
                style={{backgroundColor:'#66cccc',color:'white'}}>
                   <Link to='./Words'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{backgroundColor:'#66cccc',color:'white'}} to='./Home1'>单词详情页</span>           
                </NavBar>

                <div> 
                {
                this.state.todo.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }
                        </div> 
                   </div>
        )
    }
}