import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Tabs,NavBar,Flex} from 'antd-mobile';


export default class SearchInfo extends Component {  //链接有几个不对
    render() {
        var str = this.props.location.search;
        var uid = str.split('=')[1];
        const tabs = [
            { title: <p style={{position:'absolute',fontSize:'4vw',top:'0vw'}}>报名条件</p> },
            { title: <p style={{position:'absolute',fontSize:'4vw',top:'0vw'}}>报名流程</p> },
            { title: <p style={{position:'absolute',fontSize:'4vw',top:'0vw'}}>备考常识</p> },
            { title: <p style={{position:'absolute',fontSize:'4vw',top:'0vw'}}>初试时间</p> },
            { title: <p style={{position:'absolute',fontSize:'4vw',top:'0vw'}}>答题技巧</p> },
            { title: <p style={{position:'absolute',fontSize:'4vw',top:'0vw'}}>注意事项</p> },
            { title: <p style={{position:'absolute',fontSize:'4vw',top:'0vw'}}>查分流程</p> },
          ];
        return (
            <div className='testbox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={`/appTab?uid=${uid}&type=home`}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'21px'}}>研百科</span></NavBar>

                <div style={{background:'#fff',width:'100%'}}>
                <div style={{width:'90%',height:'50px',marginTop:'3vw',marginLeft:'5%'}}>
                <Flex.Item style={{position:'relative',height:'10vw',width:'100%',top:'2vw',
                borderBottom:'1px solid #919493'}}>
                    <img style={{position:"absolute",width:'7vw',height:'7vw',borderRadius:'50%',left:'1vw',top:'2vw'}} src={require('../imgs/baike1.png')}/>
                    <Flex.Item style={{position:"absolute",left:'10%',fontSize:'4vw',top:'25%',color:'black'}}>
                        猜你想
                    </Flex.Item>
                    </Flex.Item>
                </div>
                <div style={{height:'2vw'}}></div>
                    
                    <div style={{width:'100%',background:'#fff',paddingBottom:'10vw'}}>
                    <div style={{width:'90%',margin:'0 auto',background:'#fff'}}>
                    <Tabs tabs={tabs} initialPage={0} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
                        <div style={{marginTop:'5vw',padding:'3vw',lineHeight:'1.5em',border:'1px solid #bbd1cb',fontSize:'4.5vw'}}>
                            报名参加考研的人员，必须符合以下基本要求：<br/>
                            (一)中华人民共和国公民。<br/>
                            (二)拥护中国共产党的领导，品德良好，遵纪守法。<br/>
                            (三)身体健康状况符合国家和考研招生单位规定的体检要求。<br/>
                            (四)考生学业水平必须符合条件<br/>
                        </div>
                        <div style={{marginTop:'5vw',padding:'3vw',lineHeight:'1.5em',border:'1px solid #bbd1cb',fontSize:'4.5vw'}}>
                            <p style={{fontWeight:'bold'}}>一.网上报名</p>
满足一月统考在职研究生报名条件的人员需登录“中国研究生招生信息网”填写报名信息。一般每年的9月开始考研预报名，10月份开始考研正式报名。想要报名考研的人员需及时的关注官方信息。
<br/>
<p style={{fontWeight:'bold'}}>二.现场确认</p>
考生通过网上考研报名后，审核通过的要参加考研报名现场确认。现场确认环节主要是为了确保考研报考人员录入信息无误，以便能够顺利的参加考试。
<br/>
<p style={{fontWeight:'bold'}}>三.准考证打印</p>
参加全国统考在职研究生考试必须要携带考研准考证，所以一定要在考试前打印考研准考证。
                        </div>
                        <div style={{marginTop:'5vw',padding:'3vw',lineHeight:'1.5em',border:'1px solid #bbd1cb',fontSize:'4.5vw'}}>
                            <p style={{fontWeight:'bold'}}>一、考研预报名和正式报名</p>

考研预报名主要针对应届生，一般在9月下旬开始，持续两三天左右。主要是为了让那些初次报考的应届生们熟悉流程，避免报考失误，如有错误，还可在正式报名中修正。同时，考研人数逐年增加，预报名也分流了每年10月份的正式报名。
<br/>
正式报名不针对特定考生，无论是应届生还是往届生，只要有考研意向都可以在此期间报名。报名时间一般从10月上旬开始到10月底结束，持续一个月。考研党们有充足的时间可以填写相关信息，检验学籍等。
<br/>
<p style={{fontWeight:'bold'}}>二、报考点和报考单位</p>

报考点是现场确认的地点。大多数报考点就是考点，所以很多考生报完名后基本就可以知道考点。不过，也有一些报考点不是考点，例如：如果考生选择省、市考试中心作为自己的报考点，或者选择的高校报考点有多个校区，那么考生需要等到下载完准考证后，才能知道具体考点。
<br/>
报考单位是计划报考的目标院校名称，不是本科院校，一般只能选择一个报考单位一个专业。
<br/>
<p style={{fontWeight:'bold'}}>三、学籍验证</p>

为满足求职招聘、升学(考研、专升本)、出国留学、职称评定等领域的需要，学信网依托全国高等教育学生信息数据库，对学生的学籍、学历、招生录取等相关信息提供在线验证报告。2018年1月1日起，学信网对《教育部学籍在线验证报告》及《教育部学历证书电子注册备案表》提供免费申请服务。
<br/>
验证方法有两步。第一步，访问学信网-学信档案，使用学信网账号进行登录(没有账号可以注册)。第二步，成功登录后，点击顶部菜单中的“在线验证报告”栏目，可申请《教育部学籍在线验证报告》或《教育部学历证书电子注册备案表》中文版。点击顶部菜单中的“国际合作申请”栏目，可申请《教育部学籍在线验证报告》或《教育部学历证书电子注册备案表》英文版。
<br/>
<p style={{fontWeight:'bold'}}>四、现场确认</p>

报名包括网上报名和现场确认两个阶段。所有参加硕士研究生招生考试的考生均须进行网上报名，并到报考点现场确认网报信息，采集本人图像等相关电子信息，同时按规定缴纳报考费。
<br/>
1、现场确认时间
<br/>
每个省份现场确认时间不同，一般在11月上旬~11月中旬之间确认。
<br/>
2、所需材料
<br/>
(1)本人居民身份证(应届、往届都要带);
<br/>
(2)学历证书、学位证(往届生)、学生证(应届生);
<br/>
(3)网上报名编号，有的报考点需要提前打印好报名信息表;
<br/>
(4)未能通过学历(学籍)网上校验的考生应在招生单位规定时间内完成学历(学籍)核验，根据招生单位要求提供相应核验材料，具体时间和要求请咨询招生单位;
<br/>
(5)其它招生单位或报考点规定的相关材料。
                        </div>
                        <div style={{marginTop:'5vw',padding:'3vw',lineHeight:'1.5em',border:'1px solid #bbd1cb',fontSize:'4.5vw'}}>
                            <p style={{fontWeight:'bold'}}>12月23-24日</p>
                        </div>
                        <div style={{marginTop:'5vw',padding:'3vw',lineHeight:'1.5em',border:'1px solid #bbd1cb',fontSize:'4.5vw'}}>
                            考研初试面对的是一张试卷，考试时间是180分钟，那么在这3个小时的时间里面各个科目该如何安排时间和答题技巧呢？提前了解一下，才能够有备无患。
                            <br/>
                            <p style={{fontWeight:'bold'}}>1、政治</p>

政治是第一门考的科目，虽然比较简单，但是想要拿到70分还是不容易的。大家在拿到试卷，填写完个人信息后建议大家先浏览一遍试卷，尤其是先读一下分析题的大题的问题，有思路的可以用铅笔赶快列一下提纲。
<br/>
大家按照顺序答题就可以，政治题目分为单选、多选和分析题。其中单选题16个，一个1分，大家花20分钟做完就可以。多选题共17个，一个2分，非常重要，大家用40分钟做完。剩下5道大题是分析题，平均一道题20分钟，花费100分钟。最后留出20分钟作为检查，保证选择题填涂正确，分析题的题目与答案在答题卡上位置是一一对应的。
<br/>
<p style={{fontWeight:'bold'}}>2、英语</p>

英语的题目比较特殊，绝大多数题目最终落到答题卡上都是选择题的选项，所以大家一定要注意不要涂错卡。英语的重点是阅读理解和作文，想要得高分就必须把这部分的分提高一下。做题顺序大家根据平时自己喜好，有的同学喜欢一上来先写作文，有的则是先做完形填空。时间分配大概如下：
<br/>
完形填空：15-20分钟(10分)；
<br/>
阅读理解+新题型+翻译：110-115分钟(分值：60分，PartA为40分，其余各占10分)。【PartA：传统阅读理解70-75分钟(考试重点)；PartB：新题型15分钟；PartC：翻译20-25分钟】
<br/>
作文：50分钟(30分)(考试重点)【PartA：小作文15分钟；PartB：大作文35分钟】
<br/>
<p style={{fontWeight:'bold'}}>3、数学</p>

对于考数学的同学来说，请务必重视数学成绩，你初试的成绩就是要靠数学来拉开差距的。数学的题目类型分为选择、填空和解答题，具体时间分配如下：
<br/>
选择题和填空题约60分钟，解答题约100分钟，预留20分钟检查和补做前面未做的题，以及作为机动和回旋余地。选择题和填空题每题一般花4~5分钟，如果一道题3分钟仍无思路则应跳过。解答题每题一般花11分钟左右，一道题如果4~5分钟仍一筹莫展，则应跳过，暂时放弃。

                        </div>
                        <div style={{marginTop:'5vw',padding:'3vw',lineHeight:'1.5em',border:'1px solid #bbd1cb',fontSize:'4.5vw'}}>
考前注意事项<br/>

1： 这一时期一定不要生病，身体好，精神好，才能把前期的功力发挥出来。要不然功归一篑。
<br/>
2：提前定好宾馆，看一看周围的环境、和吃饭的地方。可以提前定外卖。节省时间。
<br/>
3：准备一杯咖啡，中午1点的时候和，防止下午困，这个非常重要。
<br/>
4：女生一定要把头发扎起来，这样写字的速度就会无形中加快。
<br/>
5：每天给自己加油!睡前鼓励自己，实在学不进去的话，是正常现象，那就不学了，放松一下，去睡觉，去跑步，听音乐，唱歌。切记打游戏。
<br/>
                        </div>
                        <div style={{marginTop:'5vw',padding:'3vw',lineHeight:'1.5em',border:'1px solid #bbd1cb',fontSize:'4.5vw'}}>
                            <p style={{fontWeight:'bold'}}>成绩查询方式</p>

通常查询考研成绩有两种渠道：网查和电话<br/>

网上查询（免费）：考生可以登陆研招网查询考试成绩，还可以登录报考院校的研究生招生网进行查询。<br/>

电话查询（付费）：各院校都有开通自己的查询电话，考生可输入考生编号和身份证号最后六位数字（不含字母）或军官证号查询。<br/>

成绩查询基本步骤<br/>

<p style={{fontWeight:'bold'}}>第一步：登录查分网站</p>

必须是中国研究生招生网或你报考院校的官方网站，或者官方公布的其他途径。
<br/>
<p style={{fontWeight:'bold'}}>第二步：输入准考证号、身份证号</p>

部分地区可能输入的是考生姓名，报名号等信息，但是请一定准备好自己的准考证，后面复试还会用到的。
<br/>
<p style={{fontWeight:'bold'}}>第三步：查询，查看自己成绩</p>

输入正确的准考证号和身份证号，系统判定是你本人，就可以看到自己成绩啦！
                        </div>
                    </Tabs>
                    </div>
                    </div>

                    <Flex.Item style={{position:'relative',height:'10vw',width:'90%',left:'5%',
                borderBottom:'1px solid #919493',background:'#fff'}}>
                    <img style={{position:"absolute",width:'7vw',height:'7vw',borderRadius:'50%',left:'1vw',top:'2vw'}} src={require('../imgs/baike2.png')}/>
                    <Flex.Item style={{position:"absolute",left:'10%',fontSize:'4vw',top:'25%',color:'black'}}>
                        工具箱
                    </Flex.Item>
                    </Flex.Item>

                    <div style={{width:'100%',background:'#fff',paddingTop:'10vw',paddingBottom:'5vw'}}>
                        <div style={{width:'80%',height:'60vw',margin:'0 auto',border:'1px solid #919493',borderRadius:'2vw'}}>
                            <a href='https://yz.chsi.com.cn/'><div style={{width:'49%',height:'49%',textAlign:'center',float:'left',borderBottom:'1px solid #919493',borderRight:'1px solid #919493'}}>
                                <img src={require('../imgs/baoming.png')} style={{width:'40%',height:'50%',borderRadius:'5vw',marginTop:'5%'}} />
                                <p style={{color:'#000'}}>考试报名</p>
                            </div></a>
                            <a href='https://yz.chsi.com.cn/zsgs/'><div style={{width:'50%',height:'49%',textAlign:'center',float:'left',borderBottom:'1px solid #919493'}}>
                                <img src={require('../imgs/xinxi.png')} style={{width:'40%',height:'50%',borderRadius:'5vw',marginTop:'5%'}}/>
                                <p style={{color:'#000'}}>招生信息</p>
                            </div></a>
                            <a href='https://yz.chsi.com.cn/'><div style={{width:'49%',height:'50%',textAlign:'center',float:'left',borderRight:'1px solid #919493'}}>
                                <img src={require('../imgs/chaxun.png')} style={{width:'40%',height:'50%',borderRadius:'5vw',marginTop:'5%'}}/>
                                <p style={{color:'#000'}}>成绩查询</p>
                            </div></a>
                            <a href='https://yz.chsi.com.cn/yzwb/'><div style={{width:'50%',height:'50%',textAlign:'center',float:'left'}}>
                                <img src={require('../imgs/tiaoji.png')} style={{width:'40%',height:'50%',borderRadius:'5vw',marginTop:'5%'}}/>
                                <p style={{color:'#000'}}>网上调剂</p>
                            </div></a>
                        </div>
                    
                    </div>

                    </div>
            </div>
        )
    }
}