import {showLoading, hideLoading} from 'react-redux-loading'
import {setAuthedUser} from "./authedUser"
import {getUsersAction} from "./users"
import {getAllQuestionsAction, addQuestion} from "./questions"
import {_getUsers, _getQuestions, _saveQuestion} from '../utils/_DATA';


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

export function userLogin(id) {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(setAuthedUser(id));
        dispatch(hideLoading())
    }
}

export function addNewQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestion(question)
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(hideLoading())
            });
    }
}