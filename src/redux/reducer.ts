import { State, Action, ActionType, User } from "./redux.types";
const initialState: State = {
	users: [],
	loggedIn: false,
	currentUser: undefined
};

export const reducer = (state = initialState, action: Action): State => {
	switch (action.type) {
		case ActionType.LOGIN:
			return { ...state, loggedIn: action.payload as boolean };
		case ActionType.SET_USERS:
			return {
                ...state, users: action.payload as User[]
            };
		case ActionType.SET_CURRENT_USER:
			return {
                ...state, currentUser: action.payload as User
            };
		default:
			return state;
	}
};
