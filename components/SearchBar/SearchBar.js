export function SearchBar(onSubmit) {
  const form = document.createElement('form');
  form.classList.add('search-bar');
  form.dataset.js = 'search-bar';

  // Create input element
  const input = document.createElement('input');
  input.name = 'query';
  input.classList.add('search-bar__input');
  input.type = 'text';
  input.placeholder = 'search characters';
  input.setAttribute('aria-label', 'character name');
  input.dataset.js = 'search-bar-input';

  // Create button element
  const button = document.createElement('button');
  button.classList.add('search-bar__button');
  button.setAttribute('aria-label', 'search for character');
  button.type = 'submit';

  // Create image element
  const img = document.createElement('img');
  img.classList.add('search-bar__icon');
  img.src = 'assets/magnifying-glass.png';
  img.alt = '';

  // Assemble the elements
  button.appendChild(img);
  form.appendChild(input);
  form.appendChild(button);

  form.addEventListener('submit', onSubmit);
  return form;
}