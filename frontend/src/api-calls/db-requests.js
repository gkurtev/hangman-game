export const dbFetchData = async () => {
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

export const dbDeleteCategory = async (id) => {
  const response = await fetch(`http://localhost:5000/challenges/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};

export const dbPostChallenge = async (data) => {
  const response = await fetch('http://localhost:5000/challenges', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};
