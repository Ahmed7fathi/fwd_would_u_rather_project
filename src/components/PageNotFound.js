import React from 'react'
import {Link} from 'react-router-dom'


export default () => {
    return (
        <div>
            <h1 style={{marginTop: "10rem", textAlign: "center"}}> 404 Page Not found !</h1>
            <Link style={{marginTop: "1rem", float: "right"}} to="/leaderBoard"> Return to Home Page </Link>
        </div>
    )
}