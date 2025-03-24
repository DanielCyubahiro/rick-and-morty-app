export function NavButton(direction, onClick, disabled = false) {
  const button = document.createElement('button');
  button.classList.add('button', `button--${direction}`);
  button.textContent = direction;
  button.disabled = disabled;
  button.addEventListener('click', onClick);
  return button;
}