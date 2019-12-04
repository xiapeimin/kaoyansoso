import React, { Component } from 'react';
import {Tabs,NavBar,Flex } from 'antd-mobile';
import {Link} from 'react-router-dom';

//把wordscheck删了，把wordlist1里加上标签页，这样也能切换单词列表

export default class Market extends Component {  //要有下拉列表 单词列表切换功能 上级页面传参过来
   constructor(){
      super();
      this.state = {
          id:1,
          name:'单词清单列表',
          todo1: ['amplificationn. 扩大；加强',
          'amputationn. 切断,切断手术',
          'anchorn.锚 vi.抛锚，停泊',
          'anesthesia n. 麻醉',
          'animatevt. 使有活力',
          'banana n 香蕉',
          'baby	n.一家中年龄最小的人',
          'bacchanalian	adj. 饮酒狂欢的；行为放纵的',
          'back	adv.回(原处)；向后',
          'backing	n. 衬背,后援,支持者',
          'backup	n. 备份，后备，后援',
          'backwoods   n. 未开垦地,边远地区的人',
          'bacteria	n.细菌',
          'baffle	vt.使挫折 n.迷惑',
          'bake	vt.烤，烘，焙；烧硬',
          'ball	n.球',
          'cab	n. 计程车,出租汽车,出租单马车',
          'cablegram	n. 海底电报',
          'cadaver	n. 尸体',
          'cafe	n.咖啡馆；小餐厅',
          'cake n 蛋糕',
          'calk	vt. 填...以防漏,使不漏水,装尖铁,',
          'calmly	adv. 平静地；沉着地；无风浪地；镇静地',
          'calves	calf的复数',
          'cameraman 摄影师',
          'camping	n. 野营',
          'Canadian	n.加拿大人',
          'cancel	vt.取消，撤消；删去',
          'cancer	n.癌，癌症，肿瘤',
          'candidature	n. 候选人的，资格',
         ],
         todo2: ['dab	n. 湿而软的小块；轻拍',
          'dabble	v. 涉足，浅赏',
          'dace	n. 一种鱼',
          'dacron	n. 涤纶',
          'daddy	n. 爸爸',
          'dagger n. 匕首',
          'daily	a.每日的 n.日报',
          'daisy	n. 雏菊,一流的人物',
          'each	pron.各，各自 a.各',
          'eager	a.渴望的，热切的',
          'eagerly	adv. 渴望地；热切地；急切地；热心地',
          'eagle	n.鹰',
          'early	adv.早',
          'earner	n.获得收入者',
          'earnest	a.认真的，诚恳的',
          'earphone	n. 耳机',
          'earth	n.地球',
          'earthly	a. 地球的,俗世的,可能的',
          'ease	n.安逸，熟练，轻易',
          'easily	ad.容易地；舒适的',
          'easterly	a. 东的,向东的,从东的',
          'eat	vt.吃，喝 vi.吃饭',
          'eaves	n. 屋檐',
          'Fabian	a. 费边式的,拖延时间的,',
          'fable	n.寓言；虚构的故事',
          'face	n.脸',
          'facile	adj. 容易做的，肤浅的',
          'fact	n.事实；实际',
          'factor	n.因素；因子，系数',
          'factory	n.工厂，制造厂',
         ],
         todo3: ['factual	a. 事实的，现实的；实际的，事实上的',
         'fad	n. (流行一时的)狂热，时尚',
         'faeces	n. 粪；排泄物，渣滓',
         'fag	v. 苦干n. 苦工',
         'failing	n. 失败,缺点,过失',
         'failure	n.失败；失败的人',
         'fair	adj.(头发)金色的',
         'fairly	ad.相当；公平地',
         'fait	证书，契据',
         'faithfully	adv. 忠诚地；诚恳地；忠实地',
         'fake	n.假货，膺品 a.假的',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
         'falsehood	n. 谎言,虚假',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ],
        todo4: ['ball	n.球',
        'cab	n. 计程车,出租汽车,出租单马车',
        'cablegram	n. 海底电报',
        'cadaver	n. 尸体',
        'cafe	n.咖啡馆；小餐厅',
        'cake n 蛋糕',
        'calk	vt. 填...以防漏,使不漏水,装尖铁,',
        'calmly	adv. 平静地；沉着地；无风浪地；镇静地',
        'calves	calf的复数',
        'cameraman 摄影师',
        'camping	n. 野营',
        'Canadian	n.加拿大人',
        'cancel	vt.取消，撤消；删去',
        'cancer	n.癌，癌症，肿瘤',
        'candidature	n. 候选人的，资格',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ],
        todo5: ['earphone	n. 耳机',
        'earth	n.地球',
        'earthly	a. 地球的,俗世的,可能的',
        'ease	n.安逸，熟练，轻易',
        'easily	ad.容易地；舒适的',
        'easterly	a. 东的,向东的,从东的',
        'eat	vt.吃，喝 vi.吃饭',
        'eaves	n. 屋檐',
        'Fabian	a. 费边式的,拖延时间的,',
        'fable	n.寓言；虚构的故事',
        'face	n.脸',
        'facile	adj. 容易做的，肤浅的',
        'fact	n.事实；实际',
        'factor	n.因素；因子，系数',
        'factory	n.工厂，制造厂',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ],
        todo6: ['famed	a. 著名的',
        'famous	adj.著名的',
        'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
        'gaberdine	n. 工作服,华达呢',
        'gadget	n. 小工具，小机械',
        'gag	n. 箝口物,箝制言论,讨论终结',
        'gain	vt.&vi.获得 n.利益',
        'gainsay	v. 否认',
        'gale	n. 狂风，一阵（笑声）',
        'gall	n. 胆汁（bile），怨恨（hatred)',
        'face	n.脸',
        'facile	adj. 容易做的，肤浅的',
        'fact	n.事实；实际',
        'factor	n.因素；因子，系数',
        'factory	n.工厂，制造厂',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ],
        todo7: ['back	adv.回(原处)；向后',
        'backing	n. 衬背,后援,支持者',
        'backup	n. 备份，后备，后援',
        'backwoods   n. 未开垦地,边远地区的人',
        'bacteria	n.细菌',
        'camping	n. 野营',
        'Canadian	n.加拿大人',
        'cancel	vt.取消，撤消；删去',
        'cancer	n.癌，癌症，肿瘤',
        'candidature	n. 候选人的，资格',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
         'falsehood	n. 谎言,虚假',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ],
        todo8: ['face	n.脸',
        'facile	adj. 容易做的，肤浅的',
        'fact	n.事实；实际',
        'factor	n.因素；因子，系数',
        'factory	n.工厂，制造厂',
        'bacchanalian	adj. 饮酒狂欢的；行为放纵的',
        'back	adv.回(原处)；向后',
        'backing	n. 衬背,后援,支持者',
        'backup	n. 备份，后备，后援',
         'fake	n.假货，膺品 a.假的',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
         'falsehood	n. 谎言,虚假',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ],
        todo9: ['factual	a. 事实的，现实的；实际的，事实上的',
         'fad	n. (流行一时的)狂热，时尚',
         'faeces	n. 粪；排泄物，渣滓',
         'fag	v. 苦干n. 苦工',
         'failing	n. 失败,缺点,过失',
         'failure	n.失败；失败的人',
         'fair	adj.(头发)金色的',
         'fairly	ad.相当；公平地',
         'fait	证书，契据',
         'faithfully	adv. 忠诚地；诚恳地；忠实地',
         'fake	n.假货，膺品 a.假的',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
         'falsehood	n. 谎言,虚假',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ],
        todo10: ['daily	a.每日的 n.日报',
        'daisy	n. 雏菊,一流的人物',
        'each	pron.各，各自 a.各',
        'eager	a.渴望的，热切的',
        'eagerly	adv. 渴望地；热切地；急切地；热心地',
        'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
        'gaberdine	n. 工作服,华达呢',
        'gadget	n. 小工具，小机械',
        'gag	n. 箝口物,箝制言论,讨论终结',
         'faithfully	adv. 忠诚地；诚恳地；忠实地',
         'fake	n.假货，膺品 a.假的',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
         'falsehood	n. 谎言,虚假',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ]
      }
  }

  componentDidMount(){
      var id = this.props.match.params.id;
      this.setState({
          id:id
      });
      if(id == 1){
          this.setState({
            todo1: ['daily	a.每日的 n.日报',
        'daisy	n. 雏菊,一流的人物',
        'each	pron.各，各自 a.各',
        'eager	a.渴望的，热切的',
        'eagerly	adv. 渴望地；热切地；急切地；热心地',
        'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
        'gaberdine	n. 工作服,华达呢',
        'gadget	n. 小工具，小机械',
        'gag	n. 箝口物,箝制言论,讨论终结',
         'faithfully	adv. 忠诚地；诚恳地；忠实地',
         'fake	n.假货，膺品 a.假的',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
         'falsehood	n. 谎言,虚假',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ],
        todo2: ['face	n.脸',
        'facile	adj. 容易做的，肤浅的',
        'fact	n.事实；实际',
        'factor	n.因素；因子，系数',
        'factory	n.工厂，制造厂',
        'bacchanalian	adj. 饮酒狂欢的；行为放纵的',
        'back	adv.回(原处)；向后',
        'backing	n. 衬背,后援,支持者',
        'backup	n. 备份，后备，后援',
         'fake	n.假货，膺品 a.假的',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
         'falsehood	n. 谎言,虚假',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ]
          });
      }else if(id == 2){
          this.setState({
            todo1: ['factual	a. 事实的，现实的；实际的，事实上的',
            'fad	n. (流行一时的)狂热，时尚',
            'faeces	n. 粪；排泄物，渣滓',
            'fag	v. 苦干n. 苦工',
            'failing	n. 失败,缺点,过失',
            'failure	n.失败；失败的人',
            'fair	adj.(头发)金色的',
            'fairly	ad.相当；公平地',
            'fait	证书，契据',
            'faithfully	adv. 忠诚地；诚恳地；忠实地',
            'fake	n.假货，膺品 a.假的',
            'fakir	n. 托钵僧，骗子',
            'fall	n.&vi.落下；跌倒',
            'fallible	adj. 会犯错的，易犯错的',
            'falsehood	n. 谎言,虚假',
            'famed	a. 著名的',
            'famous	adj.著名的',
            'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
            'gaberdine	n. 工作服,华达呢',
            'gadget	n. 小工具，小机械',
            'gag	n. 箝口物,箝制言论,讨论终结',
            'gain	vt.&vi.获得 n.利益',
            'gainsay	v. 否认',
            'gale	n. 狂风，一阵（笑声）',
            'gall	n. 胆汁（bile），怨恨（hatred)',
            'face	n.脸',
            'facile	adj. 容易做的，肤浅的',
            'fact	n.事实；实际',
            'factor	n.因素；因子，系数',
            'factory	n.工厂，制造厂',
           ],
           todo2: ['back	adv.回(原处)；向后',
        'backing	n. 衬背,后援,支持者',
        'backup	n. 备份，后备，后援',
        'backwoods   n. 未开垦地,边远地区的人',
        'bacteria	n.细菌',
        'camping	n. 野营',
        'Canadian	n.加拿大人',
        'cancel	vt.取消，撤消；删去',
        'cancer	n.癌，癌症，肿瘤',
        'candidature	n. 候选人的，资格',
         'fakir	n. 托钵僧，骗子',
         'fall	n.&vi.落下；跌倒',
         'fallible	adj. 会犯错的，易犯错的',
         'falsehood	n. 谎言,虚假',
         'famed	a. 著名的',
         'famous	adj.著名的',
         'gabardine	n. 一种斜纹防水布料,华达呢,一种宽松的长袍',
         'gaberdine	n. 工作服,华达呢',
         'gadget	n. 小工具，小机械',
         'gag	n. 箝口物,箝制言论,讨论终结',
         'gain	vt.&vi.获得 n.利益',
         'gainsay	v. 否认',
         'gale	n. 狂风，一阵（笑声）',
         'gall	n. 胆汁（bile），怨恨（hatred)',
         'face	n.脸',
         'facile	adj. 容易做的，肤浅的',
         'fact	n.事实；实际',
         'factor	n.因素；因子，系数',
         'factory	n.工厂，制造厂',
        ]
          });
      }else if(id == 3){
          this.setState({
              name:'常考单词'
          });
      }
  }
    render() {
        const tabs = [
            { title: <p style={{fontSize:'4vw'}}>Wordlist1</p> },
            { title: <p style={{fontSize:'4vw'}}>Wordlist2</p> },
            { title: <p style={{fontSize:'4vw'}}>Wordlist3</p> },
            { title: <p style={{fontSize:'4vw'}}>Wordlist4</p> },
            { title: <p style={{fontSize:'4vw'}}>Wordlist5</p> },
            { title: <p style={{fontSize:'4vw'}}>Wordlist6</p> },
            { title: <p style={{fontSize:'4vw'}}>Wordlist7</p> },
            { title: <p style={{fontSize:'4vw'}}>Wordlist8</p> },
            { title: <p style={{fontSize:'4vw'}}>Wordlist9</p> },
            { title: <p style={{fontSize:'4vw'}}>Wordlist10</p> },
          ];
        return (
            <div className='testbox'>
                 <NavBar
                style={{background:'#67cd9e',color:'#fff'}} 
                leftContent={<Link to={'/words'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                ><span style={{color:'#fff',fontSize:'21px'}}>{this.state.name}</span></NavBar>

                <div>
                <Tabs tabs={tabs} initialPage={0} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
                <div>{
                this.state.todo1.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

                        <div>{
                this.state.todo2.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

                        <div>{
                this.state.todo3.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>
                        
                        <div>{
                this.state.todo4.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

<div>{
                this.state.todo5.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

<div>{
                this.state.todo6.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

<div>{
                this.state.todo7.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

<div>{
                this.state.todo8.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

<div>{
                this.state.todo9.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>

<div>{
                this.state.todo10.map(
                    (item)=>        
                <Flex.Item style={{position:'relative',height:'80px',width:'100%',borderBottom:'1px solid black',
                    fontSize:'20px',background:'#fff'}} >
                        <Flex.Item style={{position:'relative',top:'25px',textAlign:'center'}}
                        >{item}</Flex.Item>
                        </Flex.Item>
                        )
                        }</div>
                </Tabs> 
                
                        </div> 
                   </div>
        )
    }
}