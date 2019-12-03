import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {NavBar,Accordion,List} from 'antd-mobile';


export default class Carousel extends Component{
    constructor(){
        super();
        this.state={
            id:0,           
            title:'',
            view:'',
            time:'',
            sum:'',
            dt1:'',
            dt2:'',
            dt3:'',
            dt4:'',
            dt5:'',
            dt6:'',
            dt7:'',
            dt8:'',
            dt9:'',
            dt10:'',
            dt11:''
        }
    }
    componentDidMount(){
        var id = this.props.match.params.id;
        console.log(id);
        this.setState({
            id:id
        });
        if(id == 1){
            this.setState({
                title:'2020各省份高校考研招生简章汇总',
                view:'123',
                time:'2019-09-21',
                sum:'招生简章是考生选择报考学校时重点关注的信息之一，通过2020考研招生简章来了解该校的招生对象和报考要求等信息是最为准确的。高大高校一般会在8月份前后公布本校的2020考研招生简章，考生一定要及时关注目标院校公布的2020考研招生简章，确保自己符合该校的招生要求。',
                dt1:'报考条件、报考日程、学制等信息是考生查看2020考研招生简章时必须要关注的信息。',
                dt2:'【高校招生简章概要】'
            })
        }
        if(id == 2){
            this.setState({
                title:'汉硕考研：一小时扫盲专场',
                view:'26',
                time:'2019-11-01',
                sum:'摘要：考研无论成功与否，我们都应该去感谢，不仅仅是感谢最后的那个结果，更是感谢在备考过程中坚持不懈的自己。中国石油大学汉硕前辈分享考研经验，助各位考研er们一臂之力。',
                dt1:'近些年，随着中国国际地位的提高，国际影响力的增强，国际上学习汉语的热度居高不下，汉语国际教育专业也成为很多考研er的选择。那么汉语国际教育专业到底学什么？值不值得读？下面帮帮就为大家进行汉语国际教育硕士的常识介绍与就业分析。',
                dt2:'【专业介绍】',
                dt3:'汉硕全称是 汉语国际教育硕士 ，汉语国际教育硕士专业学位英文名称为 Master of Teaching Chinese to Speakers of Other Languages ，简称MTCSOL。汉语国际教育硕士专业学位培养目标为适应汉语国际推广工作，胜任汉语作为第二语言/外语教学的高层次、应用型、复合型专门人才。 汉语国际教育 是指面向海外母语非汉语者的汉',
                dt4:'【参考书目】',
                dt5:'专业一：《现代汉语》黄廖版（目前最新是第六版）;《现代汉语教学与自学参考》黄廖版（有现汉课后题答案和补充题，建议跨专业的看）;《现代汉语千题解》（习题集）;《现代汉语辅导及习题集》',
                dt6:'专业二：《中国文化要略+考研笔记》程裕祯（某宝一搜就有，两本一起卖的）;《对外汉语教学引论》刘珣;《对外汉语教学入门》周小兵（目前最新是第三版）;《对外汉语教学导论》周小兵;《跨文化交际概论》吴为善;《国际汉语教学案例与分析》朱勇'
            })
        }
        if(id == 3){
            this.setState({
                title:'翻硕考研：上岸的人，大多赢在起跑线',
                view:'314',
                time:'1天前',
                sum:'摘要：对于翻译硕士这一高大上的专业，在近几年的报考中大家的热情也是持续高涨。随着各种 美女翻译 新闻的曝光，翻译硕士这个可以让颜值与智慧并存的专业可谓大热。但各位考研er都明白，择校择专业千万不能盲目，帮帮给各位小伙伴整理了一份翻译硕士择校指导，来看看这个专业到底适不适合你吧~',
                dt2:'【专业方向选择】',
                dt3:'在翻译硕士这门专业当中的话，它的方向其实主要有以下几个，分别是笔译口译、会议口译以及同声传译。有些学校在比例方向之下也会设置一些细致的方向，比如商务笔译、法律笔译、科技笔译等。口译是比较大家都比较熟悉的一个专业了，会议口译比口译要稍微难一点，同声传译大家肯定也很熟，是翻译行业最难也是难度系数很高的一个职业。',
                dt7:'而现在一些高校也在注重发展一些特色课程，整个也有要往向专业方向转变的一个趋势，比如这些课程有翻译项目管理，还有计算机辅助翻译，现在翻译专业与人工智能相结合是一个趋势',
                dt8:'【选择报考翻硕前该明白的三件事】',
                dt9:'1.翻硕并不是想象中的那么高大上。无论是从入学、教学、毕业和从业来看，翻硕与其他专业相比都并不一定就更 高端 。入学考试，翻硕不需要考二外。这成为不少二外渣渣考研的一大利器，可以有效规避掉自己的劣势。百科和汉语写作考试，根本上来将并不是一个专业考试，而是对考生知识储备的考察。翻译硕士英语基本秉承了专八的考察目标和传统，可以比较全面地测试出考试的双语能力。而英语翻译基础基本上是考察考生的双语储备和翻译技能。与对文学、语言学等学科相比，翻硕的学术性要低一些，对考生的要求更多是知识储备和双语口笔头能力。',
                dt10:'2.翻译硕士出来并不一定就能做同传。同传对译员的要求非常高。译员不仅需要有非常敏捷的反应能力、优秀的双语组织转换能力、卓越快速的学习能力、良好的口译技能和必要的现场经验，还需要稳定的心理素质、强壮的身体素质和必备的职业道德。外人通常认为，专八之类的证书都有了，做同传肯定不在话下。但是事实绝非如此。没有专业知识，去做会基本就等于自残。所以通常来说，一个好的译员，都非常希望主办方能提供发言人的相关资料，做好充足准备。',
                dt11:'3.翻硕或许并不是英专最好的出路。尽管手握一张硕士文凭，在国内这个重学历的大环境下还是比较有竞争力的，但是时代已然发生了重大变化。不少某一行业的从业人员，尽管他们没有经过正规的英语培训，口语是survivalEnglish，但是他们善于学习，掌握了行业术语和行业背景，基本上可以自如地和老外沟通。这些在某个行业深耕细作的人，可以对答如流，来去自如。'
            })
        }
    }
    
    render(){
        return (
            <div className='carouselBox'>
                <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={'/appTab'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff',fontSize:'22px'}}>资讯</span></NavBar>

                <div className='zxtit'>
                    <h1>{this.state.title}</h1>
                    <div className='zxtit1'>
                        <img src={require('../imgs/time.png')}/>
                        <span>{this.state.time}</span>
                        <img src={require('../imgs/view.png')}/>
                        <span>{this.state.view}</span>
                    </div>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.sum}</p>
                    <p  className={this.state.id == 3 ? 'stu2' : ''}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.dt1}</p>
                    <h2>{this.state.dt2}</h2>
                    
                    <div className={this.state.id == 1 ? 'student' : 'stu2 student'}>
                        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                            <Accordion.Panel header="复旦大学“骨干计划”2020研究生招生简章" className="pad">
                                <span>复旦大学“骨干计划”2020研究生招生信息</span>
                                <span>一、招生计划</span>
                                <span>我校2020年拟招收少数民族骨干计划硕士研究生70人。招生计划中包括“定向西藏公共管理硕士专项”40人，此外不再招收其他定向西藏的骨干计划硕士生;包括“定向新疆喀什地区医学硕士专项”10人。严格录取标准，实际招生人数视生源情况进行调整。</span>
                                <span>二、招生专业</span>
                                <span>列入《复旦大学2020年硕士研究生招生专业目录》的学术学位各专业和全日制专业学位各专业。其中“定向西藏公共管理硕士专项”在公共管理硕士专业(专业代码：125200)“地方公共管理”方向(方向代码：10)招生，“定向新疆喀什地区医学硕士专项”在医学相关学术学位专业招生。</span>
                                <span>三、信息查询及联系方式</span>
                                <span>复旦大学代码：10246</span>
                                <span>联系部门：研究生院招生办公室</span>
                                <span>网址：http://www.gsao.fudan.edu.cn</span>
                                <span>地址：上海市邯郸路220号(邮政编码200433)</span>
                                <span>电话：(021)65642673或65643991</span>
                                <span>传真：(021)65644159</span>
                                <span>Email：gs_admission@fudan.edu.cn</span>
                            </Accordion.Panel>
                            <Accordion.Panel header="河北师范大学2020考研招生简章" className="pad">
                                <span>河北师范大学2020考研招生简章</span>
                                <span>一、招生计划</span>
                                <span>因国家还未下达2020年招生计划，目前招生专业目录所列计划是以2019年招生计划为基数确定的，招生专业目录中各专业的招生人数仅供参考。招生专业目录及参考书目见附件。</span>
                                <span>招生专业目录中各院系、各专业所列招生人数包含拟接收推荐免试生人数(实招收推免生人数以最后网上公布确认录取名单为准)。我校2020 年“农村学校教育硕士师资培养计划”(简称“硕师计划”)为40人，“退役大学生士兵”专项硕士研究生招生计划为10人。</span>
                                <span>二、学制</span>
                                <span>全日制：学术学位硕士研究生学制均为3年;专业学位中的电子信息、公共管理、旅游管理、法律(非法学)、体育教学、运动训练、美术、音乐、广播电视等专业(领域)学制为3年，其它专业(领域)学制均为2年。</span>
                                <span>非全日制：所有专业(领域)的学制均为3年。</span>
                                <span>三、相关信息</span>
                                <span>单位代码：10094 单位名称：河北师范大学</span>
                                <span>地址：石家庄市南二环东路20号</span>
                                <span>邮政编码：050024</span>
                                <span>联系部门：研究生招生办公室</span>
                                <span>电话：0311-80786777</span>
                            </Accordion.Panel>
                            <Accordion.Panel header="武汉理工大学“骨干计划”2020硕士招生简章" className="pad">
                            <span>武汉理工大学“骨干计划”2020硕士招生简章</span>
                            <span>一、招生计划</span>
                            <span>各省、自治区、直辖市高等学校招生委员会、教育厅(教委)，新疆生产建设兵团教育局，有关部门(单位)教育司(局)，有关研究生招生单位：</span>
                            <span>根据民族地区脱贫攻坚和经济社会发展需要，2020年继续实施少数民族高层次骨干人才计划(以下简称骨干计划)，安排博士研究生招生计划1000人、硕士研究生招生计划4000人。</span>
                            <span>二、专项计划</span>
                            <span>1. 继续实施定向西藏新疆公共管理硕士专项，由北京大学、清华大学、中国人民大学、北京师范大学、复旦大学、浙江大学、厦门大学、四川大学8所高校承担，每校40人。</span>
                            <span>2. 启动实施定向新疆喀什地区医学硕士专项，由复旦大学、上海交通大学、同济大学、中山大学4所高校承担，复旦大学、上海交通大学、同济大学每校10人，中山大学20人。</span>
                        </Accordion.Panel>
                            <Accordion.Panel header="中南大学2020研究生招生说明" className="pad">
                                <span>中南大学2020研究生招生说明</span>
                                <span>一、招生计划</span>
                                <span>中南大学 2020 年预计招收全日制和非全日制硕士研究生计划分别为 5000 名左右和 460名左右(具体以国家下达的 2020 年硕士招生计划为准)，分学术学位研究生和专业学位研究生计划。</span>
                                <span>二、培养目标</span>
                                <span>我校招收硕士研究生，是为了培养热爱祖国，拥护中国共产党的领导，拥护社会主义制度，遵纪守法，品德良好，具有服务国家、服务人民的社会责任感的高层次专门人才。</span>
                                <span>三、学习方式</span>
                                <span>非全日制招生专业：工商管理[125100]、公共管理[125200]、工程管理[125600]。全日制招生专业：上述专业以外其他专业。全日制和非全日制考生不能相互调剂;根据教育部要求，非全日制硕士研究生仅招收在职定向就业人员。</span>
                                <span>四、招生咨询</span>
                                <span>查询我校硕士研究生招生信息的正规渠道是：中南大学研究生院网站(http://gra.csu.edu.cn/yjsy/)以及中南大学各二级研究生招生培养单位的官方网站(发布该二级单位有关研招信息，主要是招生专业、研究方向、导师、自命题科目考试大纲和复试信息等)。对于其他网站发布或转载的研究生招生的信息，我校均不予认可。4</span>
                                <span>研究生招生咨询电话：0731-88876806，</span>
                                <span>传真：0731-88876474，</span>
                                <span>地址：湖南省长沙市麓山南路 932 号中南大学校本部三办公楼，</span>
                                <span>邮编：410083</span>
                            </Accordion.Panel>
                            <Accordion.Panel header="济宁医学院2020硕士研究生招生简章" className="pad">
                                <span>济宁医学院2020年硕士学位研究生招生简章</span>
                                <span>一、培养目标</span>
                                <span>培养热爱祖国，拥护中国共产党的领导，拥护社会主义制度，遵纪守法，品德良好，具有服务国家服务人民的社会责任感;热爱医疗卫生事业，具有良好职业道德、人文素养和专业素养并掌握坚实的医学基础理论、基本知识和基本技能，具备较强临床分析和实践能力，以及良好的表达能力和医患沟通能力;掌握临床科学研究的基本方法，并有一定的临床研究能力和临床教学能力的临床医师。</span>
                                <span>二、招生专业及名额</span>
                                <span>2020年我校面向全国招收全日制临床医学硕士专业学位研究生,预计招生规模170名(含推免生)，实际招生专业和招生名额以教育部下达的正式招生计划为准，各专业招生名额将根据招生计划、考生初试和复试情况进行适当调整。</span>
                                <span>三、相关信息</span>
                                <span>单位代码：10443 地址：山东省济宁市荷花路133号</span>
                                <span>网址：http://grad.jnmc.edu.cn </span>
                                <span>联系部门：研究生处</span>
                                <span>咨询电话：0537-3616166 联系人：高老师</span>
                                <span>邮编：272067</span>
                                <span>邮箱：yjsc0537@163.com</span>
                            </Accordion.Panel>                  
                        </Accordion>
                        <div style={{height:'30px',lineHeight:'40px',paddingLeft:'15px',fontSize:'16px'}}>更多...</div>
                    </div>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.dt3}</p>
                    <h2 className={this.state.id == 2 ? '' : 'stu2'}>{this.state.dt4}</h2>
                    <p className={this.state.id == 2 ? '' : 'stu2'}>{this.state.dt5}</p>
                    <p className={this.state.id == 2 ? '' : 'stu2'}>{this.state.dt6}</p>
                    <p className={this.state.id == 3 ? '' : 'stu2'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.dt7}</p>
                    <h2 className={this.state.id == 3 ? '' : 'stu2'}>{this.state.dt8}</h2>
                    <p className={this.state.id == 3 ? '' : 'stu2'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.dt9}</p>
                    <p className={this.state.id == 3 ? '' : 'stu2'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.dt10}</p>
                    <p className={this.state.id == 3 ? '' : 'stu2'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.dt11}</p>
                       
                </div>             

            </div>       
        )
    }

}