const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
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


//Card Creation
import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const rickSanchez = {
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  status: "Alive",
  type: "",
  occurrences: 51,
};

const card = CharacterCard(rickSanchez);
cardContainer.appendChild(card);

//API
async function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchCharacters();
