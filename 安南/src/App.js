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
import Page from './container/Page'
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


export default class App extends Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path='/' exact component={Login} />
                            <Route path='/myschool' component={MySchool} />
                            <Route path='/mysave' component={MySave} />
                            <Route path='/help' component={Help} />
                            <Route path='/page' component={Page} />
                            <Route path='/myset' component={MySet} />
                            <Route path='/publish' component={Publish} />
                            <Route path='/forgetpwd' component={Forgetpwd} />
                            <Route path='/findpwd' component={Findpwd} />
                            <Route path='/createNote' component={CreateNote} />                           
                            <Route path='/search' component={Search} />
                            <Route path='/questionbank' component={QuestionBank} />
                            <Route path='/otherSchool' component={OtherSchool} />
                            <Route path='/proCheck' component={ProCheck} />
                            <Route path='/appTab'  exact component={AppTab}/>
                            <Route path='/test' component={Test} />
                            <Route path='/testList/:id' component={TestList} />                           
                            <Route path='/publishTopic' component={PublishTopic} />
                            <Route path='/myPlan' component={MyPlan} />
                            <Route path='/words' component={Words} />
                            <Route path='/video' component={Video} />
                            <Route path='/confirmSchool' component={ConfirmSchool} />
                            <Route path='/schoolDetails' component={SchoolDetails} />
                            <Route path='/note' component={Note} />
                            <Route path='/checkSchool' component={CheckSchool} />
                            <Route path='/professional/:id' component={Professional} />
                            <Route path='/checkPro' component={CheckPro} />
                            <Route path='/tools' component={Tools} />
                            <Route path='/wordlist' component={WordList} />
                            <Route path='/wordlist1/:id' component={WordList1} />
                            <Route path='/vplay' component={Vplay} />
                            <Route path='/searchInfo' component={SearchInfo} />
                            <Route path='/sear' component={Resource} />
                            <Route path='/register' component={Register}/>
                            <Route path='/carousel/:id' component={Carousel} />
                            <Route path='/remFire/:id' component={RemFire}/>
                        </Switch>

                    </div>
                </Router>
                
            </div>
        )
    }
}