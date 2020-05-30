import io from "socket.io-client";
import { User } from "../redux/redux.types";
import { setUsers, setCurrentUser } from "../redux/actions";

let dispatch: any;

const socket = io("http://127.0.0.1:3001");

const connect = () => {
	socket.on("connect", () => {});
};

const setDispatch = (d: any) => {
	if (!dispatch) dispatch = d;
};

const login = (username: string) => {
	socket.emit("login", { username }, (user: User) => {
		dispatch(setCurrentUser(user));
	});
};

const answerQuestion = (response: string, questionNumber: number) => {
	socket.emit("answer-question", { response, questionNumber }, (response: string) => {
		console.log(response);
	});
};

const getUsers = () => {
	socket.emit("get-users", {}, (users: User[]) => {
		console.log(users);
	});
};

const updateUsersList = () => {
	socket.on("update-users-list", (users: User[]) => {
		dispatch(setUsers(users));
		console.log(users);
	});
};

const getCurrentUser = () => {
	socket.emit("get-current-user", {}, (user: User) => {
		console.log(user);
	});
};

const loadQuestion = (questionNumber: number) => {
	socket.emit("load-question", { questionNumber }, (user: User) => {
		console.log(user);
	});
};

const loadResults = () => {
	socket.emit("load-results", {}, () => {
		console.log("loading results");
	});
};

export default {
	connect,
	login,
	answerQuestion,
	getUsers,
	getCurrentUser,
	loadQuestion,
	loadResults,
	updateUsersList,
	setDispatch
};
