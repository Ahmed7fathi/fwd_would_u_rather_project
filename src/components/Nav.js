import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser'

class NavBar extends Component {
    handleLogout(){
        this.props.dispatch(setAuthedUser(null))
    }


    render() {
        const authedUser = this.props.authedUser;
        const users = this.props.users;
        return (
            authedUser && (
                <nav>
                    <ul>
                        <li>
                            <NavLink activeClassName="active-nav" exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-nav" exact to="/newQs">New Question</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-nav" exact to="/leaderBoard">Leader Board</NavLink>
                        </li>
                        <li>
                            Hello {users[authedUser].name}
                        </li>
                         <li onClick={()=> this.handleLogout()}>
                             <p  style={{fontSize: "18px", color: "red", cursor: "pointer"}} > Logout !</p>
                        </li>
                    </ul>
                </nav>
            ))
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(NavBar);