document.addEventListener("DOMContentLoaded", () => {
  const books = document.querySelector("#book-list");
  let ul = document.querySelector("#book-list ul");

  // delete
  books.addEventListener("click", (event) => {
    if (event.target.className === "delete") {
      event.target.parentElement.remove();
    }
  });

  // add books
  let addBook = document.querySelector("#add-book");

  addBook.addEventListener("submit", (event) => {
    event.preventDefault();

    // create elements
    let li = document.createElement("li");
    let book = document.createElement("span");
    let deleteBtn = document.createElement("span");
    let value = document.querySelector("#input").value;

    // add classes
    book.classList.add("name");
    deleteBtn.classList.add("delete");

    // add text content
    book.innerHTML = value;
    deleteBtn.innerHTML = "delete";

    // append to DOM
    ul.appendChild(li);
    li.appendChild(book);
    li.appendChild(deleteBtn);
  });

  // hide books
  const hideBooks = document.querySelector("#hide");
  hideBooks.addEventListener("change", () => {
    if (hideBooks.checked) {
      ul.style.display = "none";
    } else {
      ul.style.display = "initial";
    }
  });

  // filter books

  const searchBar = document.querySelector("#search-books input");

  searchBar.addEventListener("keyup", (event) => {
    let books = document.querySelectorAll(".name");
    let value = event.target.value.toLowerCase();

    Array.from(books).map((item) => {
      if (item.textContent.toLowerCase().includes(value) != false) {
          item.parentElement.style.display = "block";
        } else{
          item.parentElement.style.display = "none";
      }
    });
  });



 
});
