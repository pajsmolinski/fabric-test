export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const randomColor = () =>
  `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(0, 255)})`;
