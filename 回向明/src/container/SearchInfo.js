import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {SearchBar, NavBar, Icon ,Flex} from 'antd-mobile';

export default class SearchInfo extends Component {
    render() {
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        return (
            <div className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/appTab?uid=${uid}&type=home`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>找资源</span></NavBar>
                
                <Link to={`/search?uid=${uid}`}><SearchBar value={'这里啥都有~'} placeholder="Search" cancelText={'搜索'} /></Link>

                <Link to={`/sear/?uid=${uid}&type=mus`}>
                <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'10vw'}}>                             
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/music.jpg')}/>
                    
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        音视频
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex> 
                    </Flex.Item>
                    </Link>
            
                    <Link to={`/sear/?uid=${uid}&type=text`}>
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'15vw'}}>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/pen.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        考研文本资料
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Flex.Item>
                    </Link>
                
                    <Link to={`/sear/?uid=${uid}&type=share`}>
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'20vw'}}>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/jingyan.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        经验分享
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>  
                    </Flex.Item>
                    </Link>

                    <Link to={`/sear/?uid=${uid}&type=laoliang`}>
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'25vw'}}>             
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/laoliang.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        老梁考研汇
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Flex.Item>
                    </Link>

                    <Link to={`/sear/?uid=${uid}&type=xuefeng`}>
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'30vw'}}>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/xuefeng.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        雪峰讲考研
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>  
                    </Flex.Item>
                    </Link>
            </div>
        )
    }
}