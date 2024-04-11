function openCloseFilters() {
  const titles = document.querySelectorAll('.filters-checkboxes__title');

  titles.forEach(title => {
    title.addEventListener('click', () => {
      const checkboxItems = title.parentNode.querySelector('.filter__checkbox-items');      
      checkboxItems.classList.toggle('checkbox-items__open');
      const arrow = title.querySelector('.arrow-up');
      if (!checkboxItems.classList.contains('checkbox-items__open')) {
        arrow.classList.add('arrow-reverse');
      } else {
        arrow.classList.remove('arrow-reverse');
      }
    });
  });
}

openCloseFilters();

function burgerMenu() {
  const header = document.querySelector('.header');
  const burgerButton = header.querySelector('.menu-button-container');
  const headerMenu = header.querySelector('.header-menu');
  burgerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('open-menu');    
  });
}

burgerMenu();

function openFilters() {
  const filters = document.querySelector('.catalog-container__filters-left');
  const openButton = document.querySelector('#filter-button__all');
  const closeButton = filters.querySelector('#close-filters-button');
  openButton.addEventListener('click', () => {
    filters.classList.add('filters-left__open');
  })
  closeButton.addEventListener('click', () => {
    filters.classList.remove('filters-left__open');
  })

}

openFilters();