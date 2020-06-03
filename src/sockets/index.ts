import { setCurrentQuestion, updateCurrentQuestion, updateBackgroundImage, showWinners, showQuestionAnswers } from "./../redux/actions";
import io from "socket.io-client";
import { User, Answer } from "../redux/redux.types";
import { setUsers, setCurrentUser } from "../redux/actions";
import catEyes from "../assets/cat_eyes.jpg";
import julio from "../assets/julio_iglesias.jpg";
import dance from "../assets/dance.gif";
import fail from "../assets/fail.gif";
import blink from "../assets/blink.gif";
import dog from "../assets/pet.jpg";
import fuegos from "../assets/fuegos-artificiales.gif";

let dispatch: any;

// const socket = io("http://127.0.0.1:3001");
const socket = io();

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

const answerQuestion = (correct: boolean, questionNumber: number, option: string) => {
	dispatch(updateCurrentQuestion(option));
	socket.emit("answer-question", { correct, option }, (response: string) => {
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
	});
};

const setBackgroundImage = () => {
	const images: any = { julio, catEyes, dance, fail, blink, dog, fuegos };
	socket.on("update-background-image", (name: string) => {
		const image = name !== "" ? images[name] : null;
		dispatch(updateBackgroundImage(image));
	});
};

const getBackgroundImage = (name: string) => {
	socket.emit("get-background-image", name);
};

const updatePlayField = () => {
	socket.on("update-play-field", (index: number) => {
		dispatch(setCurrentQuestion(index));
	});
};

const getCurrentUser = () => {
	socket.emit("get-current-user", {}, (user: User) => {
		console.log(user);
	});
};

const loadQuestion = (questionNumber: number) => {
	socket.emit("load-question", { questionNumber });
	loadQuestionAnswers(false);
};

const loadWinners = () => {
	socket.emit("load-winners");
};

const updateShowWinners = () => {
	socket.on("update-show-winners", () => {
		dispatch(showWinners());
	});
};

const loadQuestionAnswers = (show: boolean) => {
	socket.emit("load-question-answers", show);
};

const updateQuestionAnswers = () => {
	socket.on("show-question-answers", (answers: Answer) => {
		dispatch(showQuestionAnswers(answers));
	});
};

export default {
	connect,
	login,
	answerQuestion,
	getUsers,
	getCurrentUser,
	loadQuestion,
	updateUsersList,
	setDispatch,
	updatePlayField,
	setBackgroundImage,
	getBackgroundImage,
	loadWinners,
	updateShowWinners,
	loadQuestionAnswers,
	updateQuestionAnswers
};
