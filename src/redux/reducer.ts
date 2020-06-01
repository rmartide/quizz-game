import { State, Action, ActionType, User, Question } from "./redux.types";
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
		case ActionType.UPDATE_CURRENT_QUESTION:
			return {
				...state,
				currentQuestion: {
					...state.currentQuestion,
					answer: payload as string
				} as Question
			};
		default:
			return state;
	}
};
