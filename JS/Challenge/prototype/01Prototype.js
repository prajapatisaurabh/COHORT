function Library() {
  this.books = [];
}

Library.prototype.addBook = function (book) {
  this.books.push(book);
};

Library.prototype.findBook = function (title) {
  const result = this.books.find((b) => b === title);
  if (result) {
    return "Book found";
  } else {
    return "Book not found";
  }
};
