import Book from './book';

class User {
  public name: string;
  public id: string;
  public borrowedBooks: Book[];

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }

  public getDetails(): string {
    return `User: ${this.name}, ID: ${this.id}, Borrowed Books: ${this.borrowedBooks.length}`;
  }
}

export default User;
