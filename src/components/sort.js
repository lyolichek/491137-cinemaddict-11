import {SORT_BUTTON} from "../const.js"
import {createElement} from "../utils.js";

const createSortMarkup = (item) => {
  const {name, link, active} = item;

  return (
    `<li><a href="${link}" class="sort__button ${active}">${name}</a></li>`
  );
};

// ---- создает фильтр
const createSortTemplate = (sort) => {
  return (`
  <ul class="sort">
      ${sort.map((item) => createSortMarkup(item)).join(``)}
  </ul>
  `);
};

export class SortComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate(SORT_BUTTON);
  }

  getElement() {
    if(!this._element) {
      this._element = createElement(this.getTemplate())
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
