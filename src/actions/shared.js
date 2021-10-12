import {showLoading, hideLoading} from 'react-redux-loading'
import {getUsersAction} from "./users"
import {getAllQuestionsAction} from "./questions"
import {_getUsers, _getQuestions} from '../utils/_DATA';



export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([
            _getQuestions()
        ]).then(([_getQuestions]) => {
            dispatch(getAllQuestionsAction(_getQuestions));
            dispatch(hideLoading())
        })
    }
}

export function GetUsersData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([
            _getUsers()
        ]).then(([_getUsers]) => {
            dispatch(getUsersAction(_getUsers));
            dispatch(hideLoading())
        })
    }
}