import React from 'react'
import './Description.css'
import {favorite} from '../features/favorites/favoriteArtSlice'
import { useSelector, useDispatch } from 'react-redux';


const Description = () => {

 
  const dispatch = useDispatch()
  const { currentArt } = useSelector((state) => state.displayedArt)

  const addFavorite = (currentArt) => {
    dispatch(favorite(currentArt));
  };

  return (
    <div className="image-description">
      <p className="art-title"><strong>Title:</strong> {currentArt.title}</p>
      <p className="art-artist"><strong>Artist: </strong>{currentArt.artist}</p>
      <p className="art-medium"><strong>Medium: </strong>{currentArt.medium}</p>
      <p className="art-period"><strong>Period: </strong>{currentArt.century}</p>
      <button onClick={() => addFavorite(currentArt)}>Add to favorites</button>
    </div>
  )
}
export default Description
