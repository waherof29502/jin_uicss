import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading tittle='Chase the new Flavour' />
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        wrgfgwgwrwh
      </p>
      <button type='button' className='custom__button'>
        {' '}
        Explore Menu
      </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
