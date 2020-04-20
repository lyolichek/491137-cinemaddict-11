import {getRandomInteger, getRandomItem, getRandomItems} from "../utils";

const FILM_DETAILS_AGE_MIN = 0;
const FILM_DETAILS_AGE_MAX = 18;

const TITLES = [
  `The Dance of Life`,
  `Matrix`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Avatar`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Great Flamarion`,
  `Friends`,
  `Made for Each Other`
];

const GENRES = [
  `Documentary`,
  `Adventure`,
  `Musical`,
  `Western`,
  `Thriller`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`,
  `Horror`,
  `Animation`,
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const DESCRIPTIONS = [
  `Maybe I'm foolish, Maybe I'm blind Thinking I can see through this And see what's behind`,
  `Got no way to prove it So maybe I'm blind But I'm only human after all I'm only human after all`,
  `Don't put your blame on me Don't put your blame on me Take a look in the mirror And what do you see`,
  `Do you see it clearer Or are you deceived In what you believe Cause I'm only human after all `,
  `Cause I'm only human after all You're only human after all Don't put the blame on me Don't put your blame on me`,
  `Some people got the real problems Some people out of luck Some people think I can solve them Lord heavens above`,
  `I'm only human after all I'm only human after all Don't put the blame on me Don't put the blame on me`
];

const NAMES = [
  `Woody Allen`,
  `Robert Altman`,
  `Joel Coen`,
  `Francis Ford Coppola`,
  `Clint Eastwood`,
  `David Lynch`,
  `Terrence Malick`,
  `John Sayles.`
];

const MONTH = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `Jule`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

const COUNTRY = [
  `Ukraine`,
  `USA`,
  `Canada`,
  `Italy`,
  `China`,
  `Spain`,
  `Germany`
];

const EMOJI = [
  `angry`,
  `puke`,
  `sleeping`,
  `smile`
];

const COMMENT_TEXT = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
  `It's very nice film`
];


const generateComment = () => {
  return {
    emoji: getRandomItem(EMOJI),
    text: getRandomItem(COMMENT_TEXT),
    author: getRandomItem(NAMES),
    date: generateDate()
  }
};

const generateDate = () => {
  let startDate = new Date(`1900-01-01`).getTime();
  let endDate = Date.now();
  return new Date(getRandomInteger(startDate, endDate));

};

// создаем обьект и наполняет его информацией о фильме
const generateFilmDetail = () => {
   return {
     title: getRandomItem(TITLES),
     age: getRandomInteger(FILM_DETAILS_AGE_MIN, FILM_DETAILS_AGE_MAX),
     rating: `${getRandomInteger(1, 10)}.${getRandomInteger(1, 9)}`,
     year: getRandomInteger(1988, 2020),
     date: `${getRandomInteger(1, 30)} ${getRandomItem(MONTH)}`,
     duration: `1h 55m`,
     genre: getRandomItem(GENRES),
     poster: getRandomItem(POSTERS),
     description: getRandomItem(DESCRIPTIONS),
     director: getRandomItem(NAMES),
     writers: getRandomItem(NAMES),
     actors: getRandomItems(NAMES),
     country: getRandomItem(COUNTRY),
     comments: new Array (getRandomInteger(1, 5)).fill(``).map(generateComment)
   }
};

// формируем массив объектов
const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilmDetail);
};


export {generateFilms};
