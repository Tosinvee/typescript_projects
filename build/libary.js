"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }
    searchBook(query) {
        return this.books.filter(book => book.title.includes(query) ||
            book.author.includes(query) ||
            book.isbn.includes(query));
    }
    addUser(user) {
        this.users.push(user);
    }
    removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
    searchUser(query) {
        return this.users.filter(user => user.name.includes(query) ||
            user.id.includes(query));
    }
    borrowBook(userId, isbn) {
        const findUser = this.users.find(user => user.id === userId);
        const findBook = this.books.find(({ isbn: bookIsbn, isAvailable }) => bookIsbn === isbn && isAvailable);
        if (findUser && findBook) {
            findUser.borrowedBooks = [...findUser.borrowedBooks, findBook];
            findBook.isAvailable = false;
            return true;
        }
        return false;
    }
    returnBook(userId, isbn) {
        const findUser = this.users.find(user => user.id === userId);
        const findBook = this.books.find(({ isbn: bookIsbn }) => bookIsbn === isbn);
        if (findUser && findBook) {
            findUser.borrowedBooks = findUser.borrowedBooks.filter(({ isbn: borrowedIsbn }) => borrowedIsbn !== isbn);
            findBook.isAvailable = true;
            return true;
        }
        return false;
    }
    isBookAvailable(isbn) {
        const book = this.books.find(({ isbn: bookIsbn }) => bookIsbn === isbn);
        return book ? book.isAvailable : false;
    }
    getAllBooks() {
        return [...this.books];
    }
    getAllUsers() {
        return [...this.users];
    }
}
exports.default = Library;
