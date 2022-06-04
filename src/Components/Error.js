import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='fof-box'>
      <p className='fof-message'>Hey! You're in the restricted section!</p>
      <Link to='/' className='redirect'>Click here to go back to the main gallery</Link>
      <img className="fof-image" src="https://i.kym-cdn.com/photos/images/original/000/548/129/538.jpg" />
    </div>
  )
}

export default Error;
