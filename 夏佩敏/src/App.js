import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';

import Login from './container/Login';
import AppTab from './container/AppTab';
import Search from './container/Search';
import Carousel from './container/Carousel';
import RemFire from './container/RemFire';
import PublishTopic from './container/PublishTopic';
import MyPlan from './container/MyPlan';
import Register from './container/Register';
import QuestionBank from './container/QuestionBank';
import TestList from './container/TestList';
import Test from './container/Test';
import SearchInfo from './container/SearchInfo';
import Resource from './container/Resource';
import Words from './container/Words';
import WordList from './container/WordList';
import WordList1 from './container/WordList1';
import Video from './container/Video';
import Tools from './container/Tools';
import ConfirmSchool from './container/ConfirmSchool';
import CheckSchool from './container/threeselect/CheckSchool';
import CheckPro from './container/threeselect/CheckPro';
import Professional from './container/threeselect/Professional';
import Vplay from './container/Vplay';
import Note from './container/Note';
import SchoolDetails from './container/SchoolDetails';
import OtherSchool from './container/OtherSchool';
import ProCheck from './container/ProCheck';
import MySchool from './container/MySchool';
import MySave from './container/MySave';
import MySet from './container/MySet';
import Help from './container/Help';
import Publish from './container/Publish';
import Forgetpwd from './container/Forgetpwd';
import Findpwd from './container/Findpwd';
import CreateNote from './container/CreateNote';
import ChangeNote from './container/ChangeNote';
import Pwdchange from './container/Pwdchange';
import Contact from './container/Contact';
import PersonalDetail from './container/PersonalDetail';
import WordText from './container/WordText';
import WordSpell from './container/WordSpell';
import FocusList from './container/FocusList';
import FansList from './container/FansList';

//聊天
import Talking from './container/Talking';
import Sayto from './container/Sayto';
import Userchat from './com_xpm/userchat/Userchat';

import Sql from './components/spltest';

/**启动页 */
import Start from './com_xpm/start/Start';
/**机器人聊天 */
import Robot from './com_xpm/robot/Contact';
import Tuling from './com_xpm/robot/Tuling';
import Addplan from './container/Addplan';


export default class App extends Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path='/sql' component={Sql} />
                            
                            {/**添加启动 引导组件 */}
                            <Route path='/' exact component={Start} />
                            <Route path='/login' exact component={Login} />
                            {/**end */}

                            {/**<Route path='/contact' component={Contact} /> */}
                            {/**机器人 */}
                            <Route path='/contact' component={Robot} />
                            <Route path='/tuling' component={Tuling} />
                            {/**end */}

                            <Route path='/pwdchange' component={Pwdchange} />
                            <Route path='/changeNote' component={ChangeNote} />
                            <Route path='/myschool' component={MySchool} />
                            <Route path='/mysave' component={MySave} />
                            <Route path='/help' component={Help} />
                            <Route path='/myset' component={MySet} />
                            <Route path='/publish' component={Publish} />
                            <Route path='/forgetpwd' component={Forgetpwd} />
                            <Route path='/findpwd' component={Findpwd} />
                            <Route path='/createNote' component={CreateNote} />
                            <Route path='/appTab' exact component={AppTab} />
                            <Route path='/search' component={Search} />
                            <Route path='/questionbank' component={QuestionBank} />
                            <Route path='/otherSchool' component={OtherSchool} />
                            <Route path='/proCheck' component={ProCheck} />
                            <Route path='/test' component={Test} />
                            <Route path='/testList' component={TestList} />                           
                            <Route path='/publishTopic' component={PublishTopic} />
                            <Route path='/myPlan' component={MyPlan} />
                            <Route path='/words' component={Words} />
                            <Route path='/video' component={Video} />
                            <Route path='/confirmSchool' component={ConfirmSchool} />
                            <Route path='/schoolDetails' component={SchoolDetails} />
                            <Route path='/note' component={Note} />
                            <Route path='/checkSchool' component={CheckSchool} />
                            <Route path='/professional' component={Professional} />
                            <Route path='/checkPro' component={CheckPro} />
                            <Route path='/tools' component={Tools} />
                            <Route path='/wordlist' component={WordList} />
                            <Route path='/wordlist1' component={WordList1} />
                            <Route path='/vplay' component={Vplay} />
                            <Route path='/searchInfo' component={SearchInfo} />
                            <Route path='/sear' component={Resource} />
                            <Route path='/register' component={Register}/>
                            <Route path='/carousel' component={Carousel} />
                            <Route path='/remFire' component={RemFire}/>
                            <Route path='/personaldetail' component={PersonalDetail}/>
                            <Route path='/wordtext' component={WordText}/>
                            <Route path='/wordspell' component={WordSpell}/>
                            <Route path='/focuslist' component={FocusList}/>
                            <Route path='/fanslist' component={FansList}></Route>
                            {/* 聊天 */}
                            {/**<Route path='/talkto' component={Talking}/> */}
                            <Route path='/talkto' component={Userchat}/>
                            <Route path='/say' component={Sayto}/>
                            {/* 添加计划 */}
                            <Route path='/addPlan' component={Addplan}/>



                        </Switch>

                    </div>
                </Router>
                
            </div>
        )
    }
}