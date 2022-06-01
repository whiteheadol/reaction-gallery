import { configureStore } from '@reduxjs/toolkit';
import  currentArtReducer  from '../features/currentArt/currentArtSlice'

export const store = configureStore({
  reducer: {
    displayedArt: currentArtReducer
  },
});

export default store