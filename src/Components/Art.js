import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentArt } from '../features/currentArt/currentArtSlice';
import './Art.css'

const Art = () => {

  const { currentArt, loading } = useSelector((state) => state.displayedArt);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentArt());
  }, []);


  console.log(currentArt)

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="current-image">
      <img className="art-image" src={currentArt.image} alt={currentArt.title}/>
    </div>
  )
}

export default Art
