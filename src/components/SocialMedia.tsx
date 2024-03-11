import { FaGithubSquare, FaMedium } from "react-icons/fa";
import { FaAngellist, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  const generateOrder = () => {
    return Math.floor(Math.random() * 5) + 1
  };

  return (
    <ul className="social_media">
      <li style={{ order: generateOrder() }}>
        <a href="https://twitter.com/Matchoudi1" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
      </li>
      <li style={{ order: generateOrder() }}>
        <a href="https://linkedin.com/in/matchoudi" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </li>
      <li style={{ order: generateOrder() }}>
        <a href="https://medium.com/@matchoudiavlessi" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
      </li>
      <li style={{ order: generateOrder() }}>
        <a href="https://github.com/LionRouge1" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
      </li>
      <li style={{ order: generateOrder() }}>
        <a href="https://angel.co/u/matchoudi" target="_blank" rel="noopener noreferrer"><FaAngellist /></a>
      </li>
    </ul>
  )
};

export default SocialMedia;