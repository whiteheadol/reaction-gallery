import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentArt } from '../features/currentArt/currentArtSlice';
import './Nav.css'
import { Link } from 'react-router-dom'

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
        <button className="home-btn">Home</button>
      </div>
    </nav>
  )
}

export default Nav
