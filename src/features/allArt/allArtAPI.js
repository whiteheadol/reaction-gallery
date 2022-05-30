// const fetchData = (art) => {
//   const allImages = art.map(img => {
//     fetch(`https://api.harvardartmuseums.org/object/${id}/b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb`)
//     .then(resp => {
//       if(resp.ok) {
//         return resp.json()
//       }
//     })
//     .then(data => data)
//   })
//   return fetch(`https://api.harvardartmuseums.org/object/${id}/b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb`)
// }

export const fetchData = () => {
  const dataCleaner = (data) => {
    let artist = ''
    if(data.people) {
      artist = data.people.filter(person => person.role === 'Artist').map(person => person.name).join(', ')
    }
    return {
      title: data.title,
      artist: artist || 'unknown',
      medium: data.medium,
      century: data.century,
      image: data.images[0].baseimageurl
    }
  }

  const allArt = [
  209246, 204070, 75340, 286328, 200963, 172984, 205272, 204868, 200855, 204780, 216127, 228059, 227703, 327007, 299862, 229768, 305603, 230786, 216633, 311010, 215525, 232054, 303648, 204596, 216044, 230565, 231227, 303636, 208836, 320113, 159166, 217447, 336785, 303397, 291873, 226425, 215552, 230205, 304019, 230503, 173617, 201576, 213118, 228737, 148606, 231178, 332061, 330762, 307976, 92744, 297734, 186862, 55075, 295639, 210412, 210227, 228067, 230894, 213050, 158879, 228046, 303830, 304349, 360588, 158904, 305884, 299940, 160270, 148939, 304039, 230955, 126743, 160524, 230816, 232270, 228385, 323715, 306457, 303990, 231935, 231994, 230944, 231000, 307104, 257295, 303730, 311494, 210549, 227642, 230924, 230201, 230342, 275147, 307732, 230159, 286802, 230438, 233069, 4988, 21116, 306475, 307446, 317275, 210480, 312684, 210153, 307796, 307964, 199108, 70504, 211331, 360582, 308039, 228568, 56191, 228650, 144633, 299988, 356428]
  // const id = allArt[Math.floor(Math.random() * allArt.length)]
  const id = 230062
  return fetch(`https://api.harvardartmuseums.org/object/${id}/?apikey=b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb`)
    .then(resp => {
      if(resp.ok) {
        return resp.json()
      } else {
        console.log('broken')
      }
    })
    .then(data => console.log('clean data',dataCleaner(data)))
}
