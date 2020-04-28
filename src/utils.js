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

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

// ---- функция отрисовки компонентов
const render = (container, template) => {
  container.append(template);
};


export {getRandomItem, getRandomInteger, getRandomItems, createElement, render};
