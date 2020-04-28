import {PROFILE_RATING} from "./const.js"
import {render} from "./utils.js";

import {ProfileRatingComponent} from "./components/profile.js"
import {StatisticsComponent} from "./components/statistics.js"
import {MainNavComponent} from "./components/main-navigation.js"
import {SortComponent} from "./components/sort.js"
import {FilmsListComponent} from "./components/films-section.js"
import {FilmCardComponent} from "./components/film-card.js"
import {FilmDetailsComponent} from "./components/film-details.js"
import {ShowMoreComponents} from "./components/show-more-button.js"

import {generateFilms, generateProfileRrating} from "./mock/film.js"
import {generateMainNavItem} from "./mock/main-navigation.js"

const FIRST_FILMS_CARD = 5;
const SHOW_MORE_FILMS_CARD = 5;
const TOTAL_FILMS_CARD = 21;
const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');

// profile rating
let rating = generateProfileRrating(PROFILE_RATING);
render(headerElement, new ProfileRatingComponent(rating).getElement());

// main navigation
const films = generateFilms(TOTAL_FILMS_CARD);  // массив обьектов карточек фильма
const mainNavFilter = generateMainNavItem(films);
render(mainElement, new MainNavComponent(mainNavFilter).getElement());

// Sort
render(mainElement, new SortComponent().getElement());

// Statistics
let totalFilms = films.length;
render(footerStatisticsElement, new StatisticsComponent(totalFilms).getElement());

// render film
const renderFilm = (filmsListElement, film) => {
  const filmCardComponent = new FilmCardComponent(film).getElement();

  const cardPosterElement = filmCardComponent.querySelector(`.film-card__poster`);
  const cardTitleElement = filmCardComponent.querySelector(`.film-card__title`);
  const cardCommentsElement = filmCardComponent.querySelector(`.film-card__comments`);

  const showFilmDetailsPopup = () => {
    document.body.append(filmDetailsElement);
  };

  const closeFilmDetailsPopup = () => {
    filmDetailsElement.remove();
  };

  cardPosterElement.addEventListener(`click`, showFilmDetailsPopup);
  cardTitleElement.addEventListener(`click`, showFilmDetailsPopup);
  cardCommentsElement.addEventListener(`click`, showFilmDetailsPopup);

  const filmDetailsElement = new FilmDetailsComponent(film).getElement();
  const filmDetailsCloseButton = filmDetailsElement.querySelector(`.film-details__close-btn`);

  filmDetailsCloseButton.addEventListener(`click`, closeFilmDetailsPopup);

  render(filmsListElement, filmCardComponent);
};

// render films cards
const renderFilms = () => {
  render(mainElement, new FilmsListComponent(`visually-hidden`, `All movies. Upcoming`).getElement());

  const filmsListElement = mainElement.querySelector(`.films-list`);
  const filmsContainerElement = filmsListElement.querySelector(`.films-list__container`);

  let showFilmsCard = FIRST_FILMS_CARD;
  films.slice(0, FIRST_FILMS_CARD).forEach((item) => renderFilm(filmsContainerElement, item));

  // show more button
  render(filmsListElement, new ShowMoreComponents().getElement());

  const showMoreButton = mainElement.querySelector(`.films-list__show-more`);

  // отрисовка карточек при клике на кнопку show More
  showMoreButton.addEventListener('click', function(){
    const prewFilmsCard = showFilmsCard;
    showFilmsCard = showFilmsCard + SHOW_MORE_FILMS_CARD;

    films.slice(prewFilmsCard, showFilmsCard)
      .forEach((item) => renderFilm(filmsContainerElement, item));

    if(showFilmsCard >= films.length) {
      showMoreButton.remove();
    }
  });
};

renderFilms();

// test
