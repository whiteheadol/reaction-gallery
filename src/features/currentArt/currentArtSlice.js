import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCurrentArt = createAsyncThunk('currentArt/getCurrentArt', async () => {

  const allArt = [
    209246, 204070, 286328, 200963, 205272, 204868, 200855, 204780, 216127, 228059, 227703, 327007, 299862, 229768, 230786, 216633, 311010, 215525, 232054, 303648, 204596, 216044, 230565, 231227, 208836, 320113, 159166, 217447, 336785, 303397, 291873, 226425, 215552, 230205, 304019, 230503, 173617, 201576, 213118, 148606, 231178, 307976, 92744, 297734, 186862, 55075, 295639, 210412, 210227, 230894, 213050, 158879, 228046, 303830, 304349, 360588, 158904, 305884, 299940, 160270, 148939, 304039, 230955, 126743, 160524, 230816, 232270, 228385, 323715, 306457, 303990, 231935, 231994, 230944, 231000, 307104, 257295, 303730, 311494, 210549, 227642, 230924, 230201, 230342, 275147, 307732, 230159, 286802, 230438, 233069, 4988, 21116, 306475, 307446, 210480, 210153, 307964, 199108, 70504, 211331, 360582, 308039, 228568, 56191, 228650, 144633, 299988, 356428]

  const id = allArt[Math.floor(Math.random() * allArt.length)]

  const dataCleaner = (data) => {
    let artist = ''
    if(data.people) {
      artist = data.people.filter(person => person.role === 'Artist').map(person => person.name).join(', ')
    }
    return {
      id: data.objectid,
      title: data.title,
      artist: artist || 'unknown',
      medium: data.medium || 'unspecified',
      century: data.century || 'unknown',
      image: data.images[0].baseimageurl,
      isFavorite: false
    }
  }

  return fetch(`https://api.harvardartmuseums.org/object/${id}/?apikey=b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb`)
    .then(resp => {
      if(resp.ok) {
        return resp.json()
      } else {
        console.log('broken')
      }
    })
    .then(data => dataCleaner(data))
  })

export const currentArtSlice = createSlice({
  name: 'currentArt',
  initialState: {
    currentArt: {},
    loading: false,
    successful: true
  },
  extraReducers: {
    [getCurrentArt.pending]: (state, action) => {
      state.loading = true;
    },
    [getCurrentArt.fulfilled]: (state, action) => {
      state.loading = false;
      state.successful = true;
      state.currentArt = action.payload;
    },
    [getCurrentArt.rejected]: (state, action) => {
      state.successful = false;
      state.loading = false;
    },
  },
})

export default currentArtSlice.reducer
