import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const FavoritesView = () => {
  const favoriteArt  = useSelector((state) => state.favoriteArt);
  const allFavoriteCards = favoriteArt.map(art => {
    return (
      <div key={art.id}>
        <img src={art.image}/>
        <p>{art.title}</p>
      </div>
    )
  })

  return (
    <div>
      {allFavoriteCards}
    </div>
  )
}
export default FavoritesView
