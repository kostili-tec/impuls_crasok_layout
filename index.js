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