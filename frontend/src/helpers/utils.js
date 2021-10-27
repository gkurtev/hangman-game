export const serializeForm = (form) => {
  const obj = {};
  const formData = new FormData(form);

  for (const key of formData.keys()) {
    obj.id = Math.random() * 1000;
    key === 'words'
      ? (obj[key] = formData
          .get(key)
          .split(',')
          .map((x) => x.trim())
          .filter(Boolean))
      : (obj[key] = formData.get(key));
  }
  return obj;
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};
