import { combineReducers } from 'redux';
import questionsReducers from './questions'


export default combineReducers({
    questions: questionsReducers,
})