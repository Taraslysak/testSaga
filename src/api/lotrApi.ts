const HOST_ROOT = 'https://the-one-api.dev/v2';

const TOKEN = 'fx9yP1GQJ_SsBh4ecq4k';

const getBooks = async (): Promise<string> => {
  const res = await fetch(`${HOST_ROOT}/book`);

  return await res.json();
};

const getMovies = async (): Promise<string> => {
  const res = await fetch(`${HOST_ROOT}/movie`, {
    headers: {Authorization: `Bearer ${TOKEN}`},
  });
  return await res.json();
};

const lotrApi = {books: getBooks, getMovies: getMovies};

export {lotrApi};
