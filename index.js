import {CharacterCard} from './components/CharacterCard/CharacterCard.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]');

const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let previousUrl;
let nextUrl;
const maxPage = 1;

let characters;
const searchQuery = '';

nextButton.addEventListener('click', () => fetchCharacters(nextUrl));
prevButton.addEventListener('click', () => fetchCharacters(previousUrl));

const fetchCharacters = async (URL = 'https://rickandmortyapi.com/api/character?page=1') => {
  try {
    const response = await fetch(
        URL ?? 'https://rickandmortyapi.com/api/character?page=1');
    const data = await response.json();
    characters = data.results;
    nextUrl = data.info.next;
    previousUrl = data.info.prev;
    console.log(characters);
  } catch (e) {
    console.error(e);
  }
};

fetchCharacters();

//Card Creation
const rickSanchez = {
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
  type: '',
  occurrences: 51,
};

const card = CharacterCard(rickSanchez);
cardContainer.appendChild(card);

