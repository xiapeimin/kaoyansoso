import React, { Component } from 'react'
import './index.css';
import My from './container/My'
import MySchool from './container/MySchool'
import MySave from './container/MySave'
import MySet from './container/MySet'
import Help from './container/Help'
import Publish from './container/Publish'
import {BrowserRouter as Router,Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* <My/> */}
                    <div>
                        <Route path='/my' component={My} />
                        <Route path='/myschool' component={MySchool} />
                        <Route path='/mysave' component={MySave} />
                        <Route path='/myset' component={MySet} />
                        <Route path='/help' component={Help} />
                        <Route path='/publish' component={Publish} />
                    </div>
                </div>
            </Router>
        )
    }
}
