import React from 'react';
import Description from './Description';
import Frame from './Frame';
import './Container.css';

const Container = () => {
  return (
    <div className="image-and-description">
      <Frame />
      <Description />
    </div>
  )
}
export default Container
