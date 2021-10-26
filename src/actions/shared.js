import {showLoading, hideLoading} from 'react-redux-loading'
import {setAuthedUser} from "./authedUser"
import {getUsersAction, addQuestionToUser, addAnswerToUserAction} from "./users"
import {getAllQuestionsAction, addQuestion, answerQuestion} from "./questions"
import {_getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer} from '../utils/_DATA';


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

export function addNewQuestion(authedUser, question) {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestion(question)
            .then((question) => {
                console.warn('new question !', question);
                dispatch(addQuestion(question));
                dispatch(addQuestionToUser(authedUser,  question.id));
                dispatch(hideLoading())
            });
    }
}

export function saveQuestionAnswer(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {
                dispatch(answerQuestion({authedUser, qid, answer}));
                dispatch(addAnswerToUserAction(authedUser, qid, answer));
                dispatch(hideLoading())
            });
    }
}