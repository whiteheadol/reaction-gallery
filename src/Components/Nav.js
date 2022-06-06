import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentArt } from '../features/currentArt/currentArtSlice';
import '../styling/Nav.css';

const Nav = () => {

  const dispatch = useDispatch();

  const randomize = () => {
    dispatch(getCurrentArt());
  };

  return(
    <nav>
      <h1 className="page-title">Reaction Gallery</h1>
      <div className="btn-styling">
        <button className="random-btn" onClick={() => randomize()}>Randomize</button>
        <Link to='/favorites'> <button className="fav-btn">Favorites</button> </Link>
      </div>
    </nav>
  );
};

export default Nav;
