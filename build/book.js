"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }
    getDetails() {
        return `${this.title} by ${this.author}, ISBN: ${this.isbn}, Available: ${this.isAvailable}`;
    }
}
exports.default = Book;
