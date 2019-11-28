import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import AppHome from './container/AppHome';
import WordList from './container/WordList';
import WordList1 from './container/WordList1';
import WordList2 from './container/WordList2';
import WordList3 from './container/WordList3';
import Resource from './container/Resource';
import SearchInfo from './container/SearchInfo';
import Words from './container/Words';
import './index.css';

ReactDOM.render(
<Router>
<Route exact path='/' component={AppHome}/>
<Route exact path='/wordlist' component={WordList}/>
<Route exact path='/wordlist1' component={WordList1}/>
<Route exact path='/wordlist2' component={WordList2}/>
<Route exact path='/wordlist3' component={WordList3}/>
<Route exact path='/resource' component={Resource}/>
<Route exact path='/searchInfo' component={SearchInfo}/>
<Route exact path='/words' component={Words}/>
</Router>
,document.getElementById('root'));

