import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentArt } from '../features/currentArt/currentArtSlice';
import './Nav.css'

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
        <button className="fav-btn">Favorites</button>
        <button className="home-btn">Home</button>
      </div>
    </nav>
  )
}

export default Nav
