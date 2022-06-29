import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title='Chefs word' />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>adadgagaefha</p>
        </div>
        <p className='p__opensans'>asdadgaga</p>
      </div>
      <div className='app__chef-sign'>
        <p>dfadfad</p>
        <p className='p__opensans'>dafdfadf</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
    Chef
  </div>
);

export default Chef;
