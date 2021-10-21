import { store } from 'react-context-hook';

export const storeRemoveCategory = (id) => {
  const data = store.getState();
  const filterData = data.hangmanData.filter((x) => x.id !== id);

  store.set('hangmanData', filterData);
};
