export type State = {
    users: User[],
    currentUser: User,
    currentQuestion: Question,
    backgroundImage: BackgroundImage,
    showWinners: boolean
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
    SET_CURRENT_USER,
    SET_CURRENT_QUESTION,
    UPDATE_CURRENT_QUESTION,
    UPDATE_BACKGROUND_IMAGE,
    SHOW_WINNERS
}

export type Question = {
	title: string,
	answers: Answer,
    correct: string,
    number: number,
    answer: string
} | undefined;

export type Answer = {
    a: string,
    b: string,
    c: string,
    d: string,
    [key: string]: string
}


export type ActionPayload = User | User[] | number | string | null | boolean;

export type BackgroundImage = string | null;