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

export const dbUpdateWords = async (wordsData, id) => {
  const response = await fetch(`http://localhost:5000/challenges/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(wordsData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};

export const postChallenge = async (data) => {
  const response = await fetch('http://localhost:5000/challenges', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};

export const addChallenge = (data) => {
  const storeState = store.getState();
  const newState = [...storeState.challenges, data];

  store.set('challenges', newState);
};
