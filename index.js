const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let previousUrl;
let nextUrl;
const maxPage = 1;
let currentPage = 1;

let characters;
const searchQuery = '';

const fetchCharacters = async (URL = 'https://rickandmortyapi.com/api/character?page=1') => {
  try {
    const response = await fetch(
        URL ?? 'https://rickandmortyapi.com/api/character?page=1');
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

fetchCharacters().then(data => {
  characters = data.results;
  nextUrl = data.info.next;
  previousUrl = data.info.prev;
});

