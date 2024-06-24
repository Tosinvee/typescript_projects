class Book {
    title: string;
    author: string;
    isbn: string;
    isAvailable: boolean;
  
    constructor(title: string, author: string, isbn: string) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.isAvailable = true;
    }
  
    getDetails(): string {
      return `${this.title} by ${this.author}, ISBN: ${this.isbn}, Available: ${this.isAvailable}`;
    }
  }
  
  export default Book;
  