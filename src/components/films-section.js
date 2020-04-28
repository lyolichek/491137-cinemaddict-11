// ---- создает контейнер для всех списков фильмов
import {createElement} from "../utils.js";

export const createFilmsSectionTemplate = (titleClass, title) => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title ${titleClass}">${title}</h2>
        <div class="films-list__container">
        </div>
      </section>
    </section>`
  );
};

export class FilmsListComponent {
  constructor(titleClass, title) {
    this._titleClass = titleClass;
    this._title = title;
    this._element = null;
  }

  getTemplate() {
    return createFilmsSectionTemplate(this._titleClass, this._title);
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
