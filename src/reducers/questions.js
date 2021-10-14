import {GET_ALL_QUESTIONS, ADD_NEW_QUESTION} from '../actions/questions';


function questionsReducer(state = {}, action) {
    switch (action.type) {
        case GET_ALL_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_NEW_QUESTION:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                }
            };
        default:
            return state
    }
}


export default questionsReducer;