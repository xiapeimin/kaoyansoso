import React, { Component } from 'react'
import { NavBar,Icon,WhiteSpace,Tabs} from 'antd-mobile';
import qinghua from './images/qinghua.jpg';
const tabs = [
    { title: '招生简章'},
    { title:'招生专业'},
    { title:'报录比'},
    {title:'分数线'},
    {title:'复试信息'}
  ];
export default class SchoolDetails extends Component {
    render() {
        return (
            <div>
                <NavBar               
                mode="light"
                icon={<Icon type="left" />}
                style={{backgroundColor:'#66cccc',color:'white'}}>
                    <span style={{backgroundColor:'#66cccc',color:'white'}}>xxx大学</span>
                </NavBar>
                <img src={qinghua} style={{width:'100%',height:'40vw'}}/>
                <WhiteSpace/>
                <div>
                    <button style={{backgroundColor:'#e8b1b1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>985</button>
                    <button style={{backgroundColor:'#a7e4f1',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>211</button>
                    <button style={{backgroundColor:'#b9a2eb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>综合类</button>
                    <button style={{backgroundColor:'#3bc0bb',marginLeft:'5px',borderRadius:'7px',padding:'3px'}}>排名</button>
                </div>
                <div style={{width:'100%'}}>
                    <h2>学院介绍</h2>
                    <p style={{textIndent:'2em',fontSize:'3vw'}}>
                    清华大学软件学院是2001年经国家教育部和国家计委联合发文批准成立的首批全国示范性软件学院之一，
                    隶属于清华大学信息科学与技术学院。以“教学立院、管理建院、学科兴院、科技强院”为办学理念，
                    遵循“练中学、练中闯、练中创”的实践教学思想，追求并践行精品教育。
                    </p>
                </div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ fontSize:'3vw',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
                       招生简章
                    </div>
                    <div style={{ fontSize:'3vw',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
                        软件工程
                    </div>
                    <div style={{fontSize:'3vw', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
                        10：1
                    </div>
                    <div style={{fontSize:'3vw', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
                        400
                    </div>
                    <div style={{fontSize:'3vw', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vw', backgroundColor: '#fff' }}>
                        复试时间
                    </div>
                    </Tabs>
            </div>
        )
    }
}
