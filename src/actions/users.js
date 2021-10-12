export const GET_USERS = "GET_USERS";


export function getUsersAction(users){
    return{
        type: GET_USERS,
        users
    }
}