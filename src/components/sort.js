const createSortMarkup = (item) => {
  const {name, link, active} = item;

  return (
    `<li><a href="${link}" class="sort__button ${active}">${name}</a></li>`
  );
};

// ---- создает фильтр
export const createSortTemplate = (sort) => {
  return (`
  <ul class="sort">
      ${sort.map((item) => createSortMarkup(item)).join(``)}
  </ul>
  `);
};
