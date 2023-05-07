let myLibrary = [];
const content = document.getElementById('content');
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
    this.id = Book.counter;
    Book.counter += 1;
  }
}

Book.counter = 0;

function deleteElementFromLibrary(aid) {
  myLibrary = myLibrary.filter((el) => el.id !== +aid);
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  const newBookTitle = document.createElement('div');
  newBookTitle.textContent = title;
  newBookTitle.setAttribute('class', 'title');
  const newBookAuthor = document.createElement('div');
  newBookAuthor.textContent = author;
  newBookAuthor.setAttribute('class', 'author');
  const newBookPages = document.createElement('div');
  newBookPages.textContent = pages;
  newBookPages.setAttribute('class', 'pages');
  const newBookDisplay = document.createElement('div');
  newBookDisplay.setAttribute('class', 'book-display');
  newBookDisplay.setAttribute('id', newBook.id);
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete-book-button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', (e) => {
    e.target.parentElement.remove();
    deleteElementFromLibrary(e.target.parentElement.id);
  });
  content.appendChild(newBookDisplay);
  newBookDisplay.appendChild(newBookTitle);
  newBookDisplay.appendChild(newBookAuthor);
  newBookDisplay.appendChild(newBookPages);
  newBookDisplay.appendChild(deleteButton);
  content.appendChild(newBookButton);
  hideAddBookForm();
}

addBookButton.addEventListener('click', () => {
  const bookTitleField = document.getElementById('book_title');
  const bookAuthorField = document.getElementById('author');
  const bookPagesField = document.getElementById('pages');
  addBookToLibrary(bookTitleField.value, bookAuthorField.value, bookPagesField.value);
});
