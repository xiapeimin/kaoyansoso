import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';

export default class App extends Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path='/' exact component={Login} />
                            <Route path='/home' component={Home} />
                        </Switch>

                    </div>
                </Router>
                
            </div>
        )
    }
}