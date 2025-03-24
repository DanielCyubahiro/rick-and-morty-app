import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector('[data-js="search-bar-input"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let previousUrl;
let nextUrl;
const MAX_PAGE = 42;
const MIN_PAGE = 1;
let currentPage = 1;
let characters;
let searchQuery = "";

//Pagination

nextButton.addEventListener("click", () => {
  fetchCharacters(nextUrl);
  pagination.textContent =
    currentPage >= MAX_PAGE
      ? `${MAX_PAGE}/{${MAX_PAGE}}`
      : `${++currentPage}/${MAX_PAGE}`;
});
prevButton.addEventListener("click", () => {
  fetchCharacters(previousUrl);
  pagination.textContent =
    currentPage <= 1
      ? `${MIN_PAGE}/${MAX_PAGE}`
      : `${--currentPage}/${MAX_PAGE}`;
});

//API
const fetchCharacters = async (
  URL = "https://rickandmortyapi.com/api/character?page=1"
) => {
  try {
    const response = await fetch(
      `${URL}&name=${searchQuery}` ??
        "https://rickandmortyapi.com/api/character?page=1"
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }

    characters = data.results;
    nextUrl = data.info.next;
    previousUrl = data.info.prev;
    console.log(data);

    cardContainer.innerHTML = "";
    characters.forEach((character) => {
      const card = CharacterCard(character);
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchCharacters();
pagination.textContent = `${currentPage}/${MAX_PAGE}`;

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  searchQuery = searchBar.querySelector("input").value;

  console.log(searchQuery);
  fetchCharacters();
});
