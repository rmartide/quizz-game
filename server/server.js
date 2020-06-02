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

	socket.on("answer-question", ({ correct, questionNumber }, callback) => {
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
		io.to(room).emit("update-play-field", questionNumber);
	});

	socket.on("get-background-image", (image) => {
		io.to(room).emit("update-background-image", image);
	});
	socket.on("load-winners", (image) => {
		io.to(room).emit("update-show-winners", image);
	});

	socket.on("disconnect", () => {
		users.removeUser(socket.id);
		emitUpdateList(io.to(room), users);
		console.log("disconnected");
	});
});

reload(app);

server.listen(port, () => console.log(`Express listening to port ${port}`));
