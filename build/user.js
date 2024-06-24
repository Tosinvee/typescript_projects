"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }
    getDetails() {
        return `User: ${this.name}, ID: ${this.id}, Borrowed Books: ${this.borrowedBooks.length}`;
    }
}
exports.default = User;
