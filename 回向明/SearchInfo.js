import React, {Component} from 'react'
import {SearchBar, NavBar, Icon ,Flex} from 'antd-mobile';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar               
                mode="light"
                icon={<Icon type="left" />}
                style={{backgroundColor:'#66cccc',color:'white'}}>
                    <sapn style={{backgroundColor:'#66cccc',color:'white'}}>找资源</sapn>
                </NavBar>
                <SearchBar placeholder="这里啥都有"/>
                <Flex>
                    <Flex.Item style={{position:'relative',height:'100px',width:'100%',top:'20px'}}>
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'50px',height:'50px',borderRadius:'50%',left:'5%'}} src={require('../images/music.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'20%',fontSize:'17px'}}>
                        音视频
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} />
                    </Flex>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item style={{position:'relative',height:'100px',width:'100%',top:'20px'}}>
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'50px',height:'50px',borderRadius:'50%',left:'5%'}} src={require('../images/pen.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'20%',fontSize:'17px'}}>
                        考研文本资料
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} />
                    </Flex>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item style={{position:'relative',height:'100px',width:'100%',top:'20px'}}>
                        <Flex.Item style={{position:"absolute",width:'10px',height:'10px',top:'20%',
                        borderRadius:'50%',left:'1%',backgroundColor:'blue'}}></Flex.Item>
                    <img style={{position:"absolute",width:'50px',height:'50px',borderRadius:'50%',left:'5%'}} src={require('../images/jingyan.jpg')}/>
                    <Flex.Item style={{position:"absolute",left:'20%',top:'20%',fontSize:'17px'}}>
                        经验分享
                    </Flex.Item>
                    <Flex style={{position:"absolute",right:'5%',top:'20%'}}>
                    <Icon type={'right'} />
                    </Flex>
                    </Flex.Item>
                </Flex>
                    <Flex.Item style={{position:'relative',height:'100px',width:'90%',left:'5%',bottom:'-150px',
                    backgroundColor:'gray'}}>
                        <Flex.Item style={{position:'absolute',width:'100%',fontSize:'20px',color:'white',top:'40%',
                        textAlign:'center'
                    }}>
                            希望对你有所帮助啊，祝你好运
                        </Flex.Item>
                    </Flex.Item>
            </div>
        )
    }
}