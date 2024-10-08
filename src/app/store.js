import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/apiSlice/apiSlice';


export const store = configureStore({
  reducer: {
 [apiSlice.reducerPath] : apiSlice.reducer
  },
  middleware:(getDefaultMiddleWares)=>getDefaultMiddleWares().concat(apiSlice.middleware)
});
