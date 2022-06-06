import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {favorite} from '../features/favorites/favoriteArtSlice';
import '../styling/Description.css';

const Description = () => {

  const dispatch = useDispatch();
  const { currentArt } = useSelector((state) => state.displayedArt);
  const favoriteArt = useSelector((state) => state.favoriteArt);

  const addFavorite = (currentArt) => {
    dispatch(favorite(currentArt));
  };

  const checkIfFavorite = (currentArt, favoriteArt) => {
    let value = false;
      favoriteArt.forEach(element => {
        if (element.id === currentArt.id) {
          value = true;
        }
      })
    return value;
  };

  return (
    <div className="image-description">
      <p className="art-title"><strong>Title:</strong> {currentArt.title}</p>
      <p className="art-artist"><strong>Artist: </strong>{currentArt.artist}</p>
      <p className="art-medium"><strong>Medium: </strong>{currentArt.medium}</p>
      <p className="art-period"><strong>Period: </strong>{currentArt.century}</p>
      {!checkIfFavorite(currentArt, favoriteArt) && <button onClick={() => addFavorite(currentArt)}>Add to favorites</button>}
    </div>
  );
};

export default Description;
