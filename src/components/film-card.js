// ---- создает карточку фильма
export const createFilmCardTemplate = (film) => {
  const {
    title,
    rating,
    year,
    duration,
    genre,
    poster,
    description,
    comments,
    filters: {isWatchList, isHistory, isFavorites}
  } = film;

  return (
    `<article class="film-card">
        <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="./images/posters/${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${comments.length} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button ${isWatchList ? `film-card__controls-item--active` : ``} film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button ${isHistory ? `film-card__controls-item--active` : ``} film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button ${isFavorites ? `film-card__controls-item--active` : ``} film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`
  );
};
