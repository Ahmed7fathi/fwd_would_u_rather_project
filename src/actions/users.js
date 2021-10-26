export const GET_USERS = "GET_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function getUsersAction(users){
    return{
        type: GET_USERS,
        users
    }
}

export function addAnswerToUserAction(authedUser, qid, answer ){
    return{
        type: ADD_ANSWER_TO_USER,
        payload: {authedUser, qid, answer}
    }
}

export function addQuestionToUser(authedUser, qid){
    return{
        type: ADD_QUESTION_TO_USER,
        payload: {user: authedUser, question_id: qid}
    }
}