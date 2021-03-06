import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {GetUsersData, userLogin} from "../actions/shared"

class Login extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(GetUsersData());
    }

    state = {
        currentUser: null,
        redirectToReferrer: false
    };


    onChange = (e) => {
        this.setState({currentUser: e.target.value});
    };

    handleLogin() {
        const currentUser = document.getElementById('users-list').value;
        this.setState({currentUser: currentUser.value});
        this.props.dispatch(userLogin(currentUser));
        this.setState(() => ({
            ...this.state,
            redirectToReferrer: true
        }))
    }

    render() {
        const users = this.props.users;
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer === true) {
            return <Redirect to={from}/>
        }


        return (
            <div className="login-page">
                <div className="card">
                    <div className="card-header">
                        <h2> Welcome to the Would You Rather App!</h2>
                        <p>Please sign in to continue</p>
                    </div>
                    <div className="card-body">
                        <select name="users" id="users-list" value={users[0]} onChange={this.onChange}>
                            {
                                Object.keys(users).map((user) => (
                                    <option key={user} value={users[user].id}>{users[user].name}</option>
                                ))
                            }
                        </select>
                        <button className="login-btn" onClick={() => {
                            this.handleLogin()
                        }}>Login
                        </button>
                    </div>
                </div>
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

export default connect(mapStateToProps)(Login);
