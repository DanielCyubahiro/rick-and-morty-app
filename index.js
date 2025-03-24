const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

//card creation
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
    const characters = data.results;
    cardContainer.innerHTML = "";
    characters.forEach((character) => {
      const card = CharacterCard(character);
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchCharacters();
