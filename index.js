import {CharacterCard} from './components/CharacterCard/CharacterCard.js';

// Config
const API_BASE_URL = 'https://rickandmortyapi.com/api/character';
const DEFAULT_PAGE = 1;

// DOM Elements
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const state = {
  currentPage: DEFAULT_PAGE,
  maxPages: DEFAULT_PAGE,
  searchQuery: '',
  nextUrl: null,
  prevUrl: null,
  characters: [],
};

const renderCharacters = (characters) => {
  cardContainer.innerHTML = '';
  characters.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.appendChild(card);
  });
};

const updatePagination = () => {
  pagination.textContent = `${state.currentPage}/${state.maxPages}`;
  prevButton.disabled = !state.prevUrl;
  nextButton.disabled = !state.nextUrl;
};

//API Calls
const fetchCharacters = async (url = `${API_BASE_URL}?page=${DEFAULT_PAGE}`) => {
  try {
    const apiUrl = state.searchQuery ? `${url}&name=${state.searchQuery}` : url;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      if (response.status === 404) {
        cardContainer.innerHTML = `<p>Character not found!.</p>`;
        throw new Error('Character not found!');
      } else {
        throw new Error('Failed to fetch characters');
      }
    }

    const data = await response.json();

    state.characters = data.results;
    state.nextUrl = data.info.next;
    state.prevUrl = data.info.prev;
    state.maxPages = data.info.pages;

    renderCharacters(state.characters);
    updatePagination();
  } catch (error) {
    console.error('Fetch error:', error);
    cardContainer.innerHTML = `<p>${error.message}</p>`;
  }
};

//Event handlers
const handleNextPage = async () => {
  if (state.nextUrl) {
    await fetchCharacters(state.nextUrl);
    state.currentPage++;
    updatePagination();
  }
};
const handlePrevPage = async () => {
  if (state.prevUrl) {
    await fetchCharacters(state.prevUrl);
    state.currentPage--;
    updatePagination();
  }
};

const handleSearch = async (e) => {
  e.preventDefault();
  state.searchQuery = e.target.querySelector('input').value;
  state.currentPage = DEFAULT_PAGE;
  fetchCharacters();
};

prevButton.addEventListener('click', handlePrevPage);
nextButton.addEventListener('click', handleNextPage);
searchBar.addEventListener('submit', handleSearch);

fetchCharacters();