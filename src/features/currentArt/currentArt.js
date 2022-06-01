import React from 'react'
import { useSelector } from 'react-redux'

const Art = () => {
  const currentArt = useSelector((state) => state.currentArt)
  return (
    <div>
      <img src={currentArt.image}/>
    </div>
  )
}
export default Art