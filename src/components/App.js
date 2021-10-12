// react
import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

// css style
import '../App.css';
// components
import Nav from './Nav';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
// actions
import {handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'


class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleInitialData());
    }

    render() {
        return (
            <div>
                <LoadingBar/>
                {
                    this.props.loading === true ? null : (
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
            </div>
        )
    }

}

function mapStateToProps({loading}) {
    return {
        loading
    }
}

export default connect(mapStateToProps)(App);