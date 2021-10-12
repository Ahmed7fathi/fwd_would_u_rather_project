import { combineReducers } from 'redux';
import questionsReducers from './questions'
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
    questions: questionsReducers,
    loadingBar: loadingBarReducer
})