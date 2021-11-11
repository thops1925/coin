import { configureStore } from '@reduxjs/toolkit';
import { coinApi } from '../services/coinApi';

export default configureStore({
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinApi.middleware),
});
