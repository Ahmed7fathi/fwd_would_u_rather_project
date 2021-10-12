import {showLoading, hideLoading} from 'react-redux-loading'
import {getAllQuestionsAction} from "./questions"
import {_getQuestions} from '../utils/_DATA';



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