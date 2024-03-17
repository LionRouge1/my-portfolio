import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Profile from '../assets/profile.jpeg';
import '../styles/header.scss';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5';
import DarkMode from './DarkMode';

const Header = () => {
  const [close, setClose] = useState(false);

  const handlehamburger = () => {
    setClose((prev) => (prev ? false : true))
  }

  useEffect(() => {
    const header = document.querySelector('header') as HTMLElement;
    document.onscroll = () => {
      if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        header.style.position = 'fixed';
        if (window.screen.width > 800) header.style.height = '58px';
      } else {
        header.style.position = 'relative';
        if (window.screen.width > 800) header.style.height = '70px';
      }
    };
  });

  return (
    <header>
      <Link to="/my-portfolio" className="profile-image">
        <img src={Profile} alt="Matchoudi Avlessi" />
      </Link>
      <DarkMode />
      <nav className={close ? 'nav-active' : ''}>
        {
          close ? <IoClose onClick={handlehamburger} /> : <GiHamburgerMenu onClick={handlehamburger} />
        }
        <ul>
          <li onClick={()=> { setClose(false)}}><a href='/my-portfolio/#projects'>Projects</a></li>
          <li onClick={()=> { setClose(false)}}><a href='/my-portfolio/#about'>About</a></li>
          <li onClick={()=> { setClose(false)}}><a href='/my-portfolio/#contact'>Contact</a></li>
          <li onClick={()=> { setClose(false)}}><NavLink to='articles'>Articles</NavLink></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;