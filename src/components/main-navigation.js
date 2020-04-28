// ---- создание навигации
import {createElement} from "../utils.js";

const createMainNavMarkup = (filters) => {
  return (
    `<div class="main-navigation__items">
      ${filters.map((item) => {
      const {title, link, activeClass, count} = item;
      if (!count) {
        return `<a href="${link}" class="main-navigation__item ${activeClass}">${title}</a>`;
      }
      return `<a href="${link}" class="main-navigation__item ${activeClass}">${title} 
        <span class="main-navigation__item-count">${count}</span></a>`;
    }).join(``)}
    </div>`
  );
};

// ---- создание навигации
const createMainNavTemplate = (filters) => {
  return (
    `<nav class="main-navigation">
    ${createMainNavMarkup(filters)}
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};

export class MainNavComponent {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createMainNavTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
