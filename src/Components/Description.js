import React from 'react'
import { useSelector } from 'react-redux'
import './Description.css'

const Description = () => {

  const { currentArt } = useSelector((state) => state.displayedArt);

  return (
    <div className="image-description">
      <p className="art-title"><strong>Title:</strong> {currentArt.title}</p>
      <p className="art-artist"><strong>Artist: </strong>{currentArt.artist}</p>
      <p className="art-medium"><strong>Medium: </strong>{currentArt.medium}</p>
      <p className="art-period"><strong>Period: </strong>{currentArt.century}</p>
    </div>
  )
}
export default Description
