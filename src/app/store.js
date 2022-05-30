import { configureStore } from '@reduxjs/toolkit';
import  currentArtReducer  from '../features/currentArt/currentArtSlice'

export const store = configureStore({
  reducer: {
    currentArt: currentArtReducer
  },
});

export default store
