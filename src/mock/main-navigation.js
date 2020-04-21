// создаем данные для фильтра навигации
const generateMainNavItem = () => {
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
        count: 13
      },
      {
        title: `History`,
        link: `#history`,
        activeClass: ``,
        count: 4
      },
      {
        title: `Favorites`,
        link: `#favorites`,
        activeClass: ``,
        count: 8
      }
    ]
  );
};

export {generateMainNavItem};
