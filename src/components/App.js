// react
import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet'

// css style
import '../App.css';
// components
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
// actions
import {GetUsersData, handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'

const TITLE = 'Would You Rather ?';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleInitialData());
        dispatch(GetUsersData());
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
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
                                    <Route exact path='/login' component={Login}/>
                                </div>
                            </div>
                        </Router>
                    )
                }
            </div>
        )
    }

}

function mapStateToProps({loading, users}) {
    return {
        loading,
        users
    }
}

export default connect(mapStateToProps)(App);