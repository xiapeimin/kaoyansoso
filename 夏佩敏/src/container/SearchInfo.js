import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {SearchBar, NavBar, Icon ,Flex} from 'antd-mobile';

export default class SearchInfo extends Component {
    render() {
        return (
            <div className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={'/appTab'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'22px'}}>找资源</span></NavBar>
                
                <Link to={'/search'}><SearchBar value={'这里啥都有~'} placeholder="Search" cancelText={'搜索'} /></Link>
                
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'10vw'}}>
                        <Link to='/sear/?type=mus'>
                        <Flex.Item style={{position:"absolute",width:'3vw',height:'3vw',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/music.jpg')}/>
                    
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        音视频
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Link>
                    </Flex.Item>
            
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'15vw'}}>
                    <Link to='/sear/?type=text'>
                        <Flex.Item style={{position:"absolute",width:'3vw',height:'3vw',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/pen.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        考研文本资料
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Link>
                    </Flex.Item>
                
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'20vw'}}>
                    <Link to='/sear/?type=share'>
                        <Flex.Item style={{position:"absolute",width:'3vw',height:'3vw',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../imgs/jingyan.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        经验分享
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Link>
                    </Flex.Item>
                
                    <Flex.Item style={{position:'absolute',height:'20vw',width:'90%',left:'5%',bottom:'2vw',
                    backgroundColor:'#a8d4c8'}}>
                        <Flex.Item style={{position:'absolute',width:'100%',fontSize:'5vw',color:'white',top:'40%',
                        textAlign:'center'
                    }}>
                            希望对你有所帮助喲，祝你好运~
                        </Flex.Item>
                    </Flex.Item>
            </div>
        )
    }
}