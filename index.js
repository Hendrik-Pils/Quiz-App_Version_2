// phew… not a lot going on here. Please add some code!

/*const bodyElement = document.querySelector('[data-js="body"]', '[data-js="nav"]', '[data-js="header"]');


const toggleButton = document.querySelector('[data-js="toggle__button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
}); */


const bookmarkButton = document.querySelector('[data-js="bookmark"]');

bookmarkButton.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark--active");
    console.log(bookmark.classList)
});