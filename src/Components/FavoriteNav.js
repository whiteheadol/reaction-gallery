import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentArt } from '../features/currentArt/currentArtSlice';
import { Link } from 'react-router-dom'
import './Nav.css'

const FavoriteNav = () => {
  return(
    <nav>
      <h1 className="page-title">Reaction Gallery</h1>
      <div className="btn-styling">
        <Link to='/'> <button className="home-btn">Home</button> </Link>
      </div>
    </nav>
  )
}

export default FavoriteNav
