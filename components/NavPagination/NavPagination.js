const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

nextButton.addEventListener('click', () => {
  fetchCharacters(nextUrl).
      then(data => {
        characters = data.results;
        nextUrl = data.info.next;
        previousUrl = data.info.prev;
        console.log('Next button clicked!');
        console.log(characters);
      });
});

prevButton.addEventListener('click', () => {
  fetchCharacters(previousUrl).
      then(data => {
        characters = data.results;
        nextUrl = data.info.next;
        previousUrl = data.info.prev;
        console.log('Previous button clicked!');
        console.log(characters);
      });
});