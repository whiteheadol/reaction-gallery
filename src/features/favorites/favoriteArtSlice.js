import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const favoriteArtSlice = createSlice({
  name: 'favoriteArt',
  initialState: [],
  reducers: {
    favorite: (state, action) => {
      state.push(action.payload)
    }
  },
})
export const { favorite }= favoriteArtSlice.actions
export default favoriteArtSlice.reducer
