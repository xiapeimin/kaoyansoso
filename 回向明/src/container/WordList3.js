import React, { Component } from 'react'
import {NavBar, Icon,Flex } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Market extends Component {
   constructor(){
      super();
      this.state = {
          todo: ['factual	a. 事实的，现实的；实际的，事实上的',
          'fad	n. (流行一时的)狂热，时尚',
          'faeces	n. 粪；排泄物，渣滓',
          'fag	v. 苦干n. 苦工',
          'failing	n. 失败,缺点,过失',
          'failure	n.失败；失败的人',
          'fair	adj.(头发)金色的',
          'fairly	ad.相当；公平地',
          'fait	证书，契据',
          'faithfully	adv. 忠诚地；诚恳地；忠实地',
          'fake	n.假货，膺品 a.假的',
          'fakir	n. 托钵僧，骗子',
          'fall	n.&vi.落下；跌倒',
          'fallible	adj. 会犯错的，易犯错的',
          'falsehood	n. 谎言,虚假',
          'famed	a. 著名的',
          'famous	adj.著名的',
          'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
          'gaberdine	n. 工作服,华达呢',
          'gadget	n. 小工具，小机械',
          'gag	n. 箝口物,箝制言论,讨论终结',
          'gain	vt.&vi.获得 n.利益',
          'gainsay	v. 否认',
          'gale	n. 狂风，一阵（笑声）',
          'gall	n. 胆汁（bile），怨恨（hatred)',
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