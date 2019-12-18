import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {NavBar,SearchBar} from 'antd-mobile';

import ship from '../imgs/ship.png';
import ship2 from '../imgs/ship2.png';
import ship3 from '../imgs/ship3.png';
import ship4 from '../imgs/ship4.png';
import rd1 from '../imgs/rd1.jpg';
import rd2 from '../imgs/rd2.jpg';
import rd3 from '../imgs/rd3.jpg';
import rd4 from '../imgs/rd4.jpg';
import rd5 from '../imgs/rd5.jpg';
import shuju from '../imgs/shuju.jpg';
import caozuo from '../imgs/caozuo.jpg';
import shujuku from '../imgs/shujuku.jpg';
import wangluo from '../imgs/wangluo.jpg';
import engtest1 from '../imgs/engtest1.jpg';
import engtest2 from '../imgs/engtest2.jpg';
import engtest3 from '../imgs/engtest3.jpg';
import engtest4 from '../imgs/engtest4.png';
import engtest5 from '../imgs/engtest5.jpg';
import engtest6 from '../imgs/engtest6.png';
import math1 from '../imgs/math1.jpg';
import math2 from '../imgs/math2.jpg';
import math3 from '../imgs/math3.jpg';
import math4 from '../imgs/math4.jpg';
import math5 from '../imgs/math5.jpg';
import math6 from '../imgs/math6.gif';
import math7 from '../imgs/math7.gif';
import math8 from '../imgs/math8.jpg';
import zztest1 from '../imgs/zztest1.jpg';
import zztest2 from '../imgs/zztest2.jpg';
import zztest3 from '../imgs/zztest3.jpg';
import zztest4 from '../imgs/zztest4.jpg';
import zztest5 from '../imgs/zztest5.jpg';

var sear='';
var school2=[];
var firearr2=[];
var all=[];
var cvedio2=[];
var tiku2=[];
export default class Search extends Component{
    constructor(){
        super();
        this.state = {
            fflag:0,
            vstr:'',
            flag:0,
            flag2:0,
            uid:0,
            type:'home',
            storage:window.localStorage,
            hisdata:[],
            firdata:['免费课程','软件工程','英语','考研真题','题库','大学排名','心理学'],
            school:[],
            tiku:[],
            cvedio:[],
            firearr:[],
            anhui:[],
            beijing:[],
            chongqing:[],
            fujian:[],
            gansu:[],
            guangdong:[],
            guangxi:[],
            guizhou:[],
            hainan:[],
            hebei:[],
            heilongjiang:[],
            henan:[],
            hubei:[],
            hunan:[],
            jiangsu:[],
            jiangxi:[],
            jilin:[],
            liaoning:[],
            neimenggu:[],
            ningxia:[],
            qinghai:[],
            shandong:[],
            shanghai:[],
            shanxi1:[],
            shanxi2:[],
            sichuan:[],
            tianjin:[],
            xinjiang:[],
            xizang:[],
            yunnan:[],
            zhejiang:[]
        };

        var s = window.location.hash;
        var uid;
        if(s.indexOf('&')>=0){
            uid = s.split('&')[0].split('=')[1];           
        }else{
            uid = s.split('=')[1];   
        }
        var storage = this.state.storage; 
        sear = 'searchu'+uid;
        if(storage.getItem(sear) == null){
            var todo= [];
            var d=JSON.stringify(todo); 
            storage.setItem(sear,d);
        }   
        
        if(storage.getItem('valueflag') == null){
            var f= 0;
            storage.setItem('valueflag',f);
        } 
        if(storage.getItem('valuestr') == null){
            var s='';
            storage.setItem('valuestr',s);
        }  
       
    }

    componentDidMount(){
        this.autoFocusInst.focus();

        var str = window.location.hash;
        if(str.indexOf('&')>=0){
            var uid = str.split('&')[0].split('=')[1];
            var type = str.split('&')[1].split('=')[1];
            console.log(uid);
            this.setState({
                uid:uid,
                type:type
            });
        }  
        
        var storage = this.state.storage;
        var json=storage.getItem(sear); 
        var jsonObj=JSON.parse(json);

        var valueflag = storage.getItem('valueflag');
        var e = storage.getItem('valuestr');

        this.setState({
            hisdata:jsonObj,
            flag:valueflag
        }); 
        
        if(str.indexOf('his')>=0){
            this.setState({
                flag:0
            })
        }else if(str.indexOf('his')<0){
            this.setState({
                flag2:1
            })
        }

        fetch('http://wqh.xpmwqhzygy.top/school')
        .then((res)=>res.json())
        .then((res)=>{
            var c = JSON.parse(res);
            console.log(c);
            this.setState({
                anhui:c.anhui,
                beijing:c.beijing,
                chongqing:c.chongqing,
                fujian:c.fujian,
                gansu:c.gansu,
                guangdong:c.guangdong,
                guangxi:c.guangxi,
                guizhou:c.guizhou,
                hainan:c.hainan,
                hebei:c.hebei,
                heilongjiang:c.heilongjiang,
                henan:c.henan,
                hubei:c.hubei,
                hunan:c.hunan,
                jiangsu:c.jiangsu,
                jiangxi:c.jiangxi,
                jilin:c.jilin,
                liaoning:c.liaoning,
                neimenggu:c.neimenggu,
                ningxia:c.ningxia,
                qinghai:c.qinghai,
                shandong:c.shandong,
                shanghai:c.shanghai,
                shanxi1:c.shanxi1,
                shanxi2:c.shanxi2,
                sichuan:c.sichuan,
                tianjin:c.tianjin,
                xinjiang:c.xinjiang,
                xizang:c.xizang,
                yunnan:c.yunnan,
                zhejiang:c.zhejiang
            });

            if(str.indexOf('his')<0){
                this.setState({
                    flag2:1
                });
                var allschool = this.state.beijing.concat(this.state.anhui).concat(this.state.chongqing).concat(this.state.fujian).concat(this.state.gansu).concat(this.state.guangdong).concat(this.state.guangxi).concat(this.state.guizhou).concat(this.state.hainan).concat(this.state.hebei).concat(this.state.heilongjiang).concat(this.state.henan).concat(this.state.hubei).concat(this.state.hunan).concat(this.state.jiangsu).concat(this.state.jiangxi).concat(this.state.jilin).concat(this.state.liaoning).concat(this.state.neimenggu).concat(this.state.ningxia).concat(this.state.qinghai).concat(this.state.shandong).concat(this.state.shanghai).concat(this.state.shanxi1).concat(this.state.shanxi2).concat(this.state.sichuan).concat(this.state.tianjin).concat(this.state.xinjiang).concat(this.state.xizang).concat(this.state.yunnan).concat(this.state.zhejiang);
                for(var i=0;i<allschool.length;i++){
                    if(e==allschool[i].des){
                        this.setState({
                            school:[allschool[i]],
                            tiku:[],
                            cvedio:[],
                            firearr:[],
                            fflag:1
                        });
                        tiku2=['暂无数据'];
                        cvedio2=['暂无数据'];
                        firearr2=['暂无数据'];
                        all=[];
                        school2=[];
                        i=allschool.length;
                    }
                }
                if(this.state.fflag != 1){
                if(e.indexOf('河北师范大学')>=0){
                    this.setState({
                        school:[{
                            "img":"http://202.206.100.34:8080/andacms/export/www/resources/40/20151221111634781.jpg",
                            "des":"河北师范大学",
                            "row":"院校排名：171",
                            "city":"石家庄",
                            "one":"师范类",
                            "two":"本科 公办"
                        }],
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('北京大学')>=0){
                    this.setState({
                        school:[{
                            "img":"http://img03.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fimg01.sogoucdn.com%2Fapp%2Fa%2F100520093%2F22682a086365be9a-38bde84ba65aa1a3-ab565d913aa4f215d6629386dbb24582.jpg",
                            "des":"北京大学",
                            "row":"院校排名：1",
                            "city":"北京",
                            "one":"985",
                            "two":"211"
                        }],
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('软件工程')>=0 || e.indexOf('软件')>=0){
                    this.setState({
                        school:[{
                            "img":"http://img03.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fimg01.sogoucdn.com%2Fapp%2Fa%2F100520093%2F22682a086365be9a-38bde84ba65aa1a3-ab565d913aa4f215d6629386dbb24582.jpg",
                            "des":"北京大学",
                            "row":"院校排名：1",
                            "city":"北京",
                            "one":"985",
                            "two":"211"
                        },{
                            "img":"http://img03.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fimg01.sogoucdn.com%2Fapp%2Fa%2F100520093%2F09225a8782ea208e-1c9460610f8d006d-0660006206c0d0cf901f32d79e806a03.jpg",
                            "des":"清华大学",
                            "row":"院校排名：2",
                            "city":"北京",
                            "one":"985",
                            "two":"211"
                        },{
                            "img":"http://img04.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fi01piccdn.sogoucdn.com%2Ff7727f0ce1bcdd4f",
                            "des":"中南大学",
                            "row":"院校排名：17",
                            "city":"长沙",
                            "one":"985",
                            "two":"211"
                        }],
                        tiku:[{
                            "img":shuju,
                            "id":0,
                            "flag":4,
                            "name":'2018年数据结构真题',
                            "text":"1、研究数据结构就是研究().A.数据的逻辑结构 B. 数据的存储结构 C. 数据的逻辑...",
                        },{
                            "img":caozuo,
                            "id":1,
                            "flag":4,
                            "name":'2018年操作系统真题',
                            "text":"1、操作系统设计的两个目标是 易用 和  高效。2、P.V操作必须成对   出现，有一...",
                        },{
                            "img":shujuku,
                            "id":2,
                            "flag":4,
                            "name":'2018年数据库真题',
                            "text":"一、单项选择题 1．数据库（DB），数据库系统（DBS）和数据库管理系统（DBMS）之间的关系是...",
                        },{
                            "img":wangluo,
                            "id":3,
                            "flag":4,
                            "name":'2018年网络原理真题',
                            "text":"1.电信业一般认为宽带骨干网数据传输速率应达到() A．640Kbps B．640Mbps C．1Gbps D．2Gbps...",
                        },{
                            "img":shuju,
                            "id":4,
                            "flag":4,
                            "name":'2017年数据结构真题',
                            "text":"1、研究数据结构就是研究().A.数据的逻辑结构 B. 数据的存储结构 C. 数据的逻辑...",
                        },{
                            "img":caozuo,
                            "id":5,
                            "flag":4,
                            "name":'2017年操作系统真题',
                            "text":"1、操作系统设计的两个目标是 易用 和  高效。2、P.V操作必须成对   出现，有一...",
                        },{
                            "img":shujuku,
                            "id":6,
                            "flag":4,
                            "name":'2017年数据库真题',
                            "text":"一、单项选择题 1．数据库（DB），数据库系统（DBS）和数据库管理系统（DBMS）之间的关系是...",
                        },{
                            "img":wangluo,
                            "id":7,
                            "flag":4,
                            "name":'2017年网络原理真题',
                            "text":"1.电信业一般认为宽带骨干网数据传输速率应达到() A．640Kbps B．640Mbps C．1Gbps D．2Gbps...",
                        }],
                        cvedio:[],
                        firearr:[]
                    });
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    tiku2=[];
                    school2=[];
                }else if(e.indexOf('北京')>=0){
                    this.setState({
                        school:this.state.beijing,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('安徽')>=0){
                    this.setState({
                        school:this.state.anhui,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('重庆')>=0){
                    this.setState({
                        school:this.state.chongqing,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('福建')>=0){
                    this.setState({
                        school:this.state.fujian,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('甘肃')>=0){
                    this.setState({
                        school:this.state.gansu,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('广东')>=0){
                    this.setState({
                        school:this.state.guangdong,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('广西')>=0){
                    this.setState({
                        school:this.state.guangxi,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('贵州')>=0){
                    this.setState({
                        school:this.state.guizhou,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('海南')>=0){
                    this.setState({
                        school:this.state.hainan,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('河北')>=0){
                    this.setState({
                        school:this.state.hebei,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('黑龙江')>=0){
                    this.setState({
                        school:this.state.heilongjiang,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('河南')>=0){
                    this.setState({
                        school:this.state.henan,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('湖北')>=0){
                    this.setState({
                        school:this.state.hubei,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('湖南')>=0){
                    this.setState({
                        school:this.state.hunan,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('江苏')>=0){
                    this.setState({
                        school:this.state.jiangsu,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('江西')>=0){
                    this.setState({
                        school:this.state.jiangxi,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('吉林')>=0){
                    this.setState({
                        school:this.state.jilin,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('辽宁')>=0){
                    this.setState({
                        school:this.state.liaoning,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('内蒙古')>=0){
                    this.setState({
                        school:this.state.neimenggu,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('宁夏')>=0){
                    this.setState({
                        school:this.state.ningxia,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('青海')>=0){
                    this.setState({
                        school:this.state.qinghai,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('山东')>=0){
                    this.setState({
                        school:this.state.shandong,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('上海')>=0){
                    this.setState({
                        school:this.state.shanghai,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('陕西')>=0){
                    this.setState({
                        school:this.state.shanxi2,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('山西')>=0){
                    this.setState({
                        school:this.state.shanxi1,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('四川')>=0){
                    this.setState({
                        school:this.state.sichuan,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('天津')>=0){
                    this.setState({
                        school:this.state.tianjin,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('西藏')>=0){
                    this.setState({
                        school:this.state.xizang,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('云南')>=0){
                    this.setState({
                        school:this.state.yunnan,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('浙江')>=0){
                    this.setState({
                        school:this.state.zhejiang,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('排名')>=0){
                    this.setState({
                        school:[],
                        tiku:[],
                        cvedio:[],
                        firearr:[{
                            "img":rd1,
                            "name":"2019年ESI中国大学综合排名",
                            "text":"11月15日，ESI数据库更新了2019年11月最 新ESI数据，这也是2019年最后...",
                        }]
                    });
                    school2=['暂无数据'];
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    all=[];
                    firearr2=[];
                }else if(e.indexOf('院校')>=0 || e.indexOf('学校')>=0 || e.indexOf('大学')>=0 || e.indexOf('高校')>=0){
                    var arr = this.state.beijing.concat(this.state.anhui).concat(this.state.chongqing).concat(this.state.fujian).concat(this.state.gansu).concat(this.state.guangdong).concat(this.state.guangxi).concat(this.state.guizhou).concat(this.state.hainan).concat(this.state.hebei).concat(this.state.heilongjiang).concat(this.state.henan).concat(this.state.hubei).concat(this.state.hunan).concat(this.state.jiangsu).concat(this.state.jiangxi).concat(this.state.jilin).concat(this.state.liaoning).concat(this.state.neimenggu).concat(this.state.ningxia).concat(this.state.qinghai).concat(this.state.shandong).concat(this.state.shanghai).concat(this.state.shanxi1).concat(this.state.shanxi2).concat(this.state.sichuan).concat(this.state.tianjin).concat(this.state.xinjiang).concat(this.state.xizang).concat(this.state.yunnan).concat(this.state.zhejiang);
                    this.setState({
                        school:arr,
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                    tiku2=['暂无数据'];
                    firearr2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    all=[];
                    school2=[];
                }else if(e.indexOf('英语题库')>=0 || e.indexOf('英语真题')>=0 || e.indexOf('英语')>=0){
                    this.setState({
                        tiku:[{
                            "img":engtest5,
                            "id":0,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"I'm wangNan,a student of No.1 Middle School. I have a gooa friend,Jim.He' an US...",
                        },{
                            "img":engtest4,
                            "id":1,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike paly...",
                        },{
                            "img":engtest3,
                            "id":2,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"1. until【解析】根据上文“卡耐基于1888年出生于美国中部一个贫穷的家庭”可猜测本句说的是...",
                        },{
                            "img":engtest2,
                            "id":3,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"历年真题是重要的复习资料，冲刺阶段，考生更应该好好利用真题，做好巩固提升。新东方在线...",
                        },{
                            "img":engtest1,
                            "id":4,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"Directions: Read the following text. Choose the best word(s) for each number...",
                        },{
                            "img":engtest6,
                            "id":5,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike palying soccer...",
                        },{
                            "img":engtest4,
                            "id":6,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"I'm wangNan,a student of No.1 Middle School. I have a gooa friend,Jim.He' an...",
                        },{
                            "img":engtest5,
                            "id":7,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"1. until【解析】根据上文“卡耐基于1888年出生于美国中部一个贫穷的家庭”可猜测本句说的是...",
                        },{
                            "img":engtest2,
                            "id":8,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":'Though not biologically related, friends are as "related" as fourth cousins, sharing...',
                        },{
                            "img":engtest3,
                            "id":9,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike palying soccer...",
                        },{
                            "img":engtest6,
                            "id":10,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"The study is a genome-wide analysis conducted 3 1932 unique subjects which 4 pairs ...",
                        }],
                        school:[],
                        cvedio:[],
                        firearr:[]
                    });
                    school2=['暂无数据'];
                    firearr2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    all=[];
                    tiku2=[];
                }else if(e.indexOf('数学题库')>=0 || e.indexOf('数学真题')>=0 || e.indexOf('数学')>=0){
                    this.setState({
                        tiku:[{
                            "img":math1,
                            "id":0,
                            "flag":3,
                            "name":'2018考研数学（一）真题',
                            "text":"一、选择题：1~8小题，每小题4分，共32分，下列每题给出的四个选项中...",
                        },{
                            "img":math2,
                            "id":1,
                            "flag":3,
                            "name":'2017考研数学（一）真题',
                            "text":"1.设A,B为阶矩阵，记为矩阵的秩，表示分块矩阵，则（  ）。A.r(A,AB)=r(A) B...",
                        },{
                            "img":math3,
                            "id":2,
                            "flag":3,
                            "name":'2016考研数学（一）真题',
                            "text":"1.将长为2m的铁丝分成三段，依次围成圆，正方形与正三角形的面积之和是否存在最小值？若...",
                        },{
                            "img":math4,
                            "id":3,
                            "flag":3,
                            "name":'2015考研数学（一）真题',
                            "text":"1.设随机事件A与B互相对立，A与C互相独立，BC交集为空，若...",
                        },{
                            "img":math5,
                            "id":4,
                            "flag":3,
                            "name":'2018考研数学（二）真题',
                            "text":"1.设函数f(x)在闭区间[0,1]上可微，对于[0,1]上的每一个x，函数f(x)的值都在开区间（0,1）内，且...",
                        },{
                            "img":math6,
                            "id":5,
                            "flag":3,
                            "name":'2017考研数学（二）真题',
                            "text":"1.设在一次实验中，事件a发生的概率为p,先进行n次独立实验，则...",
                        },{
                            "img":math7,
                            "id":6,
                            "flag":3,
                            "name":'2016考研数学（二）真题',
                            "text":"1.有两个箱子，第一个箱子有3个白球，2个红球，第二个箱子有4白球...",
                        },{
                            "img":math8,
                            "id":7,
                            "flag":3,
                            "name":'2015考研数学（二）真题',
                            "text":"1.设有一半径为r的球体，p0是此球的表面上的一个定点，球体上任一点...",
                        }],
                        school:[],
                        cvedio:[],
                        firearr:[]
                    });
                    school2=['暂无数据'];
                    firearr2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    all=[];
                    tiku2=[];
                }else if(e.indexOf('政治题库')>=0 || e.indexOf('政治真题')>=0 || e.indexOf('政治')>=0){
                    this.setState({
                        tiku:[{
                            "img":zztest1,
                            "id":0,
                            "flag":2,
                            "name":'2018年考研政治真题',
                            "text":"1.马克思和恩格斯始终站在世界无产阶级革命的前沿，他们的一生都在为...",
                        },{
                            "img":zztest2,
                            "id":1,
                            "flag":2,
                            "name":'2017年考研政治真题',
                            "text":"1.在以私有制为基础的商品经济中，商品生产者的私人劳动生产的产品是否与...",
                        },{
                            "img":zztest3,
                            "id":2,
                            "flag":2,
                            "name":'2016年考研政治真题',
                            "text":"1.习近平新时代中国特色社会主义思想的核心要义是()。A.推进马克思主...",
                        },{
                            "img":zztest4,
                            "id":3,
                            "flag":2,
                            "name":'2015年考研政治真题',
                            "text":"1.党的十八大以来，为了更好的成就我国国家安全面临的新形势新任务，实现...",
                        },{
                            "img":zztest5,
                            "id":4,
                            "flag":2,
                            "name":'2014年考研政治真题',
                            "text":"1.由于民族危机越来越严重。在维新派的推动和策划下，1898年6月11日，光绪皇帝...",
                        }],
                        school:[],
                        cvedio:[],
                        firearr:[]
                    });
                    school2=['暂无数据'];
                    firearr2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    all=[];
                    tiku2=[];
                }else if(e.indexOf('题库')>=0 || e.indexOf('真题')>=0 || e.indexOf('题')>=0){
                    this.setState({
                        tiku:[{
                            "img":engtest5,
                            "id":0,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"I'm wangNan,a student of No.1 Middle School. I have a gooa friend,Jim.He' an US...",
                        },{
                            "img":engtest4,
                            "id":1,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike paly...",
                        },{
                            "img":engtest3,
                            "id":2,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"1. until【解析】根据上文“卡耐基于1888年出生于美国中部一个贫穷的家庭”可猜测本句说的是...",
                        },{
                            "img":engtest2,
                            "id":3,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"历年真题是重要的复习资料，冲刺阶段，考生更应该好好利用真题，做好巩固提升。新东方在线...",
                        },{
                            "img":engtest1,
                            "id":4,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"Directions: Read the following text. Choose the best word(s) for each number...",
                        },{
                            "img":engtest6,
                            "id":5,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike palying soccer...",
                        },{
                            "img":engtest4,
                            "id":6,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"I'm wangNan,a student of No.1 Middle School. I have a gooa friend,Jim.He' an...",
                        },{
                            "img":engtest5,
                            "id":7,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"1. until【解析】根据上文“卡耐基于1888年出生于美国中部一个贫穷的家庭”可猜测本句说的是...",
                        },{
                            "img":engtest2,
                            "id":8,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":'Though not biologically related, friends are as "related" as fourth cousins, sharing...',
                        },{
                            "img":engtest3,
                            "id":9,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike palying soccer...",
                        },{
                            "img":engtest6,
                            "id":10,
                            "flag":1,
                            "name":'2016考研英语（一）真题',
                            "text":"The study is a genome-wide analysis conducted 3 1932 unique subjects which 4 pairs ...",
                        },{
                            "img":math1,
                            "id":0,
                            "flag":3,
                            "name":'2018考研数学（一）真题',
                            "text":"一、选择题：1~8小题，每小题4分，共32分，下列每题给出的四个选项中...",
                        },{
                            "img":math2,
                            "id":1,
                            "flag":3,
                            "name":'2017考研数学（一）真题',
                            "text":"1.设A,B为阶矩阵，记为矩阵的秩，表示分块矩阵，则（  ）。A.r(A,AB)=r(A) B...",
                        },{
                            "img":math3,
                            "id":2,
                            "flag":3,
                            "name":'2016考研数学（一）真题',
                            "text":"1.将长为2m的铁丝分成三段，依次围成圆，正方形与正三角形的面积之和是否存在最小值？若...",
                        },{
                            "img":math4,
                            "id":3,
                            "flag":3,
                            "name":'2015考研数学（一）真题',
                            "text":"1.设随机事件A与B互相对立，A与C互相独立，BC交集为空，若...",
                        },{
                            "img":math5,
                            "id":4,
                            "flag":3,
                            "name":'2018考研数学（二）真题',
                            "text":"1.设函数f(x)在闭区间[0,1]上可微，对于[0,1]上的每一个x，函数f(x)的值都在开区间（0,1）内，且...",
                        },{
                            "img":math6,
                            "id":5,
                            "flag":3,
                            "name":'2017考研数学（二）真题',
                            "text":"1.设在一次实验中，事件a发生的概率为p,先进行n次独立实验，则...",
                        },{
                            "img":math7,
                            "id":6,
                            "flag":3,
                            "name":'2016考研数学（二）真题',
                            "text":"1.有两个箱子，第一个箱子有3个白球，2个红球，第二个箱子有4白球...",
                        },{
                            "img":math8,
                            "id":7,
                            "flag":3,
                            "name":'2015考研数学（二）真题',
                            "text":"1.设有一半径为r的球体，p0是此球的表面上的一个定点，球体上任一点...",
                        },{
                            "img":zztest1,
                            "id":0,
                            "flag":2,
                            "name":'2018年考研政治真题',
                            "text":"1.马克思和恩格斯始终站在世界无产阶级革命的前沿，他们的一生都在为...",
                        },{
                            "img":zztest2,
                            "id":1,
                            "flag":2,
                            "name":'2017年考研政治真题',
                            "text":"1.在以私有制为基础的商品经济中，商品生产者的私人劳动生产的产品是否与...",
                        },{
                            "img":zztest3,
                            "id":2,
                            "flag":2,
                            "name":'2016年考研政治真题',
                            "text":"1.习近平新时代中国特色社会主义思想的核心要义是()。A.推进马克思主...",
                        },{
                            "img":zztest4,
                            "id":3,
                            "flag":2,
                            "name":'2015年考研政治真题',
                            "text":"1.党的十八大以来，为了更好的成就我国国家安全面临的新形势新任务，实现...",
                        },{
                            "img":zztest5,
                            "id":4,
                            "flag":2,
                            "name":'2014年考研政治真题',
                            "text":"1.由于民族危机越来越严重。在维新派的推动和策划下，1898年6月11日，光绪皇帝...",
                        },{
                            "img":shuju,
                            "id":0,
                            "flag":4,
                            "name":'2018年数据结构真题',
                            "text":"1、研究数据结构就是研究().A.数据的逻辑结构 B. 数据的存储结构 C. 数据的逻辑...",
                        },{
                            "img":caozuo,
                            "id":1,
                            "flag":4,
                            "name":'2018年操作系统真题',
                            "text":"1、操作系统设计的两个目标是 易用 和  高效。2、P.V操作必须成对   出现，有一...",
                        },{
                            "img":shujuku,
                            "id":2,
                            "flag":4,
                            "name":'2018年数据库真题',
                            "text":"一、单项选择题 1．数据库（DB），数据库系统（DBS）和数据库管理系统（DBMS）之间的关系是...",
                        },{
                            "img":wangluo,
                            "id":3,
                            "flag":4,
                            "name":'2018年网络原理真题',
                            "text":"1.电信业一般认为宽带骨干网数据传输速率应达到() A．640Kbps B．640Mbps C．1Gbps D．2Gbps...",
                        },{
                            "img":shuju,
                            "id":4,
                            "flag":4,
                            "name":'2017年数据结构真题',
                            "text":"1、研究数据结构就是研究().A.数据的逻辑结构 B. 数据的存储结构 C. 数据的逻辑...",
                        },{
                            "img":caozuo,
                            "id":5,
                            "flag":4,
                            "name":'2017年操作系统真题',
                            "text":"1、操作系统设计的两个目标是 易用 和  高效。2、P.V操作必须成对   出现，有一...",
                        },{
                            "img":shujuku,
                            "id":6,
                            "flag":4,
                            "name":'2017年数据库真题',
                            "text":"一、单项选择题 1．数据库（DB），数据库系统（DBS）和数据库管理系统（DBMS）之间的关系是...",
                        },{
                            "img":wangluo,
                            "id":7,
                            "flag":4,
                            "name":'2017年网络原理真题',
                            "text":"1.电信业一般认为宽带骨干网数据传输速率应达到() A．640Kbps B．640Mbps C．1Gbps D．2Gbps...",
                        }],
                        school:[],
                        cvedio:[],
                        firearr:[]
                    });
                    school2=['暂无数据'];
                    firearr2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    all=[];
                    tiku2=[];
                }else if(e.indexOf('视频')>=0 || e.indexOf('课程')>=0){
                    this.setState({
                        school:[],
                        tiku:[],
                        cvedio:[{
                            "img":ship,
                            "name":"考研视频：老梁观世界...",
                            "text":"3分钟告诉迷茫的你，考研到底值不值",
                        },{
                            "img":ship2,
                            "name":"考研视频：张雪峰老师",
                            "text":"怎样问才能难倒张雪峰老师，考研视频第一期...",
                        },{
                            "img":ship3,
                            "name":"考研视频：超长剪辑版",
                            "text":"爆笑张雪峰老师视频。超长剪辑版，让你一次看个够...",
                        },{
                            "img":ship4,
                            "name":"考研视频：张雪峰老师",
                            "text":"2021考研 张雪峰老师带你讲跨考作业...",
                        }],
                        firearr:[]
                    });
                    school2=['暂无数据'];
                    firearr2=['暂无数据'];
                    tiku2=['暂无数据'];
                    all=[];
                    cvedio2=[];
                }else if(e.indexOf('心理学')>=0 || e.indexOf('教育学')>=0){
                    this.setState({
                        school:[],
                        tiku:[],
                        cvedio:[],
                        firearr:[{
                            "img":rd2,
                            "name":"2021考研：心理学与教育学...",
                            "text":"教育学和心理学是近几年考研热门专业，因为这两个专业报考条件限制比较...",
                        }]
                    });
                    school2=['暂无数据'];
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=[];
                    all=[];
                }else if(e.indexOf('放松')>=0){
                    this.setState({
                        school:[],
                        tiku:[],
                        cvedio:[],
                        firearr:[{
                            "img":rd4,
                            "name":"考研放松，改善情绪和睡眠...",
                            "text":"快要考试了，考前阶段是大家最为紧张的时刻，考前放松是很重要...",
                        }]
                    });
                    school2=['暂无数据'];
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    all=[];
                    firearr2=[];
                }else if(e.indexOf('热点')>=0 || e.indexOf('资讯')>=0){
                    this.setState({
                        school:[],
                        tiku:[],
                        cvedio:[],
                        firearr:[{
                            "img":rd1,
                            "name":"2019年ESI中国大学综合排名",
                            "text":"11月15日，ESI数据库更新了2019年11月最 新ESI数据，这也是2019年最后...",
                        },{
                            "img":rd2,
                            "name":"2021考研：心理学与教育学...",
                            "text":"教育学和心理学是近几年考研热门专业，因为这两个专业报考条件限制比较...",
                        },{
                            "img":rd3,
                            "name":"考研热度持续升温，2021考研形势如何？",
                            "text":"在这样一个时间的转折点，2021考研的小伙伴有的已经行动起来了，有些同学还在...",
                        },{
                            "img":rd4,
                            "name":"考研放松，改善情绪和睡眠...",
                            "text":"快要考试了，考前阶段是大家最为紧张的时刻，考前放松是很重要...",
                        },{
                            "img":rd5,
                            "name":"考研在即：历年考研政治真题",
                            "text":"对于考研的同学来说，考研政治真题是比较重要的复习资料，那么，历年政治真题...",
                        }]
                    });
                    school2=['暂无数据'];
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    all=[];
                    firearr2=[];
                }else{
                    all=['暂无数据'];
                    school2=['暂无数据'];
                    firearr2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    tiku2=['暂无数据'];
                    this.setState({
                        school:[],
                        tiku:[],
                        cvedio:[],
                        firearr:[]
                    });
                }
            }
            }
        });

    }

    goout = () => {
        var uid = this.state.uid;
        if(this.state.type=='home'){
            window.location.hash=`/appTab?uid=${uid}`;
        }else if(this.state.type=='school'){
            window.location.hash=`/checkSchool?uid=${uid}`
        }else if(this.state.type=='test'){
            window.location.hash=`/questionBank?uid=${uid}`
        }else if(this.state.type=='resourse'){
            window.location.hash=`/searchInfo?uid=${uid}`
        }
    }
    
    render(){
        var uid = this.state.uid;
        return (
            <div>
              
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff'}}>搜索</span></NavBar>

                {/** value={this.state.vstr} onChange={this.changevalue} */}

                <SearchBar placeholder="请输入" ref={ref => this.autoFocusInst = ref} onSubmit={this.submitText}/>
                
                <div className='searchbox_xpm'>
                    <div className={this.state.flag == 0 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol0}>全部</div>
                    <div className={this.state.flag == 1 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol1}>院校</div>
                    <div className={this.state.flag == 2 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol2}>题库</div>
                    <div className={this.state.flag == 3 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol3}>课程</div>
                    <div className={this.state.flag == 4 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol4}>热点</div>
                </div>

                <div className={this.state.flag2 == 1 ? 'hid show1' : 'show1'}>
                    <div className='his'>
                        <span>搜索历史</span>
                        <span style={{float:'right'}} onClick={this.delHis}>清空</span>
                    </div>
                    <div className='exp'>
                        {
                            this.state.hisdata.map((item,index)=>(
                                <div className='rm' onClick={this.searchValue}>&nbsp;{item}&nbsp;</div>
                            ))                
                        }
                    </div>
                    <div className='clear'></div>
                    <div className='fir'>热门搜索</div>
                    <div className='exp2'>
                        {
                            this.state.firdata.map((item,index)=>(
                                <div className='rm' onClick={this.searchValue}>&nbsp;{item}&nbsp;</div>
                            ))                       
                        }
                    </div>
                    <div className='clear'></div>
                    
                </div>
                
                <div style={{display: this.state.flag2 == 1 ? 'block' : 'none',width:'100%',marginTop:'2vw'}}>
                    <div style={{display:this.state.flag==0 ? 'block' : 'none'}}>
                        {
                            this.state.school.map((item,index)=>(
                                <Link to={`/schoolDetails?id=${item.des}&uid=${uid}&search=yes`}><div style={{ padding: '0 15px',background:'#fff',marginBottom:'2vw' }}>
                                <div style={{lineHeight: '50px',color: '#888',fontSize: 18,borderBottom: '1px solid #F6F6F6'}}></div>
                                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                    <img style={{ height: '80px', marginRight: '15px',width:'100px' }} src={item.img} alt="" />
                                    <div style={{ lineHeight: 1.5 }}>
                                        <div style={{ marginBottom: '8px', fontWeight: 'bold',fontSize:'4.5vw',color:'#000' }}>{item.des}</div>
                                        <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{item.row}</span><div style={{color:'green',marginLeft:'10px',float:'left'}}>{item.city}</div></div>
                                        <div><span style={{color:'blue'}}>{item.one}</span><span style={{color:'purple',marginLeft:'10px'}}>{item.two}</span></div>
                                    </div>
                                </div>
                                </div></Link>
                            ))
                        }
                        {
                            this.state.tiku.map((item,index)=>(
                                <Link to={`/test?index=${item.id}&flag=${item.flag}&uid=${uid}&search=yes`}><div style={{ padding: '0 15px',background:'#fff',marginBottom:'2vw' }}>
                                <div style={{lineHeight: '50px',color: '#888',fontSize: 18,borderBottom: '1px solid #F6F6F6'}}></div>
                                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                    <img style={{ height: '80px', marginRight: '15px',width:'100px' }} src={item.img} alt="" />
                                    <div style={{ lineHeight: 1.5 }}>
                                        <div style={{ marginBottom: '8px', fontWeight: 'bold',fontSize:'4.5vw' }}>{item.name}</div>
                                        <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{item.text}</span></div>
                                    </div>
                                </div>
                                </div></Link>
                            ))
                        }
                        {
                            this.state.cvedio.map((item,index)=>(
                                <Link to={`/vplay?uid=${uid}&flag=search&id=${index+1}`}><div style={{ padding: '0 15px',background:'#fff',marginBottom:'2vw' }}>
                                <div style={{lineHeight: '50px',color: '#888',fontSize: 18,borderBottom: '1px solid #F6F6F6'}}></div>
                                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                    <img style={{ height: '80px', marginRight: '15px',width:'100px' }} src={item.img} alt="" />
                                    <div style={{ lineHeight: 1.5 }}>
                                        <div style={{ marginBottom: '8px', fontWeight: 'bold',fontSize:'4.5vw',color:'#000' }}>{item.name}</div>
                                        <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{item.text}</span></div>
                                    </div>
                                </div>
                                </div></Link>
                            ))
                        }
                        {
                            this.state.firearr.map((item,index)=>(
                                <Link to={`/remFire?type=${uid}&id=${index}`}><div style={{ padding: '0 15px',background:'#fff',marginBottom:'2vw' }}>
                                <div style={{lineHeight: '50px',color: '#888',fontSize: 18,borderBottom: '1px solid #F6F6F6'}}></div>
                                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                    <img style={{ height: '80px', marginRight: '15px',width:'100px' }} src={item.img} alt="" />
                                    <div style={{ lineHeight: 1.5 }}>
                                        <div style={{ marginBottom: '8px', fontWeight: 'bold',fontSize:'4.5vw',color:'#000' }}>{item.name}</div>
                                        <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{item.text}</span></div>
                                    </div>
                                </div>
                                </div></Link>
                            ))
                        }
                        {
                            all.map((item,index)=>(
                                <div style={{width:'100%',textAlign:'center',fontSize:'5vw',marginTop:'15vw'}}>{item}</div>
                            ))
                        }
                    </div>
                    <div style={{display:this.state.flag==1 ? 'block' : 'none'}}>
                        {
                            this.state.school.map((item,index)=>(
                                <Link to={`/schoolDetails?id=${item.des}&uid=${uid}&search=yes`}><div style={{ padding: '0 15px',background:'#fff',marginBottom:'2vw' }}>
                                <div style={{lineHeight: '50px',color: '#888',fontSize: 18,borderBottom: '1px solid #F6F6F6'}}></div>
                                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                    <img style={{ height: '80px', marginRight: '15px',width:'100px' }} src={item.img} alt="" />
                                    <div style={{ lineHeight: 1.5 }}>
                                        <div style={{ marginBottom: '8px', fontWeight: 'bold',fontSize:'4.5vw',color:'#000' }}>{item.des}</div>
                                        <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{item.row}</span><div style={{color:'green',marginLeft:'10px',float:'left'}}>{item.city}</div></div>
                                        <div><span style={{color:'blue'}}>{item.one}</span><span style={{color:'purple',marginLeft:'10px'}}>{item.two}</span></div>
                                    </div>
                                </div>
                                </div></Link>
                            ))
        
                        }
                        {
                            school2.map((item,index)=>(
                                <div style={{width:'100%',textAlign:'center',fontSize:'5vw',marginTop:'15vw'}}>{item}</div>
                            ))
                        }
                        
                    </div>
                    <div style={{display:this.state.flag==2 ? 'block' : 'none'}}>
                        {
                            this.state.tiku.map((item,index)=>(
                                <Link to={`/test?index=${item.id}&flag=${item.flag}&uid=${uid}&search=yes`}><div style={{ padding: '0 15px',background:'#fff',marginBottom:'2vw' }}>
                                <div style={{lineHeight: '50px',color: '#888',fontSize: 18,borderBottom: '1px solid #F6F6F6'}}></div>
                                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                    <img style={{ height: '80px', marginRight: '15px',width:'100px' }} src={item.img} alt="" />
                                    <div style={{ lineHeight: 1.5 }}>
                                        <div style={{ marginBottom: '8px', fontWeight: 'bold',fontSize:'4.5vw',color:'#000' }}>{item.name}</div>
                                        <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{item.text}</span></div>
                                    </div>
                                </div>
                                </div></Link>
                            ))
                            
                        }
                        {
                            tiku2.map((item,index)=>(
                                <div style={{width:'100%',textAlign:'center',fontSize:'5vw',marginTop:'15vw'}}>{item}</div>
                            ))
                        }
                    </div>
                    <div style={{display:this.state.flag==3 ? 'block' : 'none'}}>
                        {
                            this.state.cvedio.map((item,index)=>(
                                <Link to={`/vplay?uid=${uid}&flag=search&id=${index+1}`}><div style={{ padding: '0 15px',background:'#fff',marginBottom:'2vw' }}>
                                <div style={{lineHeight: '50px',color: '#888',fontSize: 18,borderBottom: '1px solid #F6F6F6'}}></div>
                                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                    <img style={{ height: '80px', marginRight: '15px',width:'100px' }} src={item.img} alt="" />
                                    <div style={{ lineHeight: 1.5 }}>
                                        <div style={{ marginBottom: '8px', fontWeight: 'bold',fontSize:'4.5vw',color:'#000' }}>{item.name}</div>
                                        <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{item.text}</span></div>
                                    </div>
                                </div>
                                </div></Link>
                            ))
                            
                        }
                        {
                            cvedio2.map((item,index)=>(
                                <div style={{width:'100%',textAlign:'center',fontSize:'5vw',marginTop:'15vw'}}>{item}</div>
                            ))
                        }
                    </div>
                    <div style={{display:this.state.flag==4 ? 'block' : 'none'}}>
                        {
                            this.state.firearr.map((item,index)=>(
                                
                                <Link to={`/remFire?type=${uid}&id=${index}`}><div style={{ padding: '0 15px',background:'#fff',marginBottom:'2vw' }}>
                                <div style={{lineHeight: '50px',color: '#888',fontSize: 18,borderBottom: '1px solid #F6F6F6'}}></div>
                                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                    <img style={{ height: '80px', marginRight: '15px',width:'100px' }} src={item.img} alt="" />
                                    <div style={{ lineHeight: 1.5 }}>
                                        <div style={{ marginBottom: '8px', fontWeight: 'bold',fontSize:'4.5vw',color:'#000' }}>{item.name}</div>
                                        <div><span style={{ fontSize: '14px', color: 'black',float:'left' }}>{item.text}</span></div>
                                    </div>
                                </div>
                                </div></Link>

                                
                            ))
                            
                        }
                        {
                            firearr2.map((item,index)=>(
                                <div style={{width:'100%',textAlign:'center',fontSize:'5vw',marginTop:'15vw'}}>{item}</div>
                            ))
                        }
            
                    </div>
                </div>

                <div className='tt'></div>

            </div>       
        )
    }
    // changevalue = (e) => {
    //     this.setState({
    //         vstr:e.target.value
    //     })
    // }
    // searchValue = (e) => {
    //     console.log(e.target.innerHTML);
    //     this.setState({
    //         vstr:e.target.innerHTML
    //     })
    // }

    delHis = () => {
        var storage = this.state.storage;
        storage.removeItem(sear);
        this.setState({
            hisdata:[]
        });

        var s = window.location.hash;
        var uid;
        if(s.indexOf('&')>=0){
            uid = s.split('&')[0].split('=')[1];           
        }else{
            uid = s.split('=')[1];   
        }
        var storage = this.state.storage; 
        sear = 'searchu'+uid;
        if(storage.getItem(sear) == null){
            var todo= [];
            var d=JSON.stringify(todo); 
            storage.setItem(sear,d);
        }
    }

    submitText = (e) => {
        var storage = this.state.storage;
        var json=storage.getItem(sear); 
        var jsonObj=JSON.parse(json);
        console.log(jsonObj);

        var allschool = this.state.beijing.concat(this.state.anhui).concat(this.state.chongqing).concat(this.state.fujian).concat(this.state.gansu).concat(this.state.guangdong).concat(this.state.guangxi).concat(this.state.guizhou).concat(this.state.hainan).concat(this.state.hebei).concat(this.state.heilongjiang).concat(this.state.henan).concat(this.state.hubei).concat(this.state.hunan).concat(this.state.jiangsu).concat(this.state.jiangxi).concat(this.state.jilin).concat(this.state.liaoning).concat(this.state.neimenggu).concat(this.state.ningxia).concat(this.state.qinghai).concat(this.state.shandong).concat(this.state.shanghai).concat(this.state.shanxi1).concat(this.state.shanxi2).concat(this.state.sichuan).concat(this.state.tianjin).concat(this.state.xinjiang).concat(this.state.xizang).concat(this.state.yunnan).concat(this.state.zhejiang);
        if(e!=''){
            console.log(e,'当前搜索');
            this.setState({
                flag2:1,
                valuestr:e
            });
            //没有考虑搜索重复的
            jsonObj.unshift(e);
            console.log(jsonObj);
            var d=JSON.stringify(jsonObj); 
            storage.setItem(sear,d);

            storage.setItem('valuestr',e);

            for(var i=0;i<allschool.length;i++){
                if(e==allschool[i].des){
                    this.setState({
                        school:[allschool[i]],
                        tiku:[],
                        cvedio:[],
                        firearr:[],
                        fflag:1
                    });
                    tiku2=['暂无数据'];
                    cvedio2=['暂无数据'];
                    firearr2=['暂无数据'];
                    all=[];
                    school2=[];
                    i=allschool.length;
                }
            }
            if(this.state.fflag != 1){
            if(e.indexOf('河北师范大学')>=0){
                this.setState({
                    school:[{
                        "img":"http://202.206.100.34:8080/andacms/export/www/resources/40/20151221111634781.jpg",
                        "des":"河北师范大学",
                        "row":"院校排名：171",
                        "city":"石家庄",
                        "one":"师范类",
                        "two":"本科 公办"
                    }],
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('北京大学')>=0){
                this.setState({
                    school:[{
                        "img":"http://img03.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fimg01.sogoucdn.com%2Fapp%2Fa%2F100520093%2F22682a086365be9a-38bde84ba65aa1a3-ab565d913aa4f215d6629386dbb24582.jpg",
                        "des":"北京大学",
                        "row":"院校排名：1",
                        "city":"北京",
                        "one":"985",
                        "two":"211"
                    }],
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('软件工程')>=0 || e.indexOf('软件')>=0){
                this.setState({
                    school:[{
                        "img":"http://img03.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fimg01.sogoucdn.com%2Fapp%2Fa%2F100520093%2F22682a086365be9a-38bde84ba65aa1a3-ab565d913aa4f215d6629386dbb24582.jpg",
                        "des":"北京大学",
                        "row":"院校排名：1",
                        "city":"北京",
                        "one":"985",
                        "two":"211"
                    },{
                        "img":"http://img03.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fimg01.sogoucdn.com%2Fapp%2Fa%2F100520093%2F09225a8782ea208e-1c9460610f8d006d-0660006206c0d0cf901f32d79e806a03.jpg",
                        "des":"清华大学",
                        "row":"院校排名：2",
                        "city":"北京",
                        "one":"985",
                        "two":"211"
                    },{
                        "img":"http://img04.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/80?appid=122&url=https%3A%2F%2Fi01piccdn.sogoucdn.com%2Ff7727f0ce1bcdd4f",
                        "des":"中南大学",
                        "row":"院校排名：17",
                        "city":"长沙",
                        "one":"985",
                        "two":"211"
                    }],
                    tiku:[{
                        "img":shuju,
                        "id":0,
                        "flag":4,
                        "name":'2018年数据结构真题',
                        "text":"1、研究数据结构就是研究().A.数据的逻辑结构 B. 数据的存储结构 C. 数据的逻辑...",
                    },{
                        "img":caozuo,
                        "id":1,
                        "flag":4,
                        "name":'2018年操作系统真题',
                        "text":"1、操作系统设计的两个目标是 易用 和  高效。2、P.V操作必须成对   出现，有一...",
                    },{
                        "img":shujuku,
                        "id":2,
                        "flag":4,
                        "name":'2018年数据库真题',
                        "text":"一、单项选择题 1．数据库（DB），数据库系统（DBS）和数据库管理系统（DBMS）之间的关系是...",
                    },{
                        "img":wangluo,
                        "id":3,
                        "flag":4,
                        "name":'2018年网络原理真题',
                        "text":"1.电信业一般认为宽带骨干网数据传输速率应达到() A．640Kbps B．640Mbps C．1Gbps D．2Gbps...",
                    },{
                        "img":shuju,
                        "id":4,
                        "flag":4,
                        "name":'2017年数据结构真题',
                        "text":"1、研究数据结构就是研究().A.数据的逻辑结构 B. 数据的存储结构 C. 数据的逻辑...",
                    },{
                        "img":caozuo,
                        "id":5,
                        "flag":4,
                        "name":'2017年操作系统真题',
                        "text":"1、操作系统设计的两个目标是 易用 和  高效。2、P.V操作必须成对   出现，有一...",
                    },{
                        "img":shujuku,
                        "id":6,
                        "flag":4,
                        "name":'2017年数据库真题',
                        "text":"一、单项选择题 1．数据库（DB），数据库系统（DBS）和数据库管理系统（DBMS）之间的关系是...",
                    },{
                        "img":wangluo,
                        "id":7,
                        "flag":4,
                        "name":'2017年网络原理真题',
                        "text":"1.电信业一般认为宽带骨干网数据传输速率应达到() A．640Kbps B．640Mbps C．1Gbps D．2Gbps...",
                    }],
                    cvedio:[],
                    firearr:[]
                });
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                tiku2=[];
                school2=[];
            }else if(e.indexOf('北京')>=0){
                this.setState({
                    school:this.state.beijing,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('安徽')>=0){
                this.setState({
                    school:this.state.anhui,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('重庆')>=0){
                this.setState({
                    school:this.state.chongqing,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('福建')>=0){
                this.setState({
                    school:this.state.fujian,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('甘肃')>=0){
                this.setState({
                    school:this.state.gansu,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('广东')>=0){
                this.setState({
                    school:this.state.guangdong,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('广西')>=0){
                this.setState({
                    school:this.state.guangxi,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('贵州')>=0){
                this.setState({
                    school:this.state.guizhou,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('海南')>=0){
                this.setState({
                    school:this.state.hainan,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('河北')>=0){
                this.setState({
                    school:this.state.hebei,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('黑龙江')>=0){
                this.setState({
                    school:this.state.heilongjiang,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('河南')>=0){
                this.setState({
                    school:this.state.henan,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('湖北')>=0){
                this.setState({
                    school:this.state.hubei,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('湖南')>=0){
                this.setState({
                    school:this.state.hunan,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('江苏')>=0){
                this.setState({
                    school:this.state.jiangsu,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('江西')>=0){
                this.setState({
                    school:this.state.jiangxi,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('吉林')>=0){
                this.setState({
                    school:this.state.jilin,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('辽宁')>=0){
                this.setState({
                    school:this.state.liaoning,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('内蒙古')>=0){
                this.setState({
                    school:this.state.neimenggu,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('宁夏')>=0){
                this.setState({
                    school:this.state.ningxia,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('青海')>=0){
                this.setState({
                    school:this.state.qinghai,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('山东')>=0){
                this.setState({
                    school:this.state.shandong,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('上海')>=0){
                this.setState({
                    school:this.state.shanghai,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('陕西')>=0){
                this.setState({
                    school:this.state.shanxi2,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('山西')>=0){
                this.setState({
                    school:this.state.shanxi1,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('四川')>=0){
                this.setState({
                    school:this.state.sichuan,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('天津')>=0){
                this.setState({
                    school:this.state.tianjin,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('西藏')>=0){
                this.setState({
                    school:this.state.xizang,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('云南')>=0){
                this.setState({
                    school:this.state.yunnan,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('浙江')>=0){
                this.setState({
                    school:this.state.zhejiang,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('排名')>=0){
                this.setState({
                    school:[],
                    tiku:[],
                    cvedio:[],
                    firearr:[{
                        "img":rd1,
                        "name":"2019年ESI中国大学综合排名",
                        "text":"11月15日，ESI数据库更新了2019年11月最 新ESI数据，这也是2019年最后...",
                    }]
                });
                school2=['暂无数据'];
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                all=[];
                firearr2=[];
            }else if(e.indexOf('院校')>=0 || e.indexOf('学校')>=0 || e.indexOf('大学')>=0 || e.indexOf('高校')>=0){
                //var arr = this.state.beijing.concat(this.state.anhui).concat(this.state.chongqing).concat(this.state.fujian).concat(this.state.gansu).concat(this.state.guangdong).concat(this.state.guangxi).concat(this.state.guizhou).concat(this.state.hainan).concat(this.state.hebei).concat(this.state.heilongjiang).concat(this.state.henan).concat(this.state.hubei).concat(this.state.hunan).concat(this.state.jiangsu).concat(this.state.jiangxi).concat(this.state.jilin).concat(this.state.liaoning).concat(this.state.neimenggu).concat(this.state.ningxia).concat(this.state.qinghai).concat(this.state.shandong).concat(this.state.shanghai).concat(this.state.shanxi1).concat(this.state.shanxi2).concat(this.state.sichuan).concat(this.state.tianjin).concat(this.state.xinjiang).concat(this.state.xizang).concat(this.state.yunnan).concat(this.state.zhejiang);
                this.setState({
                    school:allschool,
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
                tiku2=['暂无数据'];
                firearr2=['暂无数据'];
                cvedio2=['暂无数据'];
                all=[];
                school2=[];
            }else if(e.indexOf('英语题库')>=0 || e.indexOf('英语真题')>=0 || e.indexOf('英语')>=0){
                this.setState({
                    tiku:[{
                        "img":engtest5,
                        "id":0,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"I'm wangNan,a student of No.1 Middle School. I have a gooa friend,Jim.He' an US...",
                    },{
                        "img":engtest4,
                        "id":1,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike paly...",
                    },{
                        "img":engtest3,
                        "id":2,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"1. until【解析】根据上文“卡耐基于1888年出生于美国中部一个贫穷的家庭”可猜测本句说的是...",
                    },{
                        "img":engtest2,
                        "id":3,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"历年真题是重要的复习资料，冲刺阶段，考生更应该好好利用真题，做好巩固提升。新东方在线...",
                    },{
                        "img":engtest1,
                        "id":4,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"Directions: Read the following text. Choose the best word(s) for each number...",
                    },{
                        "img":engtest6,
                        "id":5,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike palying soccer...",
                    },{
                        "img":engtest4,
                        "id":6,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"I'm wangNan,a student of No.1 Middle School. I have a gooa friend,Jim.He' an...",
                    },{
                        "img":engtest5,
                        "id":7,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"1. until【解析】根据上文“卡耐基于1888年出生于美国中部一个贫穷的家庭”可猜测本句说的是...",
                    },{
                        "img":engtest2,
                        "id":8,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":'Though not biologically related, friends are as "related" as fourth cousins, sharing...',
                    },{
                        "img":engtest3,
                        "id":9,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike palying soccer...",
                    },{
                        "img":engtest6,
                        "id":10,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"The study is a genome-wide analysis conducted 3 1932 unique subjects which 4 pairs ...",
                    }],
                    school:[],
                    cvedio:[],
                    firearr:[]
                });
                school2=['暂无数据'];
                firearr2=['暂无数据'];
                cvedio2=['暂无数据'];
                all=[];
                tiku2=[];
            }else if(e.indexOf('数学题库')>=0 || e.indexOf('数学真题')>=0 || e.indexOf('数学')>=0){
                this.setState({
                    tiku:[{
                        "img":math1,
                        "id":0,
                        "flag":3,
                        "name":'2018考研数学（一）真题',
                        "text":"一、选择题：1~8小题，每小题4分，共32分，下列每题给出的四个选项中...",
                    },{
                        "img":math2,
                        "id":1,
                        "flag":3,
                        "name":'2017考研数学（一）真题',
                        "text":"1.设A,B为阶矩阵，记为矩阵的秩，表示分块矩阵，则（  ）。A.r(A,AB)=r(A) B...",
                    },{
                        "img":math3,
                        "id":2,
                        "flag":3,
                        "name":'2016考研数学（一）真题',
                        "text":"1.将长为2m的铁丝分成三段，依次围成圆，正方形与正三角形的面积之和是否存在最小值？若...",
                    },{
                        "img":math4,
                        "id":3,
                        "flag":3,
                        "name":'2015考研数学（一）真题',
                        "text":"1.设随机事件A与B互相对立，A与C互相独立，BC交集为空，若...",
                    },{
                        "img":math5,
                        "id":4,
                        "flag":3,
                        "name":'2018考研数学（二）真题',
                        "text":"1.设函数f(x)在闭区间[0,1]上可微，对于[0,1]上的每一个x，函数f(x)的值都在开区间（0,1）内，且...",
                    },{
                        "img":math6,
                        "id":5,
                        "flag":3,
                        "name":'2017考研数学（二）真题',
                        "text":"1.设在一次实验中，事件a发生的概率为p,先进行n次独立实验，则...",
                    },{
                        "img":math7,
                        "id":6,
                        "flag":3,
                        "name":'2016考研数学（二）真题',
                        "text":"1.有两个箱子，第一个箱子有3个白球，2个红球，第二个箱子有4白球...",
                    },{
                        "img":math8,
                        "id":7,
                        "flag":3,
                        "name":'2015考研数学（二）真题',
                        "text":"1.设有一半径为r的球体，p0是此球的表面上的一个定点，球体上任一点...",
                    }],
                    school:[],
                    cvedio:[],
                    firearr:[]
                });
                school2=['暂无数据'];
                firearr2=['暂无数据'];
                cvedio2=['暂无数据'];
                all=[];
                tiku2=[];
            }else if(e.indexOf('政治题库')>=0 || e.indexOf('政治真题')>=0 || e.indexOf('政治')>=0){
                this.setState({
                    tiku:[{
                        "img":zztest1,
                        "id":0,
                        "flag":2,
                        "name":'2018年考研政治真题',
                        "text":"1.马克思和恩格斯始终站在世界无产阶级革命的前沿，他们的一生都在为...",
                    },{
                        "img":zztest2,
                        "id":1,
                        "flag":2,
                        "name":'2017年考研政治真题',
                        "text":"1.在以私有制为基础的商品经济中，商品生产者的私人劳动生产的产品是否与...",
                    },{
                        "img":zztest3,
                        "id":2,
                        "flag":2,
                        "name":'2016年考研政治真题',
                        "text":"1.习近平新时代中国特色社会主义思想的核心要义是()。A.推进马克思主...",
                    },{
                        "img":zztest4,
                        "id":3,
                        "flag":2,
                        "name":'2015年考研政治真题',
                        "text":"1.党的十八大以来，为了更好的成就我国国家安全面临的新形势新任务，实现...",
                    },{
                        "img":zztest5,
                        "id":4,
                        "flag":2,
                        "name":'2014年考研政治真题',
                        "text":"1.由于民族危机越来越严重。在维新派的推动和策划下，1898年6月11日，光绪皇帝...",
                    }],
                    school:[],
                    cvedio:[],
                    firearr:[]
                });
                school2=['暂无数据'];
                firearr2=['暂无数据'];
                cvedio2=['暂无数据'];
                all=[];
                tiku2=[];
            }else if(e.indexOf('题库')>=0 || e.indexOf('真题')>=0 || e.indexOf('题')>=0){
                this.setState({
                    tiku:[{
                        "img":engtest5,
                        "id":0,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"I'm wangNan,a student of No.1 Middle School. I have a gooa friend,Jim.He' an US...",
                    },{
                        "img":engtest4,
                        "id":1,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike paly...",
                    },{
                        "img":engtest3,
                        "id":2,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"1. until【解析】根据上文“卡耐基于1888年出生于美国中部一个贫穷的家庭”可猜测本句说的是...",
                    },{
                        "img":engtest2,
                        "id":3,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"历年真题是重要的复习资料，冲刺阶段，考生更应该好好利用真题，做好巩固提升。新东方在线...",
                    },{
                        "img":engtest1,
                        "id":4,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"Directions: Read the following text. Choose the best word(s) for each number...",
                    },{
                        "img":engtest6,
                        "id":5,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike palying soccer...",
                    },{
                        "img":engtest4,
                        "id":6,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"I'm wangNan,a student of No.1 Middle School. I have a gooa friend,Jim.He' an...",
                    },{
                        "img":engtest5,
                        "id":7,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"1. until【解析】根据上文“卡耐基于1888年出生于美国中部一个贫穷的家庭”可猜测本句说的是...",
                    },{
                        "img":engtest2,
                        "id":8,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":'Though not biologically related, friends are as "related" as fourth cousins, sharing...',
                    },{
                        "img":engtest3,
                        "id":9,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"We both like sports very much.Jim enjoy playing basketball.but Ilike palying soccer...",
                    },{
                        "img":engtest6,
                        "id":10,
                        "flag":1,
                        "name":'2016考研英语（一）真题',
                        "text":"The study is a genome-wide analysis conducted 3 1932 unique subjects which 4 pairs ...",
                    },{
                        "img":math1,
                        "id":0,
                        "flag":3,
                        "name":'2018考研数学（一）真题',
                        "text":"一、选择题：1~8小题，每小题4分，共32分，下列每题给出的四个选项中...",
                    },{
                        "img":math2,
                        "id":1,
                        "flag":3,
                        "name":'2017考研数学（一）真题',
                        "text":"1.设A,B为阶矩阵，记为矩阵的秩，表示分块矩阵，则（  ）。A.r(A,AB)=r(A) B...",
                    },{
                        "img":math3,
                        "id":2,
                        "flag":3,
                        "name":'2016考研数学（一）真题',
                        "text":"1.将长为2m的铁丝分成三段，依次围成圆，正方形与正三角形的面积之和是否存在最小值？若...",
                    },{
                        "img":math4,
                        "id":3,
                        "flag":3,
                        "name":'2015考研数学（一）真题',
                        "text":"1.设随机事件A与B互相对立，A与C互相独立，BC交集为空，若...",
                    },{
                        "img":math5,
                        "id":4,
                        "flag":3,
                        "name":'2018考研数学（二）真题',
                        "text":"1.设函数f(x)在闭区间[0,1]上可微，对于[0,1]上的每一个x，函数f(x)的值都在开区间（0,1）内，且...",
                    },{
                        "img":math6,
                        "id":5,
                        "flag":3,
                        "name":'2017考研数学（二）真题',
                        "text":"1.设在一次实验中，事件a发生的概率为p,先进行n次独立实验，则...",
                    },{
                        "img":math7,
                        "id":6,
                        "flag":3,
                        "name":'2016考研数学（二）真题',
                        "text":"1.有两个箱子，第一个箱子有3个白球，2个红球，第二个箱子有4白球...",
                    },{
                        "img":math8,
                        "id":7,
                        "flag":3,
                        "name":'2015考研数学（二）真题',
                        "text":"1.设有一半径为r的球体，p0是此球的表面上的一个定点，球体上任一点...",
                    },{
                        "img":zztest1,
                        "id":0,
                        "flag":2,
                        "name":'2018年考研政治真题',
                        "text":"1.马克思和恩格斯始终站在世界无产阶级革命的前沿，他们的一生都在为...",
                    },{
                        "img":zztest2,
                        "id":1,
                        "flag":2,
                        "name":'2017年考研政治真题',
                        "text":"1.在以私有制为基础的商品经济中，商品生产者的私人劳动生产的产品是否与...",
                    },{
                        "img":zztest3,
                        "id":2,
                        "flag":2,
                        "name":'2016年考研政治真题',
                        "text":"1.习近平新时代中国特色社会主义思想的核心要义是()。A.推进马克思主...",
                    },{
                        "img":zztest4,
                        "id":3,
                        "flag":2,
                        "name":'2015年考研政治真题',
                        "text":"1.党的十八大以来，为了更好的成就我国国家安全面临的新形势新任务，实现...",
                    },{
                        "img":zztest5,
                        "id":4,
                        "flag":2,
                        "name":'2014年考研政治真题',
                        "text":"1.由于民族危机越来越严重。在维新派的推动和策划下，1898年6月11日，光绪皇帝...",
                    },{
                        "img":shuju,
                        "id":0,
                        "flag":4,
                        "name":'2018年数据结构真题',
                        "text":"1、研究数据结构就是研究().A.数据的逻辑结构 B. 数据的存储结构 C. 数据的逻辑...",
                    },{
                        "img":caozuo,
                        "id":1,
                        "flag":4,
                        "name":'2018年操作系统真题',
                        "text":"1、操作系统设计的两个目标是 易用 和  高效。2、P.V操作必须成对   出现，有一...",
                    },{
                        "img":shujuku,
                        "id":2,
                        "flag":4,
                        "name":'2018年数据库真题',
                        "text":"一、单项选择题 1．数据库（DB），数据库系统（DBS）和数据库管理系统（DBMS）之间的关系是...",
                    },{
                        "img":wangluo,
                        "id":3,
                        "flag":4,
                        "name":'2018年网络原理真题',
                        "text":"1.电信业一般认为宽带骨干网数据传输速率应达到() A．640Kbps B．640Mbps C．1Gbps D．2Gbps...",
                    },{
                        "img":shuju,
                        "id":4,
                        "flag":4,
                        "name":'2017年数据结构真题',
                        "text":"1、研究数据结构就是研究().A.数据的逻辑结构 B. 数据的存储结构 C. 数据的逻辑...",
                    },{
                        "img":caozuo,
                        "id":5,
                        "flag":4,
                        "name":'2017年操作系统真题',
                        "text":"1、操作系统设计的两个目标是 易用 和  高效。2、P.V操作必须成对   出现，有一...",
                    },{
                        "img":shujuku,
                        "id":6,
                        "flag":4,
                        "name":'2017年数据库真题',
                        "text":"一、单项选择题 1．数据库（DB），数据库系统（DBS）和数据库管理系统（DBMS）之间的关系是...",
                    },{
                        "img":wangluo,
                        "id":7,
                        "flag":4,
                        "name":'2017年网络原理真题',
                        "text":"1.电信业一般认为宽带骨干网数据传输速率应达到() A．640Kbps B．640Mbps C．1Gbps D．2Gbps...",
                    }],
                    school:[],
                    cvedio:[],
                    firearr:[]
                });
                school2=['暂无数据'];
                firearr2=['暂无数据'];
                cvedio2=['暂无数据'];
                all=[];
                tiku2=[];
            }else if(e.indexOf('视频')>=0 || e.indexOf('课程')>=0){
                this.setState({
                    school:[],
                    tiku:[],
                    cvedio:[{
                        "img":ship,
                        "name":"考研视频：老梁观世界...",
                        "text":"3分钟告诉迷茫的你，考研到底值不值",
                    },{
                        "img":ship2,
                        "name":"考研视频：张雪峰老师",
                        "text":"怎样问才能难倒张雪峰老师，考研视频第一期...",
                    },{
                        "img":ship3,
                        "name":"考研视频：超长剪辑版",
                        "text":"爆笑张雪峰老师视频。超长剪辑版，让你一次看个够...",
                    },{
                        "img":ship4,
                        "name":"考研视频：张雪峰老师",
                        "text":"2021考研 张雪峰老师带你讲跨考作业...",
                    }],
                    firearr:[]
                });
                school2=['暂无数据'];
                firearr2=['暂无数据'];
                tiku2=['暂无数据'];
                all=[];
                cvedio2=[];
            }else if(e.indexOf('心理学')>=0 || e.indexOf('教育学')>=0){
                this.setState({
                    school:[],
                    tiku:[],
                    cvedio:[],
                    firearr:[{
                        "img":rd2,
                        "name":"2021考研：心理学与教育学...",
                        "text":"教育学和心理学是近几年考研热门专业，因为这两个专业报考条件限制比较...",
                    }]
                });
                school2=['暂无数据'];
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                firearr2=[];
                all=[];
            }else if(e.indexOf('放松')>=0){
                this.setState({
                    school:[],
                    tiku:[],
                    cvedio:[],
                    firearr:[{
                        "img":rd4,
                        "name":"考研放松，改善情绪和睡眠...",
                        "text":"快要考试了，考前阶段是大家最为紧张的时刻，考前放松是很重要...",
                    }]
                });
                school2=['暂无数据'];
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                all=[];
                firearr2=[];
            }else if(e.indexOf('热点')>=0 || e.indexOf('资讯')>=0){
                this.setState({
                    school:[],
                    tiku:[],
                    cvedio:[],
                    firearr:[{
                        "img":rd1,
                        "name":"2019年ESI中国大学综合排名",
                        "text":"11月15日，ESI数据库更新了2019年11月最 新ESI数据，这也是2019年最后...",
                    },{
                        "img":rd2,
                        "name":"2021考研：心理学与教育学...",
                        "text":"教育学和心理学是近几年考研热门专业，因为这两个专业报考条件限制比较...",
                    },{
                        "img":rd3,
                        "name":"考研热度持续升温，2021考研形势如何？",
                        "text":"在这样一个时间的转折点，2021考研的小伙伴有的已经行动起来了，有些同学还在...",
                    },{
                        "img":rd4,
                        "name":"考研放松，改善情绪和睡眠...",
                        "text":"快要考试了，考前阶段是大家最为紧张的时刻，考前放松是很重要...",
                    },{
                        "img":rd5,
                        "name":"考研在即：历年考研政治真题",
                        "text":"对于考研的同学来说，考研政治真题是比较重要的复习资料，那么，历年政治真题...",
                    }]
                });
                school2=['暂无数据'];
                tiku2=['暂无数据'];
                cvedio2=['暂无数据'];
                all=[];
                firearr2=[];
            }else{
                all=['暂无数据'];
                school2=['暂无数据'];
                firearr2=['暂无数据'];
                cvedio2=['暂无数据'];
                tiku2=['暂无数据'];
                this.setState({
                    school:[],
                    tiku:[],
                    cvedio:[],
                    firearr:[]
                });
            }
        }
        }
    }

    hiddenBox = () => {
        this.setState({
            flag2:1
        })
    }//没用可删
    changeCol0 = () => {
        this.setState({
            flag:0
        });
        var storage = this.state.storage;
        storage.setItem('valueflag',0);
    }
    changeCol1 = () => {
        this.setState({
            flag:1
        });
        var storage = this.state.storage;
        storage.setItem('valueflag',1);
    }
    changeCol2 = () => {
        this.setState({
            flag:2
        });
        var storage = this.state.storage;
        storage.setItem('valueflag',2);
    }
    changeCol3 = () => {
        this.setState({
            flag:3
        });
        var storage = this.state.storage;
        storage.setItem('valueflag',3);
    }
    changeCol4 = () => {
        this.setState({
            flag:4
        });
        var storage = this.state.storage;
        storage.setItem('valueflag',4);
    }
}