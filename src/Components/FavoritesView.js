import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './FavoritesView.css'

const FavoritesView = () => {
  const favoriteArt  = useSelector((state) => state.favoriteArt);
  const allFavoriteCards = favoriteArt.map(art => {
    return (
      <div className='favorite-card' key={art.id}>
        <p className='favorite-title'>{art.title}</p>
        <img src={art.image} className='favorite-image'/>
      </div>
    )
  })

  return (
    <div className='favorites-container'>
      {allFavoriteCards}
    </div>
  )
}
export default FavoritesView
