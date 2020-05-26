import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Tabs,Flex,NavBar, Icon } from 'antd-mobile';
import ReactHighcharts from'react-highcharts';

export default class Contrast extends Component {
    constructor(props){
        super(props);
        let data = this.props.location.query;
        let {a,b,c} = data;
        this.state = {
            a:a,
            b:b,
            c:c,
            major:[
                ['软件工程','政治','英语','数学或专业基础','专业课','软件架构 软件设计方法 软件领域建模 软件工程决策支持 软件工程教育 软件测试技术 自动化的软件设计和合成 基于组件的软件工程 计算机支持的协同工作 编程语言和软件工程计算机网络 信息与通信安全 计算机图形学与人机交互 多媒体技术应用 人工智能与识别 嵌入式软件与应用 自动控制 分布式计算与网格计算 云计算技术 存储技术 数据库技术研究 计算机辅助设计与应用技术 大数据分析与处理'],
                ['临床医学','政治','英语','西医综合','专业课','临床医学学科包含了临床医学、内科学、儿科学、老年医学、神经病学、精神病与精神卫生学、皮肤病与性病学、影像医学与核医学、临床检验诊断学、外科学、妇产科学、眼科学、耳鼻咽喉科学、肿瘤学、康复医学与理疗学、运动医学、麻醉学、急诊医学。']
            ],
            data:[
                ['北大','北京','一线城市','一区','-','2','985|211','自划线','教育部直属','北京大学'],
                ['清华','北京','一线城市','一区','-','1','985|211','自划线','教育部直属','清华大学'],
                ['复旦','上海','一线城市','一区','-','6','985|211','自划线','教育部直属','复旦大学'],
                ['浙大','杭州','新一线城市','一区','-','3','985|211','自划线','教育部直属','浙江大学'],
                ['中南','长沙','新一线城市','一区','-','22','985|211','自划线','教育部直属','中南大学'],
            ],
            line:[
                [320, 310, 300, 300],
                [341, 334, 330, 320],
                [310,310,320,320],
                [330,330,330,330],
                [335,320,320,320]
            ],
            line1:[
                [60, 50, 50, 50 ,50],
                [50, 50, 50, 50 ,50],
                [50, 50, 50, 50 ,50],
                [55, 55, 55, 55 ,45],
                [50, 45, 45, 45 ,45],
            ],
            line2:[
                [90, 90, 90, 90 ,90],
                [80, 80, 80, 80 ,80],
                [75,75,80,85,90],
                [85,85,85,85,85],
                [75,70,75,70,75]
            ],
            line3:[
                [431,434,427,422],
                [406,403,402,398],
                [301,300,300,303],
                [319,316,314,314],
                [119,120,119,119]
            ]
        }
    }
    render(){
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        var data=this.state.data;
        var a=this.state.a;
        var b=this.state.b;
        var c=this.state.c;
        var major=this.state.major;
        var line=this.state.line;
        var line1=this.state.line1;
        var line2=this.state.line2;
        var line3=this.state.line3;
        const tabs = [
            { title: <div style={{fontSize:'5vw'}}>院校实力</div> },
            { title: <div style={{fontSize:'5vw'}}>分数线</div> },
            { title: <div style={{fontSize:'5vw'}}>竞争力</div> },
            { title: <div style={{fontSize:'5vw'}}>考试科目</div> },
            { title: <div style={{fontSize:'5vw'}}>研究方向</div> },
          ];
          var config = {
            title: {
                text: '总分'
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            credits:{
                enabled:false
            },
            xAxis:{
                categories:['2017','2016','2015','2014']
            },
            series: [{
                name: data[a][0],
                data: line[a]
            },{
                name: data[b][0],
                data: line[b]
            }],
            };
            var config1 = {
                title: {
                    text: '小科(满分<100)'
                },
                yAxis: {
                    title: {
                        text: ''
                    }
                },
                credits:{
                    enabled:false
                },
                xAxis:{
                    categories:['2019','2018','2017','2016','2015']
                },
                series: [{
                    name: data[a][0],
                    data: line1[a]
                },{
                    name: data[b][0],
                    data: line1[b]
                }],
                };
                var config2 = {
                    title: {
                        text: '大科(满分>100)'
                    },
                    yAxis: {
                        title: {
                            text: ''
                        }
                    },
                    credits:{
                        enabled:false
                    },
                    xAxis:{
                        categories:['2019','2018','2017','2016','2015']
                    },
                    series: [{
                        name: data[a][0],
                        data: line2[a]
                    },{
                        name: data[b][0],
                        data: line2[b]
                    }],
                    };
                    var config3 = {
                        title: {
                            text: ''
                        },
                        yAxis: {
                            title: {
                                text: ''
                            }
                        },
                        credits:{
                            enabled:false
                        },
                        xAxis:{
                            categories:['2020-02','2020-03','2020-04','2020-05']
                        },
                        series: [{
                            name: data[a][0],
                            data: line3[a]
                        },{
                            name: data[b][0],
                            data: line3[b]
                        }],
                        };
        return(
            <div>
                <NavBar
        style={{background:'#66cccc',color:'#fff'}} leftContent={<Link to={`/appTab?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
        mode="light"><span style={{color:'#fff',fontSize:'22px'}}>院校对比</span></NavBar>
                <div style={{backgroundColor:'#5599FF',color:'white',width:'100%',height:'50vw',paddingTop:'5vw'}}>
              <p style={{height:'5vw',fontSize:'7vw',width:'100%',paddingLeft:'37%'}}>{major[c][0]}</p>
        <p style={{height:'5vw',fontSize:'6vw',width:'100%',paddingLeft:'25%'}}>{data[a][9]}|{data[b][9]}</p>
              <Link to={`/appTab?uid=${uid}`}>
              <p style={{height:'9vw',fontSize:'5vw',width:'30%',background:'white',color:'#5599FF',marginLeft:'35%',paddingTop:'0.1vw',paddingLeft:'5vw',marginTop:'10vw'}}>
                  重新选择
              </p>
              </Link>
            </div>
            <Tabs tabs={tabs} initialPage={0} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
            <div>
                <div style={{width:'90%',height:'150vw',border:'2px solid #5599FF',marginLeft:'5%',marginTop:'5vw'}}>
                    <div style={{width:'100%',borderBottom:'2px dashed #000',height:'10%'}}>
        <div style={{marginLeft:'45%',fontSize:'5vw',paddingTop:'3vw',fontWeight:'bold'}}>{data[a][0]}</div>
                    <div style={{marginLeft:'75%',fontSize:'5vw',marginTop:'-7.5vw',fontWeight:'bold'}}>{data[b][0]}</div>
                    </div>
                    <div style={{width:'100%',borderBottom:'1px dashed #000',height:'20%'}}>
                        <div style={{marginLeft:'5%',fontSize:'6vw',paddingTop:'10vw'}}>所在城市</div>
                        <div style={{marginLeft:'45%',fontSize:'5vw',marginTop:'-13vw'}}>{data[a][1]}</div>
                    <div style={{marginLeft:'75%',fontSize:'5vw',marginTop:'-7.5vw'}}>{data[b][1]}</div>
                    <div style={{marginLeft:'38%',fontSize:'5vw',marginTop:'5vw'}}>{data[a][2]}</div>
                    <div style={{marginLeft:'68%',fontSize:'5vw',marginTop:'-7.5vw'}}>{data[b][2]}</div>
                    </div>

                    <div style={{width:'100%',borderBottom:'1px dashed #000',height:'10%'}}>
                    <div style={{marginLeft:'5%',fontSize:'6vw',paddingTop:'3vw'}}>所属分区</div>
                    <div style={{marginLeft:'45%',fontSize:'5vw',marginTop:'-8vw'}}>{data[a][3]}</div>
                    <div style={{marginLeft:'75%',fontSize:'5vw',marginTop:'-7.5vw'}}>{data[b][3]}</div>
                    </div>

                    <div style={{width:'100%',borderBottom:'1px dashed #000',height:'10%'}}>
                    <div style={{marginLeft:'5%',fontSize:'6vw',paddingTop:'3vw'}}>专业排名</div>
                    <div style={{marginLeft:'50%',fontSize:'5vw',marginTop:'-8vw'}}>{data[a][4]}</div>
                    <div style={{marginLeft:'80%',fontSize:'5vw',marginTop:'-7.5vw'}}>{data[b][4]}</div>
                    </div>
                    <div style={{width:'100%',borderBottom:'1px dashed #000',height:'10%'}}>
                    <div style={{marginLeft:'5%',fontSize:'6vw',paddingTop:'3vw'}}>院校排名</div>
                    <div style={{marginLeft:'50%',fontSize:'5vw',marginTop:'-8vw'}}>{data[a][5]}</div>
                    <div style={{marginLeft:'80%',fontSize:'5vw',marginTop:'-7.5vw'}}>{data[b][5]}</div>
                    </div>

                    <div style={{width:'100%',borderBottom:'1px dashed #000',height:'25%'}}>
                    <div style={{marginLeft:'5%',fontSize:'6vw',paddingTop:'14vw'}}>院校属性</div>
                    <div style={{marginLeft:'42%',fontSize:'5vw',marginTop:'-20vw'}}>{data[a][6]}</div>
                    <div style={{marginLeft:'72%',fontSize:'5vw',marginTop:'-7.5vw'}}>{data[b][6]}</div>
                    <div style={{marginLeft:'43%',fontSize:'5vw',marginTop:'5vw'}}>{data[a][7]}</div>
                    <div style={{marginLeft:'72%',fontSize:'5vw',marginTop:'-7.5vw'}}>{data[b][7]}</div>
                    <div style={{marginLeft:'40%',fontSize:'4vw',marginTop:'5vw'}}>{data[a][8]}</div>
                    <div style={{marginLeft:'70%',fontSize:'4vw',marginTop:'-6vw'}}>{data[b][8]}</div>
                    </div>
                    <div style={{padding:'5vw'}}>提示：不同城市的就业会存在一定差异，所以城市也是选择院校的一个重要因素哦</div>
                </div>
            </div>
            <div>
                <h1 style={{margin:'5vw'}}>目标院校</h1>
                <div style={{width:'90%',marginLeft:'5%',marginTop:'10vw',fontSize:'7vw'}}>
                        <ReactHighcharts config={config} style={{fontSize:'7vw'}}/>
                        <ReactHighcharts config={config1} style={{fontSize:'7vw'}}/>
                        <ReactHighcharts config={config2} style={{fontSize:'7vw'}}/>
                </div>
            </div>
            <div>
            <h1 style={{margin:'5vw'}}>专业关注人数</h1>
            <div style={{width:'90%',marginLeft:'5%',marginTop:'10vw',fontSize:'7vw'}}>
                        <ReactHighcharts config={config3} style={{fontSize:'7vw'}}/>
                </div>
            </div>
            <div>
            <h1 style={{margin:'5vw'}}>考试科目</h1>
        <h2 style={{margin:'5vw'}}>{major[c][1]}</h2>
            <h2 style={{margin:'5vw'}}>{major[c][2]}</h2>
            <h2 style={{margin:'5vw'}}>{major[c][3]}</h2>
            <h2 style={{margin:'5vw'}}>{major[c][4]}</h2>
            </div>
            <div>
            <h1 style={{margin:'5vw'}}>研究方向</h1>
            <h2 style={{margin:'5vw'}}>{major[c][5]}</h2>
            </div>
            </Tabs>
            </div>
        )
    }
}