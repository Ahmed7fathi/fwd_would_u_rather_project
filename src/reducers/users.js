import {GET_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER} from '../actions/users';

function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_QUESTION_TO_USER:
            const {question_id, user} = action.payload;
            return {
                ...state,
                [user]: {
                    ...state[user],
                    questions: state[user].questions.concat(question_id)
                }
            };
        case ADD_ANSWER_TO_USER:
            const {authedUser, qid, answer} = action.payload;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            };
        default:
            return state
    }
}

export default users;