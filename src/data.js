import axios from 'axios';

const url = 'https://coingecko.p.rapidapi.com/coins/markets';

export const fetchData = async (query) => {
  const { data } = await axios.get(url, {
    params: { vs_currency: 'PHP', ids: query },
    headers: {
      'x-rapidapi-host': 'coingecko.p.rapidapi.com',
      'x-rapidapi-key': 'b3ab83e703msh6b8609b2f8fe407p1590f4jsnd344db2af170',
    },
  });
  return data;
};
