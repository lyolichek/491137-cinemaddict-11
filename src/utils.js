const getRandomInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomItem = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

const getRandomItems = (array) => {
  let maxItems = getRandomInteger(0, array.length - 1);
  return array.slice(0, maxItems).join(`, `);
};


export {getRandomItem, getRandomInteger, getRandomItems};
