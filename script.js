const myLibrary = [];
const content = document.querySelector("content");
const addBookButton = document.getElementById("add_book");

function showAddBookForm() {}

addBookButton.addEventListener("click", () => {
  showAddBookForm();
});

function Book(title) {
  this.title = title;
}

function addBookToLibrary() {}
