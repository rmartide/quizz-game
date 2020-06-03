const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const reload = require("reload");

let app = express();
let server = http.createServer(app);
let io = socketIO(server);
const { Users } = require("./utils/users");
const { emitUpdateList } = require("./utils/common");

const users = new Users();

const staticPath = path.join(__dirname, "/../static");
const buildPath = path.join(__dirname, "/../build");
const port = process.env.PORT || 3001;

app.use(express.static(staticPath));

const room = "room";

let answers;

io.on("connection", (socket) => {
	console.log("New user connected");

	socket.on("login", ({ username }, callback) => {
		if (!users.usernameExists(username)) {
			callback(users.addUser(socket.id, username));
			socket.join(room);
			emitUpdateList(io.to(room), users);
		} else {
			callback(undefined);
		}
	});

	socket.on("answer-question", ({ correct, option }, callback) => {
		answers[option]++;
		if (correct) {
			users.addScore(socket.id);
			emitUpdateList(io.to(room), users);
		}
	});

	socket.on("get-users", (params, callback) => {
		callback(users.getUsers());
	});

	socket.on("get-current-user", (params, callback) => {
		callback(users.getUser(socket.id));
	});

	socket.on("load-question", ({ questionNumber }, callback) => {
		answers = {
			a: 0,
			b: 0,
			c: 0,
			d: 0
		}
		io.to(room).emit("update-play-field", questionNumber);
	});

	socket.on("get-background-image", (image) => {
		io.to(room).emit("update-background-image", image);
	});

	socket.on("load-winners", (image) => {
		io.to(room).emit("update-show-winners", image);
	});

	socket.on("load-question-answers", (show) => {
		const payload = show ? answers : undefined;
		io.to(room).emit("show-question-answers", payload);
	})

	socket.on("disconnect", () => {
		users.removeUser(socket.id);
		emitUpdateList(io.to(room), users);
		console.log("disconnected");
	});
});

reload(app);

server.listen(port, () => console.log(`Express listening to port ${port}`));
