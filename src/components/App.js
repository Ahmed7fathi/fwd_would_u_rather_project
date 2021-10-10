import React, {Component} from 'react'
import '../App.css';

import Nav from './Nav';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Nav/>
                <div className="app">
                    <div className="wrapper">
                        <Route exact path='/' activeClassName='active-nav' component={Home}/>
                        <Route exact path='/newQs' component={NewQuestion}/>
                        <Route exact path='/leaderBoard' component={LeaderBoard}/>
                    </div>
                </div>
            </Router>
        )
    }

}

export default App;
