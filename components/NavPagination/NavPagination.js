export function NavPagination(currentPage, maxPages) {
  const pagination = document.createElement('span');
  pagination.classList.add('navigation__pagination');
  pagination.textContent = `${currentPage}/${maxPages}`;
  return pagination;
}