// ---- создание статистики в футере
import {createElement} from "../utils";

const createStatisticsTemplate = (totalFilms) => {
  return (`<p>${totalFilms} movies inside</p>`);
};

export class StatisticsComponent {
  constructor(count) {
    this._count = count;
    this._element = null;
  }

  getTemplate() {
    return createStatisticsTemplate(this._count);
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
