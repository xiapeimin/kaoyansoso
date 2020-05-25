import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Tabs,Flex,NavBar, Icon } from 'antd-mobile';
import ReactHighcharts from'react-highcharts';

export default class Contrast extends Component {
    constructor(props){
        super(props);
        let data = this.props.location.query;
        let {a,b} = data;
        this.state = {
            
            a:a,
            b:b,
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
        }
    }
    render(){
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        var data=this.state.data;
        var a=this.state.a;
        var b=this.state.b;
        var line=this.state.line;
        var line1=this.state.line1;
        var line2=this.state.line2;
        const tabs = [
            { title: <p style={{fontSize:'5vw'}}>院校实力</p> },
            { title: <p style={{fontSize:'5vw'}}>分数线</p> },
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
        return(
            <div>
                <NavBar
        style={{background:'#66cccc',color:'#fff'}} leftContent={<Link to={`/appTab?uid=${uid}`}><img src={require('../imgs/zjt.png')} /></Link>}
        mode="light"><span style={{color:'#fff',fontSize:'22px'}}>院校对比</span></NavBar>
                <div style={{backgroundColor:'#5599FF',color:'white',width:'100%',height:'50vw',paddingTop:'5vw'}}>
              <p style={{height:'5vw',fontSize:'7vw',width:'100%',paddingLeft:'37%'}}>软件工程</p>
        <p style={{height:'5vw',fontSize:'6vw',width:'100%',paddingLeft:'25%'}}>{data[a][9]}|{data[b][9]}</p>
              <Link to={`/appTab?uid=${uid}`}>
              <p style={{height:'9vw',fontSize:'5vw',width:'30%',background:'white',color:'#5599FF',marginLeft:'35%',paddingTop:'0.1vw',paddingLeft:'5vw',marginTop:'10vw'}}>
                  重新选择
              </p>
              </Link>
            </div>
            <Tabs tabs={tabs} initialPage={0}>
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
            </Tabs>
            
            </div>
        
        

        )
    }
}