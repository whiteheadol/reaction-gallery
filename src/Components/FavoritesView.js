import React from 'react'
import FavoriteCard from './FavoriteCard'
import { useSelector, useDispatch } from 'react-redux'
const FavoritesView = () => {
  const favoriteArt  = useSelector((state) => state.favoriteArt);
  const allFavoriteCards = favoriteArt.map(art => {
    return <FavoriteCard />
  })
  return (
    <div>
      {allFavoriteCards}
    </div>
  )
}
export default FavoritesView
