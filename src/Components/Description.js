import React from 'react'
import { useSelector } from 'react-redux'

const Description = () => {

  const { currentArt } = useSelector((state) => state.displayedArt);

  return (
    <div>
      <p>Title: {currentArt.title}</p>
      <p>Artist: {currentArt.artist}</p>
      <p>Medium: {currentArt.medium}</p>
      <p>Period: {currentArt.century}</p>
    </div>
  )
}
export default Description