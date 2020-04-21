// ---- создание навигации
const createMainNavMarkup = (filters) => {
  return (
    `<div class="main-navigation__items">
      ${filters.map((item) => {
      const {title, link, activeClass, count} = item;
      if (!count) {
        return `<a href="${link}" class="main-navigation__item ${activeClass}">${title}</a>`;
      }
      return `<a href="${link}" class="main-navigation__item ${activeClass}">${title} <span class="main-navigation__item-count">${count}</span></a>`;
    }).join(``)}
    </div>`
  );
};


// ---- создание навигации
export const createMainNavTemplate = (filters) => {
  return (
    `<nav class="main-navigation">
    ${createMainNavMarkup(filters)}
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};
