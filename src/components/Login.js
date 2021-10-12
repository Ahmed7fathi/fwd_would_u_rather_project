import React, {Component} from 'react'
import {connect} from 'react-redux'
import {GetUsersData} from "../actions/shared";

class Login extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(GetUsersData());
    }

    render() {
        const users = this.props.users;

        return (
            <div className="login-page">
                <div className="card">
                    <div className="card-header">
                        <h2> Welcome to the Would You Rather App!</h2>
                        <p>Please sign in to continue</p>
                    </div>
                    <div className="card-body">
                        <select name="cars" id="cars">
                            {
                                Object.keys(users).map((user) => (
                                    <option value={users[user].id}>{users[user].name}</option>
                                ))
                            }
                        </select>
                        <button className="login-btn">Login</button>
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
