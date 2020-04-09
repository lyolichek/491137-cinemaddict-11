import {createProfileTemplate} from "./components/profile.js"
import {createStatisticsTemplate} from "./components/statistics.js"
import {createMainNavTemplate} from "./components/main-navigation.js"
import {createSortTemplate} from "./components/sort.js"
import {createFilmsListTemplate} from "./components/films-list.js"
import {createFilmsListExtraTemplate} from "./components/films-list-extra.js"
import {createCardFilmTemplate} from "./components/card-film.js"
import {createFilmsSectionTemplate} from "./components/films-section.js"
import {createShowMoreElement} from "./components/show-more-button.js"
import {creatFilmDetailsTemplate} from "./components/film-details.js"

const TOTAL_FILM_CARDS = 5;
const TOTAL_FILM_CARDS_EXTRA = 2;
const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');

// ---- функция отрисовки компонентов
const render = (container, template, count = 1, place = `beforeend`) => {
  if (count > 1) {
    for (let i = 0; i < count; i++) {
      container.insertAdjacentHTML(place, template);
    }
  } else {
    container.insertAdjacentHTML(place, template);
  }
};

render(headerElement, createProfileTemplate());
render(footerStatisticsElement, createStatisticsTemplate());
render(mainElement, createMainNavTemplate(), `afterBegin`);
render(mainElement, createSortTemplate());
render(mainElement, createFilmsSectionTemplate());

const allFilmsSectionElement = mainElement.querySelector('.films');
render(allFilmsSectionElement, createFilmsListTemplate());

const filmListSectionElement = allFilmsSectionElement.querySelector('.films-list');
const filmsListContainerElement = filmListSectionElement.querySelector('.films-list__container');
render(filmsListContainerElement, createCardFilmTemplate(), TOTAL_FILM_CARDS);

render(filmListSectionElement, createShowMoreElement());

render(allFilmsSectionElement, createFilmsListExtraTemplate(`Top rated`));
render(allFilmsSectionElement, createFilmsListExtraTemplate(`Most commented`));

const filmsListExtraContainerElement = mainElement.querySelectorAll(`.films-list--extra .films-list__container`);

filmsListExtraContainerElement.forEach((item) => {
  render(item, createCardFilmTemplate(), TOTAL_FILM_CARDS_EXTRA);
});

render(footerElement, creatFilmDetailsTemplate(), `afterEnd`);
const filmDetailsElement = document.querySelector('.film-details');
filmDetailsElement.style.display = 'none';
