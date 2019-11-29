import React, { Component } from 'react'
import {NavBar, Icon,Flex } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Market extends Component {
   constructor(){
      super();
      this.state = {
          todo: ['dab	n. 湿而软的小块；轻拍',
          'dabble	v. 涉足，浅赏',
          'dace	n. 一种鱼',
          'dacron	n. 涤纶',
          'daddy	n. 爸爸',
          'dagger n. 匕首',
          'daily	a.每日的 n.日报',
          'daisy	n. 雏菊,一流的人物',
          'each	pron.各，各自 a.各',
          'eager	a.渴望的，热切的',
          'eagerly	adv. 渴望地；热切地；急切地；热心地',
          'eagle	n.鹰',
          'early	adv.早',
          'earner	n.获得收入者',
          'earnest	a.认真的，诚恳的',
          'earphone	n. 耳机',
          'earth	n.地球',
          'earthly	a. 地球的,俗世的,可能的',
          'ease	n.安逸，熟练，轻易',
          'easily	ad.容易地；舒适的',
          'easterly	a. 东的,向东的,从东的',
          'eat	vt.吃，喝 vi.吃饭',
          'eaves	n. 屋檐',
          'Fabian	a. 费边式的,拖延时间的,',
          'fable	n.寓言；虚构的故事',
          'face	n.脸',
          'facile	adj. 容易做的，肤浅的',
          'fact	n.事实；实际',
          'factor	n.因素；因子，系数',
          'factory	n.工厂，制造厂',
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