import io from "socket.io-client";

const socket = io("http://127.0.0.1:3001");

const connect = () => {
	socket.on("connect", () => {});
};

const test = () => {
	socket.emit("topkek", {}, (data: string) => {
		console.log(data);
	});
};


export default {
    connect,
    test
}