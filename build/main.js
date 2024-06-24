"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
const user_1 = __importDefault(require("./user"));
const libary_1 = __importDefault(require("./libary"));
const myLibrary = new libary_1.default();
// Add Books
const book1 = new book_1.default("The Story of my life", "Bayode_oluwatosin", "81699203");
const book2 = new book_1.default("jesus loves you", "Folashade_Feranmi", "20039188");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
// Add Users
const user1 = new user_1.default('Busayo', '001');
const user2 = new user_1.default('Tunde', '002');
myLibrary.addUser(user1);
myLibrary.addUser(user2);
// Borrow a Book
myLibrary.borrowBook('001', '81699203');
// Check Book Availability
console.log(myLibrary.isBookAvailable('81699203')); // false
// Return a Book
myLibrary.returnBook('001', '81699203');
// Check Book Availability
console.log(myLibrary.isBookAvailable('81699203')); // true
// Search for a Book
//console.log(myLibrary.searchBook('Gatsby')); // [ book1 ]
// Search for a User
//console.log(myLibrary.searchUser('Alice')); // [ user1 ]
// Output Book and User Details using template literals
console.log(book1.getDetails());
console.log(user1.getDetails());
console.log(myLibrary.getAllBooks()); // [ book1, book2 ]
console.log(myLibrary.getAllUsers()); // [ user1, user2 ]
