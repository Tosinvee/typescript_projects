
import Book from './book';
import User from './user';

class Library {
  books: Book[];
  users: User[];

  constructor() {
    this.books = [];
    this.users = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(isbn: string): void {
    this.books = this.books.filter(book => book.isbn !== isbn);
  }

  searchBook(query: string): Book[] {
    return this.books.filter(
      book =>
        book.title.includes(query) ||
        book.author.includes(query) ||
        book.isbn.includes(query)
    );
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  searchUser(query: string): User[] {
    return this.users.filter(
      user =>
        user.name.includes(query) ||
        user.id.includes(query)
    );
  }

  borrowBook(userId: string, isbn: string): boolean {
    const findUser = this.users.find(user => user.id === userId);
    const findBook = this.books.find(
      ({ isbn: bookIsbn, isAvailable }) => bookIsbn === isbn && isAvailable
    );

    if (findUser && findBook) {
      findUser.borrowedBooks = [...findUser.borrowedBooks, findBook];
      findBook.isAvailable = false;
      return true;
    }
    return false;
  }

  returnBook(userId: string, isbn: string): boolean {
    const findUser = this.users.find(user => user.id === userId);
    const findBook = this.books.find(({ isbn: bookIsbn }) => bookIsbn === isbn);

    if (findUser && findBook) {
      findUser.borrowedBooks = findUser.borrowedBooks.filter(
        ({ isbn: borrowedIsbn }) => borrowedIsbn !== isbn
      );
      findBook.isAvailable = true;
      return true;
    }
    return false;
  }

  isBookAvailable(isbn: string): boolean {
    const book = this.books.find(({ isbn: bookIsbn }) => bookIsbn === isbn);
    return book ? book.isAvailable : false;
  }

  getAllBooks(): Book[] {
    return [...this.books];
  }

  getAllUsers(): User[] {
    return [...this.users];
  }
}

export default Library;
