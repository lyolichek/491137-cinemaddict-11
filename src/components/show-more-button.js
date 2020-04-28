// ---- создает кнопку show more
import {createElement} from "../utils.js";

export const createShowMoreElement = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export class ShowMoreComponents {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreElement();
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
