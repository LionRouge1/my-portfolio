import { useState } from 'react';
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
          <li onClick={()=> { setClose(false)}}><a href='/#projects'>Projects</a></li>
          <li onClick={()=> { setClose(false)}}><a href='/#about'>About</a></li>
          <li onClick={()=> { setClose(false)}}><a href='/#contact'>Contact</a></li>
          <li onClick={()=> { setClose(false)}}><NavLink to='articles'>Articles</NavLink></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;