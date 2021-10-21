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
