import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { artApi } from '../features/currentArt/currentArtAPI'
import  currentArtReducer  from '../features/currentArt/currentArtSlice'

export const store = configureStore({
  reducer: {
    [artApi.reducerPath]: artApi.reducer,
    currentArt: currentArtReducer,
  },
});

export default store
