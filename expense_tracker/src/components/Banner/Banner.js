import React from 'react';
import image from './image.png'
import './Banner.css';
import {Link} from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div className='banner'>
        <TypeAnimation
        sequence={[
          'A simple expense tracker.',
          1000
        ]}
        wrapper="h1"
        speed={7}
        repeat={Infinity}
      />
      <p>A simple Web App to keep track of all your payments</p>
      <img src={image} alt="Homepage banner" />
      <Link to="/tracker" >
        <button id='try'>Try it out!</button>
      </Link>
    </div>

  );
}

export default Banner;