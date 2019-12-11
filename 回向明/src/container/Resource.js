import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {NavBar, Icon } from 'antd-mobile';
import vedio0 from '../imgs/vedio0.mp4';
import vedio1 from '../imgs/vedio1.mp4';

export default class Resource extends Component {
    constructor(){
        super();
        this.state={
            type:'',
            uid:0,
            todo:[],
            data:[1], //data里面放视频路径 name为视频标题  后台获取
            name:[],
            id:0,           
            title:'',
            view:'109',
            time:'2019-11-21',
            uid:0
        }
    }

    componentDidMount(){
        var str = this.props.location.search; //使用url解析参数
        var uid = str.split('&')[0].split('=')[1];
        var type = str.split('&')[1].split('=')[1];
        console.log(type);
        this.setState({
            type:type,
            uid:uid
        })
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
                <img style={{position:"absolute",width:'100%',height:'600vw',opacity:'0.2'}} src={require('../imgs/pen.jpg')}/>
                <div style={{fontSize:'6vw',width:'90%',left:'5%',
                position:'relative',textIndent:'2em',top:'5vw'}}>
                    <div style={{fontWeight:'bold',fontSize:'8vw'}}>考研经验分享</div>
                <br/>
                <div className='zxtit1'>
                        <img src={require('../imgs/time.png')}/>
                        <span>{this.state.time}</span>
                        <img src={require('../imgs/view.png')}/>
                        <span>{this.state.view}</span>
                    </div>
                本人本科是双非一本，19年考研很幸运能够一战上岸，顺利考取某211高校。
                <br/><br/>
                <div style={{textIndent:'2em'}}>很荣幸有机会分享我的考研经历，考虑到每个人的情况不尽相同，所以接下来我分享的经验都是仅供大家参考，
                切不可生搬硬套，我只能保证下面这些话都是我的切身感受、亲身经历。</div>
                <br/>
                <div style={{textIndent:'2em'}}>
                众所周知，考研是场持久战。我从大三下学期开学3月份开始真正进入准备考研的学习状态到前不久3月底被正式录取，
                历时整整一年。这一年中绝大部分时间是在枯燥的学习和无尽的自我怀疑中度过的，这是最考验毅力的一年，也是最容易成功的一年，
                前提是有科学合理的学习方法和坚定的信念。我简单说说我的学习经历。
                </div>
                <br/>
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
    <br/><br/>
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
                <img style={{position:"absolute",width:'100%',height:'250vw',opacity:'0.2'}} src={require('../imgs/jingyan.jpg')}/>
                <div style={{fontSize:'6vw',backgroundImage:'../imgs/music.jpg',width:'90%',left:'5%',
                position:'relative',textIndent:'2em',top:'5vw'}}>
                
                <div style={{fontWeight:'bold',fontSize:'8vw'}}>如何准备考研资料？</div>
                <br/>
                <div className='zxtit1'>
                        <img src={require('../imgs/time.png')}/>
                        <span>{this.state.time}</span>
                        <img src={require('../imgs/view.png')}/>
                        <span>{this.state.view}</span>
                    </div>
                <div style={{textIndent:'2em'}}>2021跨考教育学研究生，现在开始复习，问考研的学姐学长们需要考的科目有哪些？去哪儿买旧教材？</div> 
                <div style={{textIndent:'2em'}}>你要考的科目，除了政治还有英语这种公共课。如果要知道自己考的专业课科目，你要先确定好自己的专业院校，然后再去该院校的研究生院网上找到你专业的参考书目。</div>
                <div style={{textIndent:'2em'}}>
                这样才能确定你要考的科目有哪些！

所以关于如何准备考研资料？不要一味的只会问学长学姐经验，自己也要多去查查信息。

                </div>

                买旧教材的渠道有：
    <br/><br/>
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
                <img style={{position:"absolute",width:'100%',height:'180vw',opacity:'0.2'}} src={require('../imgs/music.jpg')}/>
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
                </div>
                    </div>
                ]})
        }else if(type=='laoliang'){
            this.setState({
                type:type,
                todo:[
            <div>
                         <NavBar               
                style={{backgroundColor:'#05a479',color:'white'}}>
                   <Link to='/searchinfo'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{color:'white'}}>老梁考研汇</span>           
                </NavBar>
                <img style={{position:"absolute",width:'100%',height:'300vw',opacity:'0.2'}} src={require('../imgs/laoliang.jpg')}/>
                <div style={{fontSize:'6vw',backgroundImage:'../imgs/music.jpg',width:'90%',left:'5%',
                position:'relative',textIndent:'2em',top:'5vw'}}>
                    <div style={{fontWeight:'bold',fontSize:'8vw'}}>其实你问考研有什么好处，改变大不大，这谁能回答？</div>
                <br/>
                <div className='zxtit1'>
                        <img src={require('../imgs/time.png')}/>
                        <span>{this.state.time}</span>
                        <img src={require('../imgs/view.png')}/>
                        <span>{this.state.view}</span>
                    </div>
                
                <div style={{textIndent:'2em'}}>得具体问题具体分析，我的理解是那些需要考研读博的，是这个行业你已经进入到了一个极为成熟的阶段，如果你不驾驭那么多的知识，你根本无法在这行业里自由自在地畅游。</div>
                <div style={{textIndent:'2em'}}>
                这个时候你要考研，比方说大学时候学理科的学生，数学系的，物理系的，他们这点本科的东西到科研单位什么都不是，这个时候就必须通过考研深造，然后才能进入更深层次的理论研究和实践，甚至有的工厂光是本科学历，都很难解决它高新技术研发问题，所以这个时候你需要考研。
                </div>

    <div style={{textIndent:'2em'}}>再比如说医生，医生光念本科的时间都比普通本科时间要长得多，因为它这个专业技术是高精尖的，而且医生这个行业发展已经很成熟了，可是对于一些方兴未艾的，刚刚兴起的新产业，你就千万别琢磨去考研。</div>
    <div style={{textIndent:'2em'}}>有个朋友的孩子问我，说梁叔啊，我学新媒体的，想报考北大人大这边的专业，我说你算了吧，你问问北大人大那些老师知道什么是新媒体么？他们干过吗？就像我经常说一些专业老师，我说你们一天主持人都没干过，你教人当主持人算不算误人子弟？</div>

    <div style={{textIndent:'2em'}}>
    新媒体的发展在中国就是最近这几年的事，它什么时候形成的理论研究甚至能反过来理论指导实践？学校自己都从来没研究明白这事，它能带出这样的研究生乃至博士生吗？所以如果你从事这样的行业，实践性很强的，那一定要在工作中去学会这些东西。如果你的老师都从来没经历过你工作中经历的，你能信他么？
    </div>
    <div style={{textIndent:'2em'}}>
    都说求名师访高友，他得给你有用的东西，这行里你求的人访的友他们自己什么东西都还没有呢，最后只能给你一纸文凭，那跟骗你文凭，骗你钱有区别吗？
    </div>
    <div style={{textIndent:'2em'}}>   
所以成熟的行业需要高精尖的东西，考研是没问题的，但是方兴未艾的新产业就不要去了，在学校里耽误那些无用功也没必要。从小学初中高中大学算算自己念了多少年书？还回学校念？人生的光阴不要都泡到学校里，社会这所大学，对于我们每个人来说，同样用处很大。
    </div>
                </div>
                    </div>
                ]})
        }else if(type=='xuefeng'){
            this.setState({
                type:type,
                todo:[
            <div>
                         <NavBar               
                style={{backgroundColor:'#05a479',color:'white'}}>
                   <Link to='/searchinfo'>
                      <Icon type={'left'} style={{position:'absolute',top:'10px',left:'4%',color:'white'}}/>
                   </Link>
                  <span style={{color:'white'}}>雪峰说考研</span>           
                </NavBar>
                <img style={{position:"absolute",width:'100%',height:'300vw',opacity:'0.2'}} src={require('../imgs/xuefeng.jpg')}/>
                <div style={{fontSize:'6vw',backgroundImage:'../imgs/music.jpg',width:'90%',left:'5%',
                position:'relative',textIndent:'2em',top:'5vw'}}>
                <div style={{fontWeight:'bold',fontSize:'8vw'}}>张雪峰深情演讲：大学生为什么要努力考研看完之后默默努力</div>
                <br/>
                <div className='zxtit1'>
                        <img src={require('../imgs/time.png')}/>
                        <span>{this.state.time}</span>
                        <img src={require('../imgs/view.png')}/>
                        <span>{this.state.view}</span>
                    </div>
                <div style={{textIndent:'2em'}}>中国存在一个争论不休的话题，很多人都在争论，学历到底重不重要？很多在表面上说学历不重要的人，心底却在默默努力。这个世界什么最重要？当然是能力，可是怎么才能展示出你的能力呢？这就要通过学历去打通自己展示能力的道路。学历到底重不重要？在我们每个人心中自有定论。很多人在想的是自己的能力十分的优秀，但是为什么还要考研呢？今天小编给大家讲一下张雪峰的一些演讲。</div>
                <div style={{textIndent:'2em'}}>
                张雪峰因为自己幽默的演讲风格在网上大火，成为了一名教育界的网红。因为他的大火，一期综艺节目也请到了张雪峰。当时同时上节目的嘉宾问张雪峰考研真的十分的重要吗？张雪峰开始说出自己的想法，不过当时台上的很多嘉宾也是不同意这种说法，而且当时的辩论张雪峰遭到围攻。但是节目播出以后，张雪峰的观点得到了绝大数网友的支持。
                </div>

    <div style={{textIndent:'2em'}}>在节目上鲁豫问张雪峰你是因为自己做这个工作才说考研改变命运还是真的是相信考研改变命运。张雪峰连续说了几遍自己相信考研改变命运，并且说出了自己的理由。</div>
    <div style={{textIndent:'2em'}}>张雪峰说鲁豫如果有兴趣的话可以去自己的家乡，那里有一个大学叫做齐齐哈尔大学。每年到了招聘季节的时候，可以去哪里看一看是什么样的企业子齐齐哈尔大学招聘，根本没有一个好单位。鲁豫再去看一看北京科技大学，是什么样的企业在招聘。从这两者之间可以看出学校的差距，学生之间学历的差距。张雪峰说世界上500强企业在招聘员工的时候都会告诉前来求职的人说他们不看重学历，但是他们不会去齐齐哈尔大学招聘。</div>

    <div style={{textIndent:'2em'}}>
    其实考研就是给很多没有名校学历的人一个提高自己起跑线的机会，他们通过考研能够站在更高的起点，拥有更多的选择机会。让我们在这个竞争惨烈的社会上拥有一个护身符的机会，张雪峰说到激情的时候，声音已经哽咽，一个东北大老爷们都为很多有能力但是没有学历的孩子感动悲哀。张雪峰不是唯学历论的拥护者，但是他知道没有学历的话，你的能力就没有展示的舞台。你没有舞台，就算你再有能力，也不会有机会表示出来。这就是学历的重要性，这也是学历只能起的那份作用。
    </div>
    <div style={{textIndent:'2em'}}>   
    很多学生看到这里深有感触，其实中国每年考研的学生中有一部分人是因为出社会后碰到了钉子，然后想通过提高自己的学历让自己能够找到更好的工作。看到这里你应该去好好地学习了。
    </div>
                </div>
                    </div>
                ]})
        }
    }

    render() {
        var uid = this.state.uid;
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