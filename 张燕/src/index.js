import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hooks from './Hooks';
import HostTopic from './container/Topic';
import ProCheck from './container/ProCheck';
import SchoolDetails from './container/SchoolDetails';
import OtherSchool from './container/OtherSchool'
import 'antd-mobile/dist/antd-mobile.css';
import Vplay from './container/Vplay';
import Note from './container/Note.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
ReactDOM.render(
    //  <Router>
    //      {/* <Route exact path='/' component={ProCheck}/>
    //      <Route exact path='/otherSchool' component={OtherSchool}/> */}
    //  </Router>,
     <Note/>,
    document.getElementById('root'));