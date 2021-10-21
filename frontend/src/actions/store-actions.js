import { store } from 'react-context-hook';

export const storeRemoveCategory = (id) => {
  const data = store.getState();
  const filterData = data.challenges.filter((x) => x.id !== id);

  store.set('challenges', filterData);
};

export const fetchData = async () => {
  const response = await fetch('http://localhost:5000/challenges');
  const data = await response.json();
  return data;
};
