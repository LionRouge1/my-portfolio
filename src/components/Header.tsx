import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Profile from '../assets/profile.png';
import '../styles/header.scss';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5';
import DarkMode from './DarkMode';

const Header = () => {
  const [close, setClose] = useState(false);

  const handlehamburger = () => {
    setClose((prev) => (prev ? false : true))
  }

  const handleAnchor = (anchor:string) => {
    setClose(false);
    let element = document.getElementById(anchor)

    const scrollToAnchor = () => {
      element = document.getElementById(anchor)
      element?.scrollIntoView()
    }

    if (element) {
      scrollToAnchor();
    } else {
      const observer = new MutationObserver(() => {
        element = document.getElementById(anchor);
        if (element) {
          scrollToAnchor();
          observer.disconnect();
        }
      });
  
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
  
      window.addEventListener("load", () => {
        scrollToAnchor();
        window.removeEventListener("load", scrollToAnchor);
      });
    }
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
      <Link to="/" className="profile-image">
        <img src={Profile} alt="Matchoudi Avlessi" />
      </Link>
      <DarkMode />
      <nav className={close ? 'nav-active' : ''}>
        {
          close ? <IoClose onClick={handlehamburger} /> : <GiHamburgerMenu onClick={handlehamburger} />
        }
        <ul>
          <li><NavLink to="/" onClick={() =>handleAnchor('home')}>Home</NavLink></li>
          <li><NavLink to="/" onClick={() =>handleAnchor('projects')}>Projects</NavLink></li>
          <li><NavLink to="/" onClick={() =>handleAnchor('about')}>About</NavLink></li>
          <li><NavLink to="/" onClick={() =>handleAnchor('contact')}>Contact</NavLink></li>
          <li onClick={()=> { setClose(false)}}><NavLink to='articles'>Articles</NavLink></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;