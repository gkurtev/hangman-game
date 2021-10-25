import { store } from 'react-context-hook';

export const storeRemoveCategory = (id) => {
  const data = store.getState();
  const filterData = data.challenges.filter((x) => x.id !== id);

  store.set('challenges', filterData);
};

export const addChallenge = (data) => {
  const storeState = store.getState();
  const newState = [...storeState.challenges, data];

  store.set('challenges', newState);
};
