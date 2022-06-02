import { configureStore } from '@reduxjs/toolkit';
import  currentArtReducer  from '../features/currentArt/currentArtSlice'
import favoriteArtReducer from '../features/favorites/favoriteArtSlice'

export const store = configureStore({
  reducer: {
    displayedArt: currentArtReducer,
    favoriteArt: favoriteArtReducer
  },
});

export default store