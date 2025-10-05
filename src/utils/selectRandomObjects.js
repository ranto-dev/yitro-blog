const selectRandomObjects = (arr, num) => {
  const shuffled = [...arr];
  let i = arr.length;
  let temp, rand;

  // Algorithme de mélange de Fisher-Yates pour mélanger le tableau
  while (i !== 0) {
    rand = Math.floor(Math.random() * i);
    i--;

    temp = shuffled[i];
    shuffled[i] = shuffled[rand];
    shuffled[rand] = temp;
  }

  return shuffled.slice(0, num);
};

export default selectRandomObjects;
