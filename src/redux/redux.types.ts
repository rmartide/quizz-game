export type State = {
    users: User[],
    currentUser: User
}

export type User = {
    username: string,
    score: number
} | undefined;

export type Action = {
    type: ActionType,
    payload: ActionPayload
}

export enum ActionType {
    LOGIN,
    SET_USERS,
    SET_CURRENT_USER
}

export type ActionPayload = User | User[];