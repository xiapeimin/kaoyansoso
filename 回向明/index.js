import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import WordList from './container/WordList';
import Words from './container/Words';

ReactDOM.render(
<Router>
<Route exact path='/wordlist' component={WordList}/>
<Route exact path='/words' component={Words}/>
</Router>
,document.getElementById('root'));

