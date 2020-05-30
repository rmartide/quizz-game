class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, username) {
        var user = { id, username, score: 0 };
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user;
        var index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            user = this.users.splice(index, 1).pop();
        }
        return user;
    }

    getUser(id) {
        return this.users.find(user => user.id === id);
    }

    addScore(id) {
        this.getUser(id).score += 250;
    }

    getUsers() {
        return this.users;
    }

    usernameExists(username) {
        var arrayNotEmpty = this.users.length !== 0;
        var userFound = this.users.findIndex(user => user.username === username) !== -1;
        var res = arrayNotEmpty && userFound;
        return res;
    }
}

module.exports = { Users };