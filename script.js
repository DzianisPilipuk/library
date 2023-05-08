let myLibrary = [];
const content = document.getElementById("content");
const newBookButton = document.getElementById("new_book");
const addBookButton = document.getElementById("add_book_button");
const addBookFormScreen = document.getElementById("add_book_form_screen");
const addBookForm = document.getElementById("add_book_form");
const closeAddBookFormButton = document.getElementById("exit_form");

function showAddBookForm() {
  addBookFormScreen.style.visibility = "visible";
}

function hideAddBookForm() {
  addBookFormScreen.style.visibility = "hidden";
}

newBookButton.addEventListener("click", () => {
  showAddBookForm();
});

closeAddBookFormButton.addEventListener("click", () => {
  hideAddBookForm();
});

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

class Book {
  constructor(title, author = "undefined", pages = "undefined") {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = Book.counter;
    this.isRead = false;
    Book.counter += 1;
  }
}

Book.counter = 0;

function deleteElementFromLibrary(aid) {
  myLibrary = myLibrary.filter((el) => el.id !== +aid);
}

function addBookToLibrary(title, author, pages) {
  function addTitle(parent, booktitle) {
    const newBookTitle = document.createElement("div");
    newBookTitle.textContent = booktitle;
    newBookTitle.setAttribute("class", "title");
    parent.appendChild(newBookTitle);
  }
  function addAuthor(parent, bookauthor) {
    const newBookAuthorWrapper = document.createElement("div");
    newBookAuthorWrapper.setAttribute("class", "author-wrapper");
    const textBookAuthor = document.createElement("div");
    textBookAuthor.textContent = "author:";
    textBookAuthor.setAttribute("class", "decorative-text");
    const newBookAuthor = document.createElement("div");
    newBookAuthor.textContent = bookauthor;
    newBookAuthor.setAttribute("class", "author");
    parent.appendChild(newBookAuthorWrapper);
    newBookAuthorWrapper.appendChild(textBookAuthor);
    newBookAuthorWrapper.appendChild(newBookAuthor);
  }
  function addPages(parent, bookpages) {
    const newBookPagesWrapper = document.createElement("div");
    newBookPagesWrapper.setAttribute("class", "pages-wrapper");
    const textBookPages = document.createElement("div");
    textBookPages.textContent = "pages:";
    textBookPages.setAttribute("class", "decorative-text");
    const newBookPages = document.createElement("div");
    newBookPages.textContent = bookpages;
    newBookPages.setAttribute("class", "pages");
    parent.appendChild(newBookPagesWrapper);
    newBookPagesWrapper.appendChild(textBookPages);
    newBookPagesWrapper.appendChild(newBookPages);
  }
  function addDeleteButton(parent) {
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-book-button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      deleteElementFromLibrary(e.target.parentElement.id);
    });
    parent.appendChild(deleteButton);
  }

  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  const newBookDisplay = document.createElement("div");
  newBookDisplay.setAttribute("class", "book-display");
  newBookDisplay.setAttribute("id", newBook.id);
  content.appendChild(newBookDisplay);
  addTitle(newBookDisplay, title);
  addAuthor(newBookDisplay, author);
  addPages(newBookDisplay, pages);
  addDeleteButton(newBookDisplay);
  content.appendChild(newBookButton);
  hideAddBookForm();
}

addBookButton.addEventListener("click", () => {
  const bookTitleField = document.getElementById("book_title");
  const bookAuthorField = document.getElementById("author");
  const bookPagesField = document.getElementById("pages");
  addBookToLibrary(
    bookTitleField.value,
    bookAuthorField.value,
    bookPagesField.value
  );
});
