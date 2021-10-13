// react
import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

// css style
import '../App.css';
// components
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import ProtectedRoute from './ProtectedRoute';
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
                                    <Switch>
                                        <Route
                                            path="/login"
                                            name="Login Page"
                                            component={Login}
                                        />
                                        <ProtectedRoute
                                            path="/leaderBoard"
                                            name="Leader Board"
                                            component={LeaderBoard}
                                        />
                                        <ProtectedRoute
                                            path="/newQs"
                                            name="New Question"
                                            component={NewQuestion}
                                        />
                                        <ProtectedRoute
                                            path="/"
                                            name="Dashboard"
                                            component={Home}
                                        />
                                    </Switch>
                                </div>
                            </div>
                        </Router>
                    )
                }
            </div>
        )
    }

}

function mapStateToProps({loading, authedUser, users}) {
    return {
        loading,
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(App);