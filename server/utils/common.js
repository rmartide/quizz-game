

const emitUpdateList = (socket, users) => {
    socket.emit('update-users-list', users.getUsers());
}



module.exports = { emitUpdateList };