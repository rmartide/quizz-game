import { State, Action, ActionType, User } from "./redux.types";
import questions from '../utils/questions';
const initialState: State = {
	users: [],
	currentUser: undefined,
	currentQuestion: undefined
};

export const reducer = (state = initialState, {type, payload}: Action): State => {
	switch (type) {
		case ActionType.SET_USERS:
			return {
				...state,
				users: payload as User[]
			};
		case ActionType.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload as User
			};
		case ActionType.SET_CURRENT_QUESTION:
			return {
				...state,
				currentQuestion: questions[payload as number]
			};
		default:
			return state;
	}
};
