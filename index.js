// phew… not a lot going on here. Please add some code!

/*const bodyElement = document.querySelector('[data-js="body"]', '[data-js="nav"]', '[data-js="header"]');


const toggleButton = document.querySelector('[data-js="toggle__button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
}); */


const bookmarkButton = document.querySelector('[data-js="bookmark"]');

bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active")
});

const cardAnswer= document.querySelector('[data-js="card__answer"]')
const buttonAnswer = document.querySelector('[data-js="card__button-answer"]');

buttonAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("hidden")
  if (buttonAnswer.textContent === "Hide Answer") {
    buttonAnswer.textContent = "Show Answer";
  } else {
    buttonAnswer.textContent = "Hide Answer"
  }
});




function hideAnswer() {
  cardAnswer.setAttribute("hidden", "");
}

function showAnswer() {
  cardAnswer.removeAttribute("hidden");
}
/*
const form = document.querySelector('[data-js="form"]');
;
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideAnswer() {
  cardAnswer.setAttribute("hidden", "");
}

function showAnswer() {
  cardAnswer.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

if (tosCheckbox.checked == true && form.submitted == true) {
  showSuccess();
} else {
  hideSuccess();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  // --^-- write your code here --^--
  if (tosCheckbox.checked == true)
    // eslint-disable-next-line no-alert
    alert("Form submitted");
  return;
});

tosCheckbox.addEventListener("click", () => {
  if (tosCheckbox.checked == true) {
    hideTosError();
  } else {
    showTosError();
  }
});
*/