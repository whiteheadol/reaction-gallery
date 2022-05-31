import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { fetchData } from './currentArtAPI'
// import artObject from './currentArtAPI'

// const fetchArt = createAsyncThunk(
//   'currentArt/randomize',
//   async (arg, thunkAPI) => {
//     const response = await fetchData()
//     return response.data
//   }
// )


export const currentArtSlice = createSlice({
  name: 'currentArt',
  initialState: {
    currentArt: []
  },
  reducers: {
    randomize: (state) => {
      // state.currentArt.push(artObject)
    }
  },
})


export const selectCurrentArt = (state) => state.currentArt;



export const { randomize } = currentArtSlice.actions
export default currentArtSlice.reducer
