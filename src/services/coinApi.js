import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/coins/',
  }),
  endpoints: (builder) => ({
    getCoin: builder.query({
      query: (value) => ({
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/coins/markets',
        params: {
          vs_currency: 'USD',
          ids: `${value}`,
        },
        headers: {
          'x-rapidapi-host': 'coingecko.p.rapidapi.com',
          'x-rapidapi-key':
            'b3ab83e703msh6b8609b2f8fe407p1590f4jsnd344db2af170',
        },
      }),
    }),
  }),
});

export const { useGetCoinQuery } = coinApi;
