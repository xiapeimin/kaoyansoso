import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {SearchBar, NavBar, Icon ,Flex} from 'antd-mobile';

export default class SearchInfo extends Component {
    render() {
        return (
            <div>
                <NavBar               
                mode="light"
                icon={<Icon type="left" />}
                style={{backgroundColor:'#66cccc',color:'white'}}>
                    <span style={{backgroundColor:'#66cccc',color:'white'}}>找资源</span>
                </NavBar>
                <SearchBar placeholder="这里啥都有"/>
                
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'10vw'}}>
                        <Link to='./Resource'>
                        <Flex.Item style={{position:"absolute",width:'3vw',height:'3vw',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../images/music.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        音视频
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Link>
                    </Flex.Item>
            
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'15vw'}}>
                    <Link to='./Resource'>
                        <Flex.Item style={{position:"absolute",width:'3vw',height:'3vw',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../images/pen.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        考研文本资料
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Link>
                    </Flex.Item>
                
                    <Flex.Item style={{position:'relative',height:'20vw',width:'100%',top:'20vw'}}>
                    <Link to='./Resource'>
                        <Flex.Item style={{position:"absolute",width:'3vw',height:'3vw',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'14vw',height:'14vw',borderRadius:'50%',left:'5%'}} src={require('../images/jingyan.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'25%',top:'20%',fontSize:'4vw',fontWeight:'bold',color:'black'}}>
                        经验分享
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} style={{height:'10vw',width:'10vw',color:'black'}}/>
                    </Flex>
                    </Link>
                    </Flex.Item>
                
                    <Flex.Item style={{position:'relative',height:'20vw',width:'90%',left:'5%',bottom:'-50vw',
                    backgroundColor:'gray'}}>
                        <Flex.Item style={{position:'absolute',width:'100%',fontSize:'5vw',color:'white',top:'40%',
                        textAlign:'center'
                    }}>
                            希望对你有所帮助啊，祝你好运
                        </Flex.Item>
                    </Flex.Item>
            </div>
        )
    }
}