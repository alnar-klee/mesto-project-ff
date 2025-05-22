// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template').content;

const placesList = document.querySelector('.places__list');

function createCard(element) {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.card__image').src = element.link;
  card.querySelector('.card__image').alt = element.name;
  card.querySelector('.card__title').textContent = element.name;

  card.querySelector('.card__delete-button').addEventListener('click', deleteCard);

  return card;
}

function deleteCard(evt) {
  evt.target.closest('.places__item').remove();  
}

initialCards.forEach(function (element) {
  const card = createCard(element);
  placesList.append(card);
})
