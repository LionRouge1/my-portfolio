import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpeg';
import '../styles/header.css';
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  return (
    <header>
      <Link to="/" className="profile-image">
        <img src={Profile} alt="Matchoudi Avlessi" />
      </Link>
      <nav>
        <GiHamburgerMenu />
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