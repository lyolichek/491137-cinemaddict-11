// создаем данные для фильтра навигации
const generateMainNavItem = (films) => {
  return (
    [
      {
        title: `All movies`,
        link: `#all`,
        activeClass: `main-navigation__item--active`,
        count: null,
        genre: null

      },
      {
        title: `Watchlist`,
        link: `#watchlist`,
        activeClass: ``,
        count: films.filter((film) => film.filters.isWatchList).length,
      },
      {
        title: `History`,
        link: `#history`,
        activeClass: ``,
        count: films.filter((film) => film.filters.isHistory).length,
      },
      {
        title: `Favorites`,
        link: `#favorites`,
        activeClass: ``,
        count: films.filter((film) => film.filters.isFavorites).length,
      }
    ]
  );
};

export {generateMainNavItem};
