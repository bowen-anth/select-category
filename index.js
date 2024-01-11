const SELECT_BUTTONS = document.querySelectorAll(
  ".select-button-one, .select-button-two, .select-button-three"
);
const CARDS = document.querySelectorAll(".card-one, .card-two, .card-three");
const FRACTION = document.querySelector(".fraction");

const selectCard = (event) => {
  CARDS.forEach((card) => card.classList.remove("red"));
  console.log(event.target);
  let card;
  let number;
  const clickedElement = event.target;

  // Traverse up the DOM hierarchy to find the card element
  const cardElement = clickedElement.closest(
    ".card-one, .card-two, .card-three"
  );

  if (cardElement) {
    card = cardElement;

    if (card.classList.contains("card-one")) {
      number = 1;
    } else if (card.classList.contains("card-two")) {
      number = 2;
    } else if (card.classList.contains("card-three")) {
      number = 3;
    }

    card.classList.add("red");
    FRACTION.textContent = number + "/3";
    card.classList.add("red");
    FRACTION.textContent = number + "/3";
  }
};

CARDS.forEach((card) => {
  card.addEventListener("click", selectCard);
});
