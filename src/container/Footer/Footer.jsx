import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    {/* <FooterOverlay /> */}
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>dfadf</p>
        <p className='p__opensans'>dfadf</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>dfdfdfd</p>
        <img
          src={images.spoon}
          alt='spoon'
          className='spoon__img'
          style={{ marginTop: 15 }}
        />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>dfadf</p>
        <p className='p__opensans'>dfadf</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 JinWang Dev. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
