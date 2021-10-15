import {GET_ALL_QUESTIONS, ADD_NEW_QUESTION, ANSWER_TO_QUESTION} from '../actions/questions';


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
        case ANSWER_TO_QUESTION:
            const {authedUser, qid, answer} = action.payload;
            // console.warn('data  : ', authedUser, qid, answer);
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }
                }
            };

        default:
            return state
    }
}


export default questionsReducer;