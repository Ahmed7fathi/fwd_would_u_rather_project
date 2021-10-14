import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux';


const ProtectedRoute = (props) => {
    console.log('zz : ', props);
    return (
        <Route
            exact={props.exact}
            path={props.path}
            render={() =>
                props.authedUser ? (
                    <props.component {...props}/>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: props.location},
                        }}
                    />
                )
            }
        />
    )

}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(ProtectedRoute);