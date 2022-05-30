import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomize } from './currentArtSlice'

const Art = () => {
  const currentArt = useSelector((state) => state.currentArt)
  const dispatch = useDispatch()
  return (
    <div>
      <img src={currentArt.image}/>
    </div>
  )
}
export default Art
