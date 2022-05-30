import React from 'react'
import Description from './Description'
import Frame from './Frame'
import { fetchData } from '../features/allArt/allArtAPI'

fetchData()

const Container = () => {
  return (
    <div>
      <Frame />
      <Description />
    </div>
  )
}
export default Container
