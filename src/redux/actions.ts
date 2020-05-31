import { ActionType, User, Action } from './redux.types';

export const setCurrentUser = (user: User):Action => {
    return {
        type: ActionType.SET_CURRENT_USER,
        payload: user
    }
}
export const setUsers = (users: User[]):Action => {
    return {
        type: ActionType.SET_USERS,
        payload: users
    }
}
export const setCurrentQuestion = (index: number):Action => {
    return {
        type: ActionType.SET_CURRENT_QUESTION,
        payload: index
    }
}

