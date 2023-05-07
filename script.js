const myLibrary = [];
const content = document.querySelector('content');
const newBookButton = document.getElementById('new_book');
const addBookButton = document.getElementById('add_book_button');
const addBookFormScreen = document.getElementById('add_book_form_screen');
const addBookForm = document.getElementById('add_book_form');
const closeAddBookFormButton = document.getElementById('exit_form');

function showAddBookForm() {
  addBookFormScreen.style.visibility = 'visible';
}

function hideAddBookForm() {
  addBookFormScreen.style.visibility = 'hidden';
}

newBookButton.addEventListener('click', () => {
  showAddBookForm();
});

closeAddBookFormButton.addEventListener('click', () => {
  hideAddBookForm();
});

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

class Book {
  constructor(title, author = 'undefined', pages = 'undefined') {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages));
}

addBookButton.addEventListener('click', () => {
  const bookTitleField = document.getElementById('book_title');
  const bookAuthorField = document.getElementById('author');
  const bookPagesField = document.getElementById('pages');
  addBookToLibrary(bookTitleField.value, bookAuthorField.value, bookPagesField.value);
});
