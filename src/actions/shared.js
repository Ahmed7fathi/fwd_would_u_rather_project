import {showLoading, hideLoading} from 'react-redux-loading'
import {GET_ALL_QUESTIONS} from "./questions"
import {_getQuestions} from '../utils/_DATA';

export function getAllQuestionsAction(questions) {
    return {
        type: GET_ALL_QUESTIONS,
        questions,
    };
}


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