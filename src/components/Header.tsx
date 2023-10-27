import { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpeg';
import '../styles/header.scss';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5';

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
      <nav className={close ? 'active' : ''}>
        {
          close ? <IoClose onClick={handlehamburger} /> : <GiHamburgerMenu onClick={handlehamburger} />
        }
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;