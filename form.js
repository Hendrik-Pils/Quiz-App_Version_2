const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const newCard = document.createElement("article");

  newCard.innerHTML = `
<article class="card">
<h2 class="card__question">
  ${data.question}
</h2>
<button class="card__button-answer" type="button" data-js="card__button-answer">
  Show answer
</button>
<p class="card__answer" data-js="card__answer">${data.answer}</p>
<ul class="card__tag-list">
  <li class="card__tag-list-item">${data.tags}</li>
</ul>
<div class="card__button-bookmark" >
  <button class="bookmark" aria-label="bookmark" data-js="bookmark" type="button">
    <svg
      class="bookmark__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewbox="0 0 24 24"
    >
      <path
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
      />
    </svg>
  </button>
</div>
</article>`;

  document.body.append(newCard);

  event.target.elements.question.focus();
  event.target.reset();
});

const questionElement = document.querySelector('[data-js="question"]');
const answerElement = document.querySelector('[data-js="answer"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const amountLeft2 = document.querySelector('[data-js="amountLeft2"]');
const maxLength = questionElement.getAttribute("maxlength");

const updateAmountLeft = (value, value2) => {
  amountLeft.innerText = value;
  amountLeft2.innerText = value2;
};

updateAmountLeft(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});

answerElement.addEventListener("input", () => {
  updateAmountLeft2(maxLength - answerElement.value.length);
});
