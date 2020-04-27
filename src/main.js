import {PROFILE_RATING} from "./const.js"
import {render, renderStr} from "./utils.js";

import {ProfileRatingComponent} from "./components/profile.js"
import {StatisticsComponent} from "./components/statistics.js"

import {MainNavComponent} from "./components/main-navigation.js"
import {generateMainNavItem} from "./mock/main-navigation.js"

import {SortComponent} from "./components/sort.js"
import {createFilmsSectionTemplate} from "./components/films-section.js"
import {generateFilms, generateProfileRrating} from "./mock/film.js"

import {createFilmCardTemplate} from "./components/film-card.js"

import {creatFilmDetailsTemplate} from "./components/film-details.js"
import {createShowMoreElement} from "./components/show-more-button.js"

const FIRST_FILMS_CARD = 5;
const SHOW_MORE_FILMS_CARD = 5;
const TOTAL_FILMS_CARD = 20;
const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');

// profile rating
let rating = generateProfileRrating(PROFILE_RATING);
renderStr(headerElement, new ProfileRatingComponent(rating).getElement());

// main navigation
const films = generateFilms(TOTAL_FILMS_CARD);  // массив обьектов карточек фильма
const mainNavFilter = generateMainNavItem(films);
renderStr(mainElement, new MainNavComponent(mainNavFilter).getElement());

// Sort
renderStr(mainElement, new SortComponent().getElement());  // почему возвращает undefined???


// Statistics
let totalFilms = films.length;
renderStr(footerStatisticsElement, new StatisticsComponent(totalFilms).getElement());











render(mainElement, createFilmsSectionTemplate());
render(footerElement, creatFilmDetailsTemplate(films[0]), `afterEnd`);

const filmsListElement = mainElement.querySelector(`.films-list`);
const filmsContainerElement = filmsListElement.querySelector(`.films-list__container`);

let showFilmsCard = FIRST_FILMS_CARD;

films.slice(0, FIRST_FILMS_CARD).forEach((item) => render(filmsContainerElement, createFilmCardTemplate(item)));

render(filmsListElement, createShowMoreElement());

const showMoreButton = mainElement.querySelector(`.films-list__show-more`);

//  отрисовка карточек при клике на кнопку show More
showMoreButton.addEventListener('click', function(){
  const prewFilmsCard = showFilmsCard;
  showFilmsCard = showFilmsCard + SHOW_MORE_FILMS_CARD;

  films.slice(prewFilmsCard, showFilmsCard)
    .forEach((item) => render(filmsContainerElement, createFilmCardTemplate(item)));

  if(showFilmsCard >= films.length) {
    showMoreButton.remove();
  }
});

const filmDetailsElement = document.querySelector('.film-details');
filmDetailsElement.style.display = 'none';
