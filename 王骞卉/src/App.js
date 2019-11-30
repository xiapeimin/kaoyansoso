import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import CheckPro from './threeselect/CheckPro';
import CheckSchool from './threeselect/CheckSchool';
import ConfirmSchool from './confirmschool/ConfirmSchool';
import Professional from './threeselect/Professional';

export default class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <div>
            <Switch>
              <Route path='/' exact component={Professional} />
              <Route path='/checkschool' exact component={CheckSchool} />
              <Route path='/checkpro' exact component={CheckPro} />
            </Switch>
            </div>
        </Router>
     </div>
    )
  }
}