export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS';
export const ANSWER_TO_QUESTION = 'ANSWER_TO_QUESTION';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';


export function getAllQuestionsAction(questions) {
    return {
        type: GET_ALL_QUESTIONS,
        questions,
    };
}

export function addQuestion(question) {
    return {
        type: ADD_NEW_QUESTION,
        question,
    };
}