import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Yantiku from './containers/Yantiku'
import Login from './containers/Login'
import Register from './containers/Register'
import RegisterSuccess from './containers/RegisterSuccess'
import TiKu from './containers/TiKu'
import 'antd-mobile/dist/antd-mobile.css';
import {HashRouter as Router,Route,Link} from 'react-router-dom'

ReactDOM.render(
<Router basename='/'>
<Route exact path='/' component={App}/>
<Route exact path='/yantiku' component={Yantiku}/>
<Route exact path='/Login' component={Login}/>
<Route exact path='/register' component={Register}/>
<Route exact path='/tiKu' component={TiKu}/>
<Route exact path='/registerSuccess' component={RegisterSuccess}/>
</Router>, document.getElementById('root'));
