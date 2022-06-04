import React from 'react';
import { useSelector } from 'react-redux'
import Description from './Description';
import Frame from './Frame';
import './Container.css';

const Container = () => {
  const { successful } = useSelector((state) => state.displayedArt);

  return (
    <div className="image-and-description">
      {!successful && <h2 className="load-error" >The gallery is closed for cleaning, please visit again soon.</h2>}
      {successful && <div className="image-and-description">
          <Frame />
          <Description />
        </div>}
    </div>
  )
}
export default Container
