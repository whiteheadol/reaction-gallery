import React from 'react';
import { useSelector } from 'react-redux';
import '../styling/FavoritesView.css';

const FavoritesView = () => {
  const favoriteArt  = useSelector((state) => state.favoriteArt);
  const allFavoriteCards = favoriteArt.map(art => {
    return (
      <div className='favorite-card' key={art.id}>
        <p className='favorite-title'>{art.title}</p>
        <img src={art.image} className='favorite-image'/>
      </div>
    );
  });

  return (
    <div className='favorites-container'>
      {!favoriteArt.length && <div className="error-message">
        <h2 className="favorites-error">Add some art, you plebeian!</h2>
        <img className="error-image" src="https://sites.psu.edu/warfareinromanculture/wp-content/uploads/sites/25211/2015/04/plebians.jpg" />
        </div>}
      {allFavoriteCards}
    </div>
  );
};

export default FavoritesView;
