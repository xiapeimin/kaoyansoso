import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';

import Share from './Share';

export default class RemFire extends Component{
    constructor(){
        super();
        this.state={
            id:0,           
            title:'',
            view:'109',
            time:'2019-11-21',
            uid:0,
            flag:0
        }
    }
    componentDidMount(){
        var str = this.props.location.search;
        if(str.indexOf('type')<0){
            var uid = str.split('&')[0].split('=')[1];
            var id = str.split('&')[1].split('=')[1];
            this.setState({
                id:id,
                uid:uid
            })
        }else{
            var uid = str.split('&')[0].split('=')[1];
            var d = str.split('&')[1].split('=')[1];
            var id = parseInt(d) +1;
            this.setState({
                id:id,
                uid:uid,
                flag:1
            })
        }
        if(id == 1){
            this.setState({
                title:'2019年ESI中国大学综合排名'
            })
        }else if(id ==2){
            this.setState({
                title:'2021考研：心理学与教育学考研哪个更容易'
            })
        }else if(id == 3){
            this.setState({
                title:'考研热度持续升温，2021考研形势如何？'
            })
        }else if(id == 4){
            this.setState({
                title:'考前放松,改善情绪和睡眠，这些神器帮助你'
            })
        }else if(id == 5){
            this.setState({
                title:'考研在即：历年考研政治真题去哪找？'
            })
        }
    }
    goout = () => {
        var uid = this.state.uid;
        if(this.state.flag==1){
            window.location.hash=`/search?uid=${uid}&type=home`;
        }else{
            window.location.hash=`/appTab?uid=${uid}&type=home`;
        }
    }
    
    render(){
        var uid = this.state.uid;
        console.log(uid,'eee');
        return (
            <div className='carouselBox' style={{paddingBottom:'20px'}}>
                <NavBar
                style={{background:'#66cccc',color:'#fff',overflow:'hidden'}} 
                rightContent={<Share />}
                leftContent={<img src={require('../imgs/zjt.png')} onClick={this.goout} />}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff',fontSize:'22px'}}>推荐热点</span></NavBar>
                
                <div  className='zxtit'>
                    <h1>{this.state.title}</h1>
                    <div className='zxtit1'>
                        <img src={require('../imgs/time.png')}/>
                        <span>{this.state.time}</span>
                        <img src={require('../imgs/view.png')}/>
                        <span>{this.state.view}</span>
                    </div>

                    <div className={this.state.id == 1 ? '' : 'stu2'}>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11月15日，ESI数据库更新了2019年11月最 新ESI数据，这也是2019年最后一期的ESI数据。据统计，全球共有6214家科研机构上榜。各校ESI综合排名情况如下：</p>
                        <img src={require('../imgs/college.jpg')} style={{width:'100%'}} />
                    </div>

                    <div className={this.state.id == 2 ? '' : 'stu2'}>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教育学和心理学是近几年考研热门专业，因为这两个专业报考条件限制比较少，而且未来发展前景也比较好。但是，心理学与教育学考研哪个容易呢?哪个就业形势比较好呢?今天一起来看看吧!</p>
                        <p>一、都属于一级学科</p>
                        <p>教育学学硕考试科目：政治、英语一、311教育学专业基础综合或自命题</p>
                        <p>专硕考试科目：政治、英语二、333教育综合、自命题</p>
                        <p>心理学学硕考试科目：政治、英语一、312心理学专业基础综合或自命题</p>
                        <p>专硕考试科目：政治、英语二、347心理学专业综合</p>
                        <p>二、考试范围(例：师范类院校)</p>
                        <p>第一梯队：北师、华东师范北师：自主命 题。有些专业考740教育学基础综合，比如教育学原理、比较教育学、学前教育学、高等教育学等。有些专业是考某一学科教育综合，比如地理方面的课程与教学论就是考746地理教育综合，化学方面的课程与教学论就是考733化学综合。华东师范：统考，311教育学专业基础综合。</p>
                        <p>第二梯队：华中师范、华南师范华中师范：统考，311教育学专业基础综合华南师范：统考，311教育学专业基础综合。</p>
                        <p>第三梯队：湖南师范、陕西师范湖南师范：自主命 题，749教育学基础综合。比如教育学原理、课程与教学论、比较教育学、学前教育学、高等教育学等。陕西师范：有的专业是统考，有的专业是自主命 题。统考专业，比如教育学原理、课程与教学论、比较教育学、学前教育学、高等教育学等。自主命 题专业，比如民族教育专业考732教育基础理论，少年儿童组织与思想意识教育考736少年儿童组织与思想意识教育综合.</p>
                        <p>第四梯队：天津师范、上海师范天津师范：统考，311教育学专业基础综合上海师范：统考，311教育学专业基础综合第五梯队：四川师范、重庆师范四川师范：自主命 题，614教育学基础。比如教育学、课程与教学论、成人教育学、教师教育学等专业。重庆师范：统考，</p>
                    </div>

                    <div className={this.state.id == 3 ? '' : 'stu2'}>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这样一个时间的转折点，2021考研的小伙伴有的已经行动起来了，有些同学还在蠢蠢欲动而不动，如果想要考研，一起来看看下面考研热度持续升温，2021考研形势如何?</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日前，伴随着考研报名进行，“考研热”的话题再度成为舆论焦点。据中国新闻网报道，从数据来看，考研大军的规模近年来不断壮大，名校竞争也变得尤为激烈。教育部这组数据统计即是最好证明：2017年，国内研究生报名人数达到了201万人，为当年应届本科毕业大学生人数的52%，2018年考研人数238万，2019年考研人数达到了290万，增幅21.8%。2017年应届本科大学毕业生中，有超过一半选择了报考研究生，而今年考研人数又增长了21.8%。而考研机构通过报考人数增长趋势和目前高校报考的情况分析，预测2020年报考人数或可达330万-340万。</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;面对考研热，舆论颇有些“不淡定”，有些人认为这是本科毕业生逃避就业、推迟面对社会竞争的手段，也有人认为扎堆考研会稀释研究生学历的含金量，造成“学历通胀”，还有人觉得不少毕业生考研就是为了“镀金”，在学历、履历上“更好看”。</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;舆论种种担忧当然不可避免存在，但相比于这些许的“副作用”，考研热整体而言是好事。考研热说明广大毕业生对自身的要求越来越高，在完成本科学习的基础上，想向更高的学历与更深层次的知识发起冲击，这难道不是好事吗?活到老学到老，趁尚未走进社会，还有足够的时间与热情，此时不学更待何时?无论考研、提升学历，是出于对学术研究造诣的追求，抑或为社会招聘、招考门槛提升所倒逼，只要还有继续学习的欲望并付诸实践，这样的人、这样的行为就该被称赞。</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而担心研究生“扩招”导致“学历通胀”的看法，则更是杞人忧天。别看研究生报考人数年年攀升，但我们的研究生并不是太多了，相反，在整个人群中的比例仍然是偏低的。国家竞争本质上就是人才竞争，目前我国本科以上学历占就业人口的比例远远低于美国的水平，国家长远发展需要有一批高素质的人才作支撑，而提升研究生人数与比例就是其中的重要一环。在“学历通胀论”之下，读个研究生甚至是名校研究生，但这样的一段经历所积累知识的价值，绝不会白费，总会在今后的生活、工作等方方面面不经意呈现。而每一名报考研究生的人，可以说都是在为国民整体素质的提升贡献绵薄之力。</p>
                        <p>当然，在研究生报考、录取、毕业人数均大幅增加的当下，对其中可能存在的问题也有必要未雨绸缪，需要高度的重视，尤其是随着研究生数量急速增长，其培养质量能否跟得上，值得深思。如今的研究生教育大有本科化趋势，一个导师带数十名研究生已不是稀奇事，研究生不做研究也早成常态。如何确保培养出的研究生符合“出厂”要求，恐怕除了导师要调整外，在大的研究生培养制度层面也需要及时的应对举措。</p>
                        <p>考研热为全民学习、全民提升了提供了肥沃土壤与人数基础，可行百里者半九十，如何在保证数量的同时，提升研究生的培养质量，做到“双达标”，使得考研热能进一步向科研热、学术热、成果热转化，则是需要我们冷思考的。</p>
                    </div>

                    <div className={this.state.id == 4 ? '' : 'stu2'}>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;快要考试了，考前阶段是大家最为紧张的时刻，考前放松是很重要的。现阶段大家一方面是情绪紧张影响学习效率；另一方面则是睡眠不好。这篇文章希望能起到考前放松的作用，对大家情绪及睡眠带来一些帮助！</p>
                        <p>1. 运动</p>
                        <p>研究发现，有氧运动会增加大脑额叶血流量，而大脑额叶与思维清晰度、提前筹划和注意力集中有关。同时，大脑额叶还与情绪调节有关。跑步能够促进大脑神经元的再生，提高记忆力、注意力，以及提高免疫力!</p>
                        <p>2. 冥想</p>
                        <p>研究表明，长时间的冥想或静坐的人前额叶皮层和脑岛的体积都更大一些。这些区域负责处理注意力、感觉信息以及身体内部感觉。长时间的学习，焦虑的情绪，每天花15分钟，放空脑袋，听起来也是不错的放松方法呢。冥想技巧很简单，做起来却不容易。技巧就是选一个舒服的姿势坐下来，把注意力集中在呼吸上面(观呼吸)，感受气流呼进呼出，鼻腔的冷暖等感觉。如果感觉不到，可以加重呼吸。</p>
                        <p>3. 心理放松技巧</p>
                        <p>心理放松基本可以分为肌肉放松法和想象放松法，具体见文章：《心理学家教你放松减压，克服考试焦虑》。</p>
                    </div>

                    <div className={this.state.id == 5 ? '' : 'stu2'}>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于考研的同学来说，考研政治真题是比较重要的复习资料，那么，历年政治真题去哪找?有哪些地方有完整的真题资料呢?一起来看看下面的内容吧!</p>
                        <p>一、理论性</p>
                        <p>虽然毛中特真题选择题与时政的结合度高度关联，但是，理论性测试依然是选择题考核的重点。当然，这些来自教材基础理论考点、中央文件精神。这些理论仅仅依靠死记硬背真的不能准确做出准确答案，这需要考生理解记忆考点，并灵活运用考点，并且二者有机结合，才能最终完胜毛中特理论性选择题。</p>
                        <p>如17年单选题第七题，考查的是“四个全面”战略布局考点，2016年这一考点考查的是材料分析题，今年考查选择题，这也是考研政治真题的规律之一。我们知道，“四个全面”战略布局是一个整体，全面建成小康社会是重大战略目标，在“四个全面”战略布局中居于引领对位;全面深化改革、全面依法治国、全面从严治党是三大战略举措，为如期全面建成小康社会提供重要重要保障;全面依法治国是实现国家长治久安的重要保障;全面从严治党，为全面建成小康社会、全面深化改革、全面依法治国提供根本保证。</p>
                        <p>二、灵活性</p>
                        <p>灵活性是考研政治的一个突出特点，毛中特选择题也不例外。说它灵活，不仅仅限于理论性和时政性相结合出题，还会对概念、定义的边沿性作出界定，这是最近今年毛中特真题出题的侧重趋势。这就给考生在做题时带来诸多迷惑，这也是拉出分数档次的体型之一。</p>
                        <p>如17年多选题25题考查的是“创新、协调、绿色、开放、共享”的五大发展理念中的创新观，创新作为引领发展的第一动力是提高核心竞争力的必然选择、引领经济发展新常态的根本之策、分析世界发展历程和总结我国改革开放实践得出的结论。至于构建和谐世界的内在要求是其他共同面临的课题，是共性的课题，中国新阶段践行的创新观是特殊性、个性的问题。</p>
                    </div>

                </div>

            </div>       
        )
    }
}