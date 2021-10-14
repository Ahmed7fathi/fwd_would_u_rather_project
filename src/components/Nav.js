import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser'

class NavBar extends Component {
    handleLogout() {
        this.props.dispatch(setAuthedUser(null))
    }


    render() {
        const authedUser = this.props.authedUser;
        const user = this.props.user;

        return (
            authedUser && (
                <nav>
                    <ul className="nav-left">
                        <li>
                            <NavLink activeClassName="active-nav" exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-nav" exact to="/add">New Question</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-nav" exact to="/leaderboard">Leader Board</NavLink>
                        </li>
                    </ul>
                    <ul className="nav-right">
                        <li>
                            <img id="nav-avatar" src={user.avatarURL} alt={`${user} avatar`}/>
                            <span id="username">Hello <span>{user.name}</span></span>
                        </li>
                        <li onClick={() => this.handleLogout()}>
                            <a id="logout"> Logout !</a>
                        </li>

                    </ul>
                </nav>
            ))
    }
}

function mapStateToProps({authedUser, users}) {
    const user = users[authedUser];
    return {
        authedUser,
        user
    }
}

export default connect(mapStateToProps)(NavBar);