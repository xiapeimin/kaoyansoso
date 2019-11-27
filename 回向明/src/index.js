import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import AppHome from './container/AppHome';
import WordList from './container/WordList';
import Words from './container/Words';
import './index.css';

ReactDOM.render(
<Router>
<Route exact path='/' component={AppHome}/>
<Route exact path='/wordlist' component={WordList}/>
<Route exact path='/words' component={Words}/>
</Router>
,document.getElementById('root'));

