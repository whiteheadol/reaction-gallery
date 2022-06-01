import React from 'react'
import { useSelector } from 'react-redux'

const Description = () => {

  const { currentArt } = useSelector((state) => state.displayedArt);

  return (
    <div>
      <p className="art-title">Title: {currentArt.title}</p>
      <p className="art-artist">Artist: {currentArt.artist}</p>
      <p className="art-medium">Medium: {currentArt.medium}</p>
      <p className="art-period">Period: {currentArt.century}</p>
    </div>
  )
}
export default Description
