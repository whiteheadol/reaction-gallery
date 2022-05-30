import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from './currentArtAPI'

// const initialState = {}

export const currentArtSlice = createSlice({
  name: 'currentArt',
  initialState: {},
  reducers: {
    randomize: (state, action) => {
      state.currentArt = action.payload
    }
  },
})

export const selectCurrentArt = (state) => state.currentArt;



export const { randomize } = currentArtSlice.actions
export default currentArtSlice.reducer
