import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {NavBar, Icon } from 'antd-mobile';
import vedio0 from '../imgs/vedio0.mp4';
import vedio1 from '../imgs/vedio1.mp4';
import vedio2 from '../imgs/vedio2.mp4';
import vedio3 from '../imgs/vedio3.mp4';

export default class Resource extends Component {
    constructor(){
        super();
        this.state={
            type:'',
            todo:[],
            data:[1], //data里面放视频路径 name为视频标题  后台获取
            name:[]
        }
    }

    componentDidMount(){
        var str = this.props.location.search; //使用url解析参数
        var type = str.split('=')[1];
        console.log(type);

        if(type=='share'){
            this.setState({
                type:type,
                todo:[
                    <div>
                         <NavBar               
                style={{backgroundColor:'#05a479',color:'white'}}>
                   <Link to='/searchinfo'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{color:'white'}}>经验分享</span>           
                </NavBar>
                    
                <div style={{fontSize:'5vw',backgroundImage:'../imgs/music.jpg',width:'80%',left:'10%',
                position:'relative',textIndent:'2em',top:'5vw'}}>
                本人本科是双非一本，19年考研很幸运能够一战上岸，顺利考取某211高校。
                <br/>
                <div style={{textIndent:'2em'}}>很荣幸有机会分享我的考研经历，考虑到每个人的情况不尽相同，所以接下来我分享的经验都是仅供大家参考，
                切不可生搬硬套，我只能保证下面这些话都是我的切身感受、亲身经历。</div>
                <div style={{textIndent:'2em'}}>
                众所周知，考研是场持久战。我从大三下学期开学3月份开始真正进入准备考研的学习状态到前不久3月底被正式录取，
                历时整整一年。这一年中绝大部分时间是在枯燥的学习和无尽的自我怀疑中度过的，这是最考验毅力的一年，也是最容易成功的一年，
                前提是有科学合理的学习方法和坚定的信念。我简单说说我的学习经历。
                </div>
    
    3月初至6月底：
    <br/>
    <div style={{textIndent:'2em'}}>这是打基础的四个月，切不可白白浪费。</div>
    <div style={{textIndent:'2em'}}>数学一定将基础打牢，好的基础是成功的一半。我使用的是文都汤家凤老师的高数、线代以及余炳森老师的概率绿皮讲义辅导书，在此复习过程中结合汤老师等的基础课视频，效果很好，视频课我看了两遍，有时间建议大家也多看看，加深记忆，我使用的也是汤老师的1800题，将基础篇同期完成，当然课本是一切题型的根源，要保证课本在你随手够得到的地方，勤翻多翻；
    
    英语在这段时间也不能落下，英语最重要的是阅读，而阅读最重要的是长难句，我是先将何凯文老师的《长难句解密》结合视频课研学了一遍，之后着手真题，这段时间只做阅读partA，刚开始很慢很难看懂，有时候半天时间只能学明白一篇或者两篇阅读，但是一定要坚持，在这将近四个月的时间里，我将97-18年的所有真题阅读精学了一遍，包括其中的重点词汇、词组和句型语法等，可以将重点的词汇等记录下来，方便后期复习使用；
    
    政治可以不用着急;
    
    还有要多了解各大院校的历年考研情况，比如招生人数的变化情况、复试录取比例以及专业课试题难度等，为暑期最终选择目标院校做准备。</div>
    
    7月初至8月底：
    <div style={{textIndent:'2em'}}>
    这段时间是暑期放假休息时间，也是考研的黄金期，抓住这两个月时间高效学习，会有事半功倍的效果。
    
    数学此时进入强化阶段，重要知识点开始重点学习，至关重要。我是跟着汤家凤老师度过的，看汤老师的强化视频课，做1800题的强化篇。推荐关注汤老师的微信公众号，老师会发一些偏的重点的知识可以查漏补缺，确保全面复习；
    
    英语这个阶段我主要是研究新题型和完型填空，不求多，将历年真题中的题目搞明白就完全足够，推荐徐可风老师的新题型讲解书和视频课。提醒大家，完形填空千万不能放弃！！！虽然这道题通常是放在整张试卷的最后作答，但往往难度不大，比如19年的英一完型就很简单，基本是送分题，一定要认真对待;
    
    此阶段的政治也进入了复习阶段，我认为此阶段主要是练习选择题，主观题可以先放一放；
    
    进入暑期，专业课的学习也要及时着手了。我很快确定了我要报考的院校，通过学长购买了专业课资料，也在网上买了专业课本，每天学习至少3个小时，我学习的专业课以记忆为主，此阶段我主要是总结知识点附带简单记忆。
    
    9月初至10月底：
    </div>
    <div style={{textIndent:'2em'}}>数学作为考研最重要的一门，这两个月是拔高期和查漏补缺期。开始做真题！！！我使用的是汤家凤老师的32年真题，基本上是两天一年，坚持不断，持续做题，确保题量不少。一定要收起答案，合起课本和辅导书，独立自主的完成，建议大家带个手表等，按点严格要求自己，可提前做完万不可长期超时，训练自己的知识运用能力和解题速度，不可懈怠；
    
    政治在此阶段也主要是练习选择题和简单记忆知识点，着手真题！！！这个阶段一定要认真对待，刻苦训练，最好保证自己的选择题分数在40分以上；
    
    英语可以回头再做真题，通篇做、整套做，结合自己记录的知识点和平时写的笔记；
    
    这两个月我认为是我专业课的成型期，每天保证足够的背诵记忆时间，确保知识点不遗漏。</div>
    
    11月初至考试前夕：
    <br/>
    <div style={{textIndent:'2em'}}>数学进入最后的冲刺阶段，回头看真题中的错题，将最近5年的真题再做两遍，把握出题规律，可以选择性的放弃一些太难的题，保证能得的分一分不丢。有时间做一做汤老师的最后八套卷，有助于对重点知识点的复习把握；还有李林老师的终极预测四套卷也很有价值;在学不进去的时候可以就看就看一些考研名师的微博或者微信公众号，他们都会讲解一些重要的知识点或者多年未考的知识点，有一定的价值;
    
    政治此阶段要开始背诵主观题了，要整题整题的背，强烈推荐肖秀荣老师的最后八套卷和四套卷，四套卷最最重要，宁可其他的都不背，也要把四套卷的大题熟记于心;
    
    英语在此阶段最主要的任务就是背作文了，毕竟作文占的分数比例还是很大的，一定要认真对待。推荐王江涛老师的作文红皮书，里面的句子都挺好挺经典的，建议背诵并默写记忆；
    
    专业课也是考研的一个大头，此阶段我是将往年真题中和课本中以及相关资料中的计算题都做了两遍，当然也将重要的知识点又背诵了两遍。
    
    我的学习经历大概就是这样，有些时间节点或者经历可能有所偏差，建议大家结合自身情况制定学习计划，不要怕慢不要怕不会，按部就班就一定能成功。
    </div>
                </div></div>]
            })
        }else if(type=='text'){
            this.setState({
                type:type,
                todo:[
            <div>
                         <NavBar               
                style={{backgroundColor:'#05a479',color:'white'}}>
                   <Link to='/searchinfo'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{color:'white'}}>考研文本资料</span>           
                </NavBar>
                <div style={{fontSize:'5vw',backgroundImage:'../imgs/music.jpg',width:'80%',left:'10%',
                position:'relative',textIndent:'2em',top:'5vw'}}>
                如何准备考研资料？2021跨考教育学研究生，现在开始复习，问考研的学姐学长们需要考的科目有哪些？去哪儿买旧教材？
                <br/>
                <div style={{textIndent:'2em'}}>你要考的科目，除了政治还有英语这种公共课。如果要知道自己考的专业课科目，你要先确定好自己的专业院校，然后再去该院校的研究生院网上找到你专业的参考书目。</div>
                <div style={{textIndent:'2em'}}>
                这样才能确定你要考的科目有哪些！

所以关于如何准备考研资料？不要一味的只会问学长学姐经验，自己也要多去查查信息。

                </div>

                买旧教材的渠道有：
    <br/>
    <div style={{textIndent:'2em'}}>1.如何准备考研资料——某鱼：出书的人比较多，但是一定要小心！一定要书收到了再确认付款，不要用微信支付宝去付款，得走闲鱼。我舍友在闲鱼买书就被骗了。</div>
    <div style={{textIndent:'2em'}}>2.如何准备考研资料——微博：这上面出的学长学姐也比较多，你可以直接在考研的话题/超话里面找。</div>
    
    你现在跨考21，最需要的就是把专业课和公共课的基础补上去。
    <div style={{textIndent:'2em'}}>
    专业课由于我不是教育学的，所以也不太知道教育学需要复习哪些书。但我是文科专业，所以我觉得复习思路应该都差不多。

1.先把基础的书，过一遍，整理个框架。对教育学的大概知识框架，有一个了解。

2.知识点一定要用自己的话去复述！这样你才能去理解那些比较拗口的理论。

3.英语大三上学期开始，可以先记考研词汇。真题其实不用太着急，先把词汇过一遍，对之后的真题练习很有帮助！

因为大三上学期还是要上课的，所以词汇可以在早上、下午没课的时候去图书馆、自习室背~

给自己规定时间、任务量：比如2小时背1个单元单词

背单词可以用闪过英语《考研词汇闪过》，书中把考研大纲词汇按重要程度分成了必考词、基础词、偶考词、超纲词。你刚开始可以把书先过一遍，本来考研词汇就是需要每天都背诵，这样才不会遗忘。
    </div>
                </div>
                    </div>
                ]})
        }else if(type=='mus'){
            this.setState({
                type:type,
                todo:[
            <div>
                         <NavBar               
                style={{backgroundColor:'#05a479',color:'white'}}>
                   <Link to='/searchinfo'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{color:'white'}}>音视频</span>           
                </NavBar>
                <div style={{width:'100%',background:'#fff',paddingTop:'10vw'}}>
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={'/vplay/1'}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio0} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>老梁观世界：3分钟告诉迷茫的你，考研...</div>
                            </div></Link>
                        ))
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={'/vplay/2'}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio1} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>怎样问才能难倒神嘴张雪峰老师 第一期</div>
                            </div></Link>
                        ))
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={'/vplay/3'}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio2} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>爆笑张雪峰老师视频,超长剪辑版,让你一次看个够</div>
                            </div></Link>
                        ))
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <Link to={'/vplay/4'}><div style={{width:'85%',margin:'0 auto',height:'60vw',paddingBottom:'10vw',borderRadius:'3vw',overflow:'hidden',textAlign:'center'}}>
                                <video width='100%' height='80%' controls='controls'>
                                    <source src={vedio3} type='video/mp4' />
                                    您的浏览器不支持Video
                                </video>
                                <div style={{width:'90%',height:'20%',paddingRight:'5%',paddingLeft:'5%',background:'#dbdedd',alignItems:'center',display: '-webkit-flex',fontSize:'4.5vw',color:'#000'}}>「张雪峰视频」2018考研 老师带你讲跨专业</div>
                            </div></Link>
                        ))
                    }
                </div>
                    </div>
                ]})
        }
    }

    render() {
        return (
            <div className='testbox'>
               

                <div>
                    {
                        this.state.todo.map(
                        (item)=><div>{item}</div>
                        )
                    }
                </div> 
            </div>

            
        )
    }
}