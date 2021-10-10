import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
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
                </ul>
            </nav>
        )
    }
}


export default NavBar;