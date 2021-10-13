import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux';
console.log('props component ', this.props);





const ProtectedRoute = ({component: Component, authedUser, path}) => (
    <Route
        path={path}
        render={() =>
            authedUser ? (
                <Component />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: this.location},
                    }}
                />
            )
        }
    />
);

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(ProtectedRoute);